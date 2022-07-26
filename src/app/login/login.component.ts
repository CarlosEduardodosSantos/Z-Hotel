import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ZHotelService } from "../Z-HotelService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ZHotelService, private router: Router, private toast: ToastrService) {}

  string: any;
  usuario: any;

  ngOnInit(): void {}

  async VerificaLogin(nome: any, senha: any) {
    console.log()
    await this.api.obterLogin(nome, senha).then((data) => {
      this.usuario = data;

      console.log(this.usuario)
      console.log(data)
      if (this.usuario != null) {
        localStorage.setItem("nome", this.usuario.nome)
        localStorage.setItem("numero", this.usuario.nro)
        localStorage.setItem("IsAdmin", this.usuario.isAdmin)
        this.router.navigate(["/home"])
      }
      else {
        this.toast.error("Usuário ou Senha inválidos","O Login Falhou :(");
      }
    })
  }

  PressEnter(d: any, nome: any, senha: any)
  {
    if(d.keyCode == 13)
    {
      this.VerificaLogin(nome, senha)
    }
  }
}
