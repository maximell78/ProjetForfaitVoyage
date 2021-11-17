import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-hotel',
  templateUrl: './info-hotel.component.html',
  styleUrls: ['./info-hotel.component.css']
})
export class InfoHotelComponent implements OnInit {
  @Input() infoHotel = '';
  constructor() { }

  ngOnInit(): void {
  }

}
