import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentNotFoundComponent } from './component-not-found/component-not-found.component';

const routes: Routes = [
  { path: 'componenta', component: ComponentAComponent },
  { path: 'componentb', component: ComponentBComponent },
  { path: '**', component: ComponentNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { 

 

}
