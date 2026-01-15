import { Component, Input, OnInit } from '@angular/core';
import { InputField } from '../../input-field';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
})
export class CustomFormComponent implements OnInit {
  @Input() inputData!: InputField[];
  @Input() dropdownOptions: any = {};
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    const controls: { [key: string]: FormControl } = {};
    this.inputData.forEach((ip) => {
      controls[ip.field] = new FormControl('');
    });
    this.form = this.fb.group(controls);
  }
  handleSubmit() {
    console.log(this.form.value);
  }
}
