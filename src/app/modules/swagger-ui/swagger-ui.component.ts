import { Component, OnInit, Input } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css'],
})
export class SwaggerUiComponent implements OnInit {
  @Input() doc = '';

  constructor() {}

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset,
      ],
      url: this.doc,
      docExpansion: 'none',
      operationsSorter: 'alpha',
    });
  }
}
