import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import AOS from 'aos';


// Dark mode pre-load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
}

AOS.init({ once: true });

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()]
});


