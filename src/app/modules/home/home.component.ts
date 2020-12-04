import { Component, OnInit } from '@angular/core';
import { PoNavbarItem, PoNavbarIconAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<PoNavbarItem> = [
    {label: 'APIs da TI', link: '/api'},
    {label: 'Ferramentas'},
    {label: 'Equipes'},
    {label: 'Serviço B'},
    {label: 'Sobre nós'},
  ];

  icons: Array<PoNavbarIconAction> = [
    {label: 'GitHub', icon: 'po-icon-social-github'},
    {label: 'Twitter', icon: 'po-icon-social-twitter'},
    {label: 'Instagram', icon: 'po-icon-social-instagram'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
