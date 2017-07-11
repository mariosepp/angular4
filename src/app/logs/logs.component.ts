import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  showSecret = false;
  logs = [];

  onDisplayDetails() {
    this.showSecret = this.showSecret ? false : true;
    this.logs.push(new Date());
  }

  getColor(log) {
    return this.isGreaterThanFourth(log) ? 'blue' : 'transparent';
  }

  isGreaterThanFourth(log) {
    return this.logs.indexOf(log) > 3;
  }

}
