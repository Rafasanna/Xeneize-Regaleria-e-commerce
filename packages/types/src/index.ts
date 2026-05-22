export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
  active: boolean;
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "preparing"
  | "shipped"
  | "completed"
  | "cancelled";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  discountTotal: number;
  total: number;
  createdAt: string;
  customerEmail?: string;
}

export type CouponDiscountType = "percentage" | "fixed";

export interface Coupon {
  id: string;
  code: string;
  discountType: CouponDiscountType;
  discountValue: number;
  active: boolean;
  startsAt?: string;
  endsAt?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "owner" | "staff";
  active: boolean;
}
