import { TestBed } from '@angular/core/testing';

import { ImagePoolService } from './image-pool.service';

describe('ImagePoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagePoolService = TestBed.get(ImagePoolService);
    expect(service).toBeTruthy();
  });
});
