import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskOverviewComponent} from "./task-overview.component";
import {TaskDetailComponent} from "./task-detail.component";

const routes: Routes = [
  { path: 'edit/:id', component: TaskDetailComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',  component: TaskOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
