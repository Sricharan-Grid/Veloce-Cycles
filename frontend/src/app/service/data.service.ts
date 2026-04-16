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

      return this?.http?.get<any>(`${this.helperService?.baseURL}/api/products/getAllProducts`);
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
        `${this.helperService?.baseURL}/api/products/getAllProductDetails/${productId}`,
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
      return this?.http?.get<any>(`${this.helperService?.baseURL}/api/products/getAllTestimonials`);
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
      let res = this?.http?.get<any>(`${this.helperService?.baseURL}/api/products/getWishlist`);
      return res;
    } catch (err) {
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
        `${this.helperService?.baseURL}/api/products/removeWishlist/${productId}`,
      );
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }

  //   Getting All the Products in Wishlist
  addWishlist(productId: number) {
    try {
      if (this.helperService?.debugLog) {
        console.log(`Entered inside addWishlist() Function productId : ${productId}`);
      }
      const payload = { 'productId': productId };
      return this.http.post<any>(`${this.helperService?.baseURL}/api/products/addWishlist`, payload);
    } catch (err) {
      // this?.helperService?.errorHandler(err, 'getAllTestimonials()');
      throw err;
    }
  }
}
