import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html'
})
export class WarningComponent implements OnInit {

  message = "Warning message!";

  constructor() { }

  ngOnInit() {

  }

}
