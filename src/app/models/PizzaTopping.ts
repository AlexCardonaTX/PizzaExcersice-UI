import { Topping } from "./Topping";

export class PizzaTopping {
    public pizzaIngredientId: string|undefined;
    public ingredient: Topping|undefined;

    constructor(init?: Partial<PizzaTopping>) {
      (<any>Object).assign(this, init);
    }
}
