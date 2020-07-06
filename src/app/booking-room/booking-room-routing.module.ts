import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingRoomComponent } from './booking-room.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AddBookingRoomComponent } from './add-booking-room/add-booking-room.component';


const routes: Routes = [
  {
    path: '', component: BookingRoomComponent,
    children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: BookingListComponent },
      { path: 'add', component: AddBookingRoomComponent },
      { path: 'edit/:id', component: AddBookingRoomComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoomRoutingModule { }
