import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppMainComponent } from '@app/components/main/app.main.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { ProfileComponent } from '@app/pages/profile/profile.component';

import { AuthGuard } from '@app/guards/auth.guard';
import { CountriesComponent } from '@app/pages/settings/location/countries/countries.component';
import { CitiesComponent } from '@app/pages/settings/location/cities/cities.component';
import { DistrictsComponent } from '@app/pages/settings/location/districts/districts.component';



@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppMainComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: 'profile',
              component: ProfileComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'countries',
              component: CountriesComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'cities',
              component: CitiesComponent,
              canActivate: [AuthGuard],
            },
            {
              path: 'districts',
              component: DistrictsComponent,
              canActivate: [AuthGuard]
            }
          ],
        },
        {
          path: 'login',
          component: LoginComponent,
        },

        { path: '**', redirectTo: 'notfound' },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
