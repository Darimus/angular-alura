import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  photos = [
    {
      url: 'https://daarken.com/shop/wp-content/uploads/2018/06/403868-Balduvian-Horde.jpg',
      description: 'Viking Warriors'
    },

    {
      url: 'https://i.pinimg.com/originals/2c/26/e8/2c26e86579d25cb108b94d21ca27bcf1.jpg',
      description: 'Liliana Vess'
    }
  ];
  
}
