import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quartos-create',
  templateUrl: './quartos-create.component.html',
  styleUrls: ['./quartos-create.component.css']
})
export class QuartosCreateComponent implements OnInit {

  constructor(
    private toast: ToastrService, 
    private api: ZHotelService, 
    private router: Router) { 
      
    }

  IsDisabled: boolean = false
  hoteis:any = "";
  IsAdmin: any = localStorage.getItem("IsAdmin")
  routerLinkQuartos:any = ""

  async ngOnInit() {
    
    if(this.IsAdmin == "true")
        {
          this.routerLinkQuartos = "/home/Quartos";
        }
    else {
          this.routerLinkQuartos = "/home/propriedades";
    }

    await this.api.ObterTodosHoteis().then((data) => {
      this.hoteis = data;
    })
  }

  // Substitui a virgula pelo ponto
  funcao (e: any) {
    if (e.key === ','){
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      var oldValue = e.target.value;

      var newValue = oldValue.slice(0, start) + '.' + oldValue.slice(end)
      e.target.value = newValue;

      e.target.selectionStart = e.target.selectionEnd = start + 1;

      e.preventDefault();
  }
  }
  //

  timeLeft: number = 2;
  interval: any;

  async onSubmit(data: any) {
    console.log(data)
    data.id_prop = localStorage.getItem("numero")

    if(data.hotel == "" || data.quarto == "" || data.valor_limpeza == "" || data.valor_condominio == "" || data.status == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(");
    }
    else {
      if (data.valor_limpeza == "NaN" || data.valor_condominio == "NaN")
      {
        this.toast.error("Valor Da Limpeza ou a Diária estão incorretos", "O Cadastro Falhou :(")
      }
      else {
        await this.api.AdicionarQuarto(data)
        this.IsDisabled = true
        this.toast.success("Quarto Cadastrado :)");
        this.startTimer()
      }
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        if(this.IsAdmin == "true")
        {
          this.router.navigate(["/home/Quartos"]);
        }
        else {
          this.router.navigate(["/home/propriedades"]);
        }
      }
    },1000)
  }
}
