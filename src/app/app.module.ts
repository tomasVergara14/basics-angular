import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module'; 
import { HerosModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HerosModule,
    DbzModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
