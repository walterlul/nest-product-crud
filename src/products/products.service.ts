import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { v4 } from 'uuid';
import { UpdateProductDto } from './dto/product.dto';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '1',
      name: 'producto prueba',
      detail: 'computadora muy grande',
      price: 500,
      stock: 10,
    },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }
  createProduct(name: string, detail: string, price: number, stock: number) {
    const newProduct = {
      id: v4(),
      name,
      detail,
      price,
      stock,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  updateProduct(id: string, updatedFields: UpdateProductDto): Product {
    const product = this.getProductById(id);
    const newProduct = Object.assign(product, updatedFields);
    this.products = this.products.map((product) =>
      product.id === id ? newProduct : product,
    );
    return newProduct;
  }
  deleteProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
