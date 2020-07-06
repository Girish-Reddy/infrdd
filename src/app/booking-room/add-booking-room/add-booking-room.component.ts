import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-add-booking-room',
  templateUrl: './add-booking-room.component.html',
  styleUrls: ['./add-booking-room.component.scss']
})
export class AddBookingRoomComponent implements OnInit {

  constructor(public route: ActivatedRoute, public dataService: DataServiceService) {
    this.route.params.subscribe((params) => {
      this.bookingId = params.id;
    });
  }
  public bookingId;

  public bookingData: any = {};

  ngOnInit(): void {
    if (this.bookingId) {
      this.getBookingData();
    }
  }
  getBookingData() {
    this.dataService.bookingDetails().subscribe((data) => {
      this.bookingData = data;
      console.log(this.bookingData);
    })
  }
  dateValidation() {
    const fromDate = new Date(this.bookingData.fromDate);
    const toDate = new Date(this.bookingData.toDate);
    if (fromDate.getTime() > toDate.getTime()) {
      return false
    } else {
      if (this.weeksDaysValidation(fromDate) && this.weeksDaysValidation(toDate)) {
        if (this.validateTime(fromDate) && this.validateTime(toDate)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  validateTime(date) {
    const time = date.getHours();
    if (time >= 9 && time <= 18) {     
      return true;
    }
    alert('Please select 9am to 6pm');
    return false;
  }
  weeksDaysValidation(date) {
    const day = date.getUTCDay();
    if ([6, 0].includes(day)) {
      alert('Please select weekdays');
      return false;
    }
    return true;
  }

  addBooking() {
    if (this.dateValidation()) {
      console.log('Good to book');
      this.dataService.bookingEntry(this.bookingData).subscribe((data: any[]) => {
        console.log('booking is done');
      })
    } else {
      // alert('Please select proper date and time');
    }
  }
}
