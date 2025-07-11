import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { WorkshoplistComponent } from './demo/components/workshop/workshoplist/workshoplist.component';
import { WorkshopFormComponent } from './demo/components/workshop/workshop-form/workshop-form.component';
import { WorkshopDetailsComponent } from './demo/components/workshop/workshop-details/workshop-details.component';
import { ResourceListComponent } from './demo/components/resource/resource-list/resource-list.component';
import { ResourceFormComponent } from './demo/components/resource/resource-form/resource-form.component';
import { ResourceDetailsComponent } from './demo/components/resource/resource-details/resource-details.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UikitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    
                    // Dashboard
                    { path: 'mydashboard', component: MydashboardComponent },

                    // Workshops Routes
                    { path: 'workshops', 
                        children: [
                            { path: '', component: WorkshoplistComponent },  // List Workshops
                            { path: 'new', component: WorkshopFormComponent },  // Add New Workshop
                            { path: ':id/edit', component: WorkshopFormComponent },  // Edit Workshop
                            { path: ':id', component: WorkshopDetailsComponent }  // Workshop Details
                        ]
                    },

                    // Resources Routes inside Workshops
                    { path: 'workshops/:workshopId/resources', component: ResourceListComponent },  // List Resources
                    { path: 'workshops/:workshopId/resources/new', component: ResourceFormComponent },  // Add Resource
                    { path: 'workshops/:workshopId/resources/:resourceId/edit', component: ResourceFormComponent },  // Edit Resource
                    { path: 'workshops/:workshopId/resources/:resourceId', component: ResourceDetailsComponent },  // Resource Details
                ],
            },

            // Authentication & Other Routes
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
