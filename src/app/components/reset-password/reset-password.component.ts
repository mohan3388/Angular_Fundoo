import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
// import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpassword!: FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private user:UserServiceService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      cpassword: ['', [Validators.required, Validators.minLength(4)]]
    }
      );
      this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);  
      
  }
 

  get f(){return this.resetpassword.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.resetpassword.valid) {
      console.log("valid data"+this.resetpassword.value);
     
      let data={
        
       password:this.resetpassword.value.password
      
      }
      this.user.resetpassword(data).subscribe((response:any)=>{
       
       console.log(response);
      }
      )
   }else{
     console.log("Invalid", this.resetpassword.value);
     
   }
    }
  
    // display form values on success
   
  }

  




