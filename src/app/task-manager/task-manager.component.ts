import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-task-manager',
  imports: [CommonModule, FormsModule, TaskListComponent],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css',
})
export class TaskManagerComponent {
  taskName = '';
  taskPriority: string = 'Medium';
  tasks: any[] = [];

  addTask() {
    this.tasks.push({
      name: this.taskName,
      priority: this.taskPriority,
      isCompleted: false,
    });
    this.taskName = '';
    this.taskPriority = 'Medium';
  }

  markAsCompleted(index: number) {
    this.tasks[index].isCompleted = true;
  }
}
