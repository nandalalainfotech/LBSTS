import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { CategoryManager } from 'src/app/shared/services/restcontroller/bizservice/category.service';
import { Categorydetails001mb } from 'src/app/shared/services/restcontroller/entities/Categorydetails001mb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  frameworkComponents: any;
  catname: string = "";
  
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  Categorydetails: Categorydetails001mb[] = [];
  insertUser: any;
  insertDatetime: any;
  catid:number|any;
  constructor(private categoryManager: CategoryManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent
    }
  }
  ngOnInit() {

    // this.subCategoryForm = this.formBuilder.group({
    //   subcatname: ['', Validators.required],
    //   catcode: ['', Validators.required]
    // });

    this.createDataGrid001();

    this.categoryManager.allcatg().subscribe((response) => {
      this.Categorydetails = deserialize<Categorydetails001mb[]>(Categorydetails001mb, response);
      if (this.Categorydetails.length > 0) {
        this.gridOptions?.api?.setRowData(this.Categorydetails);
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
      	field: 'catid',
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
        headerName: 'catname',
        field: 'catname',
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
    this.catname = params.data.catname;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    this.subCategoryForm.patchValue({
      'subcatname': params.data.subcatname, 
      'catcode':params.data.catcode     
    });
  }
  onDeleteButtonClick(params: any) {
    this.categoryManager.deletecatg(params.data.catid).subscribe((response) => {
      for (let i = 0; i < this.Categorydetails.length; i++) {
        if (this.Categorydetails[i].catid == params.data.subcatid) {
          this.Categorydetails?.splice(i, 1);
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

    // this.markFormGroupTouched(this.subCategoryForm);
    // this.submitted = true;
    // if (this.subCategoryForm.invalid) {
    //   return;
    // }
    let categorydetails = new Categorydetails001mb();
    categorydetails.catname = this.f.catname.value ? this.f.catname.value : "";
    if (this.catid) {
      console.log("testting",this.catid)
      categorydetails.catid = this.catid;
      categorydetails.inserteduser = this.insertUser;
      categorydetails.inserteddatetime = this.insertDatetime;
      categorydetails.updateduser = this.authManager.getcurrentUser.username;
      categorydetails.updateddatetime = new Date();
      this.categoryManager.updatecatg(categorydetails).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let subcat = deserialize<Categorydetails001mb>(Categorydetails001mb, response);
        for (let analytic of this.Categorydetails) {
          if (analytic.catid == subcat.catid) {
            analytic.catname = subcat.catname;
            analytic.inserteduser = this.insertUser;
            analytic.inserteddatetime = this.insertDatetime;
            analytic.updateduser = this.authManager.getcurrentUser.username;
            analytic.updateddatetime = new Date();
          }
        }
        this.gridOptions.api.setRowData(this.Categorydetails);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
         this.catid = null;
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