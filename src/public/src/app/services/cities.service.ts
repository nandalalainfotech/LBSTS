import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cities } from '../models/cities';

@Injectable()
export class CitiesService {

    constructor(private http: HttpClient) { }

    getCities() {
        return this.http.get<any>('assets/demo/data/products.json')
        .toPromise()
        .then(res => res.data as Cities[])
        .then(data => data);
    }
}
