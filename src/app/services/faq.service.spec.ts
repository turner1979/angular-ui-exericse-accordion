import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FaqService } from './faq.service';

describe('FaqService', () => {
  let service: FaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule]});
    service = TestBed.inject(FaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFaqs', () => {

    it('should return the correct amount of faq questions', (done: DoneFn) => {
      service.getFaqs().subscribe(value => {
       expect(value.length).toBe(5);
       done();
      });
    });

  });

});
