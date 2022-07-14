import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interceptor-example',
  templateUrl: './interceptor-example.component.html',
  styleUrls: ['./interceptor-example.component.scss'],
})
export class InterceptorExampleComponent implements OnInit {
  response: Observable<any>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  suceed() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    this.response = this.http.get(url);
  }

  fail() {
    const url = 'https://jsonplaceholder.typicode.com/todos/as/1';
    this.response = this.http.get(url);
  }
}
