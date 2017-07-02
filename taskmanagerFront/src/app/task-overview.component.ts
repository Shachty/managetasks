import {Component, OnInit} from "@angular/core";
import {Task} from "./task.component"
import {Router} from "@angular/router";
import {TaskService} from "./task.service";
import { Subject }           from 'rxjs/Subject';

// Observable class extensions

/**
 * Created by Daniel on 30.06.2017.
 */

@Component({
  selector: 'task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: [ './task-overview.component.css' ]
})

export class TaskOverview implements OnInit{
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

    getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
    }

    onSelect(task: Task): void {
    this.selectedTask = task;
    }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
}
