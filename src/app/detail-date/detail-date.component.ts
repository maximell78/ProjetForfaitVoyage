import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-date',
  templateUrl: './detail-date.component.html',
  styleUrls: ['./detail-date.component.css']
})
export class DetailDateComponent implements OnInit {
  @Input() date = '';
  @Input() duree = '';
  constructor() { }

  ngOnInit(): void {
  }

}
