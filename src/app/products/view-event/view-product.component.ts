import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../event';
import { ProductService } from '../event.service';
import { AddNameComponent } from '../add-name/add-name.component';
import { MdbModalRef,  MdbModalService } from 'mdb-angular-ui-kit/modal';




@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID=0
  productDetails!: Product;
  Count=0;
  Count1=0;
  nameId=0;
  Name!:any;
  promptName:any;
  modalRef: MdbModalRef<AddNameComponent> | null = null;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router,private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id'];
    })

    this.productService.viewProduct(this.productID).subscribe(viewData=>{
      this.productDetails=viewData;
    })
    this.productService.getName().subscribe(viewData=>{
      this.Name=viewData;
    })
  }
  interested(){
    this.Count++;
    this.activatedRoute.params.subscribe(data=>{
      this.nameId=data['id'];
      
    })

}

openModal() {
  this.modalRef = this.modalService.open(AddNameComponent, {
    data: { title: 'Share your reviews and give ratings' },
  });
  this.modalRef.onClose.subscribe((message: any) => {
    console.log(message);
  });
}
addName(){  
  this.router.navigate(['products/add-name']);
}
  
  



}
