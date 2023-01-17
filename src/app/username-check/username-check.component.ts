import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css'],
})
export class UsernameCheckComponent implements OnInit {
  inputText = '';

  getDisabled() {
    return this.inputText ? false : true;
  }

  onUpdateInput(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  onEmptyInput() {
    this.inputText = '';
  }

  ngOnInit(): void {}
}
