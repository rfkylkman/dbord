import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { SsssComponent } from './ssss/ssss.component';
import { ConnectionService } from './services/ConnectionService';
import { AuthGuard } from '../auth/authentication';



export const router: Routes = [
    {   path: '',
        redirectTo : '/rtgs',
        pathMatch : 'full',
        canActivate : [AuthGuard]
    },
    {
        path: 'rtgs',
        component: RtgsComponent
    },
    {
        path: 'ssss',
        component: SsssComponent
    }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);