import { Component } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { users } from './users';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  async createUser() {
    let authKey = '1e4f24db2ae48a7af4135402073a53588c93bc4b';
    let count = 0;
    for (const u of users) {
      if (!u.avatar) {
        var user = new CometChat.User(u.uid);
        user.setName(u.name);
        // user.setAvatar(u.avatar);
        user.setMetadata(JSON.stringify(u.metadata));
        try {
          const userCreated = CometChat.createUser(user, authKey);
          count++;
          console.log(count, userCreated);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
}
