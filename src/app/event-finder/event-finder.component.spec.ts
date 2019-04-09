import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFinderComponent } from './event-finder.component';

describe('EventFinderComponent', () => {
  let component: EventFinderComponent;
  let fixture: ComponentFixture<EventFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
