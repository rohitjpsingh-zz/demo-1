import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public lang: any;
  constructor(translate: TranslateService) {
    this.lang=translate.currentLang;
   }

  ngOnInit(): void {
  }

  checkForRTL() {
    if(AppConstant.RTL_LANGUAGES.includes(this.lang) && window.screen.width >= 1000){
      return true;
    }
    else{
      return false;
    }
  }
  goBack() {
    window.history.back();
   

  }


}
