import { Component } from "@angular/core";

/**
 * 根组件
 * 
 * @export
 * @class AppComponent
 */

@Component({
  selector: "app",  // 告诉Angular如何将组建引入到HTML
  template:"<router-outlet></router-outlet>"
})

export class AppComponent {}