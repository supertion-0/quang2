import { Component,Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contract } from 'src/app/model/Contract';
import { CustomerInfo } from 'src/app/model/CustomerInfo';
import { CustomerTempInfoDTO } from 'src/app/model/CustomerTempInfoDTO';
import { Illustration } from 'src/app/model/Illustration';
import { Referencetable } from 'src/app/model/Referencetable';
import { CommonService } from 'src/app/services/common/common.service';
import { ContractService } from 'src/app/services/contract/contract.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { IllustrationService } from 'src/app/services/illustration/illustration.service';
import { RefertableService } from 'src/app/services/refertable/refertable.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private customerService : CustomerService,public employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public customerTempInfoDTO: CustomerTempInfoDTO, private router: Router, private notiService: SnackbarService) { }

  ngOnInit(): void {
  }

  // public onSubmit() {
  //   this.customerService.addCustomerTempInfo(this.customerTempInfoDTO).subscribe((data => {
  //     if(data !=null){
  //       this.customerService.invokeRefreshTableFun();  
  //       this.notiService.openSnackBar("Thêm thông tin của bạn thành công thành công","Đóng"); 
  //     }else{
  //       this.customerService.invokeRefreshTableFun();  
  //       this.notiService.openSnackBar("Thêm thông tin của bạn KHÔNG thành công","Đóng"); 
  //     }    
  //   }))

  // }

  onSubmit() {
    this.customerService.addCustomerTempInfo(this.customerTempInfoDTO).subscribe(() => {
      alert('Thông tin gửi thành công');

    }, error => {
      console.log('Error', error);
    });
  }

  

}
