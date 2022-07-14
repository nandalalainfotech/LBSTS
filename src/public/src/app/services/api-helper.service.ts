import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class ApiHelperService {
  baseUrl = environment.serviceUrl;
  BaseUrl=environment.serviceUrl1;
  

  constructor(private http: HttpClient, private messageService: MessageService) { }
  get<TResponse>(uri: string, params = new HttpParams(), headers = new HttpHeaders()): Observable<TResponse> {
    console.log("get",uri); 
    return this.http.get<TResponse>(this.BaseUrl + uri, { headers, params }).pipe(catchError(this.handleError.bind(this)));
  }

  post<TData, TResponse>(uri: string, data: TData, options = {}): Observable<TResponse> {
    return this.http.post<TResponse>(this.baseUrl + uri, data, options).pipe(catchError(this.handleError.bind(this)));
  }

 

  getBlob(uri: string) {
    return this.http.get(this.baseUrl + uri, { responseType: 'blob' }).pipe(catchError(this.handleGetBlobError).bind(this));
  }

  delete<TResponse>(uri: string, params = new HttpParams()): Observable<TResponse> {
    return this.http.delete<TResponse>(this.baseUrl + uri, { params }).pipe(catchError(this.handleError.bind(this)));
  }

  put<TData, TResponse>(uri: string, data: TData, params = new HttpParams()): Observable<TResponse> {
    console.log("put",this.baseUrl,uri); 
    return this.http.put<TResponse>(this.baseUrl + uri, data, { params }).pipe(catchError(this.handleError.bind(this)));
  }

  handleGetBlobError(httpErrorResponse: HttpErrorResponse) {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      const result = new HttpErrorResponse({ error: JSON.parse(e.srcElement['result']) });
      this.handleError(result);
    });
    reader.readAsText(httpErrorResponse.error);
    return new Observable<HttpErrorResponse>();
  }

  handleError(httpErrorResponse: HttpErrorResponse) {
    this.messageService.clear();
    console.log('errorrrr ', httpErrorResponse);
    this.messageService.add({ severity: 'error', detail: httpErrorResponse.error.error.messageEn });
    return throwError(httpErrorResponse);
  }
}
