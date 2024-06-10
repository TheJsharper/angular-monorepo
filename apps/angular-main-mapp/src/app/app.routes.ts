import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    {
        path:'mapp-table',
        loadComponent: ()=> import('@angular-monorepo/primeng-table').then( c => c.PrimengTableComponent),
    
    
    },
    {
        path:'mapp-data-view',
        loadComponent: ()=> import('@angular-monorepo/primeng-data-view').then( c => c.PrimengDataViewComponent),
    
    
    },
    {
        path:'mapp-org-chart',
        loadComponent: ()=> import('@angular-monorepo/primeng-org-chart').then( c => c.PrimengOrgChartComponent),
    
    
    },
];
