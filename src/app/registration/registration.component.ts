import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  register = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    website: new FormControl('')
  });
  title = 'dbssampleapp';
    loading = false;
    submitted = false;
    error: any;
    alert: boolean = false;

  constructor(private userservice: UserserviceService, private router : Router) { }

  ngOnInit(): void {

  }

  closeAlert(){
    this.alert = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.register.controls; }

  onSubmit() {
    console.warn(this.register.value);
    this.loading = true;
      this.submitted = true;
      // stop here if form is invalid
      if (this.register.invalid) {
          return;
      }
      this.userservice.createUser(this.register.value).subscribe((data)=>{
        console.log("create user response",data);
        //this.alert = true;
        this.userservice.setUserResponse(data);
        this.router.navigate(['/listpage'])
      },(error)=>{
        alert("Warning!"+error);
        this.loading = false;
      });
      
  }


}
