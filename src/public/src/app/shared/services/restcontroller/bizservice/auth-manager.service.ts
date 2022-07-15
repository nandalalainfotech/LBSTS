import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { BaseService } from '../../services/base.service';
import { Login001mb } from "../entities/Login001mb";



@Injectable({ providedIn: 'root' })
export class AuthManager extends BaseService {
    
    private authManagerUrl: string = `${environment.apiUrl}/logincontroller`
    login(uName: string, pWord: string) {
        let params: any = {};
        params['username'] = uName;
        params['password'] = pWord;
        // params['domain'] = domain;
        console.log("params",params);
        return this.getCallService(`${this.authManagerUrl}`+`/lister`, params)
            .pipe(map(res => {
                if (res) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res));
                    this.currentUserSubject.next(res);
                }
                return res;
            }))
    }

    public get getcurrentUser(): Login001mb {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
        this.currentUserSubject.next(currentUser);
        return this.currentUserSubject.value;
    }

    public setcurrentUser(login001mb: any ) {
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
        currentUser = login001mb;
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
    }

    logout(temp: any) {
        sessionStorage.removeItem('currentUser');
        this.dataSharedService.changeMenuAction(null);
        this.currentUserSubject.next(temp);
        this.router.navigate(['']);
    }

}
