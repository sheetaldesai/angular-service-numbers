import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  diff : number;
  constructor(private _dataService : DataService) {

  }

  onGenerate() {
    console.log("onGenerate diff");
    this.diff = this._dataService.setDiff();
  }
}
