import { Component, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { debug } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {}
  currentColor = '';
  SelectedColors = ['', '', '', ''];


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

  public ChangeColor(Color) {
    this.currentColor = Color;
    const elm =  document.querySelector('.SelectedColor') as HTMLElement;
    elm.attributes[3].nodeValue = Color;
  }

  SetColor(SelectionBox) {
    // debugger;
    this.ResetColor(this.currentColor);

    const elm =  document.querySelector('#SelectBox' + SelectionBox.toString()) as HTMLElement;
    switch (SelectionBox) {
      case 1:
      elm.attributes[3].nodeValue = this.currentColor;
      this.SelectedColors[0] = this.currentColor;
      break;
      case 2:
      elm.attributes[3].nodeValue = this.currentColor;
      this.SelectedColors[1] = this.currentColor;
      break;
      case 3:
      elm.attributes[3].nodeValue = this.currentColor;
      this.SelectedColors[2] = this.currentColor;
      break;
      case 4:
      elm.attributes[3].nodeValue = this.currentColor;
      this.SelectedColors[3] = this.currentColor;
      break;
    }
    console.log(this.SelectedColors);
  }

  public ResetColor(currentColor) {
    let index = 1;
    // tslint:disable-next-line: only-arrow-functions
    this.SelectedColors.forEach (function(SelectedColor) {
      const elm =  document.querySelector('#SelectBox' + index.toString()) as HTMLElement;
      if (elm.attributes[3].nodeValue === currentColor) {
        elm.attributes[3].nodeValue = 'Light';
      }
      index++;
  });
  }
}

/*
 * NOTES:
 * (document.getElementById(SelectedColor) as HTMLInputElement).disabled = true;
 */
