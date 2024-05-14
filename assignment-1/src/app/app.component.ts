import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShareService } from './share.service';
import { Product } from './interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'assignment-1';
  mockData:Product[] = []
  constructor(private shareService: ShareService, private router: Router) { }

  ngOnInit(): void {
    this.mockData = this.shareService.getProducts();
  }

  goToDetail(name: string): void {
    this.router.navigate(['/product', name.toLowerCase().replace(/\s/g, '')]); // Navigate to the product detail page with the product ID
  }
}
