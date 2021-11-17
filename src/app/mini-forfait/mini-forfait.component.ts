import { Component, Input, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  tableauForfaits: Forfaits[] = FORFAITS ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
