import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  addNewName(form:any){
    console.log(form.value);

    let newName = {
        productID: 21,
        categoryID: form.value.product_category,
        Name: form.value.product_name,
        email: form.value.product_email,
        withFamily: form.value.product_available_family,
        contribution: form.value.product_contri,
        goc_Name:form.value.product_goc,
    };

    console.log(newName);

    this.productService.setName(newName).subscribe(data => {
      console.log(data);
    });

}
}
