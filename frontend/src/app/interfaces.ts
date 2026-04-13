export interface ProductsInterface {
  id: number;
  productName: string;
  productQuantity: number;
  productActualCost: number;
  productDiscountPrice: number;
  productImage: string;
}

export interface ProductDetailsInterface {
  id: number;
  productName: string;
  productQuantity: number;
  productActualCost: string | number;
  productDiscountPrice: string | number;
  specs: {
    tyres: string | null;
    gears: string | null;
    brakes: string | null;
    weight: string | null;
  };
  images: string[] | [];
}

export interface TestimonialInterface {
  id: number;
  customerName: string;
  customerLocation: string;
  productId: number;
  productName: string;
  reviewText: string;
  rating: number;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export interface WishlistItemInterface {
  id: number;
  productId: number;
  productName: string;
  productActualCost: number;
  productDiscountPrice: number;
  productImage: string;
}
