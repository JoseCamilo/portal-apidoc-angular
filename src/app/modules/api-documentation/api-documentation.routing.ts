import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocumentationComponent } from './api-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ApiDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDocumentationRouting {}
