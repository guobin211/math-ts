import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinacityComponent } from './chinacity.component';

describe('ChinacityComponent', () => {
  let component: ChinacityComponent;
  let fixture: ComponentFixture<ChinacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinacityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
