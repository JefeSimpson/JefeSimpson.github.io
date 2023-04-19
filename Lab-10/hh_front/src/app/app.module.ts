import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { TopTenVacanciesComponent } from './top-ten-vacancies/top-ten-vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CompanyVacanciesComponent,
    VacanciesComponent,
    TopTenVacanciesComponent,
    VacancyDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
