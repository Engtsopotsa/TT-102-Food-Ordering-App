import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [ReactiveFormsModule], // Import Module
})

export class SignInComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),Validators.required])
  });

  signUp() {
    if (this.registrationForm.valid) {
      console.log('Registration Data:', this.registrationForm.value);
      // Here, you can handle the submission to your backend
    } else {
      console.log('Form is not valid');
    }
  }

  signIn() {
    console.log('Sign In Logic here');
    // Add sign in logic
  }

  
}

