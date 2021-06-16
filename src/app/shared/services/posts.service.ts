import { Post, User } from "../models/post.model";
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';














@Injectable({
    providedIn:'root'
})
export class PostsService {
    private apiurl:string = environment.apiUrl;
    private posts :Post[]=[];
    constructor(private http:HttpClient){}

    // public getPosts(): Post[] {
    //     let posts : Post[] =new Array<Post>();
    //     posts.push(new Post('tarek','dev','tare@gmail.com','hello i need help from u '));
    //     posts.push(new Post('tarek1','dev1','tare1@gmail.com','hello i need help from u 1'));

    //     return posts;
    // }

    public getPostsAsync() :Observable<Post[]>  {

        return this.http.get<Post[]>(`${this.apiurl}/posts`).pipe(
            map((posts :Post[]) => posts)
        );
    }
    public getUsersAsync() :Observable<User[]>  {

        return this.http.get<User[]>(`${this.apiurl}/Users`).pipe(
            map((Users :User[]) => Users)
        );
    }

    public sendDate(data: any) {
        return this.http.post(`${this.apiurl}/posts`, data);
    }
    getHeroes(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiurl);
          // .pipe(
          //   // tap(_ => this.log('fetched heroes')),
          //   catchError(this.handleError<Post[]>('getHeroes', []))
          // );
      }
      // private handleError<T>(operation = 'operation', result?: T) {
      //   return (error: any): Observable<T> => {

      //     // TODO: send the error to remote logging infrastructure
      //     console.error(error); // log to console instead

      //     // TODO: better job of transforming error for user consumption
      //   //   this.log(`${operation} failed: ${error.message}`);

      //     // Let the app keep running by returning an empty result.
      //     return of(result as T);
      //   };
      // }



}
