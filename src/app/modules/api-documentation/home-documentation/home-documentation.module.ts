import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule, PoWidgetModule } from '@po-ui/ng-components';
import { HomeDocumentationComponent } from './home-documentation.component';
import { HomeDocumentationRouting } from './home-documentation.routing';

@NgModule({
  declarations: [HomeDocumentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoPageModule,
    HomeDocumentationRouting,
    PoWidgetModule,
  ],
  providers: [],
})
export class HomeDocumentationModule {}
