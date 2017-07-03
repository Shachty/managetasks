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

export class TaskOverviewComponent implements OnInit{
  tasks: Task[];
  selected: Task;
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

  getTasks() {
    this.taskSubscription = this.taskService.getTasks()
      .subscribe(
        tasks =>{this.tasks = tasks;
          this.subscribeToData();})
  }
   private subscribeToData(): void {
    this.timerSubscription = Observable.timer(3000).first().subscribe(() => this.getTasks());
  }



  onSelect({ selected }) {
    this.selected = selected[0];
  }
  gotoEdit(): void {
    this.router.navigate(['/edit', this.selected.id]);
  }

    //task overview table definition
  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'priority', name: 'Priority' },
    { prop: 'dueDate', name: 'Due Date'},
    { prop: 'status', name: 'Status'}
  ];
}


