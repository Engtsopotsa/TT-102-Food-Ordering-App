import { Component } from '@angular/core';
import { MenuService } from '../../menu/menu.service'; // Update the import path as necessary
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule,CommonModule] // Import FormsModule
})
export class SearchComponent {
  searchQuery: string = '';
  results: any[] = []; // Update the type based on what your MenuService returns
  errorMessage: string = '';

  constructor(private menuService: MenuService) {}

  performSearch(): void {
    if (!this.searchQuery.trim()) {
      this.errorMessage = "Please enter a search query.";
      return;
    }
    this.menuService.searchMenuItems(this.searchQuery).subscribe({
      next: (data) => this.results = data,
      error: (error) => this.errorMessage = "Failed to fetch results."
    });
  }
}