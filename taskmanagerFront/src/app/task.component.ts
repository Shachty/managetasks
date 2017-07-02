/**
 * Created by Daniel on 30.06.2017.
 */
interface Serializable<T> {
  deserialize(input: Object): T;
}
export class Task implements Serializable<Task>{

  deserialize(input): Task {
    this.id = input.id;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
    this.dueDate = input.dueDate;
    this.resolvedAt = input.resolvedAt;
    this.title = input.title;
    this.description = input.description;
    this.priority = this.priority;
    this.status = input.status;
    return this;
  }


  id: number;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
  resolvedAt: Date;
  title: String;
  description: String;
  priority: number;
  status: String;
}
