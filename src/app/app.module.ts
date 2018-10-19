import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy, CommonModule, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

// Routing Module
import { FullLayoutComponent} from './layout/full-layout.component';
import {Ng2AutoBreadCrumb} from "ng2-auto-breadcrumb";



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  
  
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data:{
          title2:"Dashboard"
        }
      },
    
  

    ]
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    Ng2AutoBreadCrumb
  ],
  declarations: [
    FullLayoutComponent,
    AppComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
