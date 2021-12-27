import { TestBed } from '@angular/core/testing';

import { TodoistGuard } from './todoist.guard';

describe('TodoistGuard', () => {
  let guard: TodoistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodoistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
