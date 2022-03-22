import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Alberto Victor Rebello';
  newName: string = 'Tio Maneco';
  avatar: string = 'assets/images/AlbertoRebelloComFantoche.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  makeMeHero(){
    this.name = this.newName;
    this.avatar = 'assets/images/TioManeco.jpg'
  }

}
