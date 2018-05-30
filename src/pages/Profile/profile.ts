import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { CharityListPage } from '../CharityList/charityList';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username:string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("psasword");
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToCharity() {
    this.navCtrl.push(CharityListPage);
  }

}