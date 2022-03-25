import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  counter: number = 0;
  owner: string = 'Alberto Rebello'
  text: string = "Wow!!!!"
  
  people = [
    {firstName: "Alberto",
      lastName: "Rebello"

    },
    {
      firstName: "Alberto",
      lastName: "Freire"

    },
    {
      firstName: "Alberto",
      lastName: "Velloso"
    }
  ];
  
  constructor(){}
  ngOnInit(): void {
    console.log(this.people);
    
    let interval = setInterval(() => {
      this.counter++;
      if (this.counter === 10) {
        clearInterval(interval);
      }
    }, 1000)
    
  }  

  clickedMe(name: string) {
    console.log(`Clicked on me: ${ name }`);
    
  }
}
