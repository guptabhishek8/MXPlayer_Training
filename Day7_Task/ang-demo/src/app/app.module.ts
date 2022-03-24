import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameTitlePipe } from './name-title.pipe';
import { CardStatusPipe } from './card-status.pipe';
import { DemoDirective } from './demo.directive';
import { StringColorDirective } from './string-color.directive';
import { PwdCheckDirective } from './pwd-check.directive';
import { StrDirDirective } from './str-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    NameTitlePipe,
    CardStatusPipe,
    DemoDirective,
    StringColorDirective,
    PwdCheckDirective,
    StrDirDirective,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
