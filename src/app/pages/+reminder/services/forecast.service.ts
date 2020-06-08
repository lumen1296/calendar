import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForeCastService {


  constructor(private httpClient: HttpClient) { }


  public getForest(city: string, date: string) {
    return this.httpClient.get(`${environment.url}premium/v1/weather.ashx?key=${environment.api}&q=${city}&format=json&num_of_days=1&date=${date}`);
  }
}
