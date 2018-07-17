import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { STORAGE_KEY } from '../../app/app.tokens';

export interface FormModel {

  firstName: string;
  lastName: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formModel: FormModel = {
    firstName: null,
    lastName: null
  };

  constructor(public navCtrl: NavController, public nativeStorage: NativeStorage, @Inject(STORAGE_KEY) private STORAGE_KEY: string) {

  }

  onSubmit(): void {

    this.nativeStorage.setItem(this.STORAGE_KEY, this.formModel)
      .then(() => console.log("Succesfully stored form data"))
      .catch(error => console.error("error while storing form data", error));
  }
}
