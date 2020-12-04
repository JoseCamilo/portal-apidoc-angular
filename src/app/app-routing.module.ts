import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwaggerUiComponent } from './modules/swagger-ui/swagger-ui.component';
import { SwaggerEditorComponent } from './modules/swagger-editor/swagger-editor.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
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
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
