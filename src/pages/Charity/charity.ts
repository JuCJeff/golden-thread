import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityListPage } from '../CharityList/charityList';

@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html'
})
export class CharityPage {

    public charityname: string;
    public donation: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.charityname = this.navParams.get("charityname");
    this.donation = this.navParams.get("donation");
  }

}