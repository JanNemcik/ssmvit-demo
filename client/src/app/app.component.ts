import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssmvit-demo';
  displayedColumns = ['id', 'name', 'age'];
  data$: Observable<{name: string, age: number}[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.data$ = this.httpClient.get<{name: string, age: number}[]>(environment.apiUrl + 'data');
  }
}
