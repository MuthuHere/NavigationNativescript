import { Component, OnInit } from "@angular/core";
import { BottomNavigation, BottomNavigationTab, OnTabSelectedEventData } from 'nativescript-bottom-navigation';
import { Page, isIOS } from 'tns-core-modules/ui/page';
import { Color } from "tns-core-modules/color/color";

@Component(
  {
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./bottombar.component.html",
  }
)
export class BottomBarComponent implements OnInit {

  public tabs: BottomNavigationTab[] = [
    new BottomNavigationTab('First', 'ic_home'),
    new BottomNavigationTab('Second', 'ic_view_list', false),
    new BottomNavigationTab('Third', 'ic_menu')
  ];



  
  private _bottomNavigation: BottomNavigation;

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(   private page: Page) { }

  ngOnInit(): void {
    this._bottomNavigation = this.page.getViewById('bottomNavigation');

  }

  onBottomNavigationTabSelected(args: OnTabSelectedEventData): void {
    console.log(`old tab index:  ${args.oldIndex}`);
    console.log(`selected tab index:  ${args.newIndex}`);
  }
}