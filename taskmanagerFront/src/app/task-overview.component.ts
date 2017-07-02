import {Component, OnDestroy, OnInit} from "@angular/core";
import {Task} from "./task.component"
import {TaskService} from "./task.service";
import {Observable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/Rx';

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
  private timerSubscription: AnonymousSubscription;
  private taskSubscription: AnonymousSubscription;

  constructor(
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  public ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

    // getTasks(): void {
    // this.taskService.getTasks().then(tasks => this.tasks = tasks);
    // }

  getTasks() {
    this.taskSubscription = this.taskService.getTasks()
      .subscribe(
        tasks =>{this.tasks = tasks;
          this.subscribeToData();})
  }
   private subscribeToData(): void {
    this.timerSubscription = Observable.timer(3000).first().subscribe(() => this.getTasks());
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
