import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyForm!: FormGroup;
  validMessage = '';

  constructor(private service: CompanyService) { }

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      companyCode: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      ceo: new FormControl('', Validators.required),
      turnover: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      exchange: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    console.log(this.companyForm.value);
    console.log('form submitting');
    if(this.companyForm.valid) {
      this.service.registerCompany(this.companyForm.value).subscribe(
        data => {
          this.validMessage = 'The company has been successfully registered!';
          this.companyForm.reset();
          return true;
        },
        error => {
          return error;
        }
      );
    } else {
      this.validMessage = 'Please fill out all fields before submitting!'
    }
  }

}
