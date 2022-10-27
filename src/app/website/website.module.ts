import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { SharedModule } from './../shared/shared.module'
import { NavComponent } from './components/nav/nav.component';

import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent,
    RecoveryComponent,
    MycartComponent,
    RegisterComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class WebsiteModule { }
