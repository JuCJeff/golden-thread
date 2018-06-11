import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { RegistrationPage } from '../Registration/registration';
//For fetching data from 3rd party APIs
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegister() {
    this.navCtrl.push(RegistrationPage);
  }

}
