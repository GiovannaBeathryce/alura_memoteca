import { ThoughtService } from './../thought.service';
import { Pensamento } from './../thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thought-wall',
  templateUrl: './thought-wall.component.html',
  styleUrls: ['./thought-wall.component.css']
})
export class ThoughtWallComponent {
  listaPensamentos : Pensamento[] = []

  constructor(private service: ThoughtService){}

  ngOnInit(): void {
    this.service.list().subscribe((listarPensamentos)=>{
      this.listaPensamentos = listarPensamentos
    })
  }

}
