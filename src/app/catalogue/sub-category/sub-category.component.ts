import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryPageDTO } from 'src/app/entities/CategoryPageDTO';
import { Category } from 'src/app/entities/category';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
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
    const rootSlug: string = this.route.snapshot.paramMap.get('subSlug') || '';
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
