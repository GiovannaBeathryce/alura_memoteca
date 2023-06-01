import { ThoughtService } from './../thought.service';
import { Pensamento } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  formulario! : FormGroup

  constructor(
    private service:ThoughtService,
    private router: Router,
    private formBuilder : FormBuilder
  ){}

  ngOnInit() : void {
    this.formulario = this.formBuilder.group({
      conteudo:['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors);

    if(this.formulario.valid){
        this.service.create(this.formulario.value).subscribe(() => {
        this.router.navigate(["/pensamentos"])
      })
    }
  }

  cancelaCriacao(){
    this.router.navigate(["/pensamentos"])
  }

  btnIsActibe() : string {
    if(this.formulario.valid){
      return 'botao'
    }
    return 'btn_disabled'
  }
}
