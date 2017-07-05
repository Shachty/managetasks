/**
 * Created by Daniel on 30.06.2017.
 */

export class Task{
  id: number;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
  resolvedAt: Date;
  title: string;
  description: String;
  priority: number;
  status: string;


  constructor(id: number, createdAt: Date, updatedAt: Date, dueDate: Date, resolvedAt: Date, title: string, description: String, priority: number, status: string) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.dueDate = dueDate;
    this.resolvedAt = resolvedAt;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = status;
  }
}
