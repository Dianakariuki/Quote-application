
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
upvotes(){
  this.quote.upvotes++;
}

downvotes(){
  this.quote.downvotes++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
