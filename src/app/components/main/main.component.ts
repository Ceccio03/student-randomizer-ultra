import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  groupNumber:number = 7;
  groups:Student[][] = [];
  mockData:Student[] = [];
  constructor(private dataServe:DataService) {

  }

  ngOnInit(): void {
    this.dataServe.getStatus().then(students => {
      this.mockData = students;
      this.createGroups();
    });
  }

  randomize(): void {
    const tempArray = [];
    const originalLength = this.mockData.length;

    for (let i = 0; i < originalLength; i++) {
      const randomIndex = Math.floor(Math.random() * this.mockData.length);
      const student = this.mockData[randomIndex];

      tempArray.push(student);
      this.mockData.splice(randomIndex, 1);
    }
    this.mockData = tempArray;
  }

  createGroups(): void{
    // for (let i = 0; i < this.groupNumber; i++) {
    //   const group:Student[] = []
    //   const studentNumber = Math.floor(this.mockData.length / this.groupNumber);
    //   const start = studentNumber * i;
    //   let endNumber;

    //   if (i === this.groupNumber - 1) {
    //     endNumber = this.mockData.length
    //   } else {
    //     endNumber = start + studentNumber;
    //   }
    //   for (let j = start; j < endNumber; j++) {
    //     if (j < this.mockData.length) {
    //       const student = this.mockData[j];

    //       group.push(student);
    //     }
    //   }
    //   this.groups.push(group);
    // }
    // console.log(this.groups)

    this.groups = []

    for (let i = 0; i < this.mockData.length; i++) {
      const groupIndex = i % this.groupNumber;

      if (this.groups[groupIndex] === undefined) {
        this.groups[groupIndex] = [];
      }
      const student = this.mockData[i];

      this.groups[groupIndex].push(student);
    }
console.log(this.groups);

    // console.log(this.groups)

    // for (let i = 0; i < this.groupNumber; i++) {
    //   this.groups.push([]);
    // }

    // const tempStudents = [...this.mockData];

    // while(tempStudents.length>0){
    //   for (let i = 0; i < this.groups.length; i++) {
    //     const firstStudent = tempStudents.shift();
    //     if (firstStudent) {
    //       this.groups[i].push(firstStudent)
    //     }
    //   }
    // }
    // console.log(this.groups)
    }

    removeStudent(student:Student): void {
      console.log(student);
    }
}
