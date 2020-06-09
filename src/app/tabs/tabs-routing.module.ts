import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'camera',
        loadChildren: () => import('../camera/camera.module').then( m => m.CameraPageModule)
      },
      {
        path: 'geolocation',
        loadChildren: () => import('../geolocation/geolocation.module').then( m => m.GeolocationPageModule)
      },
      {
        path: 'deviceinfo',
        loadChildren: () => import('../deviceinfo/deviceinfo.module').then( m => m.DeviceinfoPageModule)
      },
      {
        path: 'haptic',
        loadChildren: () => import('../haptic/haptic.module').then( m => m.HapticPageModule)
      },
      {
        path: 'notifier',
        loadChildren: () => import('../notifier/notifier.module').then( m => m.NotifierPageModule)
      },
      {
        path: 'other',
        loadChildren: () => import('../other/other.module').then( m => m.OtherPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/camera',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/camera',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
