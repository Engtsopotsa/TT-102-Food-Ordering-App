import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // Update the import path as necessary
import { SearchComponent } from '../search/search.component'; // Make sure the path matches your structure
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [SearchComponent,CommonModule] // Importing SearchComponent to be used in the template
})
export class HomePageComponent {
  constructor(public authService: AuthService) {}

  // Additional methods can be added here as needed
}

