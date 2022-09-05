import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';;
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @Input() item!: Item;
  @Output() submitted = new EventEmitter<Item>();

  todo: any[] = []
  price: number[] = []
  sum: number = 0

  form!: FormGroup;
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      price: [0],
    });
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

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
    const vvalue = this.form.value.name;
    const vprice = this.form.value.price;
    this.submitted.emit(this.form.value);
    this.todo.push(vvalue);
    this.sum += (vprice);
    this.price.push(vprice);
    this.form.reset();
  }


}
