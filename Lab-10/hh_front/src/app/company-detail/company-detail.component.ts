import {Component, OnInit} from '@angular/core';
import { Company } from '../models';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
  company: Company;
  name: string;
  description: string;
  city: string;
  address: string;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private appService: AppService) {
    this.company = {} as Company;
    this.name = "";
    this.description = "";
    this.city = "";
    this.address = "";
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getCompany()
  }

  getCompany() {
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.appService.getCompany(id).subscribe((data) => {
        this.company = data
      });
    });
    this.loaded = true;
  }

  updateCompany(id: number) {
    this.loaded = false;
    this.appService.updateCompany(id, this.name, this.description, this.city, this.address).subscribe(
      (company) => {
        this.company.name = company.name;
        this.company.description = company.description;
        this.company.city = company.city;
        this.company.address = company.address;
        this.loaded = true;
      });
  }

  toBack() {
    window.history.back();
  }
}
