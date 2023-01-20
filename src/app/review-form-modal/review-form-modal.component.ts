import { UserService } from './../user.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review-form-modal',
  templateUrl: './review-form-modal.component.html',
  styleUrls: ['./review-form-modal.component.css'],
  
})
export class ReviewFormModalComponent implements OnInit {
  title: string | null = null;
  public currentRating :any;
  submitted : boolean = true;


  constructor(public modalRef: MdbModalRef<ReviewFormModalComponent>,
              private userService: UserService ) { }

  ngOnInit(): void {
    this.currentRating = 0
  }
  
  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
  save(formData: any){    
    console.log(formData.value);
    console.log(formData);
    console.log("rating "+ this.currentRating);
    let userData = {
      id: Math.floor(Math.random() * 10000),
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      date: formData.date,
      review: formData.review,
      rating: this.currentRating
    }
    this.userService.createUser(userData).subscribe();
    this.submitted=true;
    this.modalRef.close();
  }

  

}
