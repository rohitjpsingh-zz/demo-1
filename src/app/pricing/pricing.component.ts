import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public lang: any;
  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;
    // document.body.style.backgroundImage = "url('/assets/images/sea.png')";
    //  document.body.style.backgroundImage = "linear-gradient(45deg,purple,orange)" ;
     document.body.style.backgroundImage = "linear-gradient(45deg,#000000,#FFB800,black)";
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.height="100%";



    // background: url("http://pp.vk.me/c623124/v623124915/42806/oQsNfigr9tM.jpg");
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

  checkForScreen() {
    if(AppConstant.RTL_LANGUAGES.includes(this.lang) && window.screen.width <= 1000){
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
