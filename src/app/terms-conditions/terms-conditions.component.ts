import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  visible = false;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  ngAfterViewInit(){
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('mainjs','pluginsjs').then(data => {
      // Script Loaded Successfully
      console.log("data:",data);      
    }).catch(error => console.log(error));
  }


  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
