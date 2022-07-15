import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
// import { GojsAngularModule } from 'gojs-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AudiopopupComponent } from './shared/audiopopup/audiopopup.component';
import { AuditComponent } from './shared/audit/audit.component';
import { ImagepopupComponent } from './shared/imagepopup/imagepopup.component';
import { PopupComponent } from './shared/popup/popup.component';
import { CalloutComponent } from './shared/services/callout/callout.component';
import { IconRendererComponent } from './shared/services/renderercomponent/icon-renderer-component';
import { IconAudioRendererComponent } from './shared/services/renderercomponent/iconaudio-renderer-component';
import { IconVideoRendererComponent } from './shared/services/renderercomponent/iconvideo-renderer-component';
import { appSettingManager } from './shared/services/restcontroller/bizservice/app-settings.service';
import { AudioManager } from './shared/services/restcontroller/bizservice/audio.service';
import { AuthManager } from './shared/services/restcontroller/bizservice/auth-manager.service';
import { PersonManager } from './shared/services/restcontroller/bizservice/person.service';
import { PhotoManager } from './shared/services/restcontroller/bizservice/photo.service';
import { UserManager } from './shared/services/restcontroller/bizservice/user.service';
import { VideoManager } from './shared/services/restcontroller/bizservice/video.service';
import { BaseService } from './shared/services/services/base.service';
import { CalloutService } from './shared/services/services/callout.service';
import { DataSharedService } from './shared/services/services/datashared.service';
import { VideopopupComponent } from './shared/videopopup/videopopup.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { JwtInterceptor } from './_helpers';
import { ErrorInterceptor } from './_helpers/error.interceptor';



@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CalloutComponent,
		PopupComponent,
		ResetPasswordComponent,
		AuditComponent,
		UserRegistrationComponent,
		IconRendererComponent,
		IconAudioRendererComponent,
		IconVideoRendererComponent,
		ImagepopupComponent,
		AudiopopupComponent,
		VideopopupComponent,


		// 

		// 
		// 
		// 
		// PolarChartComponent,
		// 


	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgbModule,
		AgGridModule.withComponents([]),
		NgbCollapseModule,
		UserRegistrationModule,
		// GojsAngularModule
	],
	exports: [PopupComponent, NgbCollapseModule],
	providers: [AuthManager, CalloutService, DataSharedService, UserManager, BaseService,
		appSettingManager, PersonManager, UserManager,
		PhotoManager, AudioManager, VideoManager,
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
	bootstrap: [AppComponent],
	entryComponents: [ResetPasswordComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
