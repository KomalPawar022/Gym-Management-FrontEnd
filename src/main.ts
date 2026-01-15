import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { MemberComponent } from './member/member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-member>
  `,
  imports: [MemberComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
