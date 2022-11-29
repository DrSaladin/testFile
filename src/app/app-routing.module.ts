import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesList} from "@test-app/rout-names-list";

/** Main app routing module */
const routes: Routes = [
  { path: RoutesList.FILES_LIST, loadChildren: () => import('./components/files-list/files-list.module').then(m => m.FilesListModule)},
  { path: '', redirectTo: RoutesList.FILES_LIST,  pathMatch: 'full'},
  { path: '**', redirectTo: RoutesList.FILES_LIST, pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
