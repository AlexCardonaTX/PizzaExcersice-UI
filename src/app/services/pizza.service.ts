import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Pizza } from '../models/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  _pizzasSubject: Subject<Pizza[]> = new Subject()

  constructor(private http: HttpClient) { }

  public getAll() {
    const url = `${environment.API_URL}/pizza`;
    this.http.get(url).subscribe(data => {
      this._pizzasSubject.next(<Pizza[]> data);
    });
  }

  public getPizzas$() {
    return this._pizzasSubject.asObservable();
  }

  public createPizza(name: string) {
    const url = `${environment.API_URL}/pizza`;
    const pizza: Pizza = {
      pizzaId: null,
      pizzaName: name,
      pizzaIngredients: []
    };
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(url, JSON.stringify(pizza), httpOptions);
  }

  public deletePizza(id: string) {
    const url = `${environment.API_URL}/pizza/${id}`;
    return this.http.delete(url);
  }

  public updatePizzaToppings(id: string, toppingsIds: string[]) {
    const url = `${environment.API_URL}/pizza/${id}/ingredients`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put(url, JSON.stringify(toppingsIds), httpOptions);
  }

}
