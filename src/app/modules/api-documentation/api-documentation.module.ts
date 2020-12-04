import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule, PoMenuModule } from '@po-ui/ng-components';
import { ApiDocumentationComponent } from './api-documentation.component';
import { ApiDocumentationRouting } from './api-documentation.routing';
import { PoNavbarModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [ApiDocumentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoMenuModule,
    ApiDocumentationRouting
  ],
  providers: [],
})
export class ApiDocumentationModule {}
