import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test';
  name = ''
  count = 0

  options = [
    {
      id: "11",
      text: "React",
    },
    {
      id: "22",
      text: "Vue",
    },
    {
      id: "33",
      text: "Angular",
    },
    {
      id: "44",
      text: "JavaScript",
    }
  ]

  selected = {
    id: "44",
    text: "JavaScript",
  }

  isConfirm = false

  onClick(event: any) {
    this.count = this.count + 1
    console.log(event)
  }

  onAiInput(event: any) {
    console.log('input', event.target.value)
    this.name = event.target.value

    if (this.isConfirm) {
      this.isConfirm = false
    }
  }

  onSelectChange(event: any) {
    this.selected = event.detail.selected
    console.log('event', event)
  }
}
