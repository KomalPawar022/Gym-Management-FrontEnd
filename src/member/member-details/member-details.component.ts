import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InputField } from '../../input-field';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  imports: [SharedModule],
  standalone: true,
})
export class MemberDetailsComponent implements OnInit {
  inputData!: InputField[];
  dropdownOptions = {};
  constructor() {}

  ngOnInit() {
    this.dropdownOptions = {
      membershipOptions: [{ id: 1, key: 'Regular' }],
      genderData: [
        { id: 2, key: 'Male' },
        { id: 3, key: 'Female' },
      ],
      stateData: [{ id: 4, key: 'Maharashtra' }],
    };
    this.inputData = [
      {
        field: 'name',
        type: 'input',
        label: 'Name',
        optionsData: '',
      },
      {
        field: 'membership',
        type: 'dropdown',
        label: 'Membership',
        optionsData: 'membershipOptions',
      },
      {
        field: 'date_of_birth',
        type: 'date',
        label: 'Date of Birth',
        optionsData: '',
      },
      {
        field: 'gender',
        type: 'dropdown',
        label: 'Gender',
        optionsData: 'genderData',
      },
      {
        field: 'mobile_no',
        type: 'input',
        label: 'Mobile Number',
        optionsData: '',
      },
      {
        field: 'email_id',
        type: 'input',
        label: 'Email Id',
        optionsData: '',
      },
      {
        field: 'address',
        type: 'textarea',
        label: 'Address',
        optionsData: '',
      },
      {
        field: 'city',
        type: 'input',
        label: 'City',
        optionsData: '',
      },
      {
        field: 'state',
        type: 'dropdown',
        label: 'State',
        optionsData: 'stateData',
      },
      {
        field: 'postal_code',
        type: 'input',
        label: 'Postal Code',
        optionsData: '',
      },
      {
        field: 'emergency_no',
        type: 'input',
        label: 'Emergency Contact Number',
        optionsData: '',
      },
    ];
  }
}
