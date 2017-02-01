import { Injectable } from '@angular/core';

//service returns the mock user data

@Injectable()
export class UserService {

    users: any[]

    constructor() {
        this.users = [
            {"id": 1, "name": "Maddie"},
            {"id": 2, "name": "Matthew"},
            {"id": 3, "name": "Robert"},
            {"id": 4, "name": "Diane"},
            {"id": 5, "name": "Kelly"},
            {"id": 6, "name": "Sanjay"}
        ];
    }

  getUsers() {
    return this.users;
  }
}
