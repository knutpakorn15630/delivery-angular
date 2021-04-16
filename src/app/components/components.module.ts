import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { DeliverycomponentComponent } from './deliverycomponent/deliverycomponent.component';
import { ReportcomponentComponent } from './reportcomponent/reportcomponent.component';
import { ShopcomponentComponent } from './shopcomponent/shopcomponent.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UsercomponentComponent,
    DeliverycomponentComponent,
    ReportcomponentComponent,
    ShopcomponentComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
