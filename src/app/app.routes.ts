import { Routes, RouterModule } from '@angular/router';

//Componente Principal
import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
   
    { path: '**', component: PagenofoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
