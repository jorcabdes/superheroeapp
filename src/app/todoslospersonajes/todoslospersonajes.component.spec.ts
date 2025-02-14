import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoslospersonajesComponent } from './todoslospersonajes.component';

describe('TodoslospersonajesComponent', () => {
  let component: TodoslospersonajesComponent;
  let fixture: ComponentFixture<TodoslospersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoslospersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoslospersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
