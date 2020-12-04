import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule } from '@po-ui/ng-components';
import { SwaggerUiComponent } from './swagger-ui.component';
import { SwaggerUiRouting } from './swagger-ui.routing';

@NgModule({
  declarations: [SwaggerUiComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoPageModule,
    PoModule,
    SwaggerUiRouting,
  ],
  providers: [],
})
export class SwaggerUiModule {}
