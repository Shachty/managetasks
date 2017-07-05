import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskOverviewComponent} from "./task-overview.component";
import {TaskDetailComponent} from "./task-detail.component";
import {NewTaskComponent} from "./new-task.component";

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',  component: TaskOverviewComponent },
  { path: 'edit/:id', component: TaskDetailComponent },
  {path: 'create', component: NewTaskComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
