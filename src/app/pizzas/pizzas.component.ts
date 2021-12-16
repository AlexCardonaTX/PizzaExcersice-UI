import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Pizza } from '../models/Pizza';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.sass']
})
export class PizzasComponent implements OnInit {
  modalRef?: MdbModalRef<ConfirmDialogComponent>;
  pizzas: Pizza[] = [];

  constructor(
    private pizzaService: PizzaService,
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
    this.pizzaService.getAll();
    this.subscribePizzas();
  }

  subscribePizzas(): void {
    this.pizzaService.getPizzas$().subscribe(data => {
      this.pizzas = data;
    });
  }

  openDeleteDialog(pizza: Pizza): void {
    this.modalRef = this.modalService.open(
      ConfirmDialogComponent,
      { 
        data: { 
          message: "Are you sure you want to Delete this Pizza?"
        }
      }
    );
    this.modalRef.onClose.subscribe(response => {
      if (response && pizza.pizzaId) {
        this.pizzaService.deletePizza(pizza.pizzaId).subscribe(
          response => {
          this.pizzaService.getAll();
        }, error => {
          console.error(error);
        });
      }
    });
  }

  openCreateDialog(): void {
    this.modalRef = this.modalService.open(
      CreateDialogComponent,
      { 
        data: { 
          message: "Pizza" 
        }
      }
    );
    this.modalRef.onClose.subscribe(response => {
      if (response && response.state) {
        this.pizzaService.createPizza(response.name).subscribe(
          response => {
          this.pizzaService.getAll();
        }, error => {
          console.log(response);
        });
      }
    });
  }

  generateToppingsSummary(pizza: Pizza) {
    let names: string[] = [];
    pizza.pizzaIngredients?.forEach(pizzaTopping => {
      const toppingName = pizzaTopping.ingredient?.ingredientName;
      if (toppingName) {
        names.push(toppingName);
      }
      
    });
    return names.join(', ');
  }

  openEditDialog(pizza: Pizza) {
    const clonePizza = JSON.parse(JSON.stringify(pizza));
    this.modalRef = this.modalService.open(
      EditDialogComponent, { data: { pizza: clonePizza } }
    );
    this.modalRef.onClose.subscribe(response => {
      if (response && response.state) {
        const toppings = this.getToppingsIds(response.newPizza);
        this.pizzaService.updatePizzaToppings(<string>pizza.pizzaId, toppings).subscribe(
          response => {
          this.pizzaService.getAll();
        }, error => {
          console.log(response);
        });
      }
    });
  }

  getToppingsIds(pizza: Pizza): string[] {
    let toppingsIds: string[] = [];
    pizza.pizzaIngredients?.forEach(pizzaIngredient => {
      toppingsIds.push(<string>pizzaIngredient.ingredient?.ingredientId);
    });
    return toppingsIds;
  }

}
