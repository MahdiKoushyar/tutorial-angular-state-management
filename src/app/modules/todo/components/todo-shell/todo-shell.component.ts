import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from '../../models/filter';
import { Todo } from '../../models/todo';
import { TodosStateService } from '../../services/todos-state.service';

@Component({
  selector: 'app-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.scss']
})
export class TodoShellComponent {
  todosDone$: Observable<Todo[] | any> = this.todosState.todosDone$;
  todosNotDone$: Observable<Todo[] | any> = this.todosState.todosNotDone$;
  selectedTodo$: Observable<Todo | any> = this.todosState.selectedTodo$;
  filter$: Observable<Filter> = this.todosState.filter$;

  constructor(private todosState: TodosStateService) { }

  selectTodo(todo: Todo) {
    this.todosState.selectTodo(todo);
  }

  addTodo() {
    this.todosState.initNewTodo();
  }

  onFilterUpdate(filter: Filter) {
    this.todosState.updateFilter(filter);
  }

}
