import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies: Vacancy[];
  loaded: boolean;
  company_id: number;
  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.vacancies = [];
    this.loaded = true;
    this.company_id = 0;
  }

  ngOnInit(): void {
    this.getCompanyVacancies();
  }

  getCompanyVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.company_id = id;
      this.loaded = false;
      this.appService.getCompanyVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
        this.loaded = true;
      });
    });
  }

  toBack() {
    window.history.back();
  }

}
