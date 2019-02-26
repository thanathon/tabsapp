import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ServicePage } from '../service/service';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoProfile(){
    //alert("OK")
    //คำสั่งในการเปิดเพจใหม่
    this.navCtrl.push(ProfilePage)
  }
  gotoService(){
    this.navCtrl.push(ServicePage)
  }
  gotoInfo(){
    this.navCtrl.push(InfoPage)
  }
}
