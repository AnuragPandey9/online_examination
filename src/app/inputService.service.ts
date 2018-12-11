import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class inputService {
  private getUrl = "http://localhost:5000/routes/getSubjects";
  private postUrl= "http://localhost:5000/routes/postSubjects";
  constructor(private http$:HttpClient){};
  getSubjects():Observable<any>{
      return this.http$.get(this.getUrl);
  }
  postSubjects(searchString:String):Observable<any>{
    return this.http$.post(this.postUrl,{searchString:searchString});
  }
}