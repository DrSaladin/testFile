import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, throwError} from "rxjs";

export interface IFileResponse {
  totalCount: number;
  files: INewFile[],
}

export interface INewFile {
  filename: string,
  uploadDateTime: Date,
  size: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class FilesApiService {

  constructor() {

  }

  getAllFilesMock(): Observable<IFileResponse> {
    return of({
      files: [
        {
          filename: '1',
          uploadDateTime: new Date(),
          size: '1Kb',
          id: 1
        },
        {
          filename: '2',
          uploadDateTime: new Date(),
          size: '1Kb',
          id: 2,
        },
        {
          filename: '3',
          uploadDateTime: new Date(),
          size: '1Kb',
          id: 3,
        },
      ],
      totalCount: 3
    })
      .pipe(
        map((result) => {
          return result
        }),
        catchError((error) => {
          console.warn(error.error)
          return throwError(error.error);
        })
      )
  }
}
