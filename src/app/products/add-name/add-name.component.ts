import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ProductService } from '../event.service';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent implements OnInit {

  constructor(private productService:ProductService, public modalRef: MdbModalRef<AddNameComponent>) { }
  submitted : boolean = true;
  ngOnInit(): void {
  }

  addNewName(form:any){
    console.log(form.value);

    let newName = {
        id: 21,
        Name: form.value.Name,
        email: form.value.product_email,
        withFamily: form.value.product_available_family,
        contribution: form.value.product_contri,
        goc_Name:form.value.product_goc,
    };

    console.log(newName);

    this.productService.setName(newName).subscribe(data => {
      console.log(data);
      this.submitted=true;
      this.modalRef.close();
    });

}
// save(formData: any){    
//   let userData = {
//     productID: 21,
//         categoryID: form.value.product_category,
//         Name: form.value.product_name,
//         email: form.value.product_email,
//         withFamily: form.value.product_available_family,
//         contribution: form.value.product_contri,
//         goc_Name:form.value.product_goc,
//   }
//   this.userService.createUser(userData).subscribe();
//   this.submitted=true;
//   this.modalRef.close();
// }
}
