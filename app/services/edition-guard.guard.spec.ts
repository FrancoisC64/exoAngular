import { TestBed, async, inject } from '@angular/core/testing';

import { EditionGuardGuard } from './edition-guard.guard';

describe('EditionGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditionGuardGuard]
    });
  });

  it('should ...', inject([EditionGuardGuard], (guard: EditionGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
