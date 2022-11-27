import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from 'src/app/services/AuthguardService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
constructor(private authservice:AuthguardServiceService, private router:Router){}
  canActivate():boolean 
  {
   if (!this.authservice.gettoken()) {  
     this.router.navigateByUrl("/login");  
 }  
 return this.authservice.gettoken();  
}
//   canActivate(
    
//     // route: ActivatedRouteSnapshot,
//     // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // return true;
//   }
  
}
