import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { SubscriberdetailsManager } from 'src/app/shared/services/restcontroller/bizservice/subscriberdetails.service';
import { Contentmaster001mb } from 'src/app/shared/services/restcontroller/entities/Contentmaster001mb';
import { Payment001mb } from 'src/app/shared/services/restcontroller/entities/Payment001mb';
import { Person001mb } from 'src/app/shared/services/restcontroller/entities/Person001mb';
import { Subscriberdetails001wb } from 'src/app/shared/services/restcontroller/entities/subscriberdetails001wb';
import { Subscriptionmaster001mb } from 'src/app/shared/services/restcontroller/entities/Subscriptionmaster001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-subcriberdetails',
  templateUrl: './subcriberdetails.component.html',
  styleUrls: ['./subcriberdetails.component.css']
})
export class SubcriberdetailsComponent implements OnInit {

  frameworkComponents: any;
  personid: Person001mb[] = [];
  subpid: Subscriptionmaster001mb[] = [];
  payid: Payment001mb[] = [];
  contentid: Contentmaster001mb[] = [];
  horoscope: string = "";
  subscdesc: string = "";
  subscapproval?: boolean;
  approvedby?: string;
  approvedon?: string;
  subdid: string | any;
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  subscriptionmaster: Subscriberdetails001wb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private subscriberdetailsManager: SubscriberdetailsManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent
    }
  }
  ngOnInit() {
    this.createDataGrid001();
    this.subscriberdetailsManager.allsubdetails().subscribe((response) => {
      this.subscriptionmaster = deserialize<Subscriberdetails001wb[]>(Subscriberdetails001wb, response);
      if (this.subscriptionmaster.length > 0) {
        this.gridOptions?.api?.setRowData(this.subscriptionmaster);
      } else {
        this.gridOptions?.api?.setRowData([]);
      }
    })
  }
  get f() { return this.subCategoryForm.controls; }
  createDataGrid001(): void {
    this.gridOptions = {
      paginationPageSize: 10,
      rowSelection: 'single',
      onFirstDataRendered: this.onFirstDataRendered.bind(this),
    };
    this.gridOptions.editType = 'fullRow';
    this.gridOptions.enableRangeSelection = true;
    this.gridOptions.animateRows = true;
    this.gridOptions.columnDefs = [
      {
        headerName: '#Id',
        field: 'subdid',
        width: 200,
        flex: 1,
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
        headerName: 'personid',
        field: 'personid',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'subpid',
        field: 'subpid',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'payid',
        field: 'payid',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'contentid',
        field: 'contentid',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'horoscope',
        field: 'horoscope',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'subscdesc',
        field: 'subscdesc',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'subscapproval',
        field: 'subscapproval',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'approvedby',
        field: 'approvedby',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'approvedon',
        field: 'approvedon',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      // {
      // 	headerName: 'From Date',
      // 	field: 'fromDate',
      // 	width: 200,
      // 	flex: 1,
      // 	sortable: true,
      // 	filter: true,
      // 	resizable: true,
      // 	suppressSizeToFit: true,
      // 	valueGetter: (params: any) => {
      //               return params.data.fromDate ? this.datePipe.transform(params.data.fromDate, 'MM/dd/yyyy') : '';
      //           }
      // },
      // {
      // 	headerName: 'To Date',
      // 	field: 'toDate',
      // 	width: 200,
      // 	flex: 1,
      // 	sortable: true,
      // 	filter: true,
      // 	resizable: true,
      // 	suppressSizeToFit: true,
      // 	valueGetter: (params: any) => {
      //               return params.data.toDate ? this.datePipe.transform(params.data.toDate, 'MM/dd/yyyy') : '';
      //           }
      // },
      {
        headerName: 'Edit',
        cellRenderer: 'iconRenderer',
        width: 200,
        flex: 1,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this),
          label: 'Edit'
        },
      },
      {
        headerName: 'Delete',
        cellRenderer: 'iconRenderer',
        width: 200,
        flex: 1,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          onClick: this.onDeleteButtonClick.bind(this),
          label: 'Delete'
        },
      },
      {
        headerName: 'Audit',
        cellRenderer: 'iconRenderer',
        width: 200,
        flex: 1,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          onClick: this.onAuditButtonClick.bind(this),
          label: 'Audit'
        },
      },
    ];
  }
  onEditButtonClick(params: any) {
    this.approvedby = params.data.approvedby;
    this.approvedon = params.data.approvedon;
    this.personid = params.data.personid;
    this.subpid = params.data.subpid;
    this.payid = params.data.payid;
    this.contentid = params.data.contentid;
    this.horoscope = params.data.horoscope;
    this.subscdesc = params.data.subscdesc;
    this.subscapproval = params.data.subscapproval;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    // this.subCategoryForm.patchValue({
    //   'subcatname': params.data.subcatname, 
    //   'catcode':params.data.catcode     
    // });
  }
  onDeleteButtonClick(params: any) {
    this.subscriberdetailsManager.deletesub(params.data.subdid).subscribe((response) => {
      for (let i = 0; i < this.subscriptionmaster.length; i++) {
        // if (this.subscriptionmaster[i].subdid == params.data.subdid) {
        //   this.subscriptionmaster?.splice(i, 1);
        //   break;
        // }
      }
      const selectedRows = params.api.getSelectedRows();
      params.api.applyTransaction({ remove: selectedRows });
      this.calloutService.showSuccess("Order Removed Successfully");
    });
  }

  onAuditButtonClick(params: any) {
    const modalRef = this.modalService.open(AuditComponent);
    modalRef.componentInstance.title = "subCategory";
    modalRef.componentInstance.details = params.data;
  }

  onFirstDataRendered(params: any) {
    params.api.sizeColumnsToFit();
  }
  // private markFormGroupTouched(formGroup: FormGroup) {
  //   (<any>Object).values(formGroup.controls).forEach((control: any) => {
  //     control.markAsTouched();
  //     if (control.controls) {
  //       this.markFormGroupTouched(control);
  //     }
  //   });
  // }
  onOrderClick(event: any, subCategoryForm: any) {

    // this.markFormGroupTouched(this.subCategoryForm);
    this.submitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }
    let subscriberdetails001wb = new Subscriberdetails001wb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    subscriberdetails001wb.approvedby = this.f.approvedby.value ? this.f.approvedby.value : "";
    subscriberdetails001wb.approvedon = this.f.approvedon.value ? this.f.approvedon.value : "";
    subscriberdetails001wb.contentid = this.f.contentid.value ? this.f.contentid.value : "";
    subscriberdetails001wb.horoscope = this.f.horoscope.value ? this.f.horoscope.value : "";
    subscriberdetails001wb.payid = this.f.payid.value ? this.f.payid.value : "";
    subscriberdetails001wb.subscdesc = this.f.subscdesc.value ? this.f.subscdesc.value : "";
    subscriberdetails001wb.subscapproval = this.f.subscapproval.value ? this.f.subscapproval.value : "";
    subscriberdetails001wb.personid = this.f.personid.value ? this.f.personid.value : "";
    if (this.subdid) {
      // subscriberdetails001wb.subdid = this.subdid;
      // subscriberdetails001wb.insertUser = this.insertUser;
      // subscriberdetails001wb.insertDatetime = this.insertDatetime;
      // subscriberdetails001wb.updatedUser = this.authManager.getcurrentUser.username;
      // subscriberdetails001wb.updatedDatetime = new Date();
      this.subscriberdetailsManager.updatesub(subscriberdetails001wb).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let submaster = deserialize<Subscriberdetails001wb>(Subscriberdetails001wb, response);
        for (let analytic of this.subscriptionmaster) {
          // if (analytic.subdid == submaster.subdid) {
          //   analytic.personid = submaster.personid;
          //   analytic.approvedby = submaster.approvedby;
          //   analytic.approvedon = submaster.approvedon;
          //   analytic.horoscope = submaster.horoscope;
          //   analytic.payid = submaster.payid;
          //   analytic.subpid = submaster.subpid;
          //   analytic.subscdesc = submaster.subscdesc;
          //   analytic.subscapproval = submaster.subscapproval;
          //   analytic.insertUser = this.insertUser;
          //   analytic.insertDatetime = this.insertDatetime;
          //   analytic.updatedUser = this.authManager.getcurrentUser.username;
          //   analytic.updatedDatetime = new Date();
          // }
        }
        this.gridOptions.api.setRowData(this.subscriptionmaster);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
        this.subdid = null;
      })
    }
  }
  onReset() {
    this.subCategoryForm.reset();
    this.submitted = false;
  }

  // onGeneratePdfReport(){
  // 	this.puAnalyticsManager.puAnalyticsPdf().subscribe((response) =>{
  //           saveAs(response,"AnalyticsList");

  // 	});
  // }

  // onGenerateExcelReport(){
  // 	this.puAnalyticsManager.puAnalyticsExcel().subscribe((response) => {
  // 		saveAs(response,"AnalyticsList");
  //       })
  // }
}
