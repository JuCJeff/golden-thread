import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { User } from '../../Models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  public username: string;
  public password: string;

  // public user: Array<User> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // var user1 = new User();
      // user1.id = 9073935828;
      // user1.email = "zma67@wisc.edu";
      // user1.firstname = "Jeff";
      // user1.lastname= "Ma";
      // user1.password="ABCDE"

      // this.user.push(user1);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
}

  login() {
    this.navCtrl.push(ProfilePage, {
      // user: this.user,
      username: this.username,
      password: this.password,
    });

  }

}