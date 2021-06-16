import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';
import { PostsService } from '../shared/services/posts.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';
import { CommonService } from './../shared/services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public post: any = {};
  public lang: any;
  error = true;
  showNotification = false;
  visible = false;
 
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,
    private commonService:CommonService,
    private ps:PostsService, 
    public translate: TranslateService) { 
    this.lang=translate.currentLang;
  }

  ngOnInit(): void {
    this.loadScripts();
    this.ps.getPostsAsync().subscribe(res => {
    });
  }
  goBack() {
    window.history.back();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('mainjs','pluginsjs').then(data => {
      // Script Loaded Successfully
      console.log("data:",data);      
    }).catch(error => console.log(error));
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

  checkForRTL() {
    if(AppConstant.RTL_LANGUAGES.includes(this.lang)){
      return true;
    }
    else{
      return false;
    }
  }

  switchLang(language : any){
    this.translate.use(language);
    sessionStorage.setItem("language",language);
    this.lang=language;
    this.visible = false;
  }

  openDrawer(): void {
    this.visible = true;
  }

  closeDrawer(): void {
    this.visible = false;
  }

}
