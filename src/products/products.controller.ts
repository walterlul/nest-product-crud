import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  createProduct(@Body() newProduct: ProductDto) {
    return this.productsService.createProduct(
      newProduct.name,
      newProduct.detail,
      newProduct.price,
      newProduct.stock,
    );
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updatedFields: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(id, updatedFields);
  }
}
