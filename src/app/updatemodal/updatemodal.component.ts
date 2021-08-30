import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.scss']
})
export class UpdatemodalComponent implements OnInit {

  id: string = '';
  userId: string= '';
  body: string = '';
  userInfo = new FormGroup({
    id: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  });

  submitted = false;

  constructor(private userservice: UserserviceService) { }

  open: boolean = false;
  @Input() option: any = {
    open: false,
    title: "Update",
    content: {},
    returnData: {}
  }

  @Output() onClose = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.userservice.getUserUpdate().subscribe((data : any)=>{
      console.log('updatemodal',data)
      this.id= data.id;
      this.userId = data.userId;
      this.body = data.body;
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.userInfo.controls; }

  onCancel() {
    this.option.open = false;
    this.onClose.emit();
  }

  confirmClick() {
    this.option.open = false;
    this.onConfirm.emit(this.option.returnData);
  }
}
