import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { SwaggerEditorComponent } from './swagger-editor/swagger-editor.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ui', pathMatch: 'full' },
  {
    path: 'ui',
    component: SwaggerUiComponent
  },
  {
    path: 'editor',
    component: SwaggerEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
