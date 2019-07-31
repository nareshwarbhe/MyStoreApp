import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { UserComponent } from './user/user.component';
import {HeaderComponent} from './header/header.component'

const routes: Routes = [
  {
    path:'About', component:AboutComponent
    
  },
  {
    path:'Contact', component:ContactComponent
    
  },
  {
    path:'Products', component:ProductComponent
    
  },
  {
    path:'Category', component:ProductCategoryComponent
    
  },
  {
    path:'User', component:UserComponent
    
  },
  {
    path:'Header', component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
