import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";
import {TopTenVacanciesComponent} from "./top-ten-vacancies/top-ten-vacancies.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'vacancies/top_ten', component: TopTenVacanciesComponent },
  { path: 'vacancies/:id', component: VacancyDetailComponent },
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
