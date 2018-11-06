import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import { HomeUpdatesComponent } from './home-updates/home-updates.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistUserComponent } from './artist-user/artist-user.component';
import { NavbarLoggedInComponent } from './navbar-logged-in/navbar-logged-in.component';
import { GeneralUserComponent } from './general-user/general-user.component';

// const appRoutes: Routes = [
//   { path: 'artists', component: }
// ]
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
    GeneralUserComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
