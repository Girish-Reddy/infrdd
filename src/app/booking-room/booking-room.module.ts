import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoomRoutingModule } from './booking-room-routing.module';
import { BookingRoomComponent } from './booking-room.component';
import { AddBookingRoomComponent } from './add-booking-room/add-booking-room.component';
import { BookingListComponent } from './booking-list/booking-list.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookingRoomComponent, AddBookingRoomComponent, BookingListComponent],
  imports: [
    CommonModule,
    BookingRoomRoutingModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class BookingRoomModule { }
