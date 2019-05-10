import { TestBed } from '@angular/core/testing';

import { ProyectoService } from './proyecto.service';

describe('ProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectoService = TestBed.get(ProyectoService);
    expect(service).toBeTruthy();
  });
});
