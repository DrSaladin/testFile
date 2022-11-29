import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesList} from "@test-app/rout-names-list";
import {FilesListComponent} from "@test-app/components/files-list/files-list.component";
import {FileCreateEditComponent} from "@test-app/components/files-list/file-create-edit/file-create-edit.component";


const files: Routes = [
  { path: RoutesList.FILES_LIST, component: FilesListComponent},
  { path: RoutesList.FILE, component: FileCreateEditComponent},
  { path: `${RoutesList.FILE}/:id`, component: FileCreateEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(files)],
})

export class FilesListRoutingModule {}
