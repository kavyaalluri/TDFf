import { Component, VERSION } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  topics = ['Angular', 'React', 'js', 'Html'];
  userModel = new User('', '', '', 0, '', '', false);
  submitForm(userForm) {
    console.log(userForm.value);
  }
}
