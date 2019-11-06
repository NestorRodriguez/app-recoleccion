import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionusuarioPage } from './opcionusuario.page';

describe('OpcionusuarioPage', () => {
  let component: OpcionusuarioPage;
  let fixture: ComponentFixture<OpcionusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionusuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
