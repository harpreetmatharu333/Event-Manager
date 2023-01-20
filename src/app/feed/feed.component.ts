import { UserService } from './../user.service';
import { MdbModalRef,  MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Component, Input, OnInit } from '@angular/core';
import { ReviewFormModalComponent } from '../review-form-modal/review-form-modal.component';
import { User } from '../user';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  modalRef: MdbModalRef<ReviewFormModalComponent> | null = null;
  userlist: User | any;
  rating = 5;
  @Input() submitted: boolean | undefined ;
  
  constructor(private modalService: MdbModalService,
              private userService: UserService) { }
 
  openModal() {
    this.modalRef = this.modalService.open(ReviewFormModalComponent, {
      data: { title: 'Share your reviews and give ratings' },
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data =>{
      this.userlist = data;
      console.log(data); 
    });
  }

}
