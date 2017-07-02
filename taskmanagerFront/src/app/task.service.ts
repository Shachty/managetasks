/**
 * Created by Daniel on 30.06.2017.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Task} from "./task.component";

@Injectable()
export class TaskService {
  private taskUrl = 'http://127.0.0.1:8080/task';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.taskUrl)
      .toPromise()
      .then(response => (response.json()) as Task[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }




}
