import { Component, OnInit } from '@angular/core';
import { Topping } from '../models/Topping';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.sass']
})
export class ToppingsComponent implements OnInit {

  data: Topping[] = [
    {
      "ingredientId": "82f5462d-b629-478d-898a-1d7ab85e8bdd",
      "ingredientName": "Extra Cheese"
    },
    {
      "ingredientId": "bbb7ee8a-2caf-4c4e-baea-9ad4da3ac9df",
      "ingredientName": "Peperonni"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
