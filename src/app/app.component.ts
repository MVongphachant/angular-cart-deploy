import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isRed = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get('http://localhost:3000/cart-items').subscribe(data => console.log(data))
  }

  onClick() {
    this.isRed = !this.isRed;
  }

}
