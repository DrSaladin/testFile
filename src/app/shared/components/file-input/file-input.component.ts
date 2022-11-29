import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';


export interface IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export class CustomFile implements IFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;

  constructor(data?: IFile) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.lastModified = data["lastModified"];
      this.lastModifiedDate = data["lastModifiedDate"];
      this.name = data["name"];
      this.size = data["size"];
      this.type = data["type"];
      this.webkitRelativePath = data["webkitRelativePath"];
    }
  }

  static fromJS(data: any): CustomFile {
    data = typeof data === 'object' ? data : {};
    let result = new CustomFile();
    result.init(data);
    return result;
  }
}

/** */
let nextId = 0;

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements OnInit {
  /** */
  @Input() shouldShowTextContent: boolean;
  /** Boolean to disable file-input area */
  @Input() isDisabled: boolean = true;
  /** Types of files to be accepted */
  @Input() accept: string;
  /** Input element ref */
  @ViewChild('fileInput') fileInput: ElementRef;
  /** */
  @Input() showFileSize: boolean = true;
  /** */
  @Input() showFileWipeButton: boolean = false;
  /** */
  @Input() showFileNameLabel: boolean = false;
  /** FileId */
  fileId: string;
  /** Name of uploaded file */
  uploadedFileName: string;
  /** View or can edit mode */
  canEdit: boolean = true ;
  /** File size */
  uploadedFileSize: string;
  /** Show file preview if it has an image type */
  showFilePreview: boolean;
  /** */
  fileReaderText: string;
  /** onChange standard method */
  onChange = (_: any) => {};
  /** onTouched standard method */
  onTouched: () => void;
  private _model: any;
  /** */
  get model(): any {
    return this._model;
  }
  /** Set file model */
  set model(model: IFile) {
    this._model = model;

    this.onChange(model);
    if (model) {
      this.uploadedFileSize = `${(model.size / 1024).toFixed(2)} KB`;
      this.uploadedFileName = model.name;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.fileId = `file-${nextId++}`;
  }

  /** Standard Value accessor method */
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  /** Standard Value accessor method */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /** Standard Value accessor method */
  writeValue(obj: any): void { }

  /**
   * Change file model depend on event origin
   */
  fileChange($event: any): void {
    if ($event.target && $event.target.files.length || $event.dataTransfer && $event.dataTransfer.files) {
      this.model = $event.type === 'change' ? $event.target.files[0] : $event.dataTransfer.files[0];
      this.uploadedFileName = this.model.name;
      this.showFilePreview = true;
      this.onChange(this.model);

      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileReaderText = reader.result as string;
      }
      reader.readAsText(this.model);

    }
  }

  /**
   * Handle file drop event
   */
  onFileDropped(event: any): void {
    this.fileChange(event);
  }

  /**
   * Handle click event and nullify file input value
   * thereby allowing to upload the same file
   */
  onFileAreaClick(): void {
    this.fileInput.nativeElement.value = null;
  }

  /** Wipe file from file input block */
  wipeFile(): void {
    this.showFilePreview = false;
    this.model = new CustomFile();
  }
}
