import { Component, OnInit } from '@angular/core';
import axios from "axios"

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  name:any;
  images:any;
  ngOnInit(): void {
  }
  locationChange(data: any){
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${data}&apikey=wjwMPXOUtVFerXr1XhACcVNydgAZXEbH`)
  .then( (response) => {
    // handle success
    // console.log(response.data._embedded.events.map((e: any)=>{
    //   console.log(e.name);

    // }))
    this.name=response.data._embedded.events.map((e: { name: any; })=>{
      return e.name;  
    })
    // this.images=response.data._embedded.events.map((e: { images: any; })=>{
    //   e.images[0].url;
    // })
    // this.images=response.data._embedded.events.map((e: { images: any; })=>{
    //   return e.images.url;
    // })
  })
  }
  dateChange(data: any){
    console.log(data);
  }
  availabilityChange(data: any){
    console.log(data);
  }
}
