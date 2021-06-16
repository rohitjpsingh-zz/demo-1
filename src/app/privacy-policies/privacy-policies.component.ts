import { Component, OnInit  } from '@angular/core';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.css']
})
export class PrivacyPoliciesComponent implements OnInit  {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('mainjs','pluginsjs').then(data => {
      // Script Loaded Successfully
      console.log("data:",data);      
    }).catch(error => console.log(error));
  }
}
