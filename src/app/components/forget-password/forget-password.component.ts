import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.forgetpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      });
  }
  get f(){return this.forgetpassword.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.forgetpassword.valid) {
      console.log("valid data"+this.forgetpassword.value);
      
      let data={
       
       emailId:this.forgetpassword.value.email
      
      }
      this.user.forgetpassword(data).subscribe((response:any)=>{
       
       console.log(response);
      }
      )
    }else{
      console.log("Invalid", this.forgetpassword.value);
      
    }
  
    }
  
    // display form values on success
   
  }
