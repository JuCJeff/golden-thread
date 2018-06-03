import { Component } from '@angular/core';

import { Platform, NavParams } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile';
import { HomePage } from '../home/home';
import { CharityListPage } from '../CharityList/charityList';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  profilePage = ProfilePage;
  charityListPage = CharityListPage;

  loginData: any = null;

  constructor(public navParams: NavParams) {
      this.loginData = this.navParams.data;
  }
}