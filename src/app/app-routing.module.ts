import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking-room/booking-room.module').then(mod => mod.BookingRoomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
