import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  standalone: true,
  imports: [SharedModule,MemberDetailsComponent,CommonModule],
})
export class MemberComponent implements OnInit {
  openDetail=false
ngOnInit(): void {

}
handleNewMember(){
  this.openDetail=true
}
  
}
