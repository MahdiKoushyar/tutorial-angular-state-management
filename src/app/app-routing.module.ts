import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterShellComponent } from './modules/counter/counter-shell/counter-shell.component';
import { TodoShellComponent } from './modules/todo/components/todo-shell/todo-shell.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoShellComponent,
  },
  {
    path: 'counter',
    component: CounterShellComponent,
  },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppRoutingModule { }
