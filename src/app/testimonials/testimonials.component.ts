import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  public lang: any;
  constructor(translate: TranslateService) {
    this.lang=translate.currentLang;
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
  goBack() {
    window.history.back();

  }

}
