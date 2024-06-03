// emai.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    return this.http.post<any>('http://your-backend-api.com/send-email', emailData);
  }
}
