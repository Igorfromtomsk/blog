import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page/main-page.component';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [ModelModule, BrowserModule],
  declarations: [MainPageComponent]
})

export class BlogModule {}

