import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {AppService} from "../app.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: Company[];
  name: string;
  description: string;
  city: string;
  address: string;
  loaded: boolean;

  constructor(private appService: AppService) {
    this.companies = [];
    this.name = "";
    this.description = "";
    this.city = "";
    this.address = "";
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies() {
    this.loaded = false;
    this.appService.getCompanies().subscribe( (companies) => {
      this.companies = companies;
      this.loaded = true;
    } );
  }

  addCompany() {
    this.loaded = false;
    this.appService.createCompany(this.name, this.description, this.city, this.address).subscribe(
      (company) => {
        this.companies.push(company)
        this.loaded = true;
        this.name = ""; this.description = ""; this.city = ""; this.address = "";
      });

  }

  deleteCompany(id: number) {
    this.loaded = false;
    this.appService.deleteCompany(id).subscribe((company) => {
      this.companies = this.companies.filter((company) => company.id !== id);
      this.loaded = true;
    });
  }
}
