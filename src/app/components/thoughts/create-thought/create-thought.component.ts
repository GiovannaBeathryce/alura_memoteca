import { ThoughtService } from './../thought.service';
import { Pensamento } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  pensamento : Pensamento = {
    conteudo:'',
    autoria:'',
    modelo:''
  }

  constructor(
    private service:ThoughtService,
    private router: Router
  ){}

  criarPensamento(){
    this.service.create(this.pensamento).subscribe(() => {
      this.router.navigate(["/pensamentos"])
    })
  }

  cancelaCriacao(){
    this.router.navigate(["/pensamentos"])
  }
}
