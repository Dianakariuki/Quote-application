import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  title: string = 'QUOTE-APP';
  subtitle: string = 'Create Your Quote';
  
  constructor() { }

  ngOnInit(): void {
  }

}
