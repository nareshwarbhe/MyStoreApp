import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMaster } from '../Models/user-master';
import { UtilityService } from '../Services/utility.service';
import { Country } from '../Models/country';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public countries: Object;
  public users: any;
  public userMaster: UserMaster;
  errorMessage: string;
  registerForm: FormGroup;
  submitted = false;
  isEdit = false;
  dataSaved = false;
  message = "";
  constructor(private formBuilder: FormBuilder, private service: UtilityService) { }

  ngOnInit() {
    //this.registerForm.reset();
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      Terms: [false, Validators.requiredTrue],
      countryId: ['', Validators.required],
      dob: ['', Validators.required]
    }, { validator: this.mustMatch('password', 'confirmPassword') }
    );
    this.getCountries();
    this.getUserMaster();
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      //alert("invalid form");
      return;
    }
    else {
      // save to database
      const user = this.registerForm.value;
      // this.createUser(user).subscribe(()=>{
      //   this.getUserMaster();
      // });
      if (this.isEdit == false) {
        this.createUser(user);
      }
      else if (this.isEdit == true) {
        this.updateUser(user);
      }
      // await this.getUserMaster();
      $("#userModal").modal('hide');
    }
  }
  createUser(user: UserMaster) {
    return this.service.createUser(user).subscribe(() => {
      this.registerForm.reset();
      this.getUserMaster();
      this.message = "Data saved successfully";
      this.isEdit = false;
      this.dataSaved = true;
    })
  }
  updateUser(user: UserMaster) {
    return this.service.updateUser(user).subscribe(() => {
      this.registerForm.reset();
      this.getUserMaster();
      this.message = "Data updated successfully";
    })
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  getCountries() {
    // this.service.getCountries().subscribe(data => this.countries = data,error => this.errorMessage=<any>error);
    this.service.getCountries().subscribe(data => this.countries = data);
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  get f() { return this.registerForm.controls; }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  addUserModal() {
    this.isEdit = false;
    $("#userModal").modal('show');
  }
  editUserModel(userParam) {
    this.isEdit = true;
    $("#userModal").modal('show');
    this.registerForm.controls['firstName'].setValue(userParam.FirstName)
    this.registerForm.controls['lastName'].setValue(userParam.LastName)
    this.registerForm.controls['phoneNumber'].setValue(userParam.PhoneNumber)
    this.registerForm.controls['email'].setValue(userParam.Email);
    this.registerForm.controls['dob'].setValue(userParam.dob);
  }
  getUserMaster() {
    this.service.getUsers().subscribe(data => this.users = data);
  }
}
