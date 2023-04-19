import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }
  // GET request for company
  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/api/companies`);
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/api/companies/${id}`);
  }

  // POST request for company
  createCompany(name: string, description: string, city: string, address: string): Observable<Company> {
    return this.client.post<Company>(`${this.BASE_URL}/api/companies`,
      {name: name, description: description, city: city, address: address});
  }

  // PUT request for company
  updateCompany(id: number, name: string, description: string, city: string, address: string): Observable<Company> {
    return this.client.put<Company>(`${this.BASE_URL}/api/companies/${id}`,
      {name: name, description: description, city: city, address: address});
  }

  // DELETE request for company
  deleteCompany(id: number): Observable<Company> {
    return this.client.delete<Company>(`${this.BASE_URL}/api/companies/${id}`);
  }

  // GET request for vacancy
  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.client.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}`);
  }

  // POST request for company
  createVacancy(name: string, description: string, salary: number, company: number): Observable<Vacancy> {
    return this.client.post<Vacancy>(`${this.BASE_URL}/api/vacancies`,
      {name: name, description: description, salary: salary, company: company});
  }

  // PUT request for company
  updateVacancy(id: number, name: string, description: string, salary: number, company: number): Observable<Vacancy> {
    return this.client.put<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}`,
      {name: name, description: description, salary: salary, company: company});
  }

  // DELETE request for company
  deleteVacancy(id: number): Observable<Vacancy> {
    return this.client.delete<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}`)
  }

  // GET request for vacancies of one company and top ten vacancies
  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`)
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/top_ten`)
  }
}
