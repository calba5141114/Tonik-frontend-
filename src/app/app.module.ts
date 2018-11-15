import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { HomeCarouselComponent } from './home-page/home-carousel/home-carousel.component';
import { HomeWelcomeComponent } from './home-page/home-welcome/home-welcome.component';
import { HomeUpdatesComponent } from './home-page/home-updates/home-updates.component';
import { ArtistsComponent } from './tabs/artists/artists.component';
import { ArtistUserComponent } from './users/artist-user/artist-user.component';
import { NavbarLoggedInComponent } from './navbar/navbar-logged-in/navbar-logged-in.component';
import { GeneralUserComponent } from './users/general-user/general-user.component';
import { AboutUsComponent } from './tabs/about-us/about-us.component';
import { FAQComponent } from './tabs/faq/faq.component';
import { GeneralSignUpComponent } from './forms/general-sign-up/general-sign-up.component';
import { ArtistSignUpComponent } from './forms/artist-sign-up/artist-sign-up.component';
import { ChooseSignUpComponent } from './tabs/choose-sign-up/choose-sign-up.component';

const appRoutes: Routes = [
  { path: '', component: HomeWelcomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'choose-usertype', component: ChooseSignUpComponent },
  { path: 'artist-profile', component: ArtistUserComponent },
  { path: 'artistsignup', component: ArtistSignUpComponent },
  { path: 'generalsignup', component: GeneralSignUpComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeCarouselComponent,
    HomeWelcomeComponent,
    HomeUpdatesComponent,
    ArtistsComponent,
    ArtistUserComponent,
    NavbarLoggedInComponent,
    GeneralUserComponent,
    AboutUsComponent,
    FAQComponent,
    GeneralSignUpComponent,
    ArtistSignUpComponent,
    ChooseSignUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
