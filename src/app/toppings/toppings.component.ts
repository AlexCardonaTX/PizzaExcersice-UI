import { Component, OnInit } from '@angular/core';
import { Topping } from '../models/Topping';
import { ToppingService } from '../services/topping.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.sass']
})
export class ToppingsComponent implements OnInit {

  toppings: Topping[] = [];

  constructor(private toppingService: ToppingService) { }

  ngOnInit(): void {
    this.subscribeToppings();
  }

  subscribeToppings() {
    this.toppingService.getAll().subscribe(data => {
      this.toppings = <Topping[]> data;
      console.log(this.toppings);
    });
  }

}
