import { Request, Response } from "express";
import { productsModel } from "../models/productsModel";
import { debugLog } from "../config/config";
const { decryptPayload } = require("../helper/helper");

// Getting All Products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController: Entered Inside getAllProducts() \n req : ${req}`,
      );
    }

    const products = await productsModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Getting all products Details
export const getAllProductsDetails = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController : entered Inside getAllProductsDetails() \n req : ${req}`,
      );
    }
    const productId: number = Number(req?.params.productId);
    console.log(productId);

    const products = await productsModel.getAllProductDetails(productId);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Products", error });
  }
};

// Getting all Testimonials
export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController : entered Inside getAllTestimonials() \n req : ${req}`,
      );
    }

    const testimonials = await productsModel.getAllTestimonials();

    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Products", error });
  }
};

//Add to Wishlist

export const addWishlist = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController : entered Inside addWishlist() \n req : ${req}`,
      );
    }

    if (req) {
      //productId
      const productId = decryptPayload(req?.body?.productId);
      const wishlistAdded = await productsModel.addWishlist(Number(productId));
      res.status(201).json(wishlistAdded);
    } else {
      res.status(400).json({
        message: "Something Went Wrong while inserting into wishlist",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in adding Products to Wishlist", error });
  }
};

// Get All the WishList

export const getWishlist = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController: Entered Inside getWishlist() \n req : ${req}`,
      );
    }

    const products = await productsModel.getWishlist();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the Wishlist", error });
  }
};

//Remove from Wishlist

export const removeWishlist = async (req: Request, res: Response) => {
  try {
    if (debugLog) {
      console.log(
        `productController : entered Inside removeWishlist() \n req : ${req}`,
      );
    }

    const productId: number = Number(req?.params?.productId);
    console.log("productID", productId);
    

    if (productId) {
      const wishlistRemoved = await productsModel.removeWishlist(productId);
      if (wishlistRemoved) res.status(204).json(wishlistRemoved);
    } else {
      res.status(400).json({
        message: "Something Went Wrong while Removing a product from wishlist",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in Removing Products from Wishlist", error });
  }
};
