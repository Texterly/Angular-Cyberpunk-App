import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SecondBlockComponent } from './components/second-block/second-block.component';
import { ThirdBlockComponent } from './components/third-block/third-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SecondBlockComponent,
    ThirdBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
