import { Component, OnInit } from '@angular/core';
import {FilesApiService, IFileResponse, INewFile} from "@test-app/api/files-api.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import { tap} from "rxjs";
import {Router} from "@angular/router";
import {RoutesList} from "@test-app/rout-names-list";

@UntilDestroy()
@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.less']
})
export class FilesListComponent implements OnInit {
  /** all files */
  allFiles: INewFile[] = [];
  /** */
  totalCount: number;
  /** */
  routerList: any = RoutesList;

  constructor(
    private _filesApiService: FilesApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  /**
   *
   */
  getAllFiles(): void {
    this._filesApiService.getAllFilesMock()
      .pipe(
        tap(({files, totalCount}) => {
          this.allFiles = files;
          this.totalCount = totalCount;
        }),
        untilDestroyed(this),
      )
      .subscribe()
  }

  /**
   *
   */
  openFileEditMode(id: number): void {
    this._router.navigate([`${this.routerList.FILE}/${id}`])
  }
}
