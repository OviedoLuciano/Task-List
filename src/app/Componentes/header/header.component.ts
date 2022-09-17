import { Component, OnInit } from '@angular/core';
import {UiService} from '../../Servicios/ui.service';
import {Subscription} from 'rxjs'
import { TokenService } from 'src/app/Servicios/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

title: string = "Mi Lista de Tareas";
showAddTask:boolean=false;
subscription?: Subscription;
roles:string[];
isAdmin = false;
  constructor(private uiService:UiService, private tokenService: TokenService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe(
      value=> this.showAddTask = value)
  }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) =>{
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  hasRoute(route: string){
return this.router.url === route;
  }

 toggleAddTask(){
  this.uiService.toggleAddTask();
 } 
}
