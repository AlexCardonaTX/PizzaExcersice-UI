import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.sass']
})
export class CreateDialogComponent implements OnInit {
  validatingForm: FormGroup;
  message?: string;

  constructor(public modalRef: MdbModalRef<CreateDialogComponent>) {
    this.validatingForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  close(state: boolean): void {
    this.modalRef.close(
      {
        state: state,
        name: this.validatingForm.value.Name
      }
    );
  }

  get Name() {
    return this.validatingForm?.get('Name');
  }

}
