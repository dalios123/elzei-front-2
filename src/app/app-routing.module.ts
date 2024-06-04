import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SalariesComponent } from './salaries/salaries.component';
import { SalariesdetailsComponent } from './salariesdetails/salariesdetails.component';
import { SalariesviewComponent } from './salariesview/salariesview.component';
import { SearchComponent } from './search/search.component';
import { SimulateurdetailsComponent } from './simulateurdetails/simulateurdetails.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"navigate",component:NavigateComponent},
  {path:"list",component:ListComponent},
  {path:"Simulateurdetails/:id", component:SimulateurdetailsComponent},
  {path:"salaries",component:SalariesComponent},
  {path:"search",component:SearchComponent},
  {path: "salariesdetails/:id", component: SalariesdetailsComponent},
  {path:"pdfdetails",component:PdfdetailsComponent},
  {path:"Client",component:ClientComponent},
  {path:"CRA",component:CRAComponent},
  {path:"CRA/:id",component:CRAComponent},
  {path:"Mission",component:MissionComponent},
  {path:"clientlist",component:ClientlistComponent},
  {path:"missionlist",component:MissionlistComponent},
  {path:"cralist",component:CralistComponent},
  {path:"clientdetails/:id",component:ClientdetailsComponent},
  {path:"DialogAnimationsExampleDialog",component:DialogAnimationsExampleDialogComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"missiondetails/:id",component:MissiondetailsComponent},
  {path:"dialog-edit",component:DialogEditComponent},
  {path:"countrySearch",component:CountrySearchComponentComponent},
  {path:"monthly-data",component:MonthlyDataComponent},
  {path:"monthly-data/:id",component:MonthlyDataComponent},
  {path:"cradetails",component:CradetailsComponent  },
  {path:"pdfsalaries/:id",component:PdfsalariesComponent},
  {path:"monthlydatalist",component:MonthlydatalistComponent},
  {path:"clientview/:id",component:ClientviewComponent},
  {path:"missionview/:id",component:MissionviewComponent},
  {path:"salariesview/:id",component:SalariesviewComponent},
  {path:"craview/:id",component:CraviewComponent},
  {path:"monthlydataview/:id",component:MonthlydataviewComponent},
  {path:"authentication",component:AuthenticationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
