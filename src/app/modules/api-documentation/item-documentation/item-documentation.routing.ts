import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDocumentationComponent } from './item-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: ItemDocumentationComponent,
  },
  {
    path: ':id',
    component: ItemDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDocumentationRouting {}
