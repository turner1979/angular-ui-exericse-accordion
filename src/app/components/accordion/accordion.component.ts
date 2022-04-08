import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FaqService } from '../../services';
import { Faq } from '../../models';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  // faqs$ property is used to hold our faqs data, we subscribe to this in the template
  faqs$: Observable<Faq[]> = of([]);

  // index of the open answer, used for adding open class in template
  openAnswer: number = -1;

  constructor (
    private faqService: FaqService
  ) {

  }

  ngOnInit(): void {
    this.getFaqs();
  }

  /**
   * Get the faqs data using service and store in the faqs$ observable
   * @param {string} n - A string param
   **/
  getFaqs(): void {
    this.faqs$ = this.faqService.getFaqs();
  }

  /**
   * Sets the value of openAnswer property to the provided index, for adding class conditionally in template
   * @param index the index of the clicked question
   **/
  onOpenAnswer(index: number): void {
    this.openAnswer = this.openAnswer === index ? -1 : index;
  }

}
