import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from "../../shared/auth.service";
import { SnackbarService } from "../../shared/snackbar.service";
import { TOKEN_STORAGE, FIRSTNAME_STORAGE, LASTNAME_STORAGE } from '../../shared/constants'

@Component({
  providers:[
    AuthService,
    SnackbarService
  ],
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email : string = '';
  password : string = '';

  constructor(private authService:AuthService, private router: Router,private snackbarService: SnackbarService) { }

  onSubmit() {
    this.router.navigate(['/homepage']);
    // const onSuccess = (res: any)=>{
    //   localStorage.setItem(FIRSTNAME_STORAGE, res.data.firstname);
    //   localStorage.setItem(LASTNAME_STORAGE, res.data.lastname);
    //   localStorage.setItem(TOKEN_STORAGE, res.data.token);
    //   this.router.navigate(['/homepage']);
    // };
    // this.authService.signin(this.email, this.password)
    //   .subscribe(
    //     onSuccess,
    //     err=> this.snackbarService.openSnackBar('Votre authentification est incorrect, veiller recommencer', 'Fermer', 3000)
    //   )
  }
}
