import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API } from '@app/constants';

@Injectable({ providedIn: 'root' })
export class Common {
  private readonly http = inject(HttpClient);

  candidate() {
    return this.http.get(`${API}/candidate/?format=json`);
  }

  load() {
    return this.http.get(`${API}/load/?format=json`);
  }

  profile() {
    return this.http.get(`${API}/empprofile/?format=json`);
  }

  vacancies() {
    return this.http.get(`${API}/vacancies/?format=json`);
  }

  vacanciesReq() {
    return this.http.get(`${API}/vacanciesreq/?format=json`);
  }
}
