import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoPageModule, PoModule } from '@po-ui/ng-components';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule, PoPageModule, PoModule, HomeRouting],
  providers: [],
})
export class HomeModule {}
