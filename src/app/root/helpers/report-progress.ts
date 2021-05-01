import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Progress } from './progress';

export class ReportProgress {
  private readonly internalProgress$ = new BehaviorSubject<Progress>(
    Progress.None
  );

  public readonly isInProgress$ = this.internalProgress$.pipe(
    map((s) => s === Progress.InProgress)
  );
  public readonly isFailed$ = this.internalProgress$.pipe(
    map((s) => s === Progress.Failed)
  );
  public readonly isDone$ = this.internalProgress$.pipe(
    map((s) => s === Progress.Done)
  );

  inProgress() {
    this.internalProgress$.next(Progress.InProgress);
  }

  done() {
    this.internalProgress$.next(Progress.Done);
  }

  failed() {
    this.internalProgress$.next(Progress.Failed);
  }
}
