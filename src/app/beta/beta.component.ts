import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  numbers : number[];

  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  onGenerate() {
    this.numbers = this._dataService.getBetaNumber();
  }

}
