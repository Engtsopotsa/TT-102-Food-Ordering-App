import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Ensure this imports your route definitions correctly

const appConfig = {
  providers: [
    HttpClientModule,
    { provide: RouterModule, useValue: RouterModule.forRoot(routes) }
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
