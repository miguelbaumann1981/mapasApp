import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './mapas/pages/full-screen/full-screen.component';


const routes: Routes = [
   {
      path: 'mapas',
      loadChildren: () => import('./mapas/mapas.module').then(m => m.MapasModule)
   },
   {
      path: '**',
      redirectTo: 'mapas'
   }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
   ],
  exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
