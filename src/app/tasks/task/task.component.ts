import { Component, EventEmitter, Input, Output, output } from '@angular/core';


import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  // @Output() complete = new EventEmitter<string>();

  constructor(private tasksService: TasksService){}

  onTaskComplete(){
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }

}
