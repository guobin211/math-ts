import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuilleditComponent} from './quilledit.component';

describe('QuilleditComponent', () => {
  let component: QuilleditComponent;
  let fixture: ComponentFixture<QuilleditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuilleditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
