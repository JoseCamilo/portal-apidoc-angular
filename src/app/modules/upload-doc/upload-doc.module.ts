import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoPageModule, PoModule, PoFieldModule } from '@po-ui/ng-components';
import { UploadDocComponent } from './upload-doc.component';
import { UploadDocRouting } from './upload-doc.routing';

@NgModule({
  declarations: [UploadDocComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoModule,
    UploadDocRouting,
    PoFieldModule,
  ],
  providers: [],
})
export class UploadDocModule {}
