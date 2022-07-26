import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-proprietarios-update',
  templateUrl: './proprietarios-update.component.html',
  styleUrls: ['./proprietarios-update.component.css']
})
export class ProprietariosUpdateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router, private route: ActivatedRoute) { }

  Proprietario: any = "";
  hide = true;
  IsDisabled: boolean = false

  async ngOnInit() {
    await this.api.ObterProprietarioPorId(this.route.snapshot.paramMap.get("nro")).then((data) => {
      this.Proprietario = data
      console.log(data)
    })
  }

  timeLeft: number = 2;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.router.navigate(["/home/Proprietários"]);
      }
    },1000)
  }

  async onSubmit(data: any) {
    data.nro = this.route.snapshot.paramMap.get("nro");
    if (this.Proprietario.nome == "" || this.Proprietario.login == "" || this.Proprietario.senha == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(")
    }
    else {
      if (this.Proprietario.fone.length < 14)
      {
        this.toast.error("Telefone inválido", "O Cadastro Falhou :(")
      }
      else {
        await this.api.AlterarProprietario(data)
        console.log(data)

        this.IsDisabled = true
        this.toast.success("Proprietário Cadastrado :)");
        this.startTimer();
      }
    }
  }
}
