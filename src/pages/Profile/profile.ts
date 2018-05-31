import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityListPage } from '../CharityList/charityList';
import { Chart } from 'chart.js';
// import { User } from '../../Models/user';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;

  // public user: User;

  @ViewChild('pieCanvas') pieCanvas;

  pieChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("psasword");
    // this.user = this.navParams.get("user");
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {

      type: 'pie',
      data: {
        labels: ["Animal Equality", "The Art Fund", "ACCESS College", "AIDS United", "The HM League", "GF for children", "Rainforest Alliance"],
        datasets: [{
          label: '# of Money Donated',
          data: [1300, 1300, 750, 750, 750, 400, 300],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(256, 100, 20, 0.8)'
          ]
        }]
      }

    });
  }

  navigateToLogin() {
    this.navCtrl.pop();
  }

  navigateToCharity() {
    this.navCtrl.push(CharityListPage);
  }

}