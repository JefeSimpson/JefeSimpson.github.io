import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {AppService} from "../app.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  vacancies: Vacancy[];

  name: string;
  description: string;
  salary: number;
  company: number;
  loaded: boolean;

  constructor(private appService: AppService) {
    this.vacancies = [];
    this.name = "";
    this.description = "";
    this.salary = 0;
    this.company = 0;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.loaded = false;
    this.appService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
  }

  addVacancy() {
    this.loaded = false;
    this.appService.createVacancy(this.name, this.description, this.salary, this.company).subscribe(
      (vacancy) => {
        this.vacancies.push(vacancy)
        this.loaded = true;
        this.name = ""; this.description = ""; this.salary = 0; this.company = 0;
      });
  }

  deleteVacancy(id: number) {
    this.loaded = false;
    this.appService.deleteVacancy(id).subscribe((vacancy) => {
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
      this.loaded = true;
    });
  }

}
