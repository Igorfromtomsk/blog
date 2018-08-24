import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [MainPageComponent]
})

export class BlogModule {
}

