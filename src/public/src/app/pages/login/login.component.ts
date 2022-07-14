import { Component } from '@angular/core';
import validator from 'validator';
import { AuthService } from '@app/services/auth.service';
import { MessageService } from 'primeng/api';

interface User {
  identity: string;
  password: string;
}
interface ValidatorErrors {
  identity?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private messageService: MessageService) {}

  user: User = {
    identity: '',
    password: '',
  };

  validIdentity = true;
  validPassword = true;
  errors: ValidatorErrors = {};

  private validateForm = (user: User): ValidatorErrors => {
    validator.isLength(user.identity, { min: 6 })
      ? ((this.validIdentity = true), (this.errors.identity = null))
      : ((this.validIdentity = false), (this.errors.identity = 'Email or Username or Phone is required'));
    validator.isLength(user.password, { min: 6 })
      ? ((this.validPassword = true), (this.errors.password = null))
      : ((this.validPassword = false), (this.errors.password = 'Password minimum length is 6 characters'));

    return this.errors;
  };

  submit = () => {
    // let errors = this.validateForm(this.user);
    // if (errors.identity || errors.password) {
    //   this.messageService.clear();
    //   Object.keys(errors).map((e) => {
    //     if (errors[e]) this.messageService.add({ severity: 'error', summary: e, detail: errors[e] });
    //   });
    // } else {
      this.authService.login(this.user);
    // }
  };
}
