import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout.component';
import { LayoutModule } from './pages/layout.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./pages/task-list/task-list.module').then(
            (m) => m.TaskListModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./pages/task-create/task-create.module').then(
            (m) => m.TaskCreateModule
          ),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
