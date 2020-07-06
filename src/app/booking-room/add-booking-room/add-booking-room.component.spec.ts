import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingRoomComponent } from './add-booking-room.component';

describe('AddBookingRoomComponent', () => {
  let component: AddBookingRoomComponent;
  let fixture: ComponentFixture<AddBookingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
