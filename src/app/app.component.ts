import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(newItem) {
    const transItem = newItem.toUpperCase();
    this.rootItems.push(transItem);
    console.log(this.rootItems);
  }
  onItemWasRemoved() {
    this.rootItems.pop();
    console.log(this.rootItems);
  }
}
