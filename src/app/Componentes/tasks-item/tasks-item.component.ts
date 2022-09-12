import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Output } from '@angular/core';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Input() task: Task = TASKS[0];
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }
}
