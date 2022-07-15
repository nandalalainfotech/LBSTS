import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { SubCategoryManager } from 'src/app/shared/services/restcontroller/bizservice/subcategorymanager.service';
import { Subcategory001mb } from 'src/app/shared/services/restcontroller/entities/Subcategory001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  frameworkComponents: any;
  subcatname: string = "";
  catcode:string="";
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  subcatid:number|any; 
  subCategory: Subcategory001mb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private subCategoryManager: SubCategoryManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent
    }
  }
  ngOnInit() {

    this.subCategoryForm = this.formBuilder.group({
      subcatname: ['', Validators.required],
      catcode: ['', Validators.required]
    });

    this.createDataGrid001();

    this.subCategoryManager.allsub().subscribe((response) => {
      this.subCategory = deserialize<Subcategory001mb[]>(Subcategory001mb, response);
      if (this.subCategory.length > 0) {
        this.gridOptions?.api?.setRowData(this.subCategory);
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
      	field: 'subcatid',
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
        headerName: 'subcat',
        field: 'subcatname',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
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
    this.subcatname = params.data.subcatname;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    this.subCategoryForm.patchValue({
      'subcatname': params.data.subcatname, 
      'catcode':params.data.catcode     
    });
  }
  onDeleteButtonClick(params: any) {
    this.subCategoryManager.deletesub(params.data.puansId).subscribe((response) => {
      for (let i = 0; i < this.subCategory.length; i++) {
        if (this.subCategory[i].subcatid == params.data.subcatid) {
          this.subCategory?.splice(i, 1);
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
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  onOrderClick(event: any, subCategoryForm: any) {
     console.log("testting---1")
    this.markFormGroupTouched(this.subCategoryForm);
    this.submitted = true;
    if (this.subCategoryForm.invalid) {
      console.log("this.subCategoryForm",this.subCategoryForm)
      console.log("testeddd--2")
      return;
    }
    let subcategory001mb = new Subcategory001mb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    subcategory001mb.subcatname = this.f.subcatname.value ? this.f.subcatname.value : "";
     subcategory001mb.catcode = this.f.catcode.value ? this.f.catcode.value : "";
    if (this.subcatid) {
      console.log("testting",this.subcatid)
      subcategory001mb.subcatid = this.subcatid;
      subcategory001mb.inserteduser = this.insertUser;
      subcategory001mb.inserteddatetime = this.insertDatetime;
      subcategory001mb.updateduser = this.authManager.getcurrentUser.username;
      subcategory001mb.updateddatetime = new Date();
      this.subCategoryManager.updatesub(subcategory001mb).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let subcat = deserialize<Subcategory001mb>(Subcategory001mb, response);
        for (let analytic of this.subCategory) {
          if (analytic.subcatid == subcat.subcatid) {
            analytic.subcatname = subcat.subcatname;
            analytic.inserteduser = this.insertUser;
            analytic.inserteddatetime = this.insertDatetime;
            analytic.updateduser = this.authManager.getcurrentUser.username;
            analytic.updateddatetime = new Date();
          }
        }
        this.gridOptions.api.setRowData(this.subCategory);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
         this.subcatid = null;
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
