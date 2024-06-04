import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { DatePipe } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ClientComponent } from './client/client.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientviewComponent } from './clientview/clientview.component';
import { CountrySearchComponentComponent } from './country-search-component/country-search-component.component';
import { CRAComponent } from './cra/cra.component';
import { CradetailsComponent } from './cradetails/cradetails.component';
import { CralistComponent } from './cralist/cralist.component';
import { CraviewComponent } from './craview/craview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissionviewComponent } from './missionview/missionview.component';
import { MonthlyDataComponent } from './monthly-data/monthly-data.component';
import { MonthlydatalistComponent } from './monthlydatalist/monthlydatalist.component';
import { MonthlydataviewComponent } from './monthlydataview/monthlydataview.component';
import { NavigateComponent } from './navigate/navigate.component';
import { PdfdetailsComponent } from './pdfdetails/pdfdetails.component';
import { PdfsalariesComponent } from './pdfsalaries/pdfsalaries.component';
import { RestapiService } from './restapi.service';
import { SalariesComponent } from './salaries/salaries.component';
import { SalariesdetailsComponent } from './salariesdetails/salariesdetails.component';
import { SalariesviewComponent } from './salariesview/salariesview.component';
import { SearchComponent } from './search/search.component';
import { SimulateurdetailsComponent } from './simulateurdetails/simulateurdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigateComponent,
    ListComponent,
    SimulateurdetailsComponent,
    SalariesComponent,
    SearchComponent,
    SalariesdetailsComponent,
    PdfdetailsComponent,
    ClientComponent,
    CRAComponent,
    MissionComponent,
    ClientlistComponent,
    MissionlistComponent,
    CralistComponent,
    ClientdetailsComponent,
    DialogAnimationsExampleDialogComponent,
    DashboardComponent,
    MissiondetailsComponent,
    DialogEditComponent,
    CountrySearchComponentComponent,
    MonthlyDataComponent,
    CradetailsComponent,
    PdfsalariesComponent,
    MonthlydatalistComponent,
    ClientviewComponent,
    MissionviewComponent,
    SalariesviewComponent,
    CraviewComponent,
    MonthlydataviewComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientJsonpModule,
    MatSelectCountryModule.forRoot('fr'), // you can use 'br' | 'de' | 'en' | 'es' | 'fr' | 'hr' | 'hu' | 'it' | 'nl' | 'pt' --> MatSelectCountrySupportedLanguages
    MatIconModule,
    MatDialogModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatFormFieldModule,
    MatSelectModule,
    NgxCountriesDropdownModule
  ],

  providers: [
    RestapiService,
    provideAnimationsAsync(),
    DatePipe
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
