import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'mod',component:ModulesComponent},
  {path:'tech',component:TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
