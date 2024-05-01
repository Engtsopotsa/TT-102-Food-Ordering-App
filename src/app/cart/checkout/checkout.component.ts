import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Update the import path as necessary
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule] // Import CommonModule
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = []; // Define a more specific type based on your data structure
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe({
      next: items => {
        this.cartItems = items;
        this.calculateTotal();
      },
      error: () => alert('Error loading the cart items')
    });
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  proceedToPayment() {
    this.router.navigate(['/payment']); // Ensure you have a route set up for '/payment'
  }
}
