import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { IndexComponent } from './body/index/index.component';
import { LoginComponent } from './authorization/login/login.component';
import { CartComponent } from './catalogue/cart/cart.component';

const routes: Routes = [
  { path : '' ,redirectTo:'index', pathMatch: 'full' },
  {path:"index" , component:IndexComponent},
  {path:"contact-us" , component:ContactUsComponent},
  {path : "login" , component : LoginComponent},
  {path : "cart" , component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
