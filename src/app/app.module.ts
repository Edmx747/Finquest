import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryPeopleService } from './service/mock/in-memory-people.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryPeopleService,{
      dataEncapsulation: false,
      passThruUnknownUrl : true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
