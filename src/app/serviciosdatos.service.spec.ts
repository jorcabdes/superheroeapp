import { TestBed } from '@angular/core/testing';

import { ServiciosdatosService } from './serviciosdatos.service';

describe('ServiciosdatosService', () => {
  let service: ServiciosdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
