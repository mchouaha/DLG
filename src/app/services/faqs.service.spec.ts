import { Observable } from 'rxjs';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FaqsService } from './faqs.service';

describe('FaqsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it(`should create FaqsService`, async(inject([HttpTestingController, FaqsService],
    (httpClient: HttpTestingController, service: FaqsService) => {
      expect(service).toBeTruthy();
  })));

  it(`should return data from getFaqs `, async(inject([HttpTestingController, FaqsService],
    (httpClient: HttpTestingController, service: FaqsService) => {

      return service.getFaqs().subscribe(data => {
        expect([data].length).toBe(5);
      });
  })));

});
