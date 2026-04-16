import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ViewportScroller } from '@angular/common';
import { HelperService } from '../service/helper.service';
import { ProductPopupService } from '../service/productPopup.service';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  isHamburgerOn: boolean = false;

  constructor(
    private helperService: HelperService,
    public productPopupService: ProductPopupService,
    public scroller: ViewportScroller,
  ) {}

  hamburgerOnClick() {
    try {
      this.isHamburgerOn = !this.isHamburgerOn;
    } catch (err) {
      this.helperService.errorHandler(err, 'hamburgerOnClick()');
    }
  }

  popupStatus = computed(() => {
    return this.productPopupService?.isPopupClose();
  });

  scrollToSection(sectionId: string) {
    // This tells Angular: "Find the element with this ID and go there"
    this.scroller.scrollToAnchor(sectionId);
  }
}
