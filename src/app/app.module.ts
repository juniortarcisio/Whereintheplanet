import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './appstructure/app-menu/app-menu.component';
import { AppHeaderComponent } from './appstructure/app-header/app-header.component';
import { AppFooterComponent } from './appstructure/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
