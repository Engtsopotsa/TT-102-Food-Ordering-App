import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentUrl = 'api/payments'; // URL to the payment API

  constructor(private http: HttpClient) {}

  // Simulate processing a payment
  processPayment(amount: number): Observable<{status: string}> {
    // In a real app, you would make an HTTP request to your backend here
    // This is a mockup of a successful payment
    return this.http.post<{status: string}>(this.paymentUrl, { amount })
      .pipe(
        catchError(this.handleError('processPayment', {status: 'Failed'}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Log to console in real app
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

