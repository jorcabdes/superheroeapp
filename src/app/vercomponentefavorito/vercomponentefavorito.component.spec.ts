import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercomponentefavoritoComponent } from './vercomponentefavorito.component';

describe('VercomponentefavoritoComponent', () => {
  let component: VercomponentefavoritoComponent;
  let fixture: ComponentFixture<VercomponentefavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VercomponentefavoritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercomponentefavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
