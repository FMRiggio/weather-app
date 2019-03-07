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

		this.cities = [
			{ city: 'Verona',         weather: 'Nebbia',     temp: 12 },
			{ city: 'Cerro Veronese', weather: 'Soleggiato', temp: 5 },
			{ city: 'Genova',         weather: 'Umido',      temp: 16 }
		];

		//this.cities = JSON.parse( localStorage.getItem('cities') );

	}

	public addCity()
	{
		const modal = this.modalCtrl.create(AddCityPage);
		modal.present();
	}

}
