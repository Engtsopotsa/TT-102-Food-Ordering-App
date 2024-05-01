import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service'; // Update the import path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-menu-list',
  standalone: true,
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  imports: [CommonModule] // Import CommonModule
})
export class MenuListComponent implements OnInit {
  menus: any[] = []; // Update the type based on what your MenuService returns
  errorMessage: string = '';

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenus().subscribe({
      next: (menus) => this.menus = menus,
      error: () => this.errorMessage = "Failed to load menus."
    });
  }
}
