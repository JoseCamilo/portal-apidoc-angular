import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-api-documentation',
  templateUrl: './api-documentation.component.html',
  styleUrls: ['./api-documentation.component.css']
})
export class ApiDocumentationComponent implements OnInit {

  menus: Array<PoMenuItem> = [
    {
      label: 'CRM',
      shortLabel: 'CRM',
      subItems: [
        { label: 'Contas', action: () => this.onRefresh('protheus-crm-contas') },
        { label: 'Vendas', action: () => this.onRefresh('api/protheus-crm-vendas') },
      ]
    },
    {
      label: 'Contas',
      shortLabel: 'Contas',
      action: () => this.onRefresh('protheus-crm-contas')
    },
    {
      label: 'Vendas',
      shortLabel: 'Vendas',
      action: () => this.onRefresh('api/protheus-crm-vendas')
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

  onRefresh(id: string): void {
    window.location.href = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api/${id}`;
  }

}
