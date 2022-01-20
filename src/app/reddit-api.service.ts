import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RedditAPIService {
  urlBase:string = "https://www.reddit.com/";
  jsonString:string = "/.json";

  constructor(private http:HttpClient) { }

  searchSubreddit(subreddit:string) : Observable<any>
  {
    let fullURL:string = `${this.urlBase}/r/${subreddit}${this.jsonString}`;
    let result : Observable<any> = this.http.get(fullURL);
    return result;
  }
}
