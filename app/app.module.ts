
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";

/**
 * 根模块
 * 
 * @export
 * @class AppModule
 */

@NgModule({
  imports: [BrowserModule, StoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}