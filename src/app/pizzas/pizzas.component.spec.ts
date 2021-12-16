import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Pizza } from '../models/Pizza';
import { PizzaService } from '../services/pizza.service';

import { PizzasComponent } from './pizzas.component';

describe('PizzasComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;
  let MdbModalServiceStub: MdbModalService;
  let PizzaServiceStub: PizzaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzasComponent ],
      providers: [ 
        { provide: MdbModalService, useValue: MdbModalServiceStub }, 
        { provide: PizzaService, useValue: PizzaServiceStub }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a Pizza description', () => {
    const pizza: Pizza = {
      "pizzaId": "e4c03fc0-b8b0-4646-85bb-435166c6471b",
      "pizzaName": "Napolitan",
      "pizzaIngredients": [
        {
          "pizzaIngredientId": "3ed552a8-5761-4aa5-f3c8-08d9c0a19635",
          "ingredient": {
            "ingredientId": "82f5462d-b629-478d-898a-1d7ab85e8bdd",
            "ingredientName": "Extra Cheese"
          }
        },
        {
          "pizzaIngredientId": "3db8fe5d-1ee0-4229-f3c9-08d9c0a19635",
          "ingredient": {
            "ingredientId": "ed0fd52d-7f8f-44dd-b444-ae510211adad",
            "ingredientName": "Olive"
          }
        }
      ]
    };

    const pizzaComponent = new PizzasComponent(PizzaServiceStub, MdbModalServiceStub);
    const summary = pizzaComponent.generateToppingsSummary(pizza);
    expect(summary).toMatch("Extra Cheese, Olive");
  });
});
