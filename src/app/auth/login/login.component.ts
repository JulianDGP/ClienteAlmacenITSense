import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  isLogged = false;
  isLoginfail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] =[];
  errMsj!: string;
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}
  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginfail =false;
      this.roles =this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data =>{
        this.isLogged = true;
        this.tokenService.setToken(data.token!);
        this.tokenService.setUserName(data.nombreUsuario!);
        this.tokenService.setAuthorities(data.authorities!);
        this.roles = data.authorities!;
        window.location.reload();
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 5000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
         console.log(err.error.message);
      }
    );
  }
}
