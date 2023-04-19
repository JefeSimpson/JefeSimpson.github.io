import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy;
  name: string;
  description: string;
  salary: number;
  company: number;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.vacancy = {} as Vacancy;
    this.name = "";
    this.description = "";
    this.salary = 0;
    this.company = 0;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.getVacancy();
  }

  getVacancy() {
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.appService.getVacancy(id).subscribe((vacancy) => {
        this.vacancy = vacancy

      });
    });
    this.loaded = true;
  }

  updateVacancy(id: number) {
    this.loaded = false;
    this.appService.updateVacancy(id, this.name, this.description, this.salary, this.company).subscribe(
      (vacancy) => {
        this.vacancy.name = vacancy.name;
        this.vacancy.description = vacancy.description;
        this.vacancy.salary = vacancy.salary;
        this.vacancy.company = vacancy.company;
        this.loaded = true;
      });
  }

  toBack() {
    window.history.back();
  }

}
