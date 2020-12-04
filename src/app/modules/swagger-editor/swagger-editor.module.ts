import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule } from '@po-ui/ng-components';
import { SwaggerEditorComponent } from './swagger-editor.component';
import { SwaggerEditorRouting } from './swagger-editor.routing';

@NgModule({
  declarations: [SwaggerEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoPageModule,
    PoModule,
    SwaggerEditorRouting,
  ],
  providers: [],
})
export class SwaggerEditorModule {}
