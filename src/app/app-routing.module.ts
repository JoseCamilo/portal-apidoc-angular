import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiDocumentationComponent } from './modules/api-documentation/api-documentation.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./modules/api-documentation/api-documentation.module').then(
        (m) => m.ApiDocumentationModule
      ),
  },
  {
    path: 'api/:id',
    loadChildren: () =>
      import('./modules/api-documentation/api-documentation.module').then(
        (m) => m.ApiDocumentationModule
      ),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./modules/swagger-editor/swagger-editor.module').then(
        (m) => m.SwaggerEditorModule
      ),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
