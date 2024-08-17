import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { TechnologyComponent } from './technology/technology.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'mod',component:ModulesComponent},
  {path:'tech',component:TechnologyComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
