import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {

  message = "Successful message!";

  constructor() { }

  ngOnInit() {

  }

}
