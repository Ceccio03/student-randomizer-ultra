import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getStatus() {
    return fetch('./assets/students.json').then(resp => resp.json());
  }
}
