import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFoldersComponent } from './manage-folders.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ItemService } from '../services/item.service';
import { ConfirmationService, MessageService } from 'primeng/api';

const appRoutes : Routes= [
    {
      path        : '',
      component : ManageFoldersComponent
    },
    {
      path        : ':parentId',
      component : ManageFoldersComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers : [ItemService, ConfirmationService,MessageService],
  declarations: [ManageFoldersComponent]
})
export class ManageFoldersModule { }
