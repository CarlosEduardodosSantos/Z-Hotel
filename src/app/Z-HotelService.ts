import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
  })
  export class ZHotelService {
    constructor(public http: HttpClient) {}

    obterString() {
        return this.http
          .get(environment.url + "Strings/obterString/" + environment.cnpj)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      obterLogin(Nome: string, Senha: string)
      {
        return this.http
        .get(`${environment.url}Proprietario/obterLogin/${Nome}/${Senha}`)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      ObterTodosProprietarios() {
        return this.http
          .get(environment.url + "Proprietario/obterTodos")
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      ObterProprietarioPorUser(id_prop: any) {
        return this.http
          .get(environment.url + `Quartos/obterPorUser/${id_prop}`)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      ObterProprietarioPorId(Nro: any) {
        return this.http
          .get(environment.url + `Proprietario/obterPorCodigo/${Nro}`)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      DeletarProprietario(Codigo:any) {
        return this.http
        .delete(`${environment.url}Proprietario/deletar/${Codigo}`)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AdicionarProprietário(data: any) {
        return this.http
        .post(`${environment.url}Proprietario/adicionar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AlterarProprietario(data: any) {
        return this.http
        .put(`${environment.url}Proprietario/alterar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      ObterTodosHoteis() {
        return this.http
          .get(environment.url + "Hoteis/obterTodos")
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      ObterHotelPorId(Nro: any) {
        return this.http
          .get(environment.url + `Hoteis/obterPorCodigo/${Nro}`)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      DeletarHotel(Nro:any) {
        return this.http
        .delete(`${environment.url}Hoteis/deletar/${Nro}`)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AdicionarHotel(data: any) {
        return this.http
        .post(`${environment.url}Hoteis/adicionar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AlterarHotel(data: any) {
        return this.http
        .put(`${environment.url}Hoteis/alterar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      ObterTodosQuartos() {
        return this.http
          .get(environment.url + "Quartos/obterTodos")
          .toPromise()
          .then((res) => {
            return res;
          });
      }
      
      ObterQuartoPorId(Nro: any) {
        return this.http
          .get(environment.url + `Quartos/obterPorCodigo/${Nro}`)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      DeletarQuarto(Codigo:any) {
        return this.http
        .delete(`${environment.url}Quartos/deletar/${Codigo}`)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AdicionarQuarto(data: any) {
        return this.http
        .post(`${environment.url}Quartos/adicionar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AlterarQuarto(data: any) {
        return this.http
        .put(`${environment.url}Quartos/alterar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      ObterReservaPorCodigo(Id: any)
      {
        return this.http
        .get(environment.url + `Movimentacao/obterPorCodigo/${Id}`)
        .toPromise()
        .then((res) => {
          return res
        });
      }

      ObterMovimentoPorQuarto(HotelID:any, Quarto: any) {
        return this.http
          .get(environment.url + `Movimentacao/obterPorQuarto/${HotelID}/${Quarto}`)
          .toPromise()
          .then((res) => {
            return res;
          });
      }

      DeletarReserva(Nro:any) {
        return this.http
        .delete(`${environment.url}Movimentacao/deletar/${Nro}`)
        .toPromise()
        .then((res) => {
          return res;
        });
      }

      AdicionarMovimentacao(data: any) {
        return this.http
        .post(`${environment.url}Movimentacao/adicionar`, data)
        .toPromise()
        .then((res) => {
          return res;
        });
      }
  }