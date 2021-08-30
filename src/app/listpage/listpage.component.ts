import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss']
})
export class ListpageComponent implements OnInit {

  private userSubscription: any;
  userData: Array<any> = [];
  updateModal: any = {
    open:false,
    title: 'Update User',
    content: {},
    returnData: {}
  }
  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.userservice.getUserResponse().subscribe((userObject)=>{
      console.log('Stored user object',userObject);
      this.userSubscription = this.userservice.getAll().subscribe((data)=>{
        console.log("user data",data);
        this.userData = data;
      })
    })
  }


  editDetails(data : any){
    this.userservice.setUserUpdate(data);
    this.updateModal = Object.assign(this.updateModal, {
      open: true,
      content :{
        uservalue: data
      }
    })
  }

  onUpdateEventConfirm($event : any){
    console.log("user details edited",$event)
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
