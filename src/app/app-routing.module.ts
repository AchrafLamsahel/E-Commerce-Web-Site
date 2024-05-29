import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './body/contact-us/contact-us.component';
import { IndexComponent } from './body/index/index.component';

const routes: Routes = [
  { path : '' ,redirectTo:'index', pathMatch: 'full' },
  {path:"index" , component:IndexComponent},
  {path:"contact-us" , component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
