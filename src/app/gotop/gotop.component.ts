import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../shared/Constant/app.constant';

@Component({
  selector: 'app-gotop',
  templateUrl: './gotop.component.html',
  styleUrls: ['./gotop.component.css']
})
export class GotopComponent {

  public lang: any;

  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;

   }

  ngOnInit(): void {
    // document.body.style.background="white";
      document.body.style.background="linear-gradient(to top,blue,purple)";
      // document.body.style.backgroundImage = "linear-gradient(to top,lightblue,white)";
      // document.body.style.backgroundRepeat="no-repeat";
      //document.body.style.backgroundSize="cover auto auto ";
    //  document.body.style.color="black";
    //  document.body.style.height="auto";
    // document.body.style.overflow="auto";
  }
  // checkForRTL() {
  //   if(AppConstant.RTL_LANGUAGES.includes(this.lang) && window.screen.width >= 1000){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  //   // location.reload();
  // }
  // goBack() {
  //   window.history.back();

  // }
 
}
