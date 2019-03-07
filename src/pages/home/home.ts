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
		this.loadCities();
	}

	public loadCities() {
		var cities = <any>localStorage.getItem('cities');
		if ( cities ) {
			this.cities = JSON.parse( cities );
		} else {
			this.cities = [];
		}
	}

	public addCityToCities( city ) {
		this.cities.push( city );
	}

	public addCity()
	{
		const modal = this.modalCtrl.create(AddCityPage);
		modal.present();

		modal.onDidDismiss( data => {
			this.addCityToCities( data.city );
		});
	}

}
