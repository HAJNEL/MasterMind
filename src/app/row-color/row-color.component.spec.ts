import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowColorComponent } from './row-color.component';

describe('RowColorComponent', () => {
  let component: RowColorComponent;
  let fixture: ComponentFixture<RowColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowColorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
