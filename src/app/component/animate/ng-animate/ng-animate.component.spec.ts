import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgAnimateComponent} from './ng-animate.component';

describe('NgAnimateComponent', () => {
  let component: NgAnimateComponent;
  let fixture: ComponentFixture<NgAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgAnimateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
