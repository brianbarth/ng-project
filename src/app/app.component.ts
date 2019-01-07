import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ['Apples', 'Bananas', 'Cherries', 'Melon', 'Kiwi', 'Blueberries', 'Cantaloupe', 'Strawberries', 'Blackberries', 'Papaya'];
  colorHasChanged = false;

  onItemWasAdded(newItem) {
    this.rootItems = [ ...this.rootItems, newItem ]
    console.log(this.rootItems);
  }
  onItemWasRemoved() {
    this.rootItems = this.rootItems.slice(0, -1);
    console.log(this.rootItems);
  }
  changeBackground() {
    this.colorHasChanged = true;
  }
  changeBackgroundBack() {
    this.colorHasChanged = false;
  }
}



