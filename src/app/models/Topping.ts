export class Topping {
    public ingredientId: string|undefined|null;
    public ingredientName: string|undefined;
  
    constructor(init?: Partial<Topping>) {
      (<any>Object).assign(this, init);
    }
  }
  