import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/Servicios/ui.service';
import {Subscription} from 'rxjs'
import Swal from 'sweetalert2'
import { Task } from 'src/app/Modelos/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
text:string = "";
day:string = "";
reminder:boolean=false;
showAddTask:boolean = false;
subscription?: Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(
      value=> this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor agregar tarea");
      return
    }

 const {text, day, reminder} = this
    const newTask = {text,day,reminder}
      
    this.onAddTask.emit(newTask);
    Swal.fire({
      position: 'center-end',
      icon: 'success',
      title: 'Tarea agregada :)',
      showConfirmButton: false,
      timer: 1500
    })
    }
  }

