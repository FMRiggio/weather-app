import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OpenWeatherProvider {

	public data;

	constructor(public http: HttpClient) {
		console.log('Hello OpenWeatherProvider Provider');
	}

	public load( city ) {
		return new Promise(resolve => {
			this.http
					.get('https://api.openweathermap.org/data/2.5/weather?q=' + city 
							+ '&appid=2c521ad181a4da6e0d07193b00b96c26' )
					.subscribe( (data: any) => {
						this.data = data;
						resolve(this.data);
					});
		});
	}

	public getWeatherByCity( city ) {
		return <any>this.load( city ).then( data => {
			return data;
		});
	}
}
