import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // Update the path as needed
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule] // Import CommonModule
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  // Method to determine if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Method to handle logout
  logout(): void {
    this.authService.logout();
  }
}
