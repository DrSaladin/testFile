import {NgModule} from '@angular/core';
import {FileInputComponent} from "./file-input/file-input.component";
import {CommonModule} from "@angular/common";
import {DirectivesModule} from "@test-app/shared/directives.module";
import {ButtonModule} from "primeng/button";


const sharedComponents = [
  FileInputComponent,
]

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  exports: [
    ...sharedComponents,

  ],
  imports: [
    CommonModule,
    DirectivesModule,
    ButtonModule

  ],
  providers: [

  ]
})
export class SharedComponentsModule {}
