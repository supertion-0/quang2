import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract } from 'src/app/model/Contract';
import jwt_decode from 'jwt-decode';
import { EmployeeAcc } from 'src/app/model/EmployeeAcc';
import { Request } from 'src/app/model/Request';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractrequestService } from 'src/app/services/contractRequest/contractrequest.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { EmployeeInfoDTO } from 'src/app/model/EmployeeInfoDTO';
import { HttpClient } from '@angular/common/http';
import { FileManagementService } from 'src/app/services/fileManagement/file-management.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { AuthenService } from 'src/app/services/authen/authen.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerAttachment } from 'src/app/model/CustomerAttachment';
import jwtDecode from 'jwt-decode';
import { Referencetable } from 'src/app/model/Referencetable';
import { CustomerClaim } from 'src/app/model/CustomerClaim';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ContractDTO } from 'src/app/model/ContractDTO';



@Component({
  selector: 'app-add-customer-claim',
  templateUrl: './add-customer-claim.component.html',
  styleUrls: ['./add-customer-claim.component.css']
})
export class AddCustomerClaimComponent implements OnInit {
  id:number;
  listDocument=new Array<CustomerAttachment>();
  // fileName = '';
  result = '';
  selectedFile=new Array<File>();
  ref:Referencetable;
  payment_period:string;
  contracts:ContractDTO;



  constructor(private snackBar:SnackbarService,
    private httpClient: HttpClient,
    private fileService:FileManagementService,
    private common:CommonService,private spinner:NgxSpinnerService,
    private referTable:RefertableService,public authenService: AuthenService,
    private  route : ActivatedRoute,private contractService : ContractService,
    @Inject(MAT_DIALOG_DATA) public customerClaim : CustomerClaim,
    private customerService: CustomerService,private notiService: SnackbarService,
    public dialogRef: MatDialogRef<AddCustomerClaimComponent>) {}

  bhstyles = Array[4] = [
    { value: 0, viewValue: 'Bảo hiểm chăm sóc y tế' },
    { value: 1, viewValue: 'Bảo hiểm phẫu thuật và điều trị đa khoa' },
    { value: 2, viewValue: 'Bảo hiểm tai nạn toàn diện' },
    { value: 3, viewValue: 'Bảo hiểm các bệnh lý nghiêm trọng' },
  ];

  ngOnInit(): void {
  }
  onChangeFile(event){
    if(event.target.files[0].size > 1048576){
      this.snackBar.openSnackBar("Dung Lượng File Cần Nhỏ Hơn Hoặc Bằng 1Mb","Đóng");
      return;
    }
    this.selectedFile.push(event.target.files[0]);
  }

  onUpload(){
    if(this.selectedFile.length!=0){
      this.spinner.show();
    const uploadImageData = new FormData();
    this.selectedFile.forEach(file => {
      uploadImageData.append('fileData', file, file.name);
    });

    //   var selectFile = event.target.files;
  for(var i = 0; i < this.selectedFile.length;i++){
    this.result += '<a href="'+this.selectedFile[i].name+'">'+this.selectedFile[i].name+'<a/>';
    this.result += '<br>';
  }

    // this.fileService.uploadFile(uploadImageData).subscribe((data => {
    //   if(data['body']!=null){
    //     let listFileSave = Array<CustomerAttachment>();
    //     for(let i=0;i<this.selectedFile.length;i++){
    //       listFileSave.push(new CustomerAttachment(data['body'][i][1],this.selectedFile[i].name,data['body'][i][0],null,this.contracts.id));
    //     }
    //     this.fileService.saveFile(listFileSave).subscribe((data => {
    //       // this.refresh();
    //       this.selectedFile = [];
    //       this.snackBar.openSnackBar("Upload File Thành Công!","Đóng");
    //     }))
    //   }
    // }))
  } else {
    this.snackBar.openSnackBar("Vui Lòng Chọn Ít Nhất 1 File Để Tải Lên","Đóng");
  }
  }

  removeFile(index:number){
    if(index>-1){
      this.selectedFile.splice(index,1)
    }
  }

  // public refresh(){
  //   this.spinner.show();
  //   this.id = this.route.snapshot.params['id'];
  //   let data = {id:this.id,code:jwtDecode(this.common.getCookie('token_key'))['sub']}
  //   this.contractService.getDetailContract(data).subscribe((data =>{
  //     this.contracts = data;
  //     this.referTable.getAllReference().subscribe((data => {
  //       this.ref=data;
  //       this.payment_period = this.ref.multiplierForPaymentPeriod.find(i => i.id == this.contracts.payment_period_id)['description'];
  //       this.fileService.getFile(this.contracts.id).subscribe((data => {
  //         this.listDocument = data;
  //         this.spinner.hide();
  //       }))
  //     }))
  //   }))
  // }


//   onFileSelected(event) {

//     const file:File = event.target.files[0];

//     if (file) {

//         this.fileName = file.name;

//         const formData = new FormData();

//         formData.append("thumbnail", file);

//         const upload$ = this.http.post("/api/thumbnail-upload", formData);

//         upload$.subscribe();
//     }
// }

// public onSubmit() {
//     this.spinner.show();
//     this.customerService.addCustomerClaim(this.customerClaim).subscribe((data => {
//         this.customerService.invokeRefreshTableFun(); 
//       this.spinner.hide();
//     }))
//   }

  public onSubmit() {
    this.customerService.addCustomerClaim(this.customerClaim).subscribe((data => {
      if(data !=null){
        this.customerService.invokeRefreshTableFun();  
        this.notiService.openSnackBar("Thêm thông tin của bạn thành công thành công","Đóng"); 
      }else{
        this.customerService.invokeRefreshTableFun();  
        this.notiService.openSnackBar("Thêm thông tin của bạn KHÔNG thành công","Đóng"); 
      }    
    }))

  }

// save(event:any): void{
//   var selectFile = event.target.files;
//   for(var i = 0; i < selectFile.length;i++){
//     this.result += '<a href="'+selectFile.source+'">'+selectFile[i].name+'<a/>';
//     this.result += '<br>';
//   }

//   }
  
}

