import { Component, OnInit, Input } from '@angular/core';
import { Forfaits } from '../forfaits';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  tableauForfaits: Forfaits[] = FORFAITS ;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
