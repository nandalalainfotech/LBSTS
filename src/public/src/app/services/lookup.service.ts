import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lookup } from '@app/models/lookup';
import { ApiHelperService } from './api-helper.service';


@Injectable()
export class LookupService {


    constructor(private http: HttpClient, private apiService: ApiHelperService) { }

    getCountryLookup() {
        return this.http.get<any>('assets/demo/data/country-list.json')
            .toPromise()
            .then(res => res.data as Lookup[])
            .then(data => data);
    }

    getLookup() {
        console.log("getLookup called...!");
        return this.apiService.get<any>('Lookup/GetAll').toPromise().
            then(res => res.data as Lookup[])
            .then(data => data);
    }
}
