
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from "./dashboard.component";
import {DashboardService} from "./dashboard.service";
import {DashboardRoutingModule} from "./dashboard-routing";
import {StatsCardComponent} from "../components/statsCard/statsCard.component";
import { ChartsModule } from 'ng2-charts';

import {CommonModule} from "@angular/common";
import {Ng2Timeline} from 'ng2-timeline';
import { PredictorService } from '../services/predictor/predictor.service';



@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartsModule,
    
    CommonModule,
    Ng2Timeline,
 
  ],
  declarations: [ DashboardComponent, StatsCardComponent],
  providers: [ DashboardService, PredictorService ]
})
export class DashboardModule { }
