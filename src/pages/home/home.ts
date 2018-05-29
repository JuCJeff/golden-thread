import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { RegistrationPage } from '../Registration/registration';
import { ProfilePage } from '../Profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
      this.navCtrl.push(LoginPage);
  }

  navigateToRegister() {
      this.navCtrl.push(RegistrationPage);
  }

}
