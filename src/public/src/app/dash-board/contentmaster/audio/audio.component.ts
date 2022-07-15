import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { IconAudioRendererComponent } from 'src/app/shared/services/renderercomponent/iconaudio-renderer-component';
import { AudioManager } from 'src/app/shared/services/restcontroller/bizservice/audio.service';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { Audio001wb } from 'src/app/shared/services/restcontroller/entities/Audio001wb';
import { Contentmaster001mb } from 'src/app/shared/services/restcontroller/entities/Contentmaster001mb';

import { CalloutService } from 'src/app/shared/services/services/callout.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  frameworkComponents: any;
  contentid?:Contentmaster001mb;
  fieldname:string="";
  filename:string="";
  originalname:string="";
  content?: Buffer;
  audioid:string|any;
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  audio: Audio001wb[] = [];
  insertUser: any;
  insertDatetime: any;
  constructor(private audioManager: AudioManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal) {
    this.frameworkComponents = {
      iconRenderer: IconAudioRendererComponent
    }
  }
  ngOnInit() {
    this.createDataGrid001();
    this.audioManager.allaudio().subscribe((response) => {
      this.audio = deserialize<Audio001wb[]>(Audio001wb, response);
      if (this.audio.length > 0) {
        this.gridOptions?.api?.setRowData(this.audio);
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
      	field: 'audioid',
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
        suppressSizeToFit: true,
        hide: "true" 
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
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          // onClick: this.onaudioButtonClick.bind(this),
          label: 'File'
        },
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
  onaudioButtonClick(params:any){

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
    this.audioManager.deletesub(params.data.audioid).subscribe((response) => {
      for (let i = 0; i < this.audio.length; i++) {
        if (this.audio[i].audioid == params.data.audioid) {
          this.audio?.splice(i, 1);
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
    let audio001wb = new Audio001wb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    audio001wb.content = this.f.content.value ? this.f.content.value : "";
    audio001wb.contentid = this.f.contentid.value ? this.f.contentid.value : "";
    audio001wb.fieldname = this.f.fieldname.value ? this.f.fieldname.value : "";
    audio001wb.filename = this.f.filename.value ? this.f.filename.value : "";
    audio001wb.originalname = this.f.originalname.value ? this.f.originalname.value : "";
    if (this.audioid) {
      audio001wb.audioid = this.audioid;
      audio001wb.inserteduser = this.insertUser;
      audio001wb.inserteddatetime = this.insertDatetime;
      audio001wb.updateduser = this.authManager.getcurrentUser.username;
      audio001wb.updateddatetime = new Date();
      this.audioManager.updatesub(audio001wb,this.audioid).subscribe(response => {
        this.calloutService.showSuccess("Order Update Successfully");
        let audio = deserialize<Audio001wb>(Audio001wb, response);
        for (let analytic of this.audio) {
          if (analytic.audioid == audio.audioid) {
            analytic.content = audio.content;
            analytic.contentid = audio.contentid;
            analytic.fieldname = audio.fieldname;
            analytic.originalname =audio.originalname
            analytic.filename = audio.filename;
            analytic.inserteduser = this.insertUser;
            analytic.inserteddatetime = this.insertDatetime;
            analytic.updateduser = this.authManager.getcurrentUser.username;
            analytic.updateddatetime = new Date();
          }
        }
        this.gridOptions.api.setRowData(this.audio);
        this.gridOptions.api.refreshView();
        this.gridOptions.api.deselectAll();
        this.subCategoryForm.reset();
        this.submitted = false;
         this.audioid = null;
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
