import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';
import { CommonModule } from '@angular/common';
import { Product } from '../interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productType: string | null = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private shareService: ShareService) { }

  ngOnInit(): void {
    this.productType = this.route.snapshot.paramMap.get('productType');
    if (this.productType) {
      this.product = this.shareService.getProductByName(this.productType);
    } else {
      console.error('Product type is undefined');
    }
  }
}

