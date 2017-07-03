/**
 * Created by Daniel on 30.06.2017.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Task} from "./task.component";
import {Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
  private taskUrl = 'http://127.0.0.1:8080/task';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    // return this.http.get(this.taskUrl)
    //   .toPromise()
    //   .then(response => (response.json()) as Task[])
    //   .catch(this.handleError);
    return this.http.get(this.taskUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.taskUrl}/${id}`;
    console.log("attempt to get Task: " + id + 'with url: '+url);
    return this.http.get(url)
      .toPromise()
      .then(response =>{return response.json() as Task})
      .catch(this.handleError);
  }

  update(task: Task): Promise<Task>{
    const url = `${this.taskUrl}/${task.id}`;
    return this.http
      .put(url, JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }




}
