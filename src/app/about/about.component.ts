import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public lang: any;
  constructor(translate: TranslateService) {
    this.lang=translate.currentLang;
   }

  ngOnInit(): void {
  }
  goBack() {
    window.history.back();

  }
}
