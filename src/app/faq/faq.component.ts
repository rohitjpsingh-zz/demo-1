import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {
  public lang: any;
  
  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;
    // document.body.style.backgroundImage = "linear-gradient(45deg,#FFB800,black,#FFB800)";
    document.body.style.background="#E0E0E0";
    // document.body.style.background="white";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize="cover 100 % 100% ";
    document.body.style.color="black";
    document.body.style.height="100%";



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
