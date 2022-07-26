import * as  anime from 'animejs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.css'],
  providers: []
})
export class MovimentacaoCreateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router,  private route: ActivatedRoute) { }


  pcker2: any = ""
  time = {hour: 13, minute: 30};
  hide = true;
  IsDisabled: boolean = false
  nro:any = this.route.snapshot.paramMap.get("nro")
  quarto: any = this.route.snapshot.paramMap.get("NomeDoQuarto");
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  Hora = new FormGroup({
    hora1: new FormControl(null),
    hora2: new FormControl(null),
  });

  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  })

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

  converterLongDate(data: any, data2: any) {
    let datamov = new Date(data).toLocaleDateString();

    console.log(datamov + ' ' + data2)
    const dateComponents = new Date(data).toLocaleDateString();

    const [day, month, year] = dateComponents.split('/');
    const [hours, minutes, seconds] = data2.split(':');
    console.log('----------------')
    console.log(hours)
    console.log(minutes)
    console.log('----------------')

    const date = new Date(+year, +month - 1, +day, +hours - 3, +minutes, +seconds);
    console.log(date)
    console.log('=======================')
    return date.toISOString()
  }

  converterLongDate2(data: any) {
    let ano = new Date(data).getTime()

    return ano
  }

  ConvertHora(data: any)
  {
    const str = data

    const [dateHora, DateAMPM] = str.split(' ')

    const [Horário, indefinido] = dateHora.split(' ')

    const [hours, minuts] = Horário.split(':')

      return `${hours}:${minuts}:00`
  }

  Diarias(Start:any, End:any)
  {
    const timeDiff = Math.abs(Start - End);
    var diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return diffDays
  }

  async onSubmit(data: any) {
    console.log(this.range)
    console.log(this.Hora.value.hora2)
    this.range.value.start.toLocaleTimeString = this.Hora.value.hora1
    console.log(this.range.value.start)
    data.checkin = this.converterLongDate(this.range.value.start, this.ConvertHora(this.Hora.value.hora2))
    data.checkout = this.converterLongDate(this.range.value.end, this.ConvertHora(this.Hora.value.hora1))
    data.diarias = this.Diarias(this.converterLongDate2(this.range.value.start), this.converterLongDate2(this.range.value.end))
    data.hotelId = Number(this.nro);
    data.quarto = this.quarto;
    if (data.booking == true)
    {
      data.booking = "T" 
    }
      else
    {
      data.booking = "F"
    }
    if (data.qtdeCriancas == "")
    {
      data.qtdeCriancas = 0
    }
    if (data.checkin == "" || data.checkout == "" || data.hospede == "" || data.qtdeAdultos == "" || data.valor == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(");
      console.log(data)
    }
    else 
    {
      await this.api.AdicionarMovimentacao(data)
      console.log(data)
      this.IsDisabled = true
      this.toast.success("Proprietário Cadastrado :)");
      this.startTimer()
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
        this.router.navigate([`/home/movimentosdoquarto/${this.nro}/${this.quarto}`]);
      }
    },1000)
  }

  ngOnInit(): void {
  }

}
