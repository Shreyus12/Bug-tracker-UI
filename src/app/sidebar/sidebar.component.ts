import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  showList1: boolean = true;
  showList2: boolean = true;

  toggleList1() {
    this.showList1 = !this.showList1;
  }
  toggleList2() {
    this.showList2 = !this.showList2;
  }

  @Output() isSideBarToggle = new EventEmitter()
  sideBarToggle()
  {
    this.isSideBarToggle.emit()
    setTimeout(()=>
    {
      window.dispatchEvent(
        new Event('resize')
      )
    },300)
  }



}
