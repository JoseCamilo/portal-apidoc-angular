import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css']
})
export class SwaggerUiComponent implements OnInit {
  docs = [
    { id: 'protheus-crm-contas', url: 'https://ti.totvs.com/api/be/swagger/protheus-crm-contas.yaml'},
    { id: 'protheus-crm-vendas', url: 'https://ti.totvs.com/api/be/swagger/protheus-crm-vendas.yaml'}
  ];
  doc;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.route.snapshot.params.id) {
      const pos = this.docs
      .map((e) => {
        return e.id;
      })
      .indexOf(this.route.snapshot.params.id);
      this.doc = this.docs[pos].url;
    } else {
      this.doc = 'https://ti.totvs.com/api/be/swagger/example-auth.yaml';
    }

    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: this.doc,
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }

}
