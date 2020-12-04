import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadChildren: () =>  import('./modules/home/home.module').then(
      (m) => m.HomeModule
    ),
  },
  {
    path: 'ui',
    loadChildren: () =>  import('./modules/swagger-ui/swagger-ui.module').then(
      (m) => m.SwaggerUiModule
    ),
  },
  {
    path: 'editor',
    loadChildren: () =>  import('./modules/swagger-editor/swagger-editor.module').then(
      (m) => m.SwaggerEditorModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
