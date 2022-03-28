import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() initialValue: number = 10;

}
