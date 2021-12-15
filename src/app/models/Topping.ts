export class Topping {
    public ingredientId: string|undefined;
    public ingredientName: string|undefined;
  
    constructor(init?: Partial<Topping>) {
      (<any>Object).assign(this, init);
    }
  }
  