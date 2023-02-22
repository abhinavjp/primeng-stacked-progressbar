import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    ToastModule,
    FormsModule
  ],
  declarations: [ AppComponent, ProgressBarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
