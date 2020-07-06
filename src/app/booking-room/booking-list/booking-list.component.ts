import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(private dataService: DataServiceService, public router: Router) { }

  public bookingData;

  public filterObj = { userName: '' }

  ngOnInit(): void {
    this.getSideMenuData();
  }
  getSideMenuData() {
    this.dataService.viewRepoAPI().subscribe((data: any[]) => {      
      this.bookingData = data;
    })
  }
  deleteRecord(i) {
    this.bookingData.splice(i, 1);
  }
  moveToAdd() {
    this.router.navigate(['/booking/add'])
  }
}
