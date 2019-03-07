import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'page-add-city',
	templateUrl: 'add-city.html',
})
export class AddCityPage {

	public cityData = {
		city: '',
		weather: '',
		temp: 0
	};

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
		private alertCtrl: AlertController,
		public openWeatherApi: OpenWeatherProvider
	) {
	}

	public dismiss() {
		this.viewCtrl.dismiss({ 'city' : this.cityData });
	}

	public saveCity() {
		var cities = <any>localStorage.getItem('cities');
		if ( !cities ) {
			cities = [];
		} else {
			cities = JSON.parse( cities );
		}

		this.openWeatherApi
			.getWeatherByCity( this.cityData.city )
			.then( result => {

				if ( result instanceof HttpErrorResponse ) {

					let alert = this.alertCtrl.create({
						title: 'Errore',
						subTitle: result.message,
						buttons: ['Annulla']
					});
					alert.present();

				} else {

					this.cityData.weather = result.weather[0].main;
					this.cityData.temp    = Math.round( (result.main.temp - 273.15 ) * 100 / 100 );
	
					cities.push( this.cityData );
					localStorage.setItem('cities', JSON.stringify( cities ) );
					this.dismiss();

				}
			})
	}
}
