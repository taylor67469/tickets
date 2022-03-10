import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  locationChange(data: any){
    console.log(data);
    
  }
  dateChange(data: any){
    console.log(data);
  }
  availabilityChange(data: any){
    console.log(data);
  }
}
