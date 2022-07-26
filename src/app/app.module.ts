
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { MAT_DATE_LOCALE} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuariosComponent } from './Proprietários/Proprietários-List/cadastro-usuarios.component';

import {MatTreeModule} from "@angular/material/tree";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {MatSortModule} from '@angular/material/sort';
import { MatCardModule } from "@angular/material/card";
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProprietariosCreateComponent } from './Proprietários/proprietarios-create/proprietarios-create.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { ProprietariosUpdateComponent } from './Proprietários/proprietarios-update/proprietarios-update.component';
import { QuartosListComponent } from './Quartos/quartos-list/quartos-list.component';
import { QuartosCreateComponent } from './Quartos/quartos-create/quartos-create.component';
import { QuartosUpdateComponent } from './Quartos/quartos-update/quartos-update.component';
import { QuartosPropriedadesIndividuaisComponent } from './Quartos/quartos-propriedades-individuais/quartos-propriedades-individuais.component';
import { MovimentosHomepageComponent } from './Movimentação/movimentos-homepage/movimentos-homepage.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { VisualizarMovimentacaoComponent } from './Movimentação/visualizar-movimentacao/visualizar-movimentacao.component';
import { HoteisListComponent } from './Hotéis/hoteis-list/hoteis-list.component';
import { HoteisCreateComponent } from './Hotéis/hoteis-create/hoteis-create.component';
import { HoteisUpdateComponent } from './Hotéis/hoteis-update/hoteis-update.component';
import { MovimentacaoCreateComponent } from './Movimentação/movimentacao-create/movimentacao-create.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroUsuariosComponent,
    NavComponent,
    ProprietariosCreateComponent,
    ProprietariosUpdateComponent,
    QuartosListComponent,
    QuartosCreateComponent,
    QuartosUpdateComponent,
    QuartosPropriedadesIndividuaisComponent,
    MovimentosHomepageComponent,
    VisualizarMovimentacaoComponent,
    HoteisListComponent,
    HoteisCreateComponent,
    HoteisUpdateComponent,
    MovimentacaoCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMaterialTimepickerModule.setLocale('pt-BR'),
    NgxMatTimepickerModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot({timeOut:2000, closeButton:true, progressBar:true})
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
