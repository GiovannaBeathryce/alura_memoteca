import { Component } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {
  pensamento : Pensamento = {
    id: 0,
    conteudo:'',
    autoria:'',
    modelo:''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.idSearch(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  deleteThought(){
    if(this.pensamento.id){
      this.service.deletePost(this.pensamento.id).subscribe(() => {
        this.router.navigate(["/pensamentos"])
      })
    }
  }

  cancel(){
    this.router.navigate(["/pensamentos"])
  }

}
