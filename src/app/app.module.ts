import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {Parent1Component} from './parent1/parent1.component';
import {Parent2Component} from './parent2/parent2.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child2/child2.component';
import {Child3Component} from './child3/child3.component';
import { SharedService} from './Shared.service';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child3Component,
    Child2Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers : [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

