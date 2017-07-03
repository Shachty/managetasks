import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from './task.service';
import {Task} from './task.component';
import 'rxjs/add/operator/switchMap';

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
      .subscribe(task => {console.log('got this:' + JSON.stringify(task));this.task = task;});
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
    this.taskService.update(this.task)
      .then(() => this.goBack());
  }
}





