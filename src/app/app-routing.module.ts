import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from './pizzas/pizzas.component';
import { ToppingsComponent } from './toppings/toppings.component';

const routes: Routes = [
  { path: '', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: '**', redirectTo: '/pizzas', pathMatch: 'full' },
  { path: 'toppings', component: ToppingsComponent },
  { path: 'pizzas', component: PizzasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
