import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { deserialize } from 'serializer.ts/Serializer';
import { AuditComponent } from 'src/app/shared/audit/audit.component';
import { IconRendererComponent } from 'src/app/shared/services/renderercomponent/icon-renderer-component';
import { AuthManager } from 'src/app/shared/services/restcontroller/bizservice/auth-manager.service';
import { PhotoManager } from 'src/app/shared/services/restcontroller/bizservice/photo.service';
import { Contentmaster001mb } from 'src/app/shared/services/restcontroller/entities/Contentmaster001mb';
import { Photo001wb } from 'src/app/shared/services/restcontroller/entities/Photo001wb';
import { CalloutService } from 'src/app/shared/services/services/callout.service';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  frameworkComponents: any;
  contentid?: Contentmaster001mb;
  fieldname: string = "";
  filename: string = "";
  originalname: string = "";
  content?: Buffer;
  photoid: number | any;
  public gridOptions: GridOptions | any;
  subCategoryForm: FormGroup | any;
  submitted = false;
  subcatid: number | any;
  photo: Photo001wb[] = [];
  insertUser: any;
  insertDatetime: any;
  image:any;
  arrayBuffer:any;
  buffer:any;
  imageurl:any;
  constructor(private photoManager: PhotoManager,
    private formBuilder: FormBuilder,
    private calloutService: CalloutService,
    private authManager: AuthManager,
    private modalService: NgbModal,  private sanitizer: DomSanitizer) {
    this.frameworkComponents = {
      iconRenderer: IconRendererComponent
    }

  }
  ngOnInit() {
    this.createDataGrid001();
    this.photoManager.allsub().subscribe((response) => {
      console.log("response", response)
      // var buffer = new ArrayBuffer(32);

      // var bufffers=new Blob([buffer]);
      // console.log("bufffers", bufffers)
      // let objectURL = 'data:image/png;base64,' + response.content;
      // this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      //  var blob = new Blob([response.text()], {type: "image/png"});
      // console.log(blob);
      // console.log(window.btoa(blob.toString()));
      // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
      // let TYPED_ARRAY = new Uint8Array(response.content);
      // const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
      //   return data + String.fromCharCode(byte);
      //   }, '');
      //   let base64String = btoa(STRING_CHAR);
      this.photo = deserialize<Photo001wb[]>(Photo001wb, response);
      if (this.photo.length > 0) {
        this.gridOptions?.api?.setRowData(this.photo);
      } else {
        this.gridOptions?.api?.setRowData([]);
      }
    })
        // var binary = '';
        // var bytes = new Uint8Array( this.buffer );
        // var len = bytes.byteLength;
        // for (var i = 0; i < len; i++) {
        //     binary += String.fromCharCode( bytes[ i ] );
        // }
       
        // return window.btoa( binary );
  
//   function base64ToArrayBuffer(base64) {
    //     var binaryString = window.atob(base64);
    //     var binaryLen = binaryString.length;
    //     var bytes = new Uint8Array(binaryLen);
    //     for (var i = 0; i < binaryLen; i++) {
    //        var ascii = binaryString.charCodeAt(i);
    //        bytes[i] = ascii;
    //     }
    //     return bytes;
    //  }
      // var buffer = Buffer.from('response.content');
      // console.log("buffer", buffer)
      // var string64 = buffer.toString('base64');
      // console.log("string64", string64)
      // var string64 = response.content.data.toString('base64');
      // console.log("string64",string64)
      // const reader = new FileReader();
      // reader.onload = (e) => this.image = e.target.result;
      // reader.readAsDataURL(new Blob([data]));
      // let hh = new Uint8Array(response.content);
      // const STRING_CHAR =hh.reduce((data, byte)=> {
      //   return data + String.fromCharCode(byte);
      //   }, '');
      //   let base64String = btoa(STRING_CHAR);
      //   this.imageurl = this.domSanitizer.bypassSecurityTrustUrl(‘data:image/jpg;base64, ‘ + base64String);
     
  }
  get f() { return this.subCategoryForm.controls; }
  
    //    base64ToArrayBuffer(base64:any) {
    //     var binaryString = window.atob(base64);
    //     var binaryLen = binaryString.length;
    //     var bytes = new Uint8Array(binaryLen);
    //     for (var i = 0; i < binaryLen; i++) {
    //        var ascii = binaryString.charCodeAt(i);
    //        bytes[i] = ascii;
    //     }
    //     return bytes;
    //  }
  //    arrayBufferToBase64 = function( buffer: Iterable<number> | undefined ) {
  //     var binary = '';
  //     var bytes = new Uint8Array( buffer );
  //     var len = bytes.byteLength;
  //     for (var i = 0; i < len; i++) {
  //         binary += String.fromCharCode( bytes[ i ] );
  //     }
  //     return window.btoa( binary );
  // }
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
        field: 'photoid',
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
        cellStyle: { textAlign: 'center' },
        cellRendererParams: {
          onClick: this.onphotoButtonClick.bind(this),
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
      // }
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
  onphotoButtonClick(params: any) {

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
      'catcode': params.data.catcode
    });
  }
  onDeleteButtonClick(params: any) {
    this.photoManager.deletesub(params.data.photoid).subscribe((response) => {
      for (let i = 0; i < this.photo.length; i++) {
        if (this.photo[i].photoid == params.data.photoid) {
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
    console.log("testting---1")
    // this.markFormGroupTouched(this.subCategoryForm);
    this.submitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }
    let photo001wb = new Photo001wb();

    // puranalytics001mb.fromDate = new Date(this.f.fromDate.value);
    photo001wb.content = this.f.content.value ? this.f.content.value : "";
    photo001wb.contentid = this.f.contentid.value ? this.f.contentid.value : "";
    photo001wb.fieldname = this.f.fieldname.value ? this.f.fieldname.value : "";
    photo001wb.filename = this.f.filename.value ? this.f.filename.value : "";
    photo001wb.originalname = this.f.originalname.value ? this.f.originalname.value : "";
    if (this.photoid) {
      photo001wb.photoid = this.photoid;
      // photo001wb.insertUser = this.insertUser;
      // photo001wb.insertDatetime = this.insertDatetime;
      // photo001wb.updatedUser = this.authManager.getcurrentUser.username;
      // photo001wb.updatedDatetime = new Date();
      // this.photoManager.updatesub(photo001wb).subscribe(response => {
      //   this.calloutService.showSuccess("Order Update Successfully");
      //   let photos = deserialize<Photo001wb>(Photo001wb, response);
      //   for (let analytic of this.photo) {
      //     if (analytic.photoid == photos.photoid) {
      //       analytic.content = photos.content;
      //       analytic.contentid = photos.contentid;
      //       analytic.fieldname = photos.fieldname;
      //       analytic.originalname = photos.originalname
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
