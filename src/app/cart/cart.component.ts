import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items = [];
  @Output() itemAdded = new EventEmitter<string>();
  @Output() itemRemoved = new EventEmitter();
  @Output() backgroundChange = new EventEmitter();
  @Output() backgroundChangedBack = new EventEmitter();
  newItem = '';
  @Input() colorChange = false;

  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
  onRemoveItem() {
    this.itemRemoved.emit();
  }
  onBackgroundChange() {
    this.backgroundChange.emit();
  }
  onChangeBack() {
    this.backgroundChangedBack.emit();
  }
}

