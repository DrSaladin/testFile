import {IUserInfo} from '@knconsent-app/api/main.interfaces';

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

  constructor(data?: IUserInfo) {
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
