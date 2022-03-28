import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.value = this.studentsList.length;
  }

  isVisible: Boolean = false;
  studentButtonText: string = 'Show Students'
  value!: number;

  toggleVisibility() {    
    if (this.isVisible) {
      this.isVisible = false;
      this.studentButtonText = 'Show Students'      
    } else {
      this.isVisible = true
      this.studentButtonText = 'Hide Students'      
    }
    console.log(this.isVisible);
    
  }

  studentsList: Student[] = [
    {name: "Camila", age: 27, email: 'camila.taruma@gmail.com', course: 'Computer Cience'},
    {name: "Test", age: 25, email: 'test@gmail.com', course: 'System Analisys and Development'},
    {name: "Test2", age: 31, email: 'test2@gmail.com', course: 'Computer Engineering'},
    {name: "Test3", age: 45, email: 'test3@gmail.com', course: 'Information Systems'}
  ]
  

}
