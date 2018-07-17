import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { STORAGE_KEY } from '../../app/app.tokens';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  data;

  constructor(public navCtrl: NavController, public nativeStorage: NativeStorage, @Inject(STORAGE_KEY) private STORAGE_KEY: string) {

  }

  loadData() {

    this.nativeStorage.getItem(this.STORAGE_KEY)
    .then(data => this.data = data)
    .catch(error => console.error("error while loading form data", error));
  }

}
