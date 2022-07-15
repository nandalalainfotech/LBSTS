import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { ApiHelperService } from '@app/services/api-helper.service';
import { MessageService } from 'primeng/api';
import validator from 'validator';

@Component({
  selector: 'app-profile-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent implements OnInit {
  constructor(private authService: AuthService, private apiService: ApiHelperService, private messageService: MessageService) {}

  userId: number = null;
  password = '';
  newPassword = '';
  confirmPassword = '';
  allowPasswordSubmit = false;

  ngOnInit(): void {
    let { Id } = this.authService.userInfo;
    this.userId = Id;
  }

  onChange() {
    validator.isLength(this.password, { min: 6 }) &&
    validator.isLength(this.newPassword, { min: 6 }) &&
    validator.isLength(this.confirmPassword, { min: 6 })
      ? (this.allowPasswordSubmit = true)
      : null;
  }

  submit() {
    this.newPassword === this.confirmPassword
      ? this.apiService
          .put(`user/${this.userId}/change-password`, { id: this.userId, password: this.password, newPassword: this.newPassword })
          .subscribe((res: any) => {
            if (res.isSuccess) {
              this.messageService.add({ severity: 'success', detail: 'Password updated successfuly' });
              this.password = '';
              this.newPassword = '';
              this.confirmPassword = '';
              this.allowPasswordSubmit = false;
            }
          })
      : this.messageService.add({ severity: 'error', detail: 'Confirm password should equal the new password' });
  }
}
