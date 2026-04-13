import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(
    private http: HttpClient,
    private helperService: HelperService,
  ) {}

  //   Getting All the Products
  getAllProducts() {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside getAllProducts() Function`);
      }

      return this?.http?.get<any>('http://localhost:3000/api/products/getAllProducts');
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllProducts()');
      throw err;
    }
  }

  //   Getting All the Products Details
  getAllProductDetails(productId: number) {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside getAllProductDetails() Function`);
      }
      return this?.http?.get<any>(
        `http://localhost:3000/api/products/getAllProductDetails/${productId}`,
      );
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllProductDetails()');
      throw err;
    }
  }

  //   Getting All the Products Details
  getAllTestimonials() {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside getAllTestimonials() Function`);
      }
      return this?.http?.get<any>(`http://localhost:3000/api/products/getAllTestimonials`);
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }

  //   Getting All the Products in Wishlist
  getWishlist() {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside getWishlist() Function`);
      }
      return this?.http?.get<any>(`http://localhost:3000/api/products/getWishlist`);
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }

  //   Remove the  Products in Wishlist
  removeWishlist(productId: number) {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside removeWishlist() Function`);
      }
      return this?.http?.delete<any>(
        `http://localhost:3000/api/products/removeWishlist/${productId}`,
      );
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }

  //   Getting All the Products in Wishlist
  addWishlist(payload: any) {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside addWishlist() Function`);
      }
      return this?.http?.post<any>(`http://localhost:3000/api/products/addWishlist`, payload);
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }
}
