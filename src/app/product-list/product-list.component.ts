import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;

  share(): void{
    window.alert("The product has been shared");
  }

  onNotify(): void{
    window.alert("You will be notified when the  product on goes");
  }
}
