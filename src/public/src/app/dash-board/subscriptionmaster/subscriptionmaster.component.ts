import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { SubscriptionmasterManager } from 'src/app/shared/services/restcontroller/bizservice/subscriptionmaster.service';
import { Subscriptionmaster001mb } from 'src/app/shared/services/restcontroller/entities/Subscriptionmaster001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-subscriptionmaster',
  templateUrl: './subscriptionmaster.component.html',
  styleUrls: ['./subscriptionmaster.component.css']
})
export class SubscriptionmasterComponent implements OnInit {

  frameworkComponents: any;
  subpname: string="";
  description: string="";
  tenure: string="";
  amount: number|any;
  discountflag?: boolean;
  personid: string="";
  subpid:string|any;
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  subscriptionmaster: Subscriptionmaster001mb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private subscriptionmasterManager: SubscriptionmasterManager,
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
    this.subscriptionmasterManager.allsubmaster().subscribe((response) => {
      this.subscriptionmaster = deserialize<Subscriptionmaster001mb[]>(Subscriptionmaster001mb, response);
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
      	field: 'submid',
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
        headerName: 'subpname',
        field: 'subpname',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'description',
        field: 'description',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'tenure',
        field: 'tenure',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'amount',
        field: 'amount',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'discountflag',
        field: 'discountflag',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
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
    this.subpname = params.data.subpname;
    this.description = params.data.description;
    this.tenure = params.data.tenure;
    this.amount = params.data.amount;
    this.discountflag = params.data.discountflag;
    this.personid = params.data.personid;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    // this.subCategoryForm.patchValue({
    //   'subcatname': params.data.subcatname, 
    //   'catcode':params.data.catcode     
    // });
  }
  onDeleteButtonClick(params: any) {
    this.subscriptionmasterManager.deletesub(params.data.subpid).subscribe((response) => {
      for (let i = 0; i < this.subscriptionmaster.length; i++) {
        if (this.subscriptionmaster[i].subpid == params.data.subpid) {
          this.subscriptionmaster?.splice(i, 1);
          break;
        }
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
    let subscriptionmaster001mb = new Subscriptionmaster001mb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    subscriptionmaster001mb.amount = this.f.amount.value ? this.f.amount.value : "";
    subscriptionmaster001mb.description = this.f.description.value ? this.f.description.value : "";
    subscriptionmaster001mb.subpname = this.f.subpname.value ? this.f.subpname.value : "";
    subscriptionmaster001mb.tenure = this.f.tenure.value ? this.f.tenure.value : "";
    subscriptionmaster001mb.amount = this.f.amount.value ? this.f.amount.value : "";
    subscriptionmaster001mb.discountflag = this.f.discountflag.value ? this.f.discountflag.value : "";
    subscriptionmaster001mb.personid = this.f.personid.value ? this.f.personid.value : "";
    if (this.subpid) {
      subscriptionmaster001mb.subpid = this.subpid;
      subscriptionmaster001mb.inserteduser = this.insertUser;
      subscriptionmaster001mb.inserteddatetime = this.insertDatetime;
      subscriptionmaster001mb.updateduser = this.authManager.getcurrentUser.username;
      subscriptionmaster001mb.updateddatetime = new Date();
      this.subscriptionmasterManager.updatesub(subscriptionmaster001mb).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let submaster = deserialize<Subscriptionmaster001mb>(Subscriptionmaster001mb, response);
        for (let analytic of this.subscriptionmaster) {
          if (analytic.subpid == submaster.subpid) {
            analytic.amount = submaster.amount;
            analytic.description = submaster.description;
            analytic.discountflag = submaster.discountflag;
            analytic.personid =submaster.personid;
            analytic.tenure =submaster.tenure;
            analytic.subpname =submaster.subpname;
            analytic.inserteduser = this.insertUser;
            analytic.inserteddatetime = this.insertDatetime;
            analytic.updateduser = this.authManager.getcurrentUser.username;
            analytic.updateddatetime = new Date();
          }
        }
        this.gridOptions.api.setRowData(this.subscriptionmaster);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
         this.subpid = null;
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
