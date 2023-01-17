import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css'],
})
export class UsernameCheckComponent implements OnInit {
  allowNewInput: boolean = false;
  inputText = '';

  constructor() {}

  onUpdateInput(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onEmptyInput() {
    this.inputText = '';
  }

  ngOnInit(): void {}
}
