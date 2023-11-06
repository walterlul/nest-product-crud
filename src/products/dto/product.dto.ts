export class ProductDto {
  name: string;
  detail: string;
  price: number;
  stock: number;
}

export class UpdateProductDto {
  name?: string;
  detail?: string;
  price?: number;
  stock?: number;
}
