import { Component } from '@angular/core';
import { ProductPopupService } from '../service/productPopup.service';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {
  constructor(public productPopupService: ProductPopupService) {}
}
