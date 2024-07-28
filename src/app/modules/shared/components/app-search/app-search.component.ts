import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './app-search.component.html',
  styleUrl: './app-search.component.scss',
})
export class AppSearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string): void {
    this.search.emit(value);
  }

  // @Output() searchText = new EventEmitter<string>();

  // updateSearchText(event: any) {
  //   const value = event.target.value;
  //   this.searchText.emit(value);
  // }
}
