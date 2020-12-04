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
        { label: 'Contas', link: 'doc/protheus-crm-contas' },
        { label: 'Vendas', link: 'doc/protheus-crm-vendas' },
      ]
    },
    {
      label: 'Contas',
      shortLabel: 'Contas',
      link: 'doc/protheus-crm-contas'
    },
    {
      label: 'Vendas',
      shortLabel: 'Vendas',
      link: 'doc/protheus-crm-vendas'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
