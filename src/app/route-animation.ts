import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [

    // route 'enter and leave (<=>)' transition
    transition('*<=>*', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('0.4s', style({ opacity: 1 }))
    ]),
 ]);
