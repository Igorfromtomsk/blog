import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ModelModule} from './model/model.module';
import {BlogModule} from './blog/blog.module';
import {MainPageComponent} from './blog/main-page/main-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    BlogModule,
    RouterModule.forRoot([
      {path: '',      component: MainPageComponent},
      {path: '**',    redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
