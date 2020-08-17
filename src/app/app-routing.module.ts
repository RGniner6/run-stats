import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActivityListComponent} from "./component/activity-list/activity-list.component";
import {ActivityDetailsComponent} from "./component/activity-details/activity-details.component";


const routes: Routes = [
  {path: '', component: ActivityListComponent},
  {path: 'runs/:id', component: ActivityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
