import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from 'src/app/Modelos/Task';


const httpOptions ={
  headers:new HttpHeaders({
   
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'https://tasklist-back.herokuapp.com/tasklist/tasks'
  constructor(private http: HttpClient) { }

  getTasks():Observable<Task[]>{
      return this.http.get<Task[]>(`${this.apiUrl}`)
  }

  getTasksId(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`)
  }

  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/borrar/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/editar/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}/crear`, task, httpOptions)
  }
}
