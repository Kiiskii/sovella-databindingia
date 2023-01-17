import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css'],
})
export class UsernameCheckComponent implements OnInit {
  allowNewInput: boolean = false;
  inputText = '';
  inputCreateStatus = 'Enter text!';

  constructor() {}

  onUpdateInput(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onCreateText() {
    this.inputCreateStatus = this.inputText;
  }

  ngOnInit(): void {}
}
