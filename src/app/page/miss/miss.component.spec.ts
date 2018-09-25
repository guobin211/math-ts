import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissComponent } from './miss.component';

describe('MissComponent', () => {
  let component: MissComponent;
  let fixture: ComponentFixture<MissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
