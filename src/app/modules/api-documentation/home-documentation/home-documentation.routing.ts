import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDocumentationComponent } from './home-documentation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDocumentationRouting {}
