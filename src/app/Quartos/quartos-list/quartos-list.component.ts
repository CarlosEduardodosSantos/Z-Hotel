import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ZHotelService } from "../../Z-HotelService";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-quartos-list',
  templateUrl: './quartos-list.component.html',
  styleUrls: ['./quartos-list.component.css']
})
export class QuartosListComponent implements OnInit {

  constructor(private api: ZHotelService, private _liveAnnouncer: LiveAnnouncer, private toast: ToastrService) { }

  Quartos:any = ""
  displayedColumns: string[] = ["id_prop", "hotel", "quarto", "valor_limpeza", "valor_condominio", "status", "detalhes", "acoes"];
  dataSource = new MatTableDataSource(this.Quartos.results);

  IsADM: any = localStorage.getItem("IsAdmin")
  data2:any = ""
  DisplayBack: any = "none";
  DisplayDosDetalhes: any = "none"
  DisplayCard: any = "none";
  AnimacaoBack: any = "apareceBack 500ms ease-in";
  AnimacaoDetalhes:any = "apareceTexto 500ms ease-in"
  AnimacaoCard: any = "apareceTexto 500ms ease-in";
  IsDisabled: boolean = false;
  codigoExclu: any = "";
  Tamanho: any = ""
  botaodisplay:any = "none"

  Hotel:any = ""
  Quarto:any = ""
  Valor_Limpeza:any = ""
  Valor_Condominio:any = ""
  status:any = ""
  obs:any = ""

  Detalhes:any = ""

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

FecharDetalhes()
{
  this.AnimacaoBack = "someBack 500ms ease-in"
  this.AnimacaoDetalhes = "someTexto 500ms ease-in"
  this.IsDisabled = true;
  setTimeout(() => {
    this.DisplayBack = "none";
    this.DisplayDosDetalhes = "none";
  }, 500)
}

async ApareceDetalhes(Codigo:any)
{
  await this.api.ObterQuartoPorId(Codigo).then((data) => {
    this.Detalhes = data
    this.Hotel = this.Detalhes.hotel
    this.Quarto = this.Detalhes.quarto
    this.Valor_Limpeza = this.Detalhes.valor_limpeza
    this.Valor_Condominio = this.Detalhes.valor_condominio
    this.status = this.Detalhes.status
    this.obs = this.Detalhes.obs
  })
  this.DisplayBack = "block";
  this.DisplayDosDetalhes = "block"
  this.AnimacaoBack = "apareceBack 500ms ease-in"
  this.AnimacaoDetalhes = "apareceTexto 500ms ease-in"
  this.IsDisabled = false;
}

ApareceCard(Codigo:any) {
  this.DisplayBack = "block";
  this.DisplayCard = "block"
  this.AnimacaoBack = "apareceBack 500ms ease-in"
  this.AnimacaoCard = "apareceTexto 500ms ease-in"
  this.IsDisabled = false;
  this.codigoExclu = Codigo
  console.log(this.codigoExclu)
}

Cancelar() {
  this.AnimacaoBack = "someBack 500ms ease-in"
  this.AnimacaoCard = "someTexto 500ms ease-in"
  this.IsDisabled = true;
  setTimeout(() => {
    this.DisplayBack = "none";
    this.DisplayCard = "none";
  }, 500)
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ConverterStatus(data:any)
{
  if(data == "O")
  {
    return data = "Ocupado"
  }
  if (data == "S")
  {
    return data = "Limpando"
  }
  if (data == "D")
  {
    return data = "Disponível"
  }
  else
  {
    return data = "Erro"
  }
}

async deletar(codigo: any) {
  await this.api.DeletarQuarto(codigo);
  await this.toast.success("Cliente Deletado :)");

  this.AnimacaoBack = "someBack 500ms ease-in"
  this.AnimacaoCard = "someTexto 500ms ease-in"
  this.IsDisabled = true;
  setTimeout(() => {
    this.DisplayBack = "none";
    this.DisplayCard = "none";
  }, 500)

  await this.api.ObterTodosQuartos().then((data) => {
    this.Quartos = data;

    console.log(this.dataSource);
    this.dataSource = new MatTableDataSource(this.Quartos.results);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  });
}

  async ngOnInit() {

    if(this.IsADM == "true")
    {
      this.botaodisplay = "block"
    await this.api.ObterTodosQuartos().then((data) => {
      this.Quartos = data
      for (let i =0; i < this.Quartos.results.length; i++) 
      {
        this.api.ObterProprietarioPorId(this.Quartos.results[i].id_prop).then(data => {
          this.data2 = data

          this.Quartos.results[i].id_prop = this.data2.nome
        })
      }


      console.log(this.Quartos)
      this.dataSource = new MatTableDataSource(this.Quartos.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })

    const filtroPag = document.getElementsByClassName("mat-paginator-page-size-label")[0].innerHTML = "Itens por pagina: "
  }
  else {
    this.botaodisplay = "none"
  }
  }

}
