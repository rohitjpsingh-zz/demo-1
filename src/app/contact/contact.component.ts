import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import{Post} from '../shared/models/post.model';
import { NgForm } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public post: any = {};
  public lang: any;
  error = true;
  showNotification = false;

  constructor(private ps:PostsService, translate: TranslateService,private dynamicScriptLoader: DynamicScriptLoaderService) {
    this.lang=translate.currentLang;
   }
   goBack() {
    window.history.back();

  }
  ngOnInit(): void {
    this.loadScripts();
    this.ps.getPostsAsync().subscribe(res => {
      console.log(res);
    });
  }

  public submitForm() {
    if(!this.post.name || !this.post.email || !this.post.subject || !this.post.message
      || this.post.name.trim()=='' || this.post.email.trim()=='' || this.post.subject.trim()=='' || this.post.message.trim()==''){
        this.showNotification = true;
        setTimeout(()=>{
          this.showNotification = false;
        },2000)
      return;
    }
    console.log('sending data: ', this.post.name);
    this.ps.sendDate(this.post).subscribe(res => {
      this.error= false;
      this.post = {};
      console.log('res from post: ', res);
      this.showNotification = true;
      setTimeout(()=>{
        this.showNotification = false;
      },2000)
    }, err => {
      console.log('error from post: ', err)
    })
  }

  // checkForRTL() {
  //   if(AppConstant.RTL_LANGUAGES.includes(this.lang) && window.screen.width >= 1000){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('mainjs','pluginsjs').then(data => {
      // Script Loaded Successfully
      console.log("data:",data);      
    }).catch(error => console.log(error));
  }

}
