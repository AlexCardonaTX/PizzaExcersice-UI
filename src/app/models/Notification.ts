export class Notification {
    public message: string = "";
    public type: string = "";
    public hide: boolean = true;

    constructor(init?: Partial<Notification>) {
      (<any>Object).assign(this, init);
    }
}
