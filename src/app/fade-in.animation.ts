import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation=trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [
        // styles at start of transition
        style({ opacity: 0 }),
        // animation and styles at end of transition
        animate(300, style({ opacity: 1 }))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
        style({ opacity: 1 }),
        animate(300, style({ opacity:0 })) 
    ])
]);