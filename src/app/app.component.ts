import { Component } from '@angular/core';
import { WekipediaService } from './wekipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';
  constructor(private Wekipedia:WekipediaService){

  }
  pages= [];

  onTerm(term:any)
  {
    this.Wekipedia.search(term).subscribe((response:any) =>{
      this.pages=response.query.search;
    });
   
  }
}
