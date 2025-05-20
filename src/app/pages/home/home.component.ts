import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostBinding('class.page-loaded') pageLoaded = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => (this.pageLoaded = true), 100);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
