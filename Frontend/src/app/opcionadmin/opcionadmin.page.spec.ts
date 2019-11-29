import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionadminPage } from './opcionadmin.page';

describe('OpcionadminPage', () => {
  let component: OpcionadminPage;
  let fixture: ComponentFixture<OpcionadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
