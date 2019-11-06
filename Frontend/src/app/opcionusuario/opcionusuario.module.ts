import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OpcionusuarioPage } from './opcionusuario.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionusuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OpcionusuarioPage]
})
export class OpcionusuarioPageModule {}
