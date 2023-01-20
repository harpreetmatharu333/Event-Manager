import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddNameComponent } from './add-name/add-name.component';
import { AddProductComponent } from './add-event/add-product.component';
import { DeleteProductComponent } from './delete-event/delete-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-events/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-event-by-category/view-product-by-category.component';


import { ViewProductComponent } from './view-event/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'category/:id',component:ViewProductByCategoryComponent},
  {path:'delete-product/:id',component:DeleteProductComponent},
  {path:'view-product/:id',component:ViewProductComponent},
  // {path:'list-product',component:ViewAllProductComponent},
 {path:'add-name',component:AddNameComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class ProductsRoutingModule { }
