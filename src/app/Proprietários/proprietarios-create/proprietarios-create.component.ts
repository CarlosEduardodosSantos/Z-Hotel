import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietarios-create',
  templateUrl: './proprietarios-create.component.html',
  styleUrls: ['./proprietarios-create.component.css']
})
export class ProprietariosCreateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router) { }

  hide = true;
  IsDisabled: boolean = false

  ngOnInit(): void {
  }

  async onSubmit(data: any) {
    data.isAdmin = false;
    console.log(data)

    if(data.nome == "" || data.login == "" || data.senha == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(");
    }
    else {
      if (data.fone.length < 14 ) {
        this.toast.error("Numero de Telefone inválido", "O Cadastro Falhou :(");
      }
      else {
        await this.api.AdicionarProprietário(data)
        this.IsDisabled = true
        this.toast.success("Proprietário Cadastrado :)");
        this.startTimer()
      }
    }
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
}
