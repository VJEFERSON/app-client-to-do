import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonMaterialModules } from './common/material/CommonMaterialModules';
import { LoginModule } from './login/LoginModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from './register/RegisterModule';
import { UserModule } from './user/UserModule';
import { TaskModule } from './tasks/TaskModule';
import { TagModule } from './tags/TagModel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModules,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    RegisterModule,
    UserModule,
    TaskModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
