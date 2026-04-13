import { debugLog } from "../config/config";
import db from "../config/db";
import { queries } from "../queries";

export const productsModel = {
  // Get All Products
  async getAllProducts() {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside getAllProducts()`);
      }
      const rows = await db.query(queries?.getProducts);

      if (debugLog) {
        console.log(
          `productModel: getAllProducts() has been Executed \n rowss : ${rows[0]}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },

  //Get all Details of the products

  async getAllProductDetails(productId: number) {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside getAllProductDetails()`);
      }

      console.log("productId", productId);
      const rows = await db.query(queries?.getProductDetails, productId);

      if (debugLog) {
        console.log(
          `productModel: getAllProductDetails() has been Executed \n rows : ${rows}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },

  //Get all Details of the products

  async getAllTestimonials() {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside getAllTestimonials()`);
      }

      const rows = await db.query(queries?.getTestimonialDetails);

      if (debugLog) {
        console.log(
          `productModel: getAllTestimonials() has been Executed \n rows : ${rows}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },

  //Add products to Wishlist

  async addWishlist(productId: number) {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside addWishlist()`);
      }

      const rows = await db.query(queries?.addToWishlist, productId);

      if (debugLog) {
        console.log(
          `productModel: addWishlist() has been Executed \n rows : ${rows}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },

  //Get all the products of Wishlist

  async getWishlist() {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside getWishlist()`);
      }

      const rows = await db.query(queries?.getWishlist);

      if (debugLog) {
        console.log(
          `productModel: getWishlist() has been Executed \n rows : ${rows}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },

  //Remove products from Wishlist

  async removeWishlist(productId: number) {
    try {
      if (debugLog) {
        console.log(`productModel: entered Inside removeWishlist()`);
      }

      const rows = await db.query(queries?.removeWishlist, productId);

      if (debugLog) {
        console.log(
          `productModel: removeWishlist() has been Executed \n rows : ${rows}`,
        );
      }

      return rows;
    } catch (err) {
      throw err;
    }
  },
};

// async create(emp: Employee) {
//         const { name, age, location } = emp;
//         const [result] = await db.query(
//             'INSERT INTO employee (name, age, location) VALUES (?, ?, ?)',
//             [name, age, location]
//         );
//         return result;
//     }
