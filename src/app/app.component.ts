import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();
  name:string='jonas';
  imgURL:string='https://picsum.photos/id/237/200/300';
  images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/237/200/300'
  ]
  cost = 2000;
  temperature = 25.3;
  pizza ={
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false;
  fontSize = 16;


  changeImage(e: KeyboardEvent) {
    return this.imgURL=(e.target as HTMLInputElement).value;
  }

  logImg(event:string) {
    console.log(event);
  }


}
