import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Servicios/task.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
isLogged = false;

  constructor(private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
}

  onClick(){
    this.router.navigate(['/login'])
  }
}
