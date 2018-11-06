import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictorService {
  
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getPredictionTest1(course, test1mark) {
    return this.http.get(`${this.uri}/predict/${course}/${test1mark}`);
  }

  getPredictionTest2(course, test1mark, test2mark) {
    return this.http.get(`${this.uri}/predict/${course}/${test1mark}/${test2mark}`);
  }
}
