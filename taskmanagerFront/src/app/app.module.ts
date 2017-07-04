import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {TaskService} from "./task.service";
import {TaskOverviewComponent} from "./task-overview.component";
import {NgxDatatableModule } from '@swimlane/ngx-datatable';
import {TaskDetailComponent} from "./task-detail.component";
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api
import {CalendarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";     //accordion and accordion tab

@NgModule({
  declarations: [
    AppComponent,
    TaskOverviewComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CalendarModule,
    AccordionModule,
    NgxDatatableModule,
    BrowserAnimationsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
