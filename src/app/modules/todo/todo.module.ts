import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoShellComponent } from './components/todo-shell/todo-shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FilterComponent } from './components/filter/filter.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoShellComponent,
    FilterComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
  ]
})
export class TodoModule { }
