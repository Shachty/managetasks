import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {TaskService} from "./task.service";
import {TaskOverview} from "./task-overview.component";
import {NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    TaskOverview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
