import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// PAGES
import { AddCityPage } from '../add-city/add-city';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public cities: any[];

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController
	) {
		var cities = <any>localStorage.getItem('cities');
		if ( cities ) {
			this.cities = JSON.parse( cities );
		} else {
			this.cities = [];
		}
	}

	public addCity()
	{
		const modal = this.modalCtrl.create(AddCityPage);
		modal.present();
	}

}
