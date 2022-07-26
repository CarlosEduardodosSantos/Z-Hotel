import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ZHotelService } from "../../Z-HotelService";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  constructor(private api: ZHotelService, private _liveAnnouncer: LiveAnnouncer, private toast: ToastrService,) { }

  IsADM:any = localStorage.getItem("IsAdmin");
  Proprietarios:any = ""
  displayedColumns: string[] = ["nro", "nome", "fone", "login", "isAdmin", "acoes"];
  dataSource = new MatTableDataSource(this.Proprietarios.results);

  DisplayBack: any = "none";
  DisplayCard: any = "none";
  AnimacaoBack: any = "apareceBack 500ms ease-in";
  AnimacaoCard: any = "apareceTexto 500ms ease-in";
  IsDisabled: boolean = false;
  codigoExclu: any = "";
  displaybotao:any = "block"

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
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

  async ngOnInit() {
    if (this.IsADM == "true")
    {
      this.displaybotao = "block"
    await this.api.ObterTodosProprietarios().then((data) => {
      this.Proprietarios = data

      console.log(this.Proprietarios)
      this.dataSource = new MatTableDataSource(this.Proprietarios.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })

    const filtroPag = document.getElementsByClassName("mat-paginator-page-size-label")[0].innerHTML = "Itens por pagina: "
  }
  else {
    this.displaybotao = "none"
  }
  }

  async deletar(codigo: any) {
    await this.api.DeletarProprietario(codigo);
    await this.toast.success("Conta Deletada :)");

    this.AnimacaoBack = "someBack 500ms ease-in"
    this.AnimacaoCard = "someTexto 500ms ease-in"
    this.IsDisabled = true;
    setTimeout(() => {
      this.DisplayBack = "none";
      this.DisplayCard = "none";
    }, 500)

    await this.api.ObterTodosProprietarios().then((data) => {
      this.Proprietarios = data;

      console.log(this.Proprietarios);
      console.log(this.dataSource);
      this.dataSource = new MatTableDataSource(this.Proprietarios.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
