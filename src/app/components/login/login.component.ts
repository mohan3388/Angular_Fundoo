import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user:UserServiceService,private route:Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
      });
  }
  get f(){return this.login.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.login.valid) {
      console.log("valid data"+this.login.value);
      
      let data={
       
       emailId:this.login.value.email,
       password:this.login.value.password
      
      }
      this.user.login(data).subscribe((response:any)=>{
       
       console.log("response",response.data);
       localStorage.setItem('token',response.data);
       this.route.navigateByUrl('/dashboard/notes');
      }
      )
    }else{
      console.log("Invalid", this.login.value);
      
    }
  
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value));
  }
  
  // onReset() {
  //   this.submitted = false;
  //   this.login.reset();
  // }
}
