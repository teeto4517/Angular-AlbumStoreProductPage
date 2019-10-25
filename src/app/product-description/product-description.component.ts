import { Component, OnInit } from '@angular/core';
import '../product.service'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  
  albumInfo;
  _productService;

  constructor(_productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo=response)
  }

}
