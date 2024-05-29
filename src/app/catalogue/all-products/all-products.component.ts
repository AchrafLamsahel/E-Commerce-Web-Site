import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreeCategory } from 'src/app/entities/threeCategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  threeCategory: ThreeCategory = {
    categoriesTrees: [],
    allProductsPage: {
      elements: [],
      currentPage: 0,
      totalPages: 0,
      totalElements: 0
    }
  };
  errorMessage: string = '';
  currentPage = 0;
  pageSize = 12;
  totalPages = 0;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.productService.getProductsPageIndex(this.currentPage, this.pageSize).subscribe({
      next: (items) => {
        this.threeCategory.categoriesTrees = items.categoriesTrees;
        this.threeCategory.allProductsPage = items.allProductsPage;
        this.currentPage = items.allProductsPage.currentPage;
        console.log(items);
      },
      error: (err) => {
        this.errorMessage = `Error: ${err.message}`;
        console.error('There was an error!', err);
      }
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadCategories();
  }

  generateArray(length: number): any[] {
    return Array.from({ length }, (_, i) => i);
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--; 
      this.loadCategories();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.threeCategory.allProductsPage.totalPages - 1) {
      this.currentPage++;
      this.loadCategories();
    }
  }

}
