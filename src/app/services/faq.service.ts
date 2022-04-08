import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faq } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  // data is mocked using json file in assets folder
  private faq_url = '/assets/data/faqs.json';

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Make http get request and return obserable with array of faq data
   **/
  getFaqs(): Observable<Faq[]> {
    return this.httpClient.get<Faq[]>(this.faq_url);
  }

}
