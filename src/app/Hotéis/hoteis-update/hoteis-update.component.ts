import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ZHotelService } from 'src/app/Z-HotelService';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-hoteis-update',
  templateUrl: './hoteis-update.component.html',
  styleUrls: ['./hoteis-update.component.css']
})
export class HoteisUpdateComponent implements OnInit {

  constructor(private toast: ToastrService, private api: ZHotelService, private router: Router, private route: ActivatedRoute) { }

  Hotel: any = "";
  hide = true;
  IsDisabled: boolean = false

  async ngOnInit() {
    await this.api.ObterHotelPorId(this.route.snapshot.paramMap.get("hotelId")).then((data) => {
      this.Hotel = data
      console.log(data)
    })
  }

  async onSubmit(data: any) {
    data.hotelId = this.route.snapshot.paramMap.get("hotelId");
    if (this.Hotel.nome == "")
    {
      this.toast.error("Insira todos os dados", "O Cadastro Falhou :(")
    }
    else {
        await this.api.AlterarHotel(data)
        console.log(data)

        this.IsDisabled = true
        this.toast.success("Hotel Cadastrado :)");
        this.startTimer();
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
