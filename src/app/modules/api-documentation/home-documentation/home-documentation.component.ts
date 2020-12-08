import { Component, OnInit } from '@angular/core';
import {
  faCubes,
  faShieldAlt,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-documentation',
  templateUrl: './home-documentation.component.html',
  styleUrls: ['./home-documentation.component.css'],
})
export class HomeDocumentationComponent implements OnInit {
  faCubes = faCubes;
  faShieldAlt = faShieldAlt;
  faFileContract = faFileContract;

  constructor() {}

  ngOnInit(): void {}
}
