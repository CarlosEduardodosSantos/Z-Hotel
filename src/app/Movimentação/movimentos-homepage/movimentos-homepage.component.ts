import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ZHotelService } from "../../Z-HotelService";
import { ToastrService } from "ngx-toastr";


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-movimentos-homepage',
  templateUrl: './movimentos-homepage.component.html',
  styleUrls: ['./movimentos-homepage.component.css']
})
export class MovimentosHomepageComponent implements OnInit {
  constructor(private api: ZHotelService, private _liveAnnouncer: LiveAnnouncer, private toast: ToastrService) { }

  Quartos:any = ""
  displayedColumns: string[] = ["hotel", "quarto", "status","acoes"];
  dataSource = new MatTableDataSource(this.Quartos.results);

  DisplayBack: any = "none";
  DisplayCard: any = "none";
  AnimacaoBack: any = "apareceBack 500ms ease-in";
  AnimacaoCard: any = "apareceTexto 500ms ease-in";
  IdDoProprietario: any = localStorage.getItem("numero");
  IsDisabled: boolean = false;
  codigoExclu: any = "";

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}

converterCurrency(valor: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  async ngOnInit() {

    await this.api.ObterProprietarioPorUser(this.IdDoProprietario).then((data) => {
      this.Quartos = data

      for (let i =0; i < this.Quartos.results.length; i++) 
      {
        console.log(this.Quartos.results[i].status)

        if(this.Quartos.results[i].status == "O")
        {
          this.Quartos.results[i].status = "Ocupado"
        }

        if(this.Quartos.results[i].status == "S")
        {
          this.Quartos.results[i].status = "Limpando"
        }

        if(this.Quartos.results[i].status == "D")
        {
          this.Quartos.results[i].status = "Disponível"
        }
      }

      console.log(this.Quartos)
      this.dataSource = new MatTableDataSource(this.Quartos.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })

    const filtroPag = document.getElementsByClassName("mat-paginator-page-size-label")[0].innerHTML = "Itens por pagina: "

  }

}
