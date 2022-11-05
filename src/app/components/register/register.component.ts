import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

// import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user:UserServiceService) { }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required]
      
  });
  }
get f(){return this.register.controls;}
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.register.valid) {
     console.log("valid data"+this.register.value);
     
     let data={
      firstName:this.register.value.firstname,
      lastName:this.register.value.lastname,
      emailId:this.register.value.username,
      password:this.register.value.password
     
     }
     this.user.register(data).subscribe((response:any)=>{
      
      console.log(response);
     }
     )
  }else{
    console.log("Invalid", this.register.value);
    
  }

  // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value, null, 4));
}

// onReset() {
//   this.submitted = false;
//   this.register.reset();
// }
}
