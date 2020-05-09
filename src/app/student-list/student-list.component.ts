import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

    infoTitles: string[];
    students: string[][];

  constructor() {
    this.infoTitles = ['Name', 'Surname', 'ID'];
    this.students = [
      ['Richard', 'Menson', '62534558798'],
      ['Charlie', 'Chapo', '32568551210'],
      ['Kate', 'Miles', '36589774528'],
      ['Mike', 'Todo', '12548776259']
    ];
  }

  ngOnInit(): void {
  }
}
