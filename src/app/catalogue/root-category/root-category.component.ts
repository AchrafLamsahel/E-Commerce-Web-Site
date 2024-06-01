import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryPageDTO } from 'src/app/entities/CategoryPageDTO';
import { CategoryService } from 'src/app/services/category.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-root-category',
  templateUrl: './root-category.component.html',
  styleUrls: ['./root-category.component.css']
})
export class RootCategoryComponent implements OnInit {
  rootCategory: any;
  categoryPageDto: CategoryPageDTO = {
    rootCategory : new Category(),
    subCategories: [],
    products: [],
    breadcrumbDTO: []
  };
  
  errorMessage: string = '';
  currentPage = 0;
  pageSize = 12;
  totalPages = 0;
  i=0;

  constructor(private route: ActivatedRoute, private cartService: CartService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    const rootSlug: string = this.route.snapshot.paramMap.get('rootSlug') || '';
    if (rootSlug) {
      this.categoryService.getCategoryBySlug(rootSlug).subscribe(data => {
        console.log(data)
        this.categoryPageDto = data;
        this.categoryPageDto.products = data.products;
      }, error => {
        this.errorMessage = error;
      });
    } else {
      console.log("Error: rootSlug is empty");
    }
  }

  addToCart(product: any) {
    this.cartService.addtoCart(product);
  }
}
