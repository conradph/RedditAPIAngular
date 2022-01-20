import { Component } from '@angular/core';
import { RedditAPIService } from './reddit-api.service';
import { Reddit, Convert } from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditAPI';
  reddit?:Reddit;
  constructor(private redditAPI:RedditAPIService){}

  getSubreddit(){
    let subreddit:string = "aww";
    this.redditAPI.searchSubreddit(subreddit).subscribe(
      (result:Reddit) => {
        if(result){
          console.log(result);
          this.reddit = result;
        }
      }
    )
  }
}
