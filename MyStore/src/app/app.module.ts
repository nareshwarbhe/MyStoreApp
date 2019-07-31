import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import {HTTP_INTERCEPTORS, HttpClient,HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductCategoryComponent } from './product-category/product-category.component';
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatRadioModule,MatSelectModule,
  MatPaginatorModule,MatDatepickerModule,MatNativeDateModule,MatProgressSpinnerModule} from '@angular/material';

import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { LoaderServiceService } from './Services/loader-service.service';
import{LoaderInterceptor} from './Interceptor/loader.interceptor';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ProductCategoryComponent,
    UserComponent,
    LoaderComponent,
    HeaderComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [LoaderServiceService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
