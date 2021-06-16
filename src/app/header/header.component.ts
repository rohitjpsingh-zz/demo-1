import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';
// import { CommonService } from './../shared/services/common.service';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // clickEventsubscription:Subscription;

  public lang: any;
  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;
    // this.clickEventsubscription=    this.commonService.getClickEvent().subscribe(()=>{
    //   // this.getalert();
    // })
   }

  ngOnInit(): void {
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
  }

  getalert(){
    alert('click');
  }

}
