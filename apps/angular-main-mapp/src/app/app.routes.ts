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
    {
        path:'mapp-timeline',
        loadComponent: ()=> import('@angular-monorepo/primeng-timeline').then( c => c.PrimengTimelineComponent),
    
    
    },
    {
        path:'mapp-pick-list',
        loadComponent: ()=> import('@angular-monorepo/primeng-pick-list').then( c => c.PrimengPickListComponent),
    
    
    },
     {
        path:'mapp-contact',
        loadComponent: ()=> import('@angular-monorepo/primeng-form-contact').then( c => c.PrimengFormContactComponent),
    
    
    },
    
];
