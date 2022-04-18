import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  title: string = 'QUOTE-APP';
  subtitle: string = 'Create Your Quote';
  userInput!: string;

  onSubmit(): void  {
    console.log(this.userInput.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
