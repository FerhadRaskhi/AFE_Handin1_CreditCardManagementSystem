import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { TransactionListItemComponent } from './transaction/transaction.module';
const routes: Routes = [
//{path: '', component: TransactionListItemComponent},
{path: 'transaction',loadChildren: () =>import('./transaction/transaction.module').then(m => m.TransactionModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
