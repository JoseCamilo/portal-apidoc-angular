import { Component, OnInit } from '@angular/core';

declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;

@Component({
  selector: 'app-swagger-editor',
  templateUrl: './swagger-editor.component.html',
  styleUrls: ['./swagger-editor.component.css'],
})
export class SwaggerEditorComponent implements OnInit {
  ngOnInit(): void {
    const editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [SwaggerEditorStandalonePreset],
    });
  }
}
