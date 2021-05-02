import { UniversalTransformPipe } from './universal-transform.pipe';

describe('UniversalTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new UniversalTransformPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform value', () => {
    const pipe = new UniversalTransformPipe();
    const fn = jasmine.createSpy();
    fn.withArgs(5).and.returnValue('55');
    fn.withArgs(6).and.returnValue('66');
    fn.withArgs(1, 2, 3).and.returnValue('77');

    expect(pipe.transform(5, fn)).toEqual('55');
    expect(pipe.transform(6, fn)).toEqual('66');
    expect(pipe.transform(1, fn, 2, 3)).toEqual('77');
  });
});
