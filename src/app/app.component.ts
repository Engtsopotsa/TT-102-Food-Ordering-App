import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';  // Ensure correct path
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],// Import HeaderComponent if used in the template
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Title or any other global properties can be defined here
  title = 'TT-102-Food-Ordering-App';
}


