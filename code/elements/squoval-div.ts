import {SquovalElement} from './squoval-element.js';
import {html} from '../components/squoval-div/squoval-div.html.js';
import {css} from '../components/squoval-div/squoval-div.css.js';

export class SquovalDiv extends SquovalElement implements HTMLDivElement {
  constructor() {
    super(css, html);
  }

  get align() {
    return (this.firstElementChild as HTMLDivElement).align;
  }
}

customElements.define('squoval-div', SquovalDiv);