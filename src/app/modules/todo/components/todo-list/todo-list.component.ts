import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input()
  todos: Todo[] = [];

  @Input()
  selectedTodo: Todo | undefined;

  @Output()
  selectTodo: EventEmitter<Todo> = new EventEmitter();
}
