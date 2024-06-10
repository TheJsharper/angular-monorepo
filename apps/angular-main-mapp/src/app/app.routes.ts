import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    {
        path:'mapp-table',
        loadComponent: ()=> import('@angular-monorepo/primeng-table').then( c => c.PrimengTableComponent),
    
    
    }
];
