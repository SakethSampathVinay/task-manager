import { CommonModule, NgIf, NgSwitchCase } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [NgIf, CommonModule, FormsModule, NgSwitchCase],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: any[] = [];
  @Output() taskCompleted = new EventEmitter<number>();

  completeTask(index: number) {
    this.taskCompleted.emit(index);
  }


  getColor(priority: string): string {
    if(priority == "High") return 'red';
    if(priority == "Medium") return "orange";
    return 'green';
  }
}
