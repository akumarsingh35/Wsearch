import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted:EventEmitter<any> = new EventEmitter();

  constructor() { }
  term="";

  ngOnInit(): void {
    
  }
  onInput(event: Event)
  {
   this.term=(event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: any)
  {
    event.preventDefault();
    this.submitted.emit(this.term);
    console.log(this.term);
  }
}
