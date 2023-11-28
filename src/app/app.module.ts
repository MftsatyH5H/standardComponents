import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { NavbarComponent } from './components/navbar (old)/navbar.component';
import { NavBarComponent } from './components/nav-bar (new)/nav-bar.component';
import { MultiImageSliderComponent } from './components/multi-image-slider/multi-image-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegisSystemComponent } from './components/regis-system/regis-system.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    NavbarComponent,
    NavBarComponent,
    MultiImageSliderComponent,
    RegisSystemComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
