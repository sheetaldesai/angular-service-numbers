import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  constructor(private _dataService : DataService) { }
  numbers : number[];

  ngOnInit() {
  }

  onGenerate() {
    this.numbers = this._dataService.getAlphaNumber();
  }
}
