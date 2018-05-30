import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../Profile/profile'
import { CharityPage } from '../Charity/charity';

@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html'
})
export class CharityListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public charityname:string;
  public donation:string;

  items = [
    'ACCESS College Foundation',
    'AIDS United',
    'Animal Equality',
    'Global Fund for Children',
    'Rainforest Alliance',
    'The Art Fund',
    'The Good Food Institute',
    'The Human League'
  ]

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(CharityPage, {
      // name: this.name,
      // donation: this.donation
    });
  }

  charityItems: [
    { name: 'Animal Equality', donation: '$5' },
    { name: 'The Human League', donation: '$3' },
    { name: 'The Good Food Institute', donation: '$3' },
    { name: 'Rainforest Alliance', donation: '$5' },
    { name: 'Global Fund for Children', donation: '$10' },
    { name: 'AIDS United', donation: '$5' },
    { name: 'ACCESS College Foundation', donation: '$5' },
    { name: 'The Art Fund', donation: '$5' }
  ];

}