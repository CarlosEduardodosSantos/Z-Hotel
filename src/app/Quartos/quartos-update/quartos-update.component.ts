import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quartos-update',
  templateUrl: './quartos-update.component.html',
  styleUrls: ['./quartos-update.component.css']
})
export class QuartosUpdateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router, private route: ActivatedRoute) { }

  Quarto: any = "";
  hoteis:any = "";
  _hotel:any = "";
  hide = true;
  IsDisabled: boolean = false
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

    await this.api.ObterQuartoPorId(this.route.snapshot.paramMap.get("nro")).then((data) => {
      this.Quarto = data
      console.log(data)
    })

    await this.api.ObterTodosHoteis().then((data) => {
      this.hoteis = data;
      this._hotel = this.Quarto.hotel

      console.log(this.Quarto.hotel)
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

  async onSubmit(data: any) {
    console.log(data)
    data.nro = this.route.snapshot.paramMap.get("nro");

    data.id_prop = this.Quarto.id_prop
    if (this.Quarto.hotel == "" || this.Quarto.quarto == "" || this.Quarto.valor_limpeza == "" 
    || this.Quarto.valor_condominio == "" || this.Quarto.status == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(")
    }
    else {
      if (this.Quarto.valor_limpeza == "NaN" || this.Quarto.valor_condominio == "NaN")
      {
        this.toast.error("Valor Da Limpeza ou a Diária estão incorretos", "O Cadastro Falhou :(")
      }
      else {
        await this.api.AlterarQuarto(data)
        console.log(data)

        this.IsDisabled = true
        this.toast.success("Cadastrado Atualizado :)");
        this.startTimer();
      }
    }
  }

}
