"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_bottom_navigation_1 = require("nativescript-bottom-navigation");
var page_1 = require("tns-core-modules/ui/page");
var BottomBarComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function BottomBarComponent(page) {
        this.page = page;
        this.tabs = [
            new nativescript_bottom_navigation_1.BottomNavigationTab('First', 'ic_home'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Second', 'ic_view_list', false),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Third', 'ic_menu')
        ];
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        this._bottomNavigation = this.page.getViewById('bottomNavigation');
    };
    BottomBarComponent.prototype.onBottomNavigationTabSelected = function (args) {
        console.log("old tab index:  " + args.oldIndex);
        console.log("selected tab index:  " + args.newIndex);
    };
    BottomBarComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./bottombar.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvdHRvbWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUZBQStHO0FBQy9HLGlEQUF1RDtBQVV2RDtJQWFFLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsNEJBQXVCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBYjFCLFNBQUksR0FBMEI7WUFDbkMsSUFBSSxvREFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBQzNDLElBQUksb0RBQW1CLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUM7WUFDeEQsSUFBSSxvREFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1NBQzVDLENBQUM7SUFTbUMsQ0FBQztJQUV0QyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFckUsQ0FBQztJQUVELDBEQUE2QixHQUE3QixVQUE4QixJQUE0QjtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF6QlUsa0JBQWtCO1FBUDlCLGdCQUFTLENBQ1I7WUFDRSxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQyxDQUNGO3lDQWdCOEIsV0FBSTtPQWZ0QixrQkFBa0IsQ0EwQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJvdHRvbU5hdmlnYXRpb24sIEJvdHRvbU5hdmlnYXRpb25UYWIsIE9uVGFiU2VsZWN0ZWRFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBQYWdlLCBpc0lPUyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcclxuXHJcbkBDb21wb25lbnQoXHJcbiAge1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2JvdHRvbWJhci5jb21wb25lbnQuaHRtbFwiLFxyXG4gIH1cclxuKVxyXG5leHBvcnQgY2xhc3MgQm90dG9tQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHVibGljIHRhYnM6IEJvdHRvbU5hdmlnYXRpb25UYWJbXSA9IFtcclxuICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCdGaXJzdCcsICdpY19ob21lJyksXHJcbiAgICBuZXcgQm90dG9tTmF2aWdhdGlvblRhYignU2Vjb25kJywgJ2ljX3ZpZXdfbGlzdCcsIGZhbHNlKSxcclxuICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCdUaGlyZCcsICdpY19tZW51JylcclxuICBdO1xyXG5cclxuXHJcblxyXG4gIFxyXG4gIHByaXZhdGUgX2JvdHRvbU5hdmlnYXRpb246IEJvdHRvbU5hdmlnYXRpb247XHJcblxyXG4gIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cclxuICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgY29uc3RydWN0b3IoICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9ib3R0b21OYXZpZ2F0aW9uID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdib3R0b21OYXZpZ2F0aW9uJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Cb3R0b21OYXZpZ2F0aW9uVGFiU2VsZWN0ZWQoYXJnczogT25UYWJTZWxlY3RlZEV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYG9sZCB0YWIgaW5kZXg6ICAke2FyZ3Mub2xkSW5kZXh9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgdGFiIGluZGV4OiAgJHthcmdzLm5ld0luZGV4fWApO1xyXG4gIH1cclxufSJdfQ==