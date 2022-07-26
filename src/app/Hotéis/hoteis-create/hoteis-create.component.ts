import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteis-create',
  templateUrl: './hoteis-create.component.html',
  styleUrls: ['./hoteis-create.component.css']
})
export class HoteisCreateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router) { }

  hide = true;
  IsDisabled: boolean = false
  
  ngOnInit(): void {
  }

  async onSubmit(data: any) {
    console.log(data)

    if(data.nome == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(");
    }
    else {
        await this.api.AdicionarHotel(data)
        this.IsDisabled = true
        this.toast.success("Hotel Cadastrado :)");
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
        this.router.navigate(["/home/Hotéis"]);
      }
    },1000)
  }
}
