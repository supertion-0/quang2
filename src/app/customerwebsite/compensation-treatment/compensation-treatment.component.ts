import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailService } from 'src/app/services/mail/mail.service';
import { CommonService } from 'src/app/services/common/common.service';
import { ServerHttpService } from 'src/app/services/http/server-http.service';
import { Mail } from 'src/app/model/Mail';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { AddCustomerClaimComponent } from 'src/app/view/dialog/add-customer-claim/add-customer-claim.component';

@Component({
  selector: 'app-compensation-treatment',
  templateUrl: './compensation-treatment.component.html',
  styleUrls: ['./compensation-treatment.component.css']
})
export class CompensationTreatmentComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private mailService: MailService,private confirmMail:ServerHttpService ,public dialog: MatDialog, private common: CommonService) { }

  ngOnInit(): void {
  }
  public openDialog(){
    let dialogRef = this.dialog.open(AddCustomerClaimComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

}
