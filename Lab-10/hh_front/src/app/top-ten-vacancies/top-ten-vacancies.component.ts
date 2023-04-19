import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models";
import {AppService} from "../app.service";

@Component({
  selector: 'app-top-ten-vacancies',
  templateUrl: './top-ten-vacancies.component.html',
  styleUrls: ['./top-ten-vacancies.component.css']
})
export class TopTenVacanciesComponent implements OnInit{
  vacancies: Vacancy[];
  loaded: boolean;

  constructor(private appService: AppService) {
    this.vacancies = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies() {
    this.loaded = false;
    this.appService.getTopTenVacancies().subscribe( (vacancies) => {
      this.vacancies = vacancies;

    });
    this.loaded = true;
  }
}
