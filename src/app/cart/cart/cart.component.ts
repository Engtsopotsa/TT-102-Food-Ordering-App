import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';  // Ensure the path is correct
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule] // Import CommonModule
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Define a more specific type based on your data structure
  total: number = 0;

  constructor(private cartService: CartService) {}

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

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId).subscribe({
      next: () => this.loadCartItems(),
      error: () => alert('Error removing item')
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe({
      next: () => this.cartItems = [],
      error: () => alert('Error clearing the cart')
    });
  }
  // clearCart(): Observable<void> {
  //   return this.cartService.clearCart().pipe(
  //     tap(() => this.cartItems = []),
  //     catchError(() => of(null))
  //   );
  // }
}
