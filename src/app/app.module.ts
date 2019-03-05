import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavigatorComponent} from './comics/navigator.component';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'latest', component: NavigatorComponent},
      {path: '', redirectTo: 'latest', pathMatch: 'full'},
      {path: '**', redirectTo: 'latest', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
