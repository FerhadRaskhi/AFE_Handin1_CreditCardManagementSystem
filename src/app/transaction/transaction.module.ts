import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionListItemComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
