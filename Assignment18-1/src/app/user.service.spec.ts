/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService]
        });
    });

    //check if service is created
    it('should ...', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    //check if the correct length of the array is returned
    it('should return length', inject([UserService], (service: UserService) => {
        let test = [
            {"id": 1, "name": "Amar"},
            {"id": 2, "name": "Akbar"},
            {"id": 3, "name": "Anthony"}
        ]
        service.users = test;
        expect(service.getUsers().length).toEqual(3);
    }));
});
