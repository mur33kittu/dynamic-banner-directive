import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight';
import { AdService } from './components/ad.service';
import { JobAdComponent } from './components/jobad.component';
import { OtherAdComponent } from './components/OtherAd.component';
import { AdDirective } from './directives/AdDirective';
import { AdBannerComponent } from './components/AdComponent';
import { PipeDirective } from './pipes/mypipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    JobAdComponent,
    OtherAdComponent,
    AdBannerComponent,
    AdDirective,
    PipeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [JobAdComponent, OtherAdComponent],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
