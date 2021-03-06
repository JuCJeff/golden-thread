import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/Login/login';
import { RegistrationPage } from '../pages/Registration/registration'
import { ProfilePage } from '../pages/Profile/profile'
import { UsersPage } from '../pages/UserData/users';
import { CharityListPage } from '../pages/CharityList/charityList';
import { CharityProfilePage } from '../pages/CharityProfile/charityProfile';
import { PaymentPage } from '../pages/Payment/payment';
import { TabsPage } from '../pages/Tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    UsersPage,
    CharityListPage,
    CharityProfilePage,
    PaymentPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    UsersPage,
    CharityListPage,
    CharityProfilePage,
    PaymentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
