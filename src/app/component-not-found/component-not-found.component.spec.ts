import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNotFoundComponent } from './component-not-found.component';

describe('ComponentNotFoundComponent', () => {
  let component: ComponentNotFoundComponent;
  let fixture: ComponentFixture<ComponentNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNotFoundComponent]
    });
    fixture = TestBed.createComponent(ComponentNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
