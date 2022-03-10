import { Component, OnInit } from '@angular/core';
import axios from "axios"

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
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${data}&apikey=wjwMPXOUtVFerXr1XhACcVNydgAZXEbH`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
    
  }
  dateChange(data: any){
    console.log(data);
  }
  availabilityChange(data: any){
    console.log(data);
  }
}
