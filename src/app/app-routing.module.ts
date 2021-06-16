import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { PostListComponent } from './post-list/post-list.component';
import { GotopComponent } from './gotop/gotop.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';


const appRoutes: Routes = [

  { path: '', component: WelcomeComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'services', component: ServicesComponent },
   { path: 'about', component: AboutComponent },
   { path: 'portfolio', component: PortfolioComponent },
   { path: 'testimonials', component: TestimonialsComponent },
   { path: 'pricing', component: PricingComponent },
   { path: 'faq', component: FaqComponent },
   { path: 'postsList', component: PostListComponent },
   { path: 'footer', component: FooterComponent },
   { path: 'faqq', component: GotopComponent },
   { path: 'fardos.dev', component: HomeComponent },
   { path: 'dev', component: HomeComponent },
   { path: 'welcome', component: WelcomeComponent },
   { path: 'privacy-policies', component: PrivacyPoliciesComponent },
   { path: 'terms-conditions', component: TermsConditionsComponent },
  //  { path: "", component: HomeComponent },



   { path: '',   redirectTo: "", pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
