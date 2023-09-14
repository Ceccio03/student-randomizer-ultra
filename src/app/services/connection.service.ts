import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }

  getStatus() {
    return fetch('./assets/students.json').then(resp => resp.json());
  }
}
