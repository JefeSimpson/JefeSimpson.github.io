import { Component, Input, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent{
  products = products;
  //@ts-ignore
  @Input categoryId: number;

  removeItem(product: any) {
    product.completed = true;
  }

  likeIterator(product: any) {
    product.likes += 1;
  }

  disLikeIterator(product: any) {
    if (product.likes > 0)
      product.likes -= 1;

  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
