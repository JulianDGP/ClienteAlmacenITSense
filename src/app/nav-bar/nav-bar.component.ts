import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  isLogged=true;
constructor(private tokenService: TokenService){

}
  ngOnInit() {  
    if(this.tokenService.getToken() ){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
