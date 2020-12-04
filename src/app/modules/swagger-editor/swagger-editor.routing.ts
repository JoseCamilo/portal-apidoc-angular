import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwaggerEditorComponent } from './swagger-editor.component';

const routes: Routes = [
  {
    path: '',
    component: SwaggerEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaggerEditorRouting {}
