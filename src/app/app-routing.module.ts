import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThegraphComponent } from './dashboard/thegraph/thegraph.component';

const routes: Routes = [
  { path: '', component: ThegraphComponent },
  {
    path: 'indexer',
    component: ThegraphComponent,
  },
  {
    path: 'indexer/:indexer_address',
    component: ThegraphComponent,
  },
  {
    path: 'delegator',
    component: ThegraphComponent,
  },
  {
    path: 'delegator/:id',
    component: ThegraphComponent,
  },
  {
    path: 'curator',
    component: ThegraphComponent,
  },
  { path: '**', redirectTo: '/indexer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
