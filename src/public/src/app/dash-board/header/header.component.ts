import { Component, EventEmitter, HostBinding, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { appSettingManager } from 'src/app/shared/services/restcontroller/bizservice/app-settings.service';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { UserManager } from 'src/app/shared/services/restcontroller/bizservice/user.service';
import { Appsettings001mb } from 'src/app/shared/services/restcontroller/entities/app-settings001mb';
import { Login001mb } from 'src/app/shared/services/restcontroller/entities/Login001mb';
import { Person001mb } from 'src/app/shared/services/restcontroller/entities/Person001mb';
import { BaseService } from 'src/app/shared/services/services/base.service';
import { CalloutService } from 'src/app/shared/services/services/callout.service';
import { DataSharedService } from 'src/app/shared/services/services/datashared.service';
import { Utils } from 'src/app/shared/utils/utils';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() open: EventEmitter<boolean> = new EventEmitter();
    isOpen: boolean = false;
    parentMenuString: string = "";
    childMenuString: string = "";
    isActive: boolean | undefined;
    user?: Login001mb;
    users?: Person001mb;
    appSettings: Appsettings001mb = {};
    originalfilename: string = "";
    themes: any;
    // rgbToHex: any;
    // hexToRgb: any;
    theme: any;
    colorthemes: any;
    login001mb: Login001mb = new Login001mb();
    color: any;
    name:any;
    clr = 'black';
    sideNavMode: string | undefined;
    public gridOptions: GridOptions | any;
    temporaryDisabled: boolean = true;
    defaultTheme: string = "#286090";
    @HostBinding('style.--color_l1') colorthemes_1: any;
    @HostBinding('style.--color_l2') colorthemes_2: any;
    @HostBinding('style.--color_l3') colorthemes_3: any;
    @HostBinding('style.--color_l4') colorthemes_4: any;
    params: any
    public downloadUrl: string = `${environment.apiUrl}/appsettings/download/`;
    constructor(private router: Router, private userManager: UserManager, private calloutService: CalloutService, private authManager: AuthManager, private dataSharedService: DataSharedService, private authManger: AuthManager, private baseService: BaseService, private appSettingService: appSettingManager,) { }

    ngOnInit() {
        let control = this.authManger.getcurrentUser;
        this.name=control.username;
        this.color = control.theme;
        this.colorthemes = this.color;
        this.dataSharedService.currentMenuObject.subscribe((object: any) => {
            this.parentMenuString = object.parentMenuString;
            this.childMenuString = object.childMenuString;
        });
        this.authManager.currentUserSubject.subscribe((object: any) => {
            let rgb = Utils.hexToRgb(object.theme);

            this.colorthemes_1 = Utils.rgbToHex(rgb, -0.3);
            console.log("this.colorthemes_1",this.colorthemes_1);
            this.colorthemes_2 = Utils.rgbToHex(rgb, 0.1);

            this.colorthemes_3 = Utils.rgbToHex(rgb, 0.5);

            this.colorthemes_4 = Utils.rgbToHex(rgb, 0.8);
        });
        this.appSettingService.allFiles().subscribe(response => {
            this.appSettings = response.originalfilename;
            this.downloadUrl = this.downloadUrl + this.appSettings;
        });
    }
    ngAfterViewInit() {
        this.temporaryDisabled = false;
    }

    clickMenu() {
        // this.open.emit();   
        this.isOpen = !this.isOpen;
        this.dataSharedService.isSideNavAction(this.isOpen);
    }

    submit() {
        this.authManger.logout("");
    }

    onMenuParentClick(parentMenuString: string, childMenuString: string = "") {
        this.parentMenuString = parentMenuString;
        this.childMenuString = childMenuString;
        let object: any = new Object();
        object.parentMenuString = this.parentMenuString;
        object.childMenuString = "";
        this.dataSharedService.changeMenuAction(object);
    }

    onMenuChildClick(parentMenuString: string, childMenuString: string) {
        this.parentMenuString = parentMenuString;
        this.childMenuString = childMenuString;
        let object: any = new Object();
        object.parentMenuString = this.parentMenuString;
        object.childMenuString = this.childMenuString;
        this.dataSharedService.changeMenuAction(object);
    }

    colorPicker(event: any) {
        let colorcontrol = this.authManager.getcurrentUser;
        this.color = colorcontrol.theme;
        this.color = this.themes;
        let updateTheme: any = {};
        updateTheme.username = colorcontrol.username;
        updateTheme.theme = this.color;
        this.userManager.updateUserTheme(updateTheme).subscribe((response: any) => {
            let currentUser = sessionStorage.getItem('currentUser') || '{}';
            currentUser = response.theme;
            this.login001mb.theme = currentUser;
            this.authManager.setcurrentUser(this.login001mb);
            //   This is a color changed area
            let rgb = Utils.hexToRgb(response.theme);
            this.colorthemes_1 = Utils.rgbToHex(rgb, -0.3);
            this.colorthemes_2 = Utils.rgbToHex(rgb, 0.1);
            this.colorthemes_3 = Utils.rgbToHex(rgb, 0.5);
            this.colorthemes_4 = Utils.rgbToHex(rgb, 0.8);
        });
    }

    defaultColor() {
        let colord = this.authManager.getcurrentUser;
        this.themes = colord.theme;
        this.themes = this.defaultTheme;
        let updateTheme: any = {};
        updateTheme.personId = this.login001mb.personid;
        updateTheme.theme = this.themes;
        this.userManager.updateUserTheme(updateTheme).subscribe((response: any) => {
            let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
            currentUser = response.theme;
            this.login001mb.theme = currentUser;
            this.authManager.setcurrentUser(this.login001mb);
        });
    }
}

