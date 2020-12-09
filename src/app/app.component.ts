import { Component, OnInit } from '@angular/core';
import { PoNavbarItem, PoNavbarIconAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: Array<PoNavbarItem> = [
    { label: 'APIs da TI', link: '/api' },
    { label: 'Ferramentas' },
    { label: 'Equipes' },
    { label: 'Editor Swagger', link: '/editor' },
    { label: 'Upload', link: '/upload' },
  ];

  icons: Array<PoNavbarIconAction> = [
    { label: 'GitHub', icon: 'po-icon-social-github' },
    { label: 'Twitter', icon: 'po-icon-social-twitter' },
    { label: 'Instagram', icon: 'po-icon-social-instagram' },
  ];

  ngOnInit(): void {}
}
