import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';

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
		public openWeatherApi: OpenWeatherProvider
	) {
	}

	public dismiss() {
		this.viewCtrl.dismiss();
	}

	public saveCity() {
		var cities = <any>localStorage.getItem('cities');
		if ( !cities ) {
			cities = [];
		} else {
			cities = JSON.parse( cities );
		}

		this.openWeatherApi.getWeatherByCity( this.cityData.city ).then( result => {
			this.cityData.weather = result.weather[0].main;
			this.cityData.temp    = Math.round( (result.main.temp - 273.15 ) * 100 / 100 );

			cities.push( this.cityData );
			localStorage.setItem('cities', JSON.stringify( cities ) );
			this.dismiss();
		});
	}
}
