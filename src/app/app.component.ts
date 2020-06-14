import { Component, OnInit } from '@angular/core';
// import { PostServiceService } from './services/post-service.service';
import { PostFirebaseService } from './services/post-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  getData: any;
  postData1: any;

  constructor (private  postFirebaseService: PostFirebaseService) { }

  ngOnInit() {
    this.showUserListData();
    // this.postListData();
  }

  showUserListData(){
    this.postFirebaseService.getuserListData().subscribe(data => {
      this.getData = data;
    });
  }

  postListData(){
    this.postFirebaseService.postUserData().subscribe(data => {
      this.postData1 = data;
    });
  }

}
