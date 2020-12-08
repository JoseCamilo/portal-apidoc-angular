import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule } from '@po-ui/ng-components';
import { ItemDocumentationComponent } from './item-documentation.component';
import { ItemDocumentationRouting } from './item-documentation.routing';
import { SwaggerUiComponent } from '../../swagger-ui/swagger-ui.component';

@NgModule({
  declarations: [
    ItemDocumentationComponent,
    SwaggerUiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoPageModule,
    ItemDocumentationRouting
  ],
  providers: [],
})
export class ItemDocumentationModule {}
