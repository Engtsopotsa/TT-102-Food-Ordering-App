import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // Update the path as needed

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
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

