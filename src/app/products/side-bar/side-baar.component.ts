import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/event.service';
import { Category } from './category';

@Component({
  selector: 'app-side-baar',
  templateUrl: './side-baar.component.html',
  styleUrls: ['./side-baar.component.css']
})
export class SideBaarComponent implements OnInit {
  categoryList: Category | any; 
  loginForm: any;
  showMe:boolean | undefined=true
  constructor(private productsService:ProductService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(data=>{
      this.categoryList=data;
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/SignupUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email==="saloni27301@gmail.com" && a.password==="1111" ;
      });
    //   if(user){
    //     alert("Login Success");
    //     this.loginForm.reset();
    //     this.router.navigate(['//products'])
    //   }
    //   else{
    //     alert("user not found")
    //   }
    // },err=>{
    //   alert("Something went wrong")
    })
  }
}
