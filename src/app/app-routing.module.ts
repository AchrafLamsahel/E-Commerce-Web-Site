import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { IndexComponent } from './body/index/index.component';
import { LoginComponent } from './authorization/login/login.component';
import { CartComponent } from './catalogue/cart/cart.component';
import { WhyUsComponent } from './body/why-us/why-us.component';
import { AllProductsComponent } from './catalogue/all-products/all-products.component';
import { RootCategoryComponent } from './catalogue/root-category/root-category.component';
import { SubCategoryComponent } from './catalogue/sub-category/sub-category.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';

const routes: Routes = [
  { path : '' ,redirectTo:'index', pathMatch: 'full' },
  {path:"index" , component:IndexComponent},
  {path:"contact-us" , component:ContactUsComponent},
  {path : "login" , component : LoginComponent},
  {path : "cart" , component : CartComponent},
  {path : "about-us" , component : WhyUsComponent},
  {path : "allProducts" , component : AllProductsComponent},
  {path: ':rootSlug', component: RootCategoryComponent},
  {path: ':rootSlug/:subSlug',component: SubCategoryComponent},
  {path: ':rootSlug/:subSlug/:productSlug',component: ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
