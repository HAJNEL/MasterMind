import { Component, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  ToggleColorSelector() {
    const elm =  document.querySelector('.ColorSelector') as HTMLElement;
    if (elm.style.visibility === 'collapse') {
      elm.classList.remove('animated', 'bounceOut');
      elm.style.visibility =  'visible';
      elm.classList.add('animated', 'bounceIn');
    } else {
      elm.classList.remove('animated', 'bounceIn');
      elm.classList.add('animated', 'bounceOut');
      elm.style.visibility = 'collapse';
    }
  }

  ChangeColor(Color) {
    const elm =  document.querySelector('.SelectedColor') as HTMLElement;
    switch (Color) {
      case 'primary': elm.attributes[3].nodeValue = 'primary'; break;
      case 'warning': elm.attributes[3].nodeValue = 'warning'; break;
      case 'danger': elm.attributes[3].nodeValue = 'danger'; break;
      case 'dark': elm.attributes[3].nodeValue = 'dark'; break;
      case 'success': elm.attributes[3].nodeValue = 'success'; break;
    }
  }
}
