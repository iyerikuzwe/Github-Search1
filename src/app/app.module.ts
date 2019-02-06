import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { DetailsComponent } from './details/details.component';


const routes:Routes=[]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    StrikethroughDirective,
    DateCountPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
