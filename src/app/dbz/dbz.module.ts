import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Component
import { DbzAddComponent } from './components/dbzAddCharacters/dbz-add.component';
import { DbzListComponent } from './components/dbzlist/dbzlist.component';
import { DbzMainPageComponent } from './pages/main-page-component';



@NgModule({
  declarations: [
    DbzAddComponent,
    DbzListComponent,
    DbzMainPageComponent,
  ],
  exports:[
    DbzMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
