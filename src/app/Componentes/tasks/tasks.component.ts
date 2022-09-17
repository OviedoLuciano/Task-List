import { TaskService } from './../../Servicios/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Modelos/Task';
import Swal from 'sweetalert2';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[]= [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) =>
    (this.tasks = tasks));
    
  }

  deleteTask(task:Task){
  
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    })
  }

  onToggle(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
   this.taskService.addTask(task).subscribe(task=>
    this.tasks.push(task));
    Swal.fire({
      position: 'center-end',
      icon: 'success',
      title: 'Tarea agregada :)',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
