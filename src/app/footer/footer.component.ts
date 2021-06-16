import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public lang: any;

  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;
   }

  ngOnInit(): void {
    // location.reload();
  }

  checkForRTL() {
    if(AppConstant.RTL_LANGUAGES.includes(this.lang) && window.screen.width >= 1000){
      return true;
    }
    else{
      return false;
    }
    // location.reload();
  }
  goBack() {
    window.history.back();

  }

}
