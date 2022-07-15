import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';

  name:string='Jonas';
  imgURL:string='https://picsum.photos/id/237/200/300'

  changeImage(e: KeyboardEvent) {
    return this.imgURL=(e.target as HTMLInputElement).value;
  }

}
