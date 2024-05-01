import { Component } from '@angular/core';
import { PaymentService } from '../payment.service'; // Ensure the import path is correct

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amountDue: number = 0;  // This should be set based on the order details
  paymentStatus: string = '';

  constructor(private paymentService: PaymentService) {}

  processPayment() {
    this.paymentService.processPayment(this.amountDue).subscribe({
      next: (status) => {
        this.paymentStatus = 'Payment Successful';
        // Redirect or further actions post payment can be handled here
      },
      error: (error) => {
        this.paymentStatus = 'Payment Failed';
        console.error('Payment processing failed', error);
      }
    });
  }
}

