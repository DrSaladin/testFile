import {NgModule} from '@angular/core';
import {FileInputDragAndDropDirective} from "./directives/file-drag-and-drop/file-input-drag-and-drop.directive";


const directives = [
  FileInputDragAndDropDirective
]

@NgModule({
  declarations: [
    ...directives
  ],
  exports: [
    ...directives
  ],
})

export class DirectivesModule {}
