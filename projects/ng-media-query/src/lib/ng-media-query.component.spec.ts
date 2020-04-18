import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMediaQueryComponent } from './ng-media-query.component';

describe('NgMediaQueryComponent', () => {
  let component: NgMediaQueryComponent;
  let fixture: ComponentFixture<NgMediaQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMediaQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMediaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
