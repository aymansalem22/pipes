import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 name='john doe';
 todaysDate= new Date();
 cost=1000;
 temperature=23.3;
 temperature1=25.123456;
pizza = {
  toppings:['pepperoni','mushroom'],
  size:'Large'
};

}


