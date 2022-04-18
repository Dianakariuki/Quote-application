import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "Quote", "“Be yourself; everyone else is already taken.”", "By: Oscar Wilde", 0, 0, new Date(2022,0,8) ),
    new Quote(2, "Quote", "“Be the change that you wish to see in the world.”", " By: Mahatma Gandhi", 0, 0, new Date(2022,1,6)),
    new Quote(3, "Quote", " “We accept the love we think we deserve.”", " By: Stephen Chbosky", 0, 0, new Date(2022,2,25)),
    new Quote(4, "Quote", "“We are all in the gutter, but some of us are looking at the stars.”", "By: Caroline Wilde", 0, 0, new Date(2022,1,11)),
  ];

  first!:number;
    last!:number;
    count!:number;

    highestUpvote(){
      this.first = 0
      this.last = 0

      for(this.count=0; this.count <this.quotes.length; this.count++){
      this.last =this.quotes[this.count].upvotes;
      if(this.last>this.first){this.first = this.last}
    }
    return this.first
  }    
   

  addNewQuote(quote:Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm("Are you sure you want to delete this Quote?")

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
