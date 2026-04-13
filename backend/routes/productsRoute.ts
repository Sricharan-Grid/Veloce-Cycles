import { Router } from "express";
import {
  addWishlist,
  getAllProducts,
  getAllProductsDetails,
  getAllTestimonials,
  getWishlist,
  removeWishlist,
} from "../controller/productsController";
import { debugLog } from "../config/config";

const router = Router();

if (debugLog) {
  console.log("Entered the Router File!");
}

router.get("/getAllProducts", getAllProducts); // GET http://localhost:3000/api/products/getAllProducts

router.get("/getAllProductDetails/:productId", getAllProductsDetails); // GET http://localhost:3000/api/products/getAllProductDetails:productId

router.get("/getAllTestimonials", getAllTestimonials); // GET http://localhost:3000/api/products/getAllTestimonials

router.post("/addWishlist", addWishlist); // POST http://localhost:3000/api/products/addWishlist
router.get("/getWishlist", getWishlist); // GET http://localhost:3000/api/products/getWishlist
router.delete("/removeWishlist/:productId", removeWishlist); // DELETE http://localhost:3000/api/products/removeWishlist:productId

export default router;
