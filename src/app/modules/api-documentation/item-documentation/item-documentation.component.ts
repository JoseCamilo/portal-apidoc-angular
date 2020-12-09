import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-item-documentation',
  templateUrl: './item-documentation.component.html',
  styleUrls: ['./item-documentation.component.css'],
})
export class ItemDocumentationComponent implements OnInit {
  docs = [
    {
      id: 'protheus-crm-contas',
      url: 'https://ti.totvs.com/api/be/swagger/protheus-crm-contas.yaml',
    },
    {
      id: 'protheus-crm-vendas',
      url: 'https://ti.totvs.com/api/be/swagger/protheus-crm-vendas.yaml',
    },
  ];
  doc;
  showUi = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.loadDocument();
      }
    });
  }

  ngOnInit(): void {
    this.loadDocument();
  }

  loadDocument(): void {
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

    this.refresh();
  }

  async refresh(): Promise<any> {
    this.showUi = false;
    await this.delay(1);
    this.showUi = true;
  }

  delay(ms): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
