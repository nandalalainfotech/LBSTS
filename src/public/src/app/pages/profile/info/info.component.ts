import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { ApiHelperService } from '@app/services/api-helper.service';
import { MessageService } from 'primeng/api';

import validator from 'validator';

interface User {
  Avatar?: string;
  Email: string;
  Phone: string;
  Username: string;
}

@Component({
  selector: 'app-profile-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  constructor(private authService: AuthService, private apiService: ApiHelperService, private messageService: MessageService) {}

  allowInfoSubmit = false;
  wrongEmail = false;
  wrongPhone = false;
  wrongUsername = false;

  userId: number = null;
  user: User = {
    Avatar: null,
    Email: '',
    Phone: '',
    Username: '',
  };

  ngOnInit(): void {
    let { Id, Avatar, Email, Phone, Username } = this.authService.userInfo;
    this.userId = Id;
    this.user = { Avatar, Email, Phone, Username };
  }

  onChange() {
    let originalData = this.authService.userInfo;
    Object.keys(this.user).map((item) => (this.user[item] !== originalData[item] ? (this.allowInfoSubmit = true) : false));
    let { Email, Phone, Username } = this.user;
    validator.isEmail(Email) && Phone && Username ? null : (this.allowInfoSubmit = false);
    !Email ? (this.wrongEmail = true) : (this.wrongEmail = false);
    !Phone ? (this.wrongPhone = true) : (this.wrongPhone = false);
    !Username ? (this.wrongUsername = true) : (this.wrongUsername = false);
  }

  submit() {
    console.log("Testing ");
    if (this.allowInfoSubmit)
      this.apiService.put(`user/${this.userId}`, this.user).subscribe((res: any) => {
        console.log("Testing",res);
        if (res.isSuccess) {
          this.authService.updateUserInfo(res.data);
          let { Id, Avatar, Email, Phone, Username } = this.authService.userInfo;
          this.userId = Id;
          this.user = { Avatar, Email, Phone, Username };
          this.messageService.add({ severity: 'success', detail: 'Info updated successfully' });
        }
      });
  }
}
