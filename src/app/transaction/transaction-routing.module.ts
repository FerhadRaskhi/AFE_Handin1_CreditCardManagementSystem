import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
const routes: Routes = [
  {path: 'addTransaction', component: TransactionAddComponent},
  {path: '', component:TransactionListItemComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
