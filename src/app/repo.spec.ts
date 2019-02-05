import { Repos } from './repo';

describe('Repo', () => {
  it('should create an instance', () => {
    expect(new Repos('','','',0,)).toBeTruthy();
  });
});