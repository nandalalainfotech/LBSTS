import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiHelperService } from '@app/services/api-helper.service';

@Injectable()
export class UserService {
  private _url = 'User';

  constructor(private apiHelper: ApiHelperService) {}

  login(username, password) {
    let data = {
      username: username,
      password: password,
    };
    return this.apiHelper.post(this._url, data);
  }
}
