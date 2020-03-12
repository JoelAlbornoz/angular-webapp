import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaProductoComponent } from './targeta-producto.component';

describe('TargetaProductoComponent', () => {
  let component: TargetaProductoComponent;
  let fixture: ComponentFixture<TargetaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
