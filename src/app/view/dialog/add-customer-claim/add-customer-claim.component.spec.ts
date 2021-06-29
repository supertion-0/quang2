import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerClaimComponent } from './add-customer-claim.component';

describe('AddCustomerClaimComponent', () => {
  let component: AddCustomerClaimComponent;
  let fixture: ComponentFixture<AddCustomerClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
