import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Topping } from '../models/Topping';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http: HttpClient) { }

  public getAll() {
    let url = `${environment.API_URL}/ingredient`;
    return this.http.get(url);
  }

}
