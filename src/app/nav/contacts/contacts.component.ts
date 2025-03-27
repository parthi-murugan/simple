import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone :true,
  imports : [CommonModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  contacts: any[] = [];
  showContacts = false;
  isEditMode = false;
  currentEditId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    }
  }

  saveData() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      if (this.isEditMode && this.currentEditId !== null) {

        this.contacts[this.currentEditId] = formData;
        this.isEditMode = false;
        this.currentEditId = null;
      } else {

        this.contacts.push(formData);
      }
      localStorage.setItem('contacts', JSON.stringify(this.contacts));

      this.contactForm.reset();

      this.showContacts = true;
    }
  }

  toggleView() {
    this.showContacts = !this.showContacts;
  }

  onEdit(contact: any) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.isEditMode = true;
      this.currentEditId = index;
      this.contactForm.patchValue({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onDelete(contact: any) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      
      if (this.isEditMode && this.currentEditId === index) {
        this.isEditMode = false;
        this.currentEditId = null;
        this.contactForm.reset();
      }
    }
  }
}
