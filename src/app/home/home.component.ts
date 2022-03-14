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
    console.log(response.data._embedded.events);
    console.log(response.data._embedded.events[0].priceRanges[0].min);
    console.log(response.data._embedded.events[0]._embedded.venues[0].name);
    
    this.name=response.data._embedded.events.map((e: { name: any; images: any; dates: { start: { localDate: any; }; }; info:any; priceRanges:[{min:any,max:any}]; seatmap:{staticUrl:any}; url:any; _embedded:{venues:[{name:any}]}})=>{
      if (e.seatmap==undefined||e.seatmap.staticUrl==undefined){
        e.seatmap.staticUrl='';
        console.log("seatmap not found");
        return [e.name,e.images[0].url,e.dates.start.localDate,e.info,e.priceRanges[0].min,e.priceRanges[0].max,e.seatmap.staticUrl,e.url,e._embedded.venues[0].name];  
      }
      if (e.images[0].url==undefined){
        e.images[0].url='';
        console.log("images not found");
        return [e.name,e.images[0].url,e.dates.start.localDate,e.info,e.priceRanges[0].min,e.priceRanges[0].max,e.seatmap.staticUrl,e.url,e._embedded.venues[0].name];  
      }
      if (e.images[0].url==undefined&&e.seatmap==undefined&&e.info==undefined||e.seatmap.staticUrl==undefined&&e.priceRanges==undefined){
        console.log("images not found and seatmap+ info");
        e.images[0].url='';
        e.images.seatmap='';
        e.info='';
        return [e.name,e.images[0].url,e.dates.start.localDate,e.info,e.priceRanges[0].min,e.priceRanges[0].max,e.seatmap.staticUrl,e.url,e._embedded.venues[0].name];  
      }
  
      if(e.priceRanges==undefined||e.priceRanges[0].min==undefined||e.priceRanges[0].max==undefined&&e.info==undefined){
        return  [e.name,e.images[0].url,e.dates.start.localDate,"No information found","Minimum price range not found.","Maximum price range not found.",e.seatmap.staticUrl,e.url,e._embedded.venues[0].name];
      }
      else{
        console.log('nothing');
        
      return  [e.name,e.images[0].url,e.dates.start.localDate,e.info,e.priceRanges[0].min,e.priceRanges[0].max,e.seatmap.staticUrl,e.url,e._embedded.venues[0].name];  
      }
    })
  })
  }
}
