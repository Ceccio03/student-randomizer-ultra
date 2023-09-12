import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  mockData:Student[] = [
    {
      name: 'damiano',
      surname: 'di lionardo',
      age: 30
    },
    {
      name: 'luca',
      surname: 'verduci',
      age: 24
    },
    {
      name: 'cesare',
      surname: 'falzone',
      age: 20
    },
    {
      name: 'stefania',
      surname: 'ghergut',
      age: 27
    },
    {
      name: 'isabella',
      surname: 'ottonello',
      age: 27
    },
    {
      name: 'francesca',
      surname: 'ercolani',
      age: 34
    },
    {
      name: 'stefano',
      surname: 'florio',
      age: 24
    },
    {
      name: 'manuela',
      surname: 'ariotti',
      age: 35
    },
    {
      name: 'bryan',
      surname: 'rojas',
      age: 24
    },
    {
      name: 'ares',
      surname: 'fiumicelli',
      age: 24
    }
  ];
}
