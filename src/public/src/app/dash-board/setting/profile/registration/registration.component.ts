import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions, ValueGetterParams } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { CategoryManager } from 'src/app/shared/services/restcontroller/bizservice/category.service';
import { CityManager } from 'src/app/shared/services/restcontroller/bizservice/city.service';
import { CompanyManager } from 'src/app/shared/services/restcontroller/bizservice/companycode.service';
import { CountryManager } from 'src/app/shared/services/restcontroller/bizservice/country.service';
import { LanguageManager } from 'src/app/shared/services/restcontroller/bizservice/language.service';
import { LoginManager } from 'src/app/shared/services/restcontroller/bizservice/login.service';
import { PersonManager } from 'src/app/shared/services/restcontroller/bizservice/person.service';
import { RegionalManager } from 'src/app/shared/services/restcontroller/bizservice/regional.service';
import { RegisterManager } from 'src/app/shared/services/restcontroller/bizservice/register.service';
import { ReligionManager } from 'src/app/shared/services/restcontroller/bizservice/religion.service';
import { RoleManager } from 'src/app/shared/services/restcontroller/bizservice/role.service';
import { StateManager } from 'src/app/shared/services/restcontroller/bizservice/state.service';
import { SubcatclassificationManager } from 'src/app/shared/services/restcontroller/bizservice/subcatclassification.service';
import { SubcatcodeManager } from 'src/app/shared/services/restcontroller/bizservice/subcatcode.service';
import { SubscribercontentauthManager } from 'src/app/shared/services/restcontroller/bizservice/subscribercontentauth.service';
import { SubscriberpersonalinfoManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberpersonalinfo.service';
import { SubscriberprofessionalinfoManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberprofessionalinfo.service';
import { Login001mb } from 'src/app/shared/services/restcontroller/entities/Login001mb';
import { Person001mb } from 'src/app/shared/services/restcontroller/entities/Person001mb';
import { Regionaldetails001mb } from 'src/app/shared/services/restcontroller/entities/Regionaldetails001mb';
import { User001wb } from 'src/app/shared/services/restcontroller/entities/users001wb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    frameworkComponents: any;
    personid: any;
    loginid: any;
    userid: any;
    inserteduser: string = "";
    inserteddatetime: Date | any;
    regionalid: string = "";
    companycode?: string = "";
    roleid?: string = "";
    subcatcode?: string = "";
    professionalid?: string = "";
    categoryid?: string = "";
    languageid?: string = "";
    personalid?: string = "";
    religionid?: string = "";
    classificationid?: string = "";
    subscsubspid?: string = "";
    stateid?: string = "";
    cityid?: string = "";
    countryid?: string = "";
    token: string = "";
    firstname: string = "";
    lastname: string = "";
    zipcode: number = 0;
    dob: number = 0;
    confirmemail: string = "";
    landline?: number;
    age?: number;
    sex: string = "";
    email: string = "";
    address: string = "";
    phoneno?: number;
    verified?: boolean;
    username: string = "";
    password: string = "";
    employeeid: String = "";
    bankname: String = "";
    accountnumber: String = "";
    insurance: String = "";
    accounttype: String = "";
    status: String = "";
    updateduser: String = "";
    updateddatetime: String = "";
    theme?: string | null;
    users: Login001mb[] = [];
    persons: Person001mb[] = [];
    public gridOptions: GridOptions | any;
    registerForm: FormGroup | any;
    submitted = false;
    regionalmaster?: Regionaldetails001mb[] = [];
    regions: any[] = [];
    companys: any[] = [];
    roles: any[] = [];
    subcatgs: any[] = [];
    subscriberprofessions: any[] = [];
    categorys: any[] = [];
    languages: any[] = [];
    personalinfs: any[] = [];
    religions: any[] = [];
    subcatclassifications: any[] = [];
    subscribercontentauths: any[] = [];
    states: any[] = [];
    countrys: any[] = [];
    citys: any[] = [];
    login: any;


    constructor(
        private regionalManager: RegionalManager,
        private companyManager: CompanyManager,
        private roleManager: RoleManager,
        private subcatcodeManager: SubcatcodeManager,
        private subscriberprofessionalinfoManager: SubscriberprofessionalinfoManager,
        private categoryManager: CategoryManager,
        private languageManager: LanguageManager,
        private subscriberpersonalinfoManager: SubscriberpersonalinfoManager,
        private religionManager: ReligionManager,
        private subcatclassificationManager: SubcatclassificationManager,
        private subscribercontentauthManager: SubscribercontentauthManager,
        private stateManager: StateManager,
        private countryManager: CountryManager,
        private cityManager: CityManager,
        private formBuilder: FormBuilder,
        private registerManager: RegisterManager,
        private personManager: PersonManager,
        private calloutService: CalloutService,
        private authManager: AuthManager,
        private loginManager: LoginManager,
        private modalService: NgbModal) {
        this.frameworkComponents = {
            iconRenderer: IconRendererComponent
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            // status: ['', Validators.required],
            email: ['', Validators.required],
            zipcode: ['', Validators.required],
            dob: ['', Validators.required],
            confirmemail: ['', Validators.required],
            landline: ['', Validators.required],
            phoneno: ['', Validators.required],
            age: ['', Validators.required],
            sex: ['', Validators.required],
            address: ['', Validators.required],
            // verified:['',Validators.required],
            password: ["", Validators.required],
            regionalid: ['', Validators.required],
            roleid: ['', Validators.required],
            subcatcode: ['', Validators.required],
            professionalid: ['', Validators.required],
            categoryid: ['', Validators.required],
            languageid: ['', Validators.required],
            personalid: ['', Validators.required],
            religionid: ['', Validators.required],
            classificationid: ['', Validators.required],
            subscsubspid: ['', Validators.required],
            stateid: ['', Validators.required],
            cityid: ['', Validators.required],
            countryid: ['', Validators.required],
            companycode: ['', Validators.required],
            employeeid: ['', Validators.required],
            bankname: ['', Validators.required],
            accountnumber: ['', Validators.required],
            insurance: ['', Validators.required],
            accounttype: ['', Validators.required],
            // payid: [],
            // contentid: [],
            // horoscope: [],
            // subscdesc: [],
            // approvedby: [],
            // approvedon: [],
            // subscapproval: []

        });
        this.regionalManager.allregional().subscribe((response) => {
            this.regions = response;
        })
        this.companyManager.allcompany().subscribe((response) => {
            this.companys = response;
        })
        this.roleManager.allrole().subscribe((response) => {
            this.roles = response;
        })
        this.subcatcodeManager.allsubcatcode().subscribe((response) => {
            this.subcatgs = response;
        })
        this.subscriberprofessionalinfoManager.allprofessionalinfo().subscribe((response) => {
            this.subscriberprofessions = response;
        })
        this.categoryManager.allcatg().subscribe((response) => {
            this.categorys = response;
        })
        this.languageManager.alllanguage().subscribe((response) => {
            this.languages = response;
        })
        this.subscriberpersonalinfoManager.allpersonal().subscribe((response) => {
            this.personalinfs = response;
        })
        this.religionManager.allreligion().subscribe((response) => {
            this.religions = response;
        })
        this.subcatclassificationManager.allclassification().subscribe((response) => {
            this.subcatclassifications = response;
        })
        this.subscribercontentauthManager.allsubscriberconten().subscribe((response) => {
            this.subscribercontentauths = response;
        })
        this.stateManager.allstate().subscribe((response) => {
            this.states = response;
        })
        this.countryManager.allcountry().subscribe((response) => {
            this.countrys = response;
        })
        this.cityManager.allcity().subscribe((response) => {
            this.citys = response;
        })
        this.loaddata();
        this.createDataGrid001();

    }
    loaddata() {
        this.personManager.allperson().subscribe((response) => {

            if (response.person001mb.length > 0) {
                this.gridOptions?.api?.setRowData(response.person001mb);
            } else {
                this.gridOptions?.api?.setRowData([]);
            }
        })
    }

    get f() {
        return this.registerForm.controls;
    }

    createDataGrid001(): void {
        this.gridOptions = {
            paginationPageSize: 10,
            rowSelection: 'single',
            onFirstDataRendered: this.onFirstDataRendered.bind(this)
        };
        this.gridOptions.editType = 'fullRow';
        this.gridOptions.enableRangeSelection = true;
        this.gridOptions.animateRows = true;
        this.gridOptions.columnDefs = [
            {
                headerName: '#Id',
                field: '_id',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressSizeToFit: true,
                hide: "true"
            },
            {
                headerName: '#Id',
                field: 'loginid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressSizeToFit: true,
                hide: "true"
            },
            {
                headerName: '#Id',
                field: 'usersid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                suppressSizeToFit: true,
                hide: "true"
            },
            {
                headerName: 'Firstname',
                field: 'firstname',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Lastname ',
                field: 'lastname',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Username ',
                field: 'username',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.usernameValueGetter
            },
            {
                headerName: 'Email',
                field: 'email',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'ConfirmEmail',
                field: 'confirmemail',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Regionalid',
                field: 'regionalid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                hide: "true"
            },
            {
                headerName: 'Companycode',
                field: 'companycode',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Role',
                field: 'roleid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Subcatcode',
                field: 'subcatcode',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Professional',
                field: 'professionalid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Category',
                field: 'categoryid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Language',
                field: 'languageid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Personal',
                field: 'Personalid',
                flex: 1,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Religion',
                field: 'religionid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Classification',
                field: 'classificationid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Subscribercontentauth',
                field: 'subscsubspid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'State',
                field: 'stateid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'City',
                field: 'cityid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Country',
                field: 'countryid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Zipcode',
                field: 'zipcode',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'DOB',
                field: 'dob',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'ConfirmEmail',
                field: 'confirmemail',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            }, {
                headerName: 'Landline',
                field: 'landline',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Age',
                field: 'age',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Sex',
                field: 'sex',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },

            {
                headerName: 'Address',
                field: 'address',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
            },
            {
                headerName: 'Phoneno',
                field: 'phoneno',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,

            },
            {
                headerName: 'Employeeid',
                field: 'employeeid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.employeeidValueGetter,
            },
            {
                headerName: 'BankName',
                field: 'bankname',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.banknameValueGetter,
            },
            {
                headerName: 'AccountNumber',
                field: 'accountnumber',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.accountnumberValueGetter,
                hide: "true"
            },
            {
                headerName: 'Insurance',
                field: 'insurance',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.insuranceValueGetter,
            },
            {
                headerName: 'AccountType',
                field: 'accounttype',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.accounttypeValueGetter,
            },
            {
                headerName: 'Password',
                field: 'password',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.passwordValueGetter,
                hide: "true"
            },
            {
                headerName: 'payid',
                field: 'payid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.payidValueGetter,
                hide: "true"
            },
            {
                headerName: 'contentid',
                field: 'contentid',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.contentidValueGetter,
                hide: "true"
            },
            {
                headerName: 'horoscope',
                field: 'horoscope',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.horoscopeValueGetter,
                hide: "true"
            },
            {
                headerName: 'subscdesc',
                field: 'subscdesc',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.subscdescValueGetter,
                hide: "true"
            },
            {
                headerName: 'approvedby',
                field: 'approvedby',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.approvedbyValueGetter,
                hide: "true"
            },
            {
                headerName: 'approvedon',
                field: 'approvedon',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.approvedonValueGetter,
                hide: "true"
            },
            {
                headerName: 'subscapproval',
                field: 'subscapproval',
                width: 200,
                sortable: true,
                filter: true,
                resizable: true,
                suppressSizeToFit: true,
                valueGetter: this.subscapprovalValueGetter,
                hide: "true"
            },
            {
                headerName: 'Edit',
                cellRenderer: 'iconRenderer',
                width: 200,
                suppressSizeToFit: true,
                cellStyle: { textAlign: 'center' },
                cellRendererParams: {
                    onClick: this.onEditButtonClick.bind(this),
                    label: 'Edit'
                }
            },
            {
                headerName: 'Delete',
                cellRenderer: 'iconRenderer',
                width: 200,
                suppressSizeToFit: true,
                cellStyle: { textAlign: 'center' },
                cellRendererParams: {
                    onClick: this.onDeleteButtonClick.bind(this),
                    label: 'Delete'
                }
            },
            {
                headerName: 'Audit',
                cellRenderer: 'iconRenderer',
                width: 55,
                suppressSizeToFit: true,
                cellStyle: { textAlign: 'center' },
                cellRendererParams: {
                    onClick: this.onAuditButtonClick.bind(this),
                    label: 'Audit'
                },
            },

        ];
    }
    passwordValueGetter(params: ValueGetterParams) {
        return params.data.loginid ? params.data.loginid.password : null;
    }
    usernameValueGetter(params: ValueGetterParams) {
        return params.data.loginid ? params.data.loginid.username : null;
    }
    accounttypeValueGetter(params: ValueGetterParams) {
        return params.data.usersid ? params.data.usersid.accounttype : null;
    }
    insuranceValueGetter(params: ValueGetterParams) {
        return params.data.usersid ? params.data.usersid.insurance : null;
    }
    accountnumberValueGetter(params: ValueGetterParams) {
        return params.data.usersid ? params.data.usersid.accountnumber : null;
    }
    banknameValueGetter(params: ValueGetterParams) {
        return params.data.usersid ? params.data.usersid.bankname : null;
    }
    employeeidValueGetter(params: ValueGetterParams) {
        return params.data.usersid ? params.data.usersid.employeeid : null;
    }
    payidValueGetter(params: ValueGetterParams) {
        return params.data.loginid ? params.data.loginid.username : null;
    }
    contentidValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.contentid : null;
    }
    horoscopeValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.horoscope : null;
    }
    subscdescValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.subscdesc : null;
    }
    subscapprovalValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.subscapproval : null;
    }
    approvedbyValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.approvedby : null;
    }
    approvedonValueGetter(params: ValueGetterParams) {
        return params.data.subscriberdetailsid ? params.data.subscriberdetailsid.approvedon : null;
    }
    onEditButtonClick(params: any) {
        console.log("params-edit", params)
        this.personid = params.data._id;
        this.loginid = params.data.loginid._id;
        this.userid = params.data.usersid._id;
        this.inserteduser = params.data.inserteduser;
        this.inserteddatetime = params.data.inserteddatetime;
        this.registerForm.controls.password.disable()
        this.registerForm.patchValue({
            'id': params.data._id,
            'password': '******',
            'usersid': params.data.usersid,
            'loginid': params.data.loginid,
            'username': params.data.loginid.username,
            'firstname': params.data.firstname,
            'lastname': params.data.lastname,
            'zipcode': params.data.zipcode,
            'dob': params.data.dob,
            'email': params.data.email,
            'confirmemail': params.data.confirmemail,
            'landline': params.data.landline,
            'age': params.data.age,
            'sex': params.data.sex,
            'address': params.data.address,
            'phoneno': params.data.phoneno,
            'regionalid': params.data.regionalid,
            'companycode': params.data.companycode,
            'roleid': params.data.roleid,
            'subcatcode': params.data.subcatcode,
            'professionalid': params.data.professionalid,
            'categoryid': params.data.categoryid,
            'languageid': params.data.languageid,
            'personalid': params.data.personalid,
            'religionid': params.data.religionid,
            'classificationid': params.data.classificationid,
            'subscsubspid': params.data.subscsubspid,
            'stateid': params.data.stateid,
            'cityid': params.data.cityid,
            'countryid': params.data.countryid,
            'employeeid': params.data.usersid.employeeid,
            'bankname': params.data.usersid.bankname,
            'accountnumber': params.data.usersid.accountnumber,
            'insurance': params.data.usersid.insurance,
            'accounttype': params.data.usersid.accounttype,

        });
    }


    onDeleteButtonClick(params: any) {
        this.personid = params.data._id;
        this.loginid = params.data.loginid._id;
        this.userid = params.data.usersid._id;
        this.registerManager.deleteuser(this.personid, this.loginid, this.userid).subscribe((response) => {
            const selectedRows = params.api.getSelectedRows();
            params.api.applyTransaction({ remove: selectedRows });
            this.calloutService.showSuccess("Order Removed Successfully");
        });
    }


    onAuditButtonClick(params: any) {
        const modalRef = this.modalService.open(AuditComponent);
        modalRef.componentInstance.title = "Registration";
        modalRef.componentInstance.details = params.data;
        
    }

    onFirstDataRendered(params: any) {
        params.api.sizeColumnsToFit();
    }

    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach((control: any) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }

    onUserClick(event: any, registerForm: any) {
        this.markFormGroupTouched(this.registerForm);
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        let person001mb = new Person001mb();
        person001mb.firstname = this.f.firstname.value ? this.f.firstname.value : "";
        person001mb.lastname = this.f.lastname.value ? this.f.lastname.value : "";
        person001mb.companycode = this.f.companycode.value ? this.f.companycode.value : "";
        // person001mb.status = this.f.status.value ? this.f.status.value : "";
        person001mb.verified = false;
        person001mb.userid = null;
        person001mb.loginid = null;
        person001mb.regionalid = this.f.regionalid.value ? this.f.regionalid.value : "";
        person001mb.roleid = this.f.roleid.value ? this.f.roleid.value : "";
        person001mb.subcatcode = this.f.subcatcode.value ? this.f.subcatcode.value : "";
        person001mb.professionalid = this.f.professionalid.value ? this.f.professionalid.value : "";
        person001mb.categoryid = this.f.categoryid.value ? this.f.categoryid.value : "";
        person001mb.languageid = this.f.languageid.value ? this.f.languageid.value : "";
        person001mb.personalid = this.f.personalid.value ? this.f.personalid.value : "";
        person001mb.religionid = this.f.religionid.value ? this.f.religionid.value : "";
        person001mb.classificationid = this.f.classificationid.value ? this.f.classificationid.value : "";
        person001mb.subscsubspid = this.f.subscsubspid.value ? this.f.subscsubspid.value : "";
        person001mb.stateid = this.f.stateid.value ? this.f.stateid.value : "";
        person001mb.cityid = this.f.cityid.value ? this.f.cityid.value : "";
        person001mb.countryid = this.f.countryid.value ? this.f.countryid.value : "";
        person001mb.zipcode = this.f.zipcode.value ? this.f.zipcode.value : "";
        person001mb.dob = this.f.dob.value ? this.f.dob.value : "";
        person001mb.confirmemail = this.f.confirmemail.value ? this.f.confirmemail.value : "";
        person001mb.landline = this.f.landline.value ? this.f.landline.value : "";
        person001mb.phoneno = this.f.phoneno.value ? this.f.phoneno.value : "";
        person001mb.address = this.f.address.value ? this.f.address.value : "";
        person001mb.age = this.f.age.value ? this.f.age.value : "";
        person001mb.sex = this.f.sex.value ? this.f.sex.value : "";
        person001mb.email = this.f.email.value ? this.f.email.value : "";
        person001mb.inserteddatetime = new Date();
        person001mb.updateduser = "";
        person001mb.inserteduser = this.authManager.getcurrentUser.username;
        person001mb.updateddatetime = null;
        console.log("person001mb", person001mb)
        let login001mb = new Login001mb();
        login001mb.username = this.f.username.value ? this.f.username.value : "";
        login001mb.password = this.f.password.value ? this.f.password.value : "";
        login001mb.roleid = person001mb.roleid;
        login001mb.inserteduser = this.authManager.getcurrentUser.username;
        login001mb.inserteddatetime = person001mb.inserteddatetime;
        login001mb.updateduser = "";
        login001mb.updateddatetime = null;

        let user001wb = new User001wb();
        user001wb.employeeid = this.f.employeeid.value ? this.f.employeeid.value : "";
        user001wb.bankname = this.f.bankname.value ? this.f.bankname.value : "";
        user001wb.accountnumber = this.f.accountnumber.value ? this.f.accountnumber.value : "";
        user001wb.insurance = this.f.insurance.value ? this.f.insurance.value : "";
        user001wb.accounttype = this.f.accounttype.value ? this.f.accounttype.value : "";
        user001wb.inserteduser = this.authManager.getcurrentUser.username;
        user001wb.inserteddatetime = new Date();
        user001wb.updateduser = "";
        user001wb.updateddatetime = null;
        if (this.personid && this.loginid && this.userid) {
            user001wb.inserteduser = this.inserteduser;
            user001wb.inserteddatetime = this.inserteddatetime;
            login001mb.inserteduser = user001wb.inserteduser;
            login001mb.inserteddatetime = user001wb.inserteddatetime;
            person001mb.inserteduser = user001wb.inserteduser;
            person001mb.inserteddatetime = user001wb.inserteddatetime;

            person001mb.updateduser = this.authManager.getcurrentUser.username;
            person001mb.updateddatetime = new Date();
            login001mb.updateduser = person001mb.updateduser;
            login001mb.updateddatetime = person001mb.updateddatetime;
            user001wb.updateduser = person001mb.updateduser;
            user001wb.updateddatetime = person001mb.updateddatetime;
            console.log("this.personid && this.loginid && this.userid", this.personid, this.loginid, this.userid)
            this.registerManager.updateuser(user001wb, person001mb, login001mb, this.personid, this.loginid, this.userid).subscribe((response) => {
                console.log("response999999999999", response)
                this.calloutService.showSuccess("Order Updated Successfully");

                this.loaddata();
                this.registerForm.reset();
                this.submitted = false;
                // this.gridOptions.api.setRowData(this.persons);
                this.gridOptions.api.refreshView();
                this.gridOptions.api.deselectAll();
                this.personid = null;
                this.loginid = null;
                this.userid = null;
                this.registerForm.controls.password.enable()
            })
        }

        else {
            // person001mb.insertUser = this.authManager.getcurrentUser.username;
            // person001mb.insertDatetime = new Date();
            this.registerManager.saveuser(user001wb, login001mb, person001mb,).subscribe((response) => {
                console.log("response888888888888", response)
                this.calloutService.showSuccess("Order Saved Successfully");
                this.loaddata();
                // let person001mb = deserialize<Person001mb>(Person001mb, response);
                //     this.apprTemp?.push(person001mb);
                //     const newItems = [JSON.parse(JSON.stringify(person001mb))];
                //     this.gridOptions.api.applyTransaction({ add: newItems });
                this.registerForm.reset();
                this.submitted = false;
            })
        }
        ;
    }

    onReset() {
        this.registerForm.reset();
        this.submitted = false;

    }
}