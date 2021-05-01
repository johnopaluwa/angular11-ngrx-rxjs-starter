import { ActionReducer } from '@ngrx/store';
import { errorAction, successAction } from '../ngrx/actions/core.actions';

export function actionLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any) => {
    const nextState = reducer(state, action);
    if (action.type === '@ngrx/store-devtools/recompute') {
      return nextState;
    }

    if (action.type === errorAction.type) {
      console.group(`Failed: ${action.action}`);
    } else if (action.type === successAction.type) {
      console.group(`Success: ${action.action}`);
    } else {
      console.groupCollapsed(action.type);
      console.log(action);
    }
    console.groupEnd();
    return nextState;
  };
}
