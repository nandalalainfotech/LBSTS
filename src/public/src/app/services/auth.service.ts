import { Injectable } from '@angular/core';
import { ApiHelperService } from '@app/services/api-helper.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiHelperService, private router: Router) {}

  get isLoogedIn(): boolean {
    let token = localStorage.getItem('__mytokens__');
    return token ? true : false;
  }

  get userInfo() {
    let user = localStorage.getItem('__user__');
    return JSON.parse(user);
  }

  get userToken() {
    let token = localStorage.getItem('__mytokens__');
    return token;
  }

  updateUserInfo(data: any): void {
    localStorage.setItem('__mytokens__', data.token);
    localStorage.setItem('__user__', JSON.stringify(data));
  }

  login(data: any) {
    // this.apiService.post('user', data).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.data) {
        localStorage.setItem('__mytokens__', "res.data.token");
        localStorage.setItem('__user__', JSON.stringify("res.data"));
        this.router.navigate(['/']);
      // }
    // });
  }
}
