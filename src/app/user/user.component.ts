import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  username: string = '';
  createDisabled: boolean = true;

  onUpdateUsername() {
  console.log("asd");
    if (this.username != '') {
      this.createDisabled = false;
    } else {
      this.createDisabled = true;
    }
  }

  onCreateUser() {
    this.username = '';
  }
}
