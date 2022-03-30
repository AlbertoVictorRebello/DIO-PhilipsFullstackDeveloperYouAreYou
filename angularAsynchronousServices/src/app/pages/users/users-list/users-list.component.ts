import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    }, (err) => {
      console.log("Execution Error", err.status);
      
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe((response) => {
      console.log(`User deleted: ${ response.name} ${ response.lastName}`);
      this.getUsers();      
    }, (err) => {
      console.log("Execution Error", err.status);
      
    })   
  }

}


