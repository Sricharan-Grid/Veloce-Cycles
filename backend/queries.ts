export const queries = {
  // Get All Products
  getProducts:
    "SELECT id , productName , productQuantity ,productActualCost, productDiscountPrice , productImage FROM SricharanSchema.products;",
  // Get All Products
  getSingleProduct:
    "SELECT productName , productQuantity ,productActualCost, productDiscountPrice  FROM SricharanSchema.products WHERE id = ?;",
  // Get Single Product Specs
  getProductSpecs:
    "SELECT p.productName , p.productQuantity,p.productActualCost,p.productDiscountPrice, s.tyres, s.gears, s.brakes, s.weight FROM SricharanSchema.products p LEFT JOIN SricharanSchema.productSpecifications s ON p.id = s.productId",
  // Get Single Product Images
  getProductImages:
    "SELECT productId , imageLink  FROM SricharanSchema.productsImages WHERE productId = ?;",
  // Get Single Product Specs & Images
  getProductDetails:
    "SELECT p.id, p.productName , p.productQuantity,p.productActualCost,p.productDiscountPrice, s.tyres, s.gears, s.brakes, s.weight ,i.imageLink FROM SricharanSchema.products p LEFT JOIN SricharanSchema.productSpecifications s ON p.id = s.productId LEFT JOIN SricharanSchema.productsImages i ON p.id = i.productId WHERE s.productId = ? ",
  // Get Testimonial Details
  getTestimonialDetails:
    "SELECT id, customerName, customerLocation, productId, reviewText, rating, videoUrl, thumbnailUrl FROM SricharanSchema.testimonials;",
  //Add a Product to Wishlist
  addToWishlist: `INSERT IGNORE INTO SricharanSchema.wishlist (productId) VALUES (?);`,
  //Get the Products in Wishlist
  getWishlist: `Select w.id , p.id as productId  , p.productName , p.productActualCost , p.productDiscountPrice , p.productImage from SricharanSchema.wishlist w LEFT JOIN  SricharanSchema.products p on w.productId = p.id`,
  //Remove the Products from Wishlist
  removeWishlist: "DELETE FROM wishlist WHERE id = ?",
};
