import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  title: string = 'QUOTE-APP';
  subtitle: string = 'Create Your Quote';

  onSubmit(): void  {
    console.log(this.userInput);
  }
  userInput(userInput: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
