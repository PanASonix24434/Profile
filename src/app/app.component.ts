import {
  Component,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimations', [
      transition((fromState, toState) => fromState < toState, [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        }), { optional: true }),

        query(':enter', style({ transform: 'translateX(100%)', opacity: 0 }), { optional: true }),

        group([
          query(':leave', [
            animate('400ms ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('400ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ]),

      transition((fromState, toState) => fromState > toState, [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        }), { optional: true }),

        query(':enter', style({ transform: 'translateX(-100%)', opacity: 0 }), { optional: true }),

        group([
          query(':leave', [
            animate('400ms ease', style({ transform: 'translateX(100%)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('400ms ease', style({ transform: 'translateX(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'profile';

  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
