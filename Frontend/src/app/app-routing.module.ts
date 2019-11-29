import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard} from "./guards/auth.guard";
import { from } from 'rxjs';
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate : [NologinGuard]},
  { path: 'opcionusuario', loadChildren: './opcionusuario/opcionusuario.module#OpcionusuarioPageModule', canActivate : [AuthGuard] },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'mapas', loadChildren: './mapas/mapas.module#MapasPageModule' },
  { path: 'registro', loadChildren: './componentes/registro/registro.module#RegistroPageModule'  },
  { path: 'opcionadmin', loadChildren: './opcionadmin/opcionadmin.module#OpcionadminPageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
