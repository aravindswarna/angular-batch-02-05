import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-tracker';

  groceryItems: Array<String> = ['Rice', 'Lentils', 'Pulses', 'Cereals', 'Biscuits'];

  listType: String = 'unordered'; // or unordered

  sort(key: String){
    if(key == 'ASC'){
      this.groceryItems.sort();
    } else {
      this.groceryItems.sort().reverse();
    }
  }

  removeItem(item: String){
    let idx = this.groceryItems.indexOf(item);
    this.groceryItems.splice(idx, 1);
  }
}
