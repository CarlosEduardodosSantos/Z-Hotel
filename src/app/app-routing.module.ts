import { MovimentacaoCreateComponent } from './Movimentação/movimentacao-create/movimentacao-create.component';
import { HoteisUpdateComponent } from './Hotéis/hoteis-update/hoteis-update.component';
import { HoteisCreateComponent } from './Hotéis/hoteis-create/hoteis-create.component';
import { HoteisListComponent } from './Hotéis/hoteis-list/hoteis-list.component';
import { VisualizarMovimentacaoComponent } from './Movimentação/visualizar-movimentacao/visualizar-movimentacao.component';
import { MovimentosHomepageComponent } from './Movimentação/movimentos-homepage/movimentos-homepage.component';
import { QuartosPropriedadesIndividuaisComponent } from './Quartos/quartos-propriedades-individuais/quartos-propriedades-individuais.component';
import { QuartosUpdateComponent } from './Quartos/quartos-update/quartos-update.component';
import { QuartosCreateComponent } from './Quartos/quartos-create/quartos-create.component';
import { QuartosListComponent } from './Quartos/quartos-list/quartos-list.component';
import { ProprietariosUpdateComponent } from './Proprietários/proprietarios-update/proprietarios-update.component';
import { ProprietariosCreateComponent } from './Proprietários/proprietarios-create/proprietarios-create.component';
import { NavComponent } from './nav/nav.component';
import { CadastroUsuariosComponent } from './Proprietários/Proprietários-List/cadastro-usuarios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home",
  component: NavComponent,
  children: [
    {path: "", component: HomeComponent},
    {path: "Proprietários", component: CadastroUsuariosComponent},
    {path: "CadastrarProprietário", component: ProprietariosCreateComponent},
    {path: "AtualizarProprietário/:nro", component: ProprietariosUpdateComponent},
    {path: "Quartos", component: QuartosListComponent},
    {path: "CadastroDeQuartos", component:QuartosCreateComponent},
    {path: "AtualizarQuarto/:nro", component:QuartosUpdateComponent},
    {path: "propriedades", component:QuartosPropriedadesIndividuaisComponent},
    {path: "movimentos", component: MovimentosHomepageComponent},
    {path: "movimentosdoquarto/:nro/:quarto", component: VisualizarMovimentacaoComponent},
    {path: "Hotéis", component: HoteisListComponent},
    {path: "CadastroDeHoteis", component: HoteisCreateComponent},
    {path: "AtualizarCadastros/:hotelId", component: HoteisUpdateComponent},
    {path: ":nro/:NomeDoQuarto/CadastroDeMovimentacao", component: MovimentacaoCreateComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
