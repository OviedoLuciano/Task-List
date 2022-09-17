import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Modelos/login-usuario';
import { NuevoUsuario } from 'src/app/Modelos/nuevo-usuario';
import { AuthService } from 'src/app/Servicios/auth.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;
  constructor(private tokenService: TokenService,
    private authService: AuthService, 
    private router: Router) { }

    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;

      }
    }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre,
      this.email,this.password, this.nombreUsuario);
     this.authService.nuevo(this.nuevoUsuario).subscribe(
data => {
  this.isRegister = true;
 this.isRegisterFail = false;
  this.router.navigate(['/login']);
},err => {
  this.isRegister = false;
  this.isRegisterFail = true;
  this.errMsj = err.error.mensaje;
  console.log(this.errMsj);
}
    )
  }

}
