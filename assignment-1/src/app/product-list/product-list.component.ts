import { Component } from '@angular/core';
import { Product } from '../interface';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private shareService: ShareService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.shareService.getProducts();
  }

  goToDetail(name: string): void {
    this.router.navigate(['/product', name.toLowerCase().replace(/\s+/g, '')]);
  }
}
