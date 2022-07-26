import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ZHotelService } from "../../Z-HotelService";
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-visualizar-movimentacao',
  templateUrl: './visualizar-movimentacao.component.html',
  styleUrls: ['./visualizar-movimentacao.component.css']
})
export class VisualizarMovimentacaoComponent implements OnInit {

  constructor(private api: ZHotelService, private _liveAnnouncer: LiveAnnouncer, private toast: ToastrService,  private router: Router, private route: ActivatedRoute) { }
  
  QuartoFiltrado: any = ""
  Quarto: any = "";
  NomeQuarto: any = this.route.snapshot.paramMap.get("quarto");
  DisplayBack: any = "none";
  DisplayCard: any = "none";
  DisplayDosDetalhes: any = "none"
  AnimacaoBack: any = "apareceBack 500ms ease-in";
  AnimacaoDetalhes:any = "apareceTexto 500ms ease-in"
  AnimacaoCard: any = "apareceTexto 500ms ease-in";
  codigoExclu: any = "";
  IsDisabled: boolean = false;
  nro:any = this.route.snapshot.paramMap.get("nro")

  Detalhes:any = ""
  Hospede: any = ""
  CheckIN: Date = new Date()
  HoraIN: Date = new Date()
  CheckOUT: Date = new Date()
  HoraOUT: Date = new Date()
  QtdAdultos: any = 0
  QtdCriancas: any = 0
  Diarias: any = 0
  Valor:any = 0
  FormaDePagamento:any = ""
  Booking:any = ""
  Observacao: any = "Nenhuma"

  displayedColumns: string[] = ["hospede", "checkin","checkout", "valor", "Detalhes", "delete"];
  dataSource = new MatTableDataSource(this.Quarto.results);

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
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

ApareceCard(Codigo:any) {
  this.DisplayBack = "block";
  this.DisplayCard = "block"
  this.AnimacaoBack = "apareceBack 500ms ease-in"
  this.AnimacaoCard = "apareceTexto 500ms ease-in"
  this.IsDisabled = false;
  this.codigoExclu = Codigo
  console.log(this.codigoExclu)
}

async ApareceDetalhes(Codigo:any)
{
  await this.api.ObterReservaPorCodigo(Codigo).then((data) => {
    this.Detalhes = data
    this.Hospede = this.Detalhes.hospede
    this.CheckIN = this.Detalhes.checkin
    this.CheckOUT = this.Detalhes.checkout
    this.Diarias = this.Detalhes.diarias
    this.Valor = this.Detalhes.valor
    this.FormaDePagamento = this.Detalhes.pgto
    this.QtdAdultos = this.Detalhes.qtdeAdultos
    this.QtdCriancas = this.Detalhes.qtdeCriancas
    if(this.Detalhes.obs == "")
    {
      this.Observacao = "⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    }
    else
    {
      this.Observacao = this.Detalhes.obs
    }

    if (this.Detalhes.booking == "F")
    {
      this.Booking = "Não"
    }
    else
    {
      this.Booking = "Sim"
    }
  })
  this.DisplayBack = "block";
  this.DisplayDosDetalhes = "block"
  this.AnimacaoBack = "apareceBack 500ms ease-in"
  this.AnimacaoDetalhes = "apareceTexto 500ms ease-in"
  this.IsDisabled = false;
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

async deletar(codigo: any) {
  await this.api.DeletarReserva(codigo);
  await this.toast.success("Reserva Deletada :)");

  this.AnimacaoBack = "someBack 500ms ease-in"
  this.AnimacaoCard = "someTexto 500ms ease-in"
  this.IsDisabled = true;
  setTimeout(() => {
    this.DisplayBack = "none";
    this.DisplayCard = "none";
  }, 500)

  await this.api.ObterMovimentoPorQuarto(this.route.snapshot.paramMap.get("nro"),this.route.snapshot.paramMap.get("quarto")).then((data) => {
    this.Quarto = data;

    console.log(this.Quarto);
    console.log(this.dataSource);
    this.dataSource = new MatTableDataSource(this.Quarto.results);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  });
}

ConverterData(Dia: Date) {
  return new Intl.DateTimeFormat (
    ('pt-BR')
  ).format(Dia);
}

ConvertePGTO(tipo: string)
{
  if (tipo == "P")
  {
    return tipo = "Pix"
  }
  else {
    return tipo = "Cartão"
  }
}

converterLongDate(data: any) {
  let datamov = new Date(data).toLocaleDateString();

  return datamov;
}

CheckIn(data: any)
{
  const hora = new Date(data).toLocaleTimeString();

  const [hours, minuts , seconds] = hora.split(':')

  return hours + "h" + minuts;
}

Preco(numero:number)
{
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numero);
}

Pagamento(valor:number, diaria:number)
{
  var numero = valor * diaria
    return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numero);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  async ngOnInit() {

    await this.api.ObterMovimentoPorQuarto(this.route.snapshot.paramMap.get("nro"),this.route.snapshot.paramMap.get("quarto")).then((data) => {
      this.Quarto = data
      console.log(data)
    })

    console.log(this.Quarto)
    this.dataSource = new MatTableDataSource(this.Quarto.results);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource)
    
    const filtroPag = document.getElementsByClassName("mat-paginator-page-size-label")[0].innerHTML = "Itens por pagina: "
  }
}
