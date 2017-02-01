/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service';

/*
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'User List'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('User List');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('User List');
  }));

});
*/

//My tests for Assignments
describe('User List Tests', () => {
    let list: AppComponent;
    let service:UserService = new UserService();

    beforeAll(() => {
        list = new AppComponent(service);
    });

    //check if correct array length is returned
    it('Should get 6 users', () => {
        expect(list.users.length).toEqual(6);
    });

    //check if correct keys are in object
    it('Should get keys', () => {
        expect(Object.keys(list.users[0])).toContain('id');
    });

    it('Should get keys', () => {
        expect(Object.keys(list.users[0])).toContain('name');
    });
});

