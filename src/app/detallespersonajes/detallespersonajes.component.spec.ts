import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallespersonajesComponent } from './detallespersonajes.component';

describe('DetallespersonajesComponent', () => {
  let component: DetallespersonajesComponent;
  let fixture: ComponentFixture<DetallespersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallespersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallespersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
