import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { DashBoardComponent } from "~/dashboard/dashboard.component";
import { BottomBarComponent } from "~/bottombar/bottombar.component";

const routes: Routes = [
    { path: "", redirectTo: "/bottombar", pathMatch: "full" },
    { path: "dashboard", component: DashBoardComponent },
    { path: "bottombar", component: BottomBarComponent },
  
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }