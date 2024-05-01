import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusUrl = 'api/menus';  // Base URL for menu data
  private restaurantMenusUrl = 'api/restaurantMenus'; // URL for restaurant-specific menus

  constructor(private http: HttpClient) {}

  // Fetch all menus
  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(this.menusUrl)
      .pipe(
        catchError(this.handleError<any[]>('getMenus', []))
      );
  }

  // Fetch menus by search query
  searchMenuItems(query: string): Observable<any[]> {
    const searchUrl = `${this.menusUrl}?q=${query}`;
    return this.http.get<any[]>(searchUrl)
      .pipe(
        catchError(this.handleError<any[]>('searchMenuItems', []))
      );
  }

  // Fetch specific restaurant menu
  getRestaurantMenu(id: string): Observable<any[]> {
    const url = `${this.restaurantMenusUrl}/${id}`;
    return this.http.get<any[]>(url)
      .pipe(
        catchError(this.handleError<any[]>('getRestaurantMenu', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
