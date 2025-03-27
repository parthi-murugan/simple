import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] // Import necessary modules
})
export class LoginComponent {
// togglePasswordVisibility() {
// throw new Error('Method not implemented.');
// }
 title = 'Login';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
}

  onSubmit() {
    console.log()
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.router.navigate(['/login']); // Navigate to the login page
    }
  }
  Login:any;
  lstrg(){
    localStorage.setItem('Login', JSON.stringify(this.loginForm.value));
  }
}

