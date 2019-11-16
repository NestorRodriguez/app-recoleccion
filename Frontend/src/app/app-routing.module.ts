import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard} from "./guards/auth.guard";
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'opcionusuario', loadChildren: './opcionusuario/opcionusuario.module#OpcionusuarioPageModule', canActivate : [AuthGuard] },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'mapas', loadChildren: './mapas/mapas.module#MapasPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
