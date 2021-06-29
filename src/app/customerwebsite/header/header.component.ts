import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { PopupComponent } from 'src/app/view/dialog/popup/popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  constructor(public common:CommonService,private route:Router,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  exit(){
    this.common.deleteCookie('token_customer');
    this.route.navigate(['login-customerweb']);
  }

  displayAddContractDialog(): void {
    this.status = !this.status;
  }
  public openDialog(){
    let dialogRef = this.dialog.open(PopupComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

}
