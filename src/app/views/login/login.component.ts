import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginOperatorService} from '../../services/login-operator.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private loginService: LoginOperatorService) {}

  username = new FormControl();
  password = new FormControl();

  executeForm() {
    console.log("Submit form");
    console.log(this.username.value);
    console.log(this.password.value);

    let user = new User(this.username.value, this.password.value);

    this.loginService.login(user).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
