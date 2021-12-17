import { TestBed } from '@angular/core/testing';
import { PizzaService } from './pizza.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pizza } from '../models/Pizza';

describe('PizzaService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PizzaService ]
    });
  });

  it('getPizza$ should return empty array from observable', (done: DoneFn) => {
    const pizzaService = TestBed.inject(PizzaService);
    pizzaService.getPizzas$().subscribe(data => {
      expect(data).toHaveSize(0);
      done();
    });
  });

});
