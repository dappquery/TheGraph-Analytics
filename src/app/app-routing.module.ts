import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThegraphComponent } from './dashboard/thegraph/thegraph.component';


const routes: Routes = [
  { path: '', component: ThegraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
