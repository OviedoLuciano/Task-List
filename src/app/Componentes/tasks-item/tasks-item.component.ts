import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Modelos/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Output } from '@angular/core';
import Swal from 'sweetalert2'
import { TASKS } from 'src/app/Modelos/mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Input() task: Task = TASKS[0];
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Borrar Tarea?',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       
        swalWithBootstrapButtons.fire(
          'Borrada!',
          'Tu tarea ha sido borrada.',
          'success'
        ), this.onDeleteTask.emit(task);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu tarea no se borró :)',
          'error'
        )
      }
    })
   
   
   
   
   
    
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
