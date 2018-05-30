import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html'
})
export class CharityListPage {

  constructor(public navCtrl: NavController) {

  }

  charityItems: [
    {name: 'Animal Equality', donation: '$5'},
    {name: 'The Human League', donation: '$3'},
    {name: 'The Good Food Institute', donation: '$3'},
    {name: 'Rainforest Alliance', donation: '$5'},
    {name: 'Global Fund for Children', donation: '$10'},
    {name: 'AIDS United', donation: '$5'},
    {name: 'ACCESS College Foundation', donation: '$5'},
    {name: 'The Art Fund', donation: '$5'}
  ]

}