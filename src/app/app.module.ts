// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Services
import { AuthService } from './services/auth.service';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
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
import { ArtistLogInComponent } from './forms/artist-log-in/artist-log-in.component';
import { ChooseLogInComponent } from './tabs/choose-log-in/choose-log-in.component';
import { GeneralLoginComponent } from './forms/general-login/general-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UploadSongComponent } from './upload/upload-song/upload-song.component';
import { ListFileComponent } from './upload/list-file/list-file.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';

//Routes
const appRoutes: Routes = [
  { path: '', component: HomeWelcomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'choose-usertype-signup', component: ChooseSignUpComponent },
  { path: 'artist-profile', component: UserProfileComponent }, //SHOULD BE ARTIST-USER COMPONENT
  { path: 'artistsignup', component: ArtistSignUpComponent },
  { path: 'generalsignup', component: GeneralSignUpComponent },
  { path: 'artist-login', component: ArtistLogInComponent },
  { path: 'general-login', component: GeneralLoginComponent },
  { path: 'choose-usertype-login', component: ChooseLogInComponent },
  { path: 'upload-song', component: UploadSongComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
    ArtistLogInComponent,
    ChooseLogInComponent,
    GeneralLoginComponent,
    UserProfileComponent,
    UploadSongComponent,
    ListFileComponent,
    DetailsUploadComponent,
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
