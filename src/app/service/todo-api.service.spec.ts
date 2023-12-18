import { TestBed } from '@angular/core/testing';


import { DataApiService } from '../service/todo-api.service';


describe('TodoApiService', () => {
  let service: DataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
