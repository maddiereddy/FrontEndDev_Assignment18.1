import { Component } from '@angular/core';
import { UserService } from './user.service';

//UserService is injected
//users list is sent back and displayed in the view

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent{
    users: Array<any>;
    title = "User List";

    constructor(userService: UserService){
        this.users = userService.getUsers();
    }

}
