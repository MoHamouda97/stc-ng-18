import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, PristineChangeEvent, ReactiveFormsModule, StatusChangeEvent, TouchedChangeEvent, ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-form-event',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Form Events: a way to group the event of the form
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <ul>
              <li class="mb-2">
                Version 18 of Angular exposes a new event property from the AbstractControl             
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <form [formGroup]="form" class="mb-4">
      <input 
        type="text" 
        class="form-control"
        placeholder="Form Control"
        [formControlName]="'userName'">
    </form>

    <div class="alert alert-primary mb-2" role="alert" *ngIf="!pristine">
      Control is pristined
    </div>
    <div class="alert alert-secondary mb-2" role="alert" *ngIf="status">
      Control status is: {{status}}
    </div>
    <div class="alert alert-success mb-2" role="alert" *ngIf="value">
      Control value is: {{value}}
    </div>
    <div class="alert alert-danger mb-2" role="alert" *ngIf="touched">
      Control is touched: {{touched}}
    </div>
  `,
})
export class FormEventComponent implements OnInit {
  // Version 18 of Angular exposes a new event property from the AbstractControl

  form!: FormGroup
  touched: boolean = false;
  pristine: boolean = true;
  status: string = '';
  value: string = '';

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.subscribeToControl();
  }

  createForm() {
    this.form = this._fb.group({
      userName: [null]
    })
  }

  subscribeToControl() {
    this.form.controls['userName'].events.subscribe({
      next: (event) => {
        if (event instanceof TouchedChangeEvent) {
          this.touched = event.touched
        } else if (event instanceof PristineChangeEvent) {
          this.pristine = event.pristine;
        } else if (event instanceof StatusChangeEvent) {
          this.status = event.status;
        } else if (event instanceof ValueChangeEvent) {
          this.value = event.value
        }
      }
    })
  }
}
