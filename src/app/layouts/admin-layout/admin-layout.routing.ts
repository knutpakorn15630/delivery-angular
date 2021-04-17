import { Routes } from '@angular/router';

import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { TableListComponent } from '../../component/table-list/table-list.component';
import { TypographyComponent } from '../../component/typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../component/maps/maps.component';
import { NotificationsComponent } from '../../component/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsercomponentComponent } from 'app/components/usercomponent/usercomponent.component';
import { ReportcomponentComponent } from 'app/components/reportcomponent/reportcomponent.component';
import { ShopcomponentComponent } from 'app/components/shopcomponent/shopcomponent.component';
import { DeliverycomponentComponent } from 'app/components/deliverycomponent/deliverycomponent.component';
import { LogincomponentComponent } from 'app/components/logincomponent/logincomponent.component';
import { UserProfileComponent } from 'app/component/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'user', component: UsercomponentComponent },
    { path: 'report', component: ReportcomponentComponent },
    {path: 'delivery', component: DeliverycomponentComponent},
    {path: 'shop', component: ShopcomponentComponent},
    {path: 'login', component: LogincomponentComponent}
];
