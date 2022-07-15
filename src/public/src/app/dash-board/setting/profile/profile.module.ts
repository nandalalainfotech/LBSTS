import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './profile.component';
import { AgGridModule } from 'ag-grid-angular';
import { BreadcrumbModule } from '../../breadcrumb/breadcrumb.module';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { UserManager } from 'src/app/shared/services/restcontroller/bizservice/user.service';
import { PersonManager } from 'src/app/shared/services/restcontroller/bizservice/person.service';
import { RegisterManager } from 'src/app/shared/services/restcontroller/bizservice/register.service';
import { RegionalManager } from 'src/app/shared/services/restcontroller/bizservice/regional.service';
import { CompanyManager } from 'src/app/shared/services/restcontroller/bizservice/companycode.service';
import { RoleManager } from 'src/app/shared/services/restcontroller/bizservice/role.service';
import { SubcatcodeManager } from 'src/app/shared/services/restcontroller/bizservice/subcatcode.service';
import { SubscriberprofessionalinfoManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberprofessionalinfo.service';
import { CategoryManager } from 'src/app/shared/services/restcontroller/bizservice/category.service';
import { SubscriberpersonalinfoManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberpersonalinfo.service';
import { ReligionManager } from 'src/app/shared/services/restcontroller/bizservice/religion.service';
import { LanguageManager } from 'src/app/shared/services/restcontroller/bizservice/language.service';
import { SubcatclassificationManager } from 'src/app/shared/services/restcontroller/bizservice/subcatclassification.service';
import { SubscribercontentauthManager } from 'src/app/shared/services/restcontroller/bizservice/subscribercontentauth.service';
import { StateManager } from 'src/app/shared/services/restcontroller/bizservice/state.service';
import { CountryManager } from 'src/app/shared/services/restcontroller/bizservice/country.service';
import { CityManager } from 'src/app/shared/services/restcontroller/bizservice/city.service';
import { LoginManager } from 'src/app/shared/services/restcontroller/bizservice/login.service';



@NgModule({
  
  declarations: [
    ProfileComponent,
    UsernameComponent,
    PasswordComponent,
    RegistrationComponent],

  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    MatTabsModule,
    // FlexLayoutModule,
    MatSidenavModule,
    AgGridModule.withComponents([])
  ],

  providers: [
    UserManager,
    AuthManager,
    PersonManager,
    RegisterManager,
    RegionalManager,
    CompanyManager,
    RoleManager,
    SubcatcodeManager,
    SubscriberprofessionalinfoManager,
    CategoryManager,
    LanguageManager,
    SubscriberpersonalinfoManager,
    ReligionManager,
    SubcatclassificationManager,
    SubscribercontentauthManager,
    StateManager,
    CountryManager,
    CityManager,
    LoginManager
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
