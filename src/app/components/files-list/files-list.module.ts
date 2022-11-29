import {NgModule} from "@angular/core";
import {FilesListComponent} from "./files-list.component";
import {FileCreateEditComponent} from "./file-create-edit/file-create-edit.component";
import {FilesListRoutingModule} from "@test-app/components/files-list/files-list-routing.module";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {SharedComponentsModule} from "@test-app/shared/components/shared-components.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FilesListComponent,
    FileCreateEditComponent
  ],
  imports: [
    FilesListRoutingModule,
    TableModule,
    CommonModule,
    ButtonModule,
    RouterModule,
    SharedComponentsModule,
    FormsModule
  ],
  providers: [],
})
export class FilesListModule { }
