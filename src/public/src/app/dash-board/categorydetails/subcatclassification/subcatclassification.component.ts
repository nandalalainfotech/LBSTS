import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { SubCatClassificationManager } from 'src/app/shared/services/restcontroller/bizservice/subcatcassification.service';
import { Subcatclassification001mb } from 'src/app/shared/services/restcontroller/entities/Subcatclassification001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-subcatclassification',
  templateUrl: './subcatclassification.component.html',
  styleUrls: ['./subcatclassification.component.css']
})
export class SubcatclassificationComponent implements OnInit {

  frameworkComponents: any;
  subcatname: string = "";
  catcode:string="";
  subcatcode:string="";
  classificationname:string="";
  public gridOptions: GridOptions | any;
  subCatClassiForm: FormGroup | any;
  submitted = false;
  subcatclasiid:number|any; 
  subCatClassification: Subcatclassification001mb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private  subcatclassificationManager: SubCatClassificationManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent
    }
  }
  ngOnInit() {

    this.subCatClassiForm = this.formBuilder.group({
      subcatname: ['', Validators.required],
      catcode: ['', Validators.required]
    });

    this.createDataGrid001();

    this.subcatclassificationManager.allsubclasi().subscribe((response) => {
      this.subCatClassification = deserialize<Subcatclassification001mb[]>(Subcatclassification001mb, response);
      if (this.subCatClassification.length > 0) {
        this.gridOptions?.api?.setRowData(this.subCatClassification);
      } else {
        this.gridOptions?.api?.setRowData([]);
      }
    })
  }
  get f() { return this.subCatClassiForm.controls; }
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
      	field: 'subcatclasiid',
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
        headerName: 'catcode',
        field: 'catcode',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'subcatcode',
        field: 'subcatcode',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true 
      },
      {
        headerName: 'classificationname',
        field: 'classificationname',
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
    this.catcode = params.data.catcode;
    this.subcatcode = params.data.subcatcode;
    this.classificationname = params.data.classificationname;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    this.subCatClassiForm.patchValue({
      'subcatname': params.data.subcatname, 
      'catcode':params.data.catcode     
    });
  }
  onDeleteButtonClick(params: any) {
    this.subcatclassificationManager.deletesub(params.data.puansId).subscribe((response) => {
      for (let i = 0; i < this.subCatClassification.length; i++) {
        if (this.subCatClassification[i].subcatclasiid == params.data.subcatid) {
          this.subCatClassification?.splice(i, 1);
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
    // this.markFormGroupTouched(this.subCatClassiForm);
    // this.submitted = true;
    // if (this.subCatClassiForm.invalid) {
    //   return;
    // }
    let subcatclassification = new Subcatclassification001mb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    subcatclassification.catcode = this.f.catcode.value ? this.f.catcode.value : "";
    subcatclassification.subcatcode = this.f.subcatcode.value ? this.f.subcatcode.value : "";
    subcatclassification.classificationname = this.f.classificationname.value ? this.f.classificationname.value : "";
    if (this.subcatclasiid) {
      subcatclassification.subcatclasiid = this.subcatclasiid;
      subcatclassification.inserteduser = this.insertUser;
      subcatclassification.inserteddatetime = this.insertDatetime;
      subcatclassification.updateduser = this.authManager.getcurrentUser.username;
      subcatclassification.updateddatetime = new Date();
      this.subcatclassificationManager.updatesubclasi(subcatclassification).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let subcat = deserialize<Subcatclassification001mb>(Subcatclassification001mb, response);
        for (let analytic of this.subCatClassification) {
          if (analytic.subcatclasiid == subcat.subcatclasiid) {
            analytic.catcode = subcat.catcode;
            analytic.subcatcode = subcat.subcatcode;
            analytic.classificationname = subcat.classificationname;
            analytic.inserteduser = this.insertUser;
            analytic.inserteddatetime = this.insertDatetime;
            analytic.updateduser = this.authManager.getcurrentUser.username;
            analytic.updateddatetime = new Date();
          }
        }
        this.gridOptions.api.setRowData(this.subCatClassification);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCatClassiForm.reset();
        this.submitted = false;
         this.subcatclasiid = null;
      })
    }
  }
  onReset() {
    this.subCatClassiForm.reset();
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
