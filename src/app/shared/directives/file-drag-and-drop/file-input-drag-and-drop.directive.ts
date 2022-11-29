import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    Output,
} from '@angular/core';


@Directive({
    selector: '[fileDragDrop]',
})

export class FileInputDragAndDropDirective {
    @HostBinding('class.file-input__dropzone--fileOn') fileOverDropzone: boolean | undefined;
    @Output() fileDropped: any = new EventEmitter<any>();

    @HostListener('dragover', ['$event']) onDragOver(dragEvent: any): void {
        dragEvent.preventDefault();
        dragEvent.stopPropagation();
        this.fileOverDropzone = true;
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(dragEvent: any): void {
        dragEvent.preventDefault();
        dragEvent.stopPropagation();
        this.fileOverDropzone = false;
    }

    @HostListener('drop', ['$event']) public ondrop(dragEvent: any): void {
        dragEvent.stopPropagation();
        this.fileOverDropzone = false;
        this.fileDropped.emit(dragEvent);
    }
}
