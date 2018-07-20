import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableajaxComponent} from './tableajax.component';

describe('TableajaxComponent', () => {
  let component: TableajaxComponent;
  let fixture: ComponentFixture<TableajaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableajaxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableajaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
