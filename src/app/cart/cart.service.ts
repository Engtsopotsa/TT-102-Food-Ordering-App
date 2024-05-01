import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private itemsInCart: any[] = []; // This should be replaced with a specific type for cart items

  


  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: any): void { // Add a specific type instead of any if possible
    this.itemsInCart.push(item);
    this.itemsInCartSubject.next(this.itemsInCart);
  }

  public getCartItems(): Observable<any[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public removeItem(id: number): Observable<any[]> {
    this.itemsInCart = this.itemsInCart.filter(item => item.id !== id);
    this.itemsInCartSubject.next(this.itemsInCart);
    return this.itemsInCartSubject.asObservable(); // Now returns an Observable of the cart items array
  }

  public clearCart(): Observable<any[]> {
    this.itemsInCart = [];
    this.itemsInCartSubject.next(this.itemsInCart);
    return this.itemsInCartSubject.asObservable(); // Now returns an Observable of the cart items array
  }
}
