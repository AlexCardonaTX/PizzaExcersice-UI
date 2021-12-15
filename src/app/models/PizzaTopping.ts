import { Topping } from "./Topping";

export class PizzaTopping {
    public pizzaIngredientId: string|undefined|null;
    public ingredient: Topping|undefined;

    constructor(init?: Partial<PizzaTopping>) {
      (<any>Object).assign(this, init);
    }
}
