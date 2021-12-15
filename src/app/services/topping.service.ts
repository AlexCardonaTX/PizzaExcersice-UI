import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Topping } from '../models/Topping';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  _toppingsSubject: Subject<Topping[]> = new Subject()

  constructor(private http: HttpClient) { }

  public getAll() {
    const url = `${environment.API_URL}/ingredient`;
    this.http.get(url).subscribe(data => {
      this._toppingsSubject.next(<Topping[]> data);
    });
  }

  public getToppings$() {
    return this._toppingsSubject.asObservable();
  }

  public createTopping(name: string) {
    const url = `${environment.API_URL}/ingredient`;
    const topping :Topping = {
      ingredientId: null,
      ingredientName: name
    };
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(url, JSON.stringify(topping), httpOptions);
  }

  public deleteTopping(id: string) {
    const url = `${environment.API_URL}/ingredient/${id}`;
    return this.http.delete(url);
  }

}
