import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../Models/charity';
import { CharityProfilePage } from '../CharityProfile/charityProfile';

@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html'
})

export class CharityListPage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Charities instances
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "ACCESS College Foundation";
    charity1.description = "You are donating $5 for ACCESS monthly.";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Animal Equality";
    charity2.description = "You are donating $10 for animal equality monthly.";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "AIDS United";
    charity3.description = "You are donating $5 for AIDS United.";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Global Fund for Children";
    charity4.description = "You are donating $3 for Global Fund for Children.";

    var charity5 = new Charity();
    charity5.id = 5;
    charity5.name = "Rainforest Alliance";
    charity5.description = "You are donating $2 for Rainforest Alliance monthly.";

    var charity6 = new Charity();
    charity6.id = 6;
    charity6.name = "The Art Fund";
    charity6.description = "You are donating $10 for The Art Fund monthly.";

    var charity7 = new Charity();
    charity7.id = 7;
    charity7.name = "The Human League";
    charity7.description = "You are donating $5 for The Human League monthly.";

    // Add our charities instances to our collection of charities
    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
    this.charities.push(charity5);
    this.charities.push(charity6);
    this.charities.push(charity7);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CharityListPage");
  }

  navigateToCharity(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
        charity: charity
    });
  }
}