import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../menu/menu.service'; // Adjust the import path as necessary
import { CartService } from '../../cart/cart.service'; // Adjust the import path as necessary
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  imports: [CommonModule] // Import CommonModule
})
export class RestaurantDetailComponent implements OnInit {
  restaurantMenu: any[] = []; // Adjust the type as per your data structure
  errorMessage: string = '';
  restaurantId!: string | null;  // Now can properly handle null

  constructor(
    private menuService: MenuService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    if (this.restaurantId === null) {
      this.errorMessage = "No restaurant ID provided in route.";
      // Optionally handle this case more gracefully, e.g., redirect or show a user-friendly message
      return;
    }
    this.menuService.getRestaurantMenu(this.restaurantId).subscribe({
      next: (menu) => this.restaurantMenu = menu,
      error: () => this.errorMessage = "Failed to load menu."
    });
  }

  addToCart(item: any) { // Ensure the type matches your data structure
    if (this.restaurantId === null) {
      console.error("Cannot add to cart, restaurant ID is missing.");
      return; // Optionally, handle this more gracefully
    }
    this.cartService.addToCart(item);
  }
}
