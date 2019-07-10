import { TestBed } from '@angular/core/testing';

import { IdentService } from './ident.service';

describe('IdentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentService = TestBed.get(IdentService);
    expect(service).toBeTruthy();
  });
});
