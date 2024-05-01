import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the import path as necessary
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  imports: [FormsModule,CommonModule] // Import FormsModule
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