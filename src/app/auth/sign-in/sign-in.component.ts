import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the import path as necessary

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (result) => {
        // Navigate to the home page upon successful login
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = "Login failed. Please check your credentials and try again.";
      }
    });
  }
}

