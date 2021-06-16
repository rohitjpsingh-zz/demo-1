import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GotopComponent } from './gotop/gotop.component';

import{ RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { PostListComponent } from './post-list/post-list.component';
import {PostsService} from './shared/services/posts.service';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WelcomeComponent } from './welcome/welcome.component';
import {DynamicScriptLoaderService} from './shared/services/dynamic-script-loader.service';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    GotopComponent,
    NotFoundComponent,
     NotFoundComponent,
     PricingComponent,
     FaqComponent,
     PostListComponent,
     WelcomeComponent,
     PrivacyPoliciesComponent,
     TermsConditionsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule,AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule, 
    DemoNgZorroAntdModule


  ],
  providers: [PostsService,DynamicScriptLoaderService, { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
