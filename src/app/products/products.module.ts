import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-event/add-product.component';
import { DeleteProductComponent } from './delete-event/delete-product.component';
import { ViewAllProductComponent } from './view-all-events/view-all-product.component';
import { ViewProductComponent } from './view-event/view-product.component';
import { ViewProductByCategoryComponent } from './view-event-by-category/view-product-by-category.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog'



import { SideBaarComponent } from './side-bar/side-baar.component';
import { AddNameComponent } from './add-name/add-name.component';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewProductComponent,
    ViewProductByCategoryComponent,
    SideBaarComponent,
    AddNameComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatDialogModule
  ],exports:[SideBaarComponent]
})
export class ProductsModule { }
