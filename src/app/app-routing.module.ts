import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThegraphComponent } from './dashboard/thegraph/thegraph.component';

const routes: Routes = [
  { path: '', component: ThegraphComponent },
  {
    path: 'indexer',
    component: ThegraphComponent,
    // canActivate: [IntegrationDetailsGuard]
  },
  {
    path: 'indexer/:indexer_address',
    component: ThegraphComponent,
    // canActivate: [IntegrationDetailsGuard]
  },
  {
    path: 'delegator',
    component: ThegraphComponent,
    // canActivate: [IntegrationDetailsGuard]
  },
  {
    path: 'delegator/:id',
    component: ThegraphComponent,
    // canActivate: [IntegrationDetailsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
