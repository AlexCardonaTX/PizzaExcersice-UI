import { Component, OnInit } from '@angular/core';
import { Topping } from '../models/Topping';
import { ToppingService } from '../services/topping.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.sass']
})
export class ToppingsComponent implements OnInit {
  modalRef?: MdbModalRef<ConfirmDialogComponent>;
  toppings: Topping[] = [];

  constructor(
    private toppingService: ToppingService,
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
    this.subscribeToppings();
  }

  subscribeToppings(): void {
    this.toppingService.getAll().subscribe(data => {
      this.toppings = <Topping[]> data;
      console.log(this.toppings);
    });
  }

  openDeleteDialog(topping: Topping): void {
    this.modalRef = this.modalService.open(
      ConfirmDialogComponent,
      { 
        data: { 
          message: "Are you sure you want to Delete this topping?" 
        }
      }
    );
    this.modalRef.onClose.subscribe(state => {
      console.log(state);
    });
  }

  openCreateDialog(): void {
    this.modalRef = this.modalService.open(
      CreateDialogComponent,
      { 
        data: { 
          message: "Topping" 
        }
      }
    );
    this.modalRef.onClose.subscribe(data => {
      console.log(data);
    });
  }

}
