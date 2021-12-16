import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Topping } from '../../models/Topping';
import { Pizza } from '../../models/Pizza';
import { ToppingService } from '../../services/topping.service';
import { FormGroup, FormControl } from "@angular/forms";
import { PizzaTopping } from 'src/app/models/PizzaTopping';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.sass']
})
export class EditDialogComponent implements OnInit {
  pizza?: Pizza;
  toppings?: Topping[];
  validatingForm: FormGroup = new FormGroup({ });

  constructor(
    public modalRef: MdbModalRef<EditDialogComponent>,
    private toppingService: ToppingService
  ) { }

  ngOnInit(): void {
    this.toppingService.getAll();
    this.subscribeToppings();
    this.addValidators();
  }

  addValidators(): void {
    this.validatingForm = new FormGroup({
      Topping: new FormControl()
    });
  }

  get Topping() {
    return this.validatingForm.get('Topping');
  }

  subscribeToppings(): void {
    this.toppingService.getToppings$().subscribe(data => {
      this.toppings = data;
      this.validatingForm.get('Topping')?.setValue(data[0].ingredientId);
    });
  }

  close(state: boolean): void {
    this.modalRef.close(
      {
        state: state,
        name: this.pizza
      }
    );
  }

  addTopping(): void {
    const toppingId = this.Topping?.value;
    const duplicate = this.pizza?.pizzaIngredients?.some(
      pizzaTopping => pizzaTopping.ingredient?.ingredientId === toppingId
    );
    if (!duplicate) {
      const topping = this.toppings?.find(t => t.ingredientId === toppingId);
      const pizzaTopping: PizzaTopping = {
        ingredient: topping,
        pizzaIngredientId: null
      }
      this.pizza?.pizzaIngredients?.push(pizzaTopping);
    }
  }

  removeTopping(pizzaToping: PizzaTopping): void {
    if (this.pizza?.pizzaIngredients) {
      const index = this.pizza?.pizzaIngredients?.indexOf(pizzaToping);
      if (index != -1) {
        this.pizza?.pizzaIngredients?.splice(index, 1);
      }
    }
  }
}
