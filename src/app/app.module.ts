import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { NavbarComponent } from './components/navbar (old)/navbar.component';
import { NavBarComponent } from './components/nav-bar (new)/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    NavbarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
