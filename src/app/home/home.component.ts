import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lang: any;
  constructor(public translate: TranslateService) {
    this.lang=translate.currentLang;
  }

  ngOnInit(): void {
    //let p =['backg.png','hero-bg.png'];
    // let size = p.length;
    // let random = Math.random();
    // let s = p[0];
    //console.log(p[0]);
   


    //document.body.style.backgroundImage = "url(/assets/images/{$p[0]}`)";
    //document.body.style.backgroundImage = "url('/assets/images/sea.png')";
    //document.body.style.backgroundImage = "linear-gradient(45deg,#000000,#FFB800,black)";
  }

  switchLang(language : any){
    this.translate.use(language);
    sessionStorage.setItem("language",language);
    this.lang=language;
  }
  close(){
    location.reload();


  }
}
