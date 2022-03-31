import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(private fb: FormBuilder,
     private userService: UserService,
     private actRoute: ActivatedRoute,
     private router: Router) {
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      lastName: '',
      age: '',
      jobTitle: ''

    });
   }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      console.log(this.userId);
      if (this.userId !== null) {
        this.userService.getUserById(this.userId).subscribe((response) => {
          this.userForm.patchValue({
            id: response[0].id,
            name: response[0].name,
            lastName: response[0].lastName,
            age: response[0].age,
            jobTitle: response[0].jobTitle
          })
        })
      }
      
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    })
  }

  createUser(){    
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(response => {
      console.log(`User registered: ${ response.name } ${ response.lastName }`);
    }); 
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe((response) => {
      console.log('User updated:', response);
      
    }, (err) => {

    }, () => {
      this.router.navigate(['/']);
    })
  }

  actionButton(){
    if (this.userId!== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
}
