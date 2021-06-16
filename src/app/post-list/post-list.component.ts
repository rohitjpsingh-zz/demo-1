import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {Post} from '../shared/models/post.model';
import {PostsService} from '../shared/services/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, AfterViewInit {
  @ViewChild('loginModal', { static: false }) loginModal!: ModalDirective;
  public posts : Post[] =[] ;
  userName = '';
  password = '';
  canShow = false;
  users: any[] = [];
  AlertMessage = '';
  constructor(private postService : PostsService) {

   }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loginModal.show();
    }, 2000);
  }

  ngOnInit(): void {
    // this.getHeroes();
    this.getUsers();

    document.body.style.backgroundImage = "linear-gradient(45deg,orange,white)";
    // document.body.style.backgroundRepeat="no-repeat";
    // document.body.style.height="100%";
  }

  getHeroes(): void {
    this.postService.getPostsAsync().
    subscribe(posts =>
      // console.log(posts);
      this.posts = posts
      );
  }
  getUsers(): void {
    this.postService.getUsersAsync().
    subscribe(users =>
      // console.log(users);
       this.users = users
      );
  }
  Login() {
    const fUser = this.users.find(x => x.userName === this.userName && x.password === this.password);
    if (fUser) {
      this.loginModal.hide();
      this.getHeroes();
    } else {
      this.AlertMessage = 'Username or password is incorrect';
      setTimeout(() => {
        this.AlertMessage = '';
      }, 3000);
    }
  }



}
