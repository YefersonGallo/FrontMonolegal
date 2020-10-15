import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseURL = '/api/Invoice';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(this.baseURL);
  }

}
