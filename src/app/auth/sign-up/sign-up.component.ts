import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Update the import path as necessary


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }
    this.authService.register(this.username, this.password).subscribe({
      next: (result) => {
        // handle response here, e.g., navigate to the login page or show success message
      },
      error: (error) => {
        this.errorMessage = "Registration failed. Please try again.";
      }
    });
  }
}

