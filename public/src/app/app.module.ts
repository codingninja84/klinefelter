import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SliderComponent } from './main-content/slider/slider.component';
import { QuoteComponent } from './main-content/quote/quote.component';
import { AutoComponent } from './main-content/quote/auto/auto.component';
import { HomeComponent } from './main-content/quote/home/home.component';
import { LifeComponent } from './main-content/quote/life/life.component';
import { CommercialComponent } from './main-content/quote/commercial/commercial.component';
import { ChatComponent } from './main-content/chat/chat.component';
import { BioComponent } from './bio/bio.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './main-content/header/header.component';
import { QuoteService } from './main-content/quote/quote.service';
import { FooterComponent } from './main-content/footer/footer.component';
import { AutoQuoteService } from './main-content/quote/auto/autoquote.service';
import { WindowRef } from './main-content/quote/auto/window-ref'
@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SliderComponent,
    QuoteComponent,
    AutoComponent,
    HomeComponent,
    LifeComponent,
    CommercialComponent,
    ChatComponent,
    BioComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [QuoteService, AutoQuoteService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
