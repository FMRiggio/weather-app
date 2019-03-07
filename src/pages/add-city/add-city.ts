import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-add-city',
	templateUrl: 'add-city.html',
})
export class AddCityPage {

	public cityData = {};

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController
	) {
		this.cityData = {
			city: '',
			weather: '',
			temp: ''
		};
	}

	public dismiss() {
		this.viewCtrl.dismiss();
	}
}
