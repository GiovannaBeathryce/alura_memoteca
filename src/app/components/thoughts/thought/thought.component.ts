import { Pensamento } from './../thought';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() pensamento : Pensamento = {
    id: 0,
    conteudo:'I Love Angular',
    autoria:'Gih',
    modelo:'modelo2'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
        return 'pensamento-g'
    }
    return 'pensamento-p'
}
}
