import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  @Input() destination:String = '';
  constructor() { }

  ngOnInit(): void {
  }

}
