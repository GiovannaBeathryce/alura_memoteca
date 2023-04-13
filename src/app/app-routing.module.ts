import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ThoughtWallComponent } from './components/thoughts/thought-wall/thought-wall.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'pensamentos',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: CreateThoughtComponent
  },
  {
    path: 'pensamentos',
    component: ThoughtWallComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: UpdateThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
