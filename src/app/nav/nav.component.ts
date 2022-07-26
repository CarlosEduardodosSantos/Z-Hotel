import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  IsAdmin: any = localStorage.getItem("IsAdmin")
  Quartos:any = ""
  ProprierariosDisplay:any = ""

  ngOnInit(): void {
    console.log(this.IsAdmin)
    if (this.IsAdmin == "true")
    {
      this.ProprierariosDisplay = "block"
      this.Quartos = "/home/Quartos"
    }
    else {
      this.ProprierariosDisplay = "none"
      this.Quartos = "/home/propriedades"
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate([""]);
  }
}
