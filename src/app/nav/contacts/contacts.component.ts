import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, FormGroup, ReactiveFormsModule, NgForm, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  standalone : true,
  imports: [ReactiveFormsModule , FormsModule,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {


  contactForm!: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }


  submit()  {

    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {

      console.log('Form submitted:', this.contactForm.value);

    } else {
        console.log('Invalid Form',);
    }


}

  saveData(): void {
    const isValid = this.submit();

    if (this.contactForm.valid) {

      const formValue = this.contactForm.value;
      const hasEmptyValues = Object.values(formValue).some(val => val === '' || val === null);

      if (!hasEmptyValues) {
        localStorage.setItem('Users', JSON.stringify(formValue));
        alert('Data has been saved successfully!');
        this.contactForm.reset(); 
      } else {
        console.error('Cannot save empty values to localStorage');
        alert('Please fill all required fields');
      }
    } else {
      console.error('Form is invalid');
      alert('Please correct the errors in the form');
    }
  }


  datas() {
   const storedData = localStorage.getItem('Users');
   alert(storedData)
   if (storedData) {
     const parsedData = JSON.parse(storedData);
     this.contactForm.setValue(parsedData);
   } else {
     console.error('No data found in localStorage for key "Users"');
   }
  }
  }


