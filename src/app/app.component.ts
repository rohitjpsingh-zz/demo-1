import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biz';
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ar'])
    translate.setDefaultLang('en');
    let language = JSON.parse(JSON.stringify(sessionStorage.getItem("language")));
    if(language==null){
      language = 'en';
    }
    translate.use(language);
  }
  goBack() {
    window.history.back();

  }
}
