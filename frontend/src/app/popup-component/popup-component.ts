import { Component, computed, Input, linkedSignal, signal } from '@angular/core';
import { elementAt } from 'rxjs';
import { ProductDetailsInterface } from '../interfaces';
import { DataService } from '../service/data.service';
import { HelperService } from '../service/helper.service';
import { ProductPopupService } from '../service/productPopup.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-popup-component',
  imports: [],
  templateUrl: './popup-component.html',
  styleUrl: './popup-component.scss',
})
export class PopupComponent {
  // products = signal<ProductsInterface[]>([]);
  productsDetails = signal<ProductDetailsInterface[]>([]);

  currProductIndex = signal<number>(0);

  @Input({ required: false }) imagePath?: string;

  constructor(
    private dataService: DataService,
    private helperService: HelperService,
    public productPopupService: ProductPopupService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.loadAllBikeDetails(this.productPopupService.productId());
  }

  // Load All Bikes

  // loadAllBikes() {
  //   this.dataService.getAllProducts()?.subscribe({
  //     next: (res) => {
  //       if (res && res.length) this?.products?.set(res[0]);
  //     },
  //     error: (err) => this?.helperService?.errorHandler(err, 'loadAllBikes()'),
  //   });
  // }

  // Load Bike Details
  loadAllBikeDetails(productId: number) {
    this.dataService.getAllProductDetails(productId)?.subscribe({
      next: (res) => {
        const groupedData = res[0].reduce((acc: any, current: any) => {
          // 1. Check if we already added this product to our "accumulator"
          if (!acc[current.id]) {
            acc[current.id] = {
              id: current.id,
              productName: current.productName,
              productQuantity: current.productQuantity,
              productActualCost: current.productActualCost,
              productDiscountPrice: current.productDiscountPrice,
              // Create a dedicated Specs object
              specs: {
                tyres: current.tyres,
                gears: current.gears,
                brakes: current.brakes,
                weight: current.weight,
              },
              // Create an array to hold all image links
              images: [],
            };
          }

          // 2. Add the current row's image to the images array (if it exists)
          if (current.imageLink) {
            acc[current.id].images.push(current.imageLink);
          }

          return acc;
        }, {});

        const finalArray: ProductDetailsInterface[] = Object.values(groupedData);
        this.productsDetails.set(finalArray);

        // console.log(this.productsDetails(), 'producrtDetals');
      },
      error: (err) => this?.helperService?.errorHandler(err, 'loadAllBikes()'),
    });
  }

  //nextBtn Action

  nextProduct() {
    if (this.currProductIndex() == 2) {
      this.currProductIndex.set(0);
    } else {
      let cnt = this.currProductIndex();
      cnt++;
      this.currProductIndex.set(cnt);
    }
    console.log('next Cnt', this.currProductIndex());
  }

  //prevBtn Action

  prevProduct() {
    if (this.currProductIndex() > 0) {
      let cnt = this.currProductIndex();
      cnt--;
      this.currProductIndex.set(cnt);
    } else {
      this.currProductIndex.set(0);
    }

    console.log('prev Cnt', this.currProductIndex());
  }

  productToRender = computed(() => {
    let productIndex = this.currProductIndex();
    return this.productsDetails()[productIndex];
  });

  highlightedImage = linkedSignal({
    source: () => ({
      index: this.currProductIndex(),
      products: this.productsDetails(),
    }),
    computation: (source) => {
      if (source.products.length > 0) {
        return source.products[source.index].images[0];
      }
      return '';
    },
  });

  setHighlightedImage(image: string) {
    this.highlightedImage.set(image);
  }

  buyNow(productName: string) {
    this.toastService.triggerToast(
      'success',
      'Hurray! Your Order is Confirmed',
      `Get Ready to Ride Your ${productName}...`,
    );
  }
}
