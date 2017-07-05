import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from './task.service';
import {Task} from './task.component';
import 'rxjs/add/operator/switchMap';
import {CalendarModule} from 'primeng/primeng';

@Component({
  selector: 'new-task',
  templateUrl: './task-detail.component.html'
})

export class NewTaskComponent implements OnInit{
  @Input() task: Task;
  ngOnInit(): void {
    this.task = new Task(-1, new Date(), this.dummyDate, new Date(), this.dummyDate, '', '', 1, 'NEW');
  }

  dummyDate: Date;
  enableResolvedDate: boolean = false;

  mode: string = 'Create';

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
    this.task.resolvedAt = new Date();
    this.taskService.add(this.task)
      .then(() => {this.goBack()});
  }
}





