import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from './task.service';
import {Task} from './task.component';
import 'rxjs/add/operator/switchMap';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
    @Input() task: Task;
  ngOnInit(): void {
    console.log("task: "+JSON.stringify(this.task));
    // this.route.paramMap.switchMap((params: ParamMap) => console.log('param' + params));
    this.route.paramMap
      .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
      .subscribe(task => {this.task = task;this.repairDateProperties(task);this.checkStatus(this.task.status);});
  }
  dummyDate: Date;
  enableResolvedDate: boolean;

  repairDateProperties(task: Task): void{
    this.task.dueDate = new Date(task.dueDate);
    this.task.resolvedAt = new Date(task.resolvedAt);
    this.task.createdAt = new Date(task.createdAt);
    this.task.updatedAt = new Date(task.updatedAt);
  }

  mode: string = 'Edit';
  checkStatus(event){
    switch(event){
      case 'NEW':{
        this.task.resolvedAt=this.dummyDate;
        this.enableResolvedDate = false;
        this.task.updatedAt = this.dummyDate;
        break;
      }
      case 'INPROGRESS':{
        this.task.resolvedAt=this.dummyDate;
        this.enableResolvedDate = false;
        break;
      }
      case 'DONE':{
        this.task.resolvedAt = new Date();
        this.enableResolvedDate = true;
        break;
      }
      case 'ABORTED':{
        this.task.resolvedAt=this.dummyDate;
        this.enableResolvedDate = false;
        break;
      }
    }
    console.log('status',event, this.enableResolvedDate);
  }

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.task.updatedAt = new Date();
    this.taskService.update(this.task)
      .then(() => this.goBack());
  }
}





