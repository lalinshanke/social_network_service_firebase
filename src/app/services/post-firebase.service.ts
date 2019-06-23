import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostFirebaseService {

  constructor( private http: HttpClient ) { }

  getuserListData(){
    return this.http.get('https://my-angular-chat-app-api.firebaseio.com/userInfo.json').pipe(
      map((response:Response) => {
        return response;
      })
    );
  }
}
