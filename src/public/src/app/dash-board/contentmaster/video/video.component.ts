import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { IconVideoRendererComponent } from 'src/app/shared/services/renderercomponent/iconvideo-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { VideoManager } from 'src/app/shared/services/restcontroller/bizservice/video.service';
import { Video001wb } from 'src/app/shared/services/restcontroller/entities/Video001wb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  frameworkComponents: any;
  contentid: string = "";
  fieldname:string="";
  filename:string="";
  originalname:string="";
  content?: Buffer;
  videoid:string="";
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  subcatid:number|any; 
  photo: Video001wb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private videoManager: VideoManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconVideoRendererComponent
    }
  }
  ngOnInit() {
    this.createDataGrid001();
    this.videoManager.allvideo().subscribe((response) => {
      this.photo = deserialize<Video001wb[]>(Video001wb, response);
      if (this.photo.length > 0) {
        this.gridOptions?.api?.setRowData(this.photo);
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
      	field: 'videoid',
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
        headerName: 'fieldname',
        field: 'fieldname',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'filename',
        field: 'filename',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'originalname',
        field: 'originalname',
        width: 200,
        flex: 1,
        sortable: true,
        filter: true,
        resizable: true,
        suppressSizeToFit: true
      },
      {
        headerName: 'content',
        cellRenderer: 'iconRenderer',
        width: 200,
        flex: 1,
        suppressSizeToFit: true,
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          // onClick: this.onEditButtonClick.bind(this),
          label: 'File'
        }
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
    this.contentid = params.data.contentid;
    this.fieldname = params.data.fieldname;
    this.filename = params.data.filename;
    this.originalname = params.data.originalname;
    this.content = params.data.content;
    this.insertUser = params.data.insertUser;
    this.insertDatetime = params.data.insertDatetime;
    this.subCategoryForm.patchValue({
      'subcatname': params.data.subcatname, 
      'catcode':params.data.catcode     
    });
  }
  onDeleteButtonClick(params: any) {
    this.videoManager.deletesub(params.data.videoid).subscribe((response) => {
      for (let i = 0; i < this.photo.length; i++) {
        if (this.photo[i].videoid == params.data.videoid) {
          this.photo?.splice(i, 1);
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
    let video001wb = new Video001wb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    video001wb.content = this.f.content.value ? this.f.content.value : "";
    video001wb.contentid = this.f.contentid.value ? this.f.contentid.value : "";
    video001wb.fieldname = this.f.fieldname.value ? this.f.fieldname.value : "";
    video001wb.filename = this.f.filename.value ? this.f.filename.value : "";
    video001wb.originalname = this.f.originalname.value ? this.f.originalname.value : "";
    if (this.videoid) {
      video001wb.videoid = this.videoid;
      // video001wb.insertUser = this.insertUser;
      // video001wb.insertDatetime = this.insertDatetime;
      // video001wb.updatedUser = this.authManager.getcurrentUser.username;
      // video001wb.updatedDatetime = new Date();
      // this.videoManager.updatesub(video001wb).subscribe(response => {
      //   this.calloutService.showSuccess("Order Update Successfully");
      //   let photos = deserialize<Video001wb>(Video001wb, response);
      //   for (let analytic of this.photo) {
      //     if (analytic.videoid == photos.videoid) {
      //       analytic.content = photos.content;
      //       analytic.contentid = photos.contentid;
      //       analytic.fieldname = photos.fieldname;
      //       analytic.originalname =photos.originalname
      //       analytic.filename = photos.filename;
      //       analytic.insertUser = this.insertUser;
      //       analytic.insertDatetime = this.insertDatetime;
      //       analytic.updatedUser = this.authManager.getcurrentUser.username;
      //       analytic.updatedDatetime = new Date();
      //     }
      //   }
        this.gridOptions.api.setRowData(this.photo);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
         this.subcatid = null;
      // })
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
