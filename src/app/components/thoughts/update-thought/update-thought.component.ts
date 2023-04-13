import { Component } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent {
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

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.idSearch(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento(){
    this.service.updatePost(this.pensamento).subscribe(() => {
      this.router.navigate(['/pensamentos'])
    })
  }

  cancel(){
    this.router.navigate(['/pensamentos'])
  }
}
