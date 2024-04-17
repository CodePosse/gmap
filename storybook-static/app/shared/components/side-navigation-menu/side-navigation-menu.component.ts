import { Component, NgModule, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { navigation } from '../../../app-navigation';


@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent  {


}

@NgModule({
  imports: [],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent]
})
export class SideNavigationMenuModule { }
