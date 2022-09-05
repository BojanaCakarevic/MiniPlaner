import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';;
import { FormBuilder } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  taskList: any[] = []
  todo: any[] = []
  done: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })

  constructor(
    private formBuilder: FormBuilder, private router: Router
  ) { }

  ngOnInit(): void {
    this.taskList = window.localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task") || '[]') : []
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    window.localStorage.setItem('task', JSON.stringify(this.taskList))
    this.todo.push(value)
    this.newTodoForm.reset();
  }

  public toggle(event: MatSlideToggleChange) {
      this.router.navigateByUrl('/todo');
  }

}