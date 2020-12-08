import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ApiDocumentationComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home-documentation/home-documentation.module').then(
            (m) => m.HomeDocumentationModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./item-documentation/item-documentation.module').then(
            (m) => m.ItemDocumentationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDocumentationRouting {}
