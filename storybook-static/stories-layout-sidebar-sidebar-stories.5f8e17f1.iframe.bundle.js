(self.webpackChunkgmap=self.webpackChunkgmap||[]).push([[497],{"./src/stories/layout/sidebar/sidebar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Open:()=>Open,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sidebar_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sidebar_componentngResource=__webpack_require__("./src/stories/layout/sidebar/sidebar.component.scss?ngResource"),sidebar_componentngResource_default=__webpack_require__.n(sidebar_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),sidenav=__webpack_require__("./node_modules/@angular/material/fesm2022/sidenav.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),list=__webpack_require__("./node_modules/@angular/material/fesm2022/list.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let SidebarComponent=class SidebarComponent{constructor(router){this.router=router,this.collapsed=!1,this.background="white",this.menu=[]}selectMenu(item){item.link&&this.router.navigate([item.link])}static#_=this.ctorParameters=()=>[{type:router.Ix}];static#_2=this.propDecorators={collapsed:[{type:core.Input}],background:[{type:core.Input}],menu:[{type:core.Input}]}};SidebarComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gmap-sidebar",standalone:!0,imports:[sidenav.qe,icon.An,list.YE,list._L,common.NgOptimizedImage,fesm2022_button.iY,router.iI],template:'<mat-drawer [class.collapsed]="collapsed" [class.light-gray]="background === \'light-gray\'" [mode]="\'side\'" opened>\r\n  <button (click)="collapsed = !collapsed" class="collapse-btn" mat-icon-button>\r\n    <mat-icon class="material-symbols-outlined">\r\n      @if (!collapsed) {\r\n        chevron_left\r\n      } @else {\r\n        chevron_right\r\n      }\r\n    </mat-icon>\r\n  </button>\r\n\r\n  <mat-nav-list>\r\n    @for (item of menu; track item.label) {\r\n      <mat-list-item [routerLink]="[item.link]" [routerLinkActive]="\'active\'">\r\n        <mat-icon class="material-symbols-outlined" matListItemIcon>{{ item.icon }}</mat-icon>\r\n        @if (!collapsed) {\r\n          <a matListItemTitle>{{ item.label }}</a>\r\n        }\r\n      </mat-list-item>\r\n    }\r\n  </mat-nav-list>\r\n</mat-drawer>\r\n',styles:[sidebar_componentngResource_default()]})],SidebarComponent);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const menuItems=[{label:"Create Entities",icon:"add_circle_outline",type:"link"},{label:"Bulk Create",icon:"add_circle_outline",type:"link"},{label:"Saved Dashboards",icon:"space_dashboard",type:"link"},{label:"Advanced Search",icon:"manage_search",type:"link"},{label:"Data Model",icon:"database",type:"link"},{label:"Rules & Governance",icon:"data_object",type:"link"},{label:"Permissions & Security",icon:"encrypted",type:"link"}],sidebar_stories={title:"Layout/Sidebar",component:SidebarComponent,decorators:[(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)(),(0,router.lh)([])]})],tags:["autodocs"],argTypes:{collapsed:{name:"Collapsed",description:"Whether the sidebar is collapsed or not",control:{type:"boolean"}},menu:{name:"Menu",description:"The menu items to display",control:{type:"object"}},background:{name:"Background",description:"The background color of the sidebar",defaultValue:{summary:"white"},control:{type:"select",options:["white","light-gray"]}}},args:{}},Open={args:{collapsed:!1,menu:menuItems}},Closed={args:{collapsed:!0,menu:menuItems}};Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:"{\n  args: {\n    collapsed: false,\n    menu: menuItems\n  }\n}",...Open.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:"{\n  args: {\n    collapsed: true,\n    menu: menuItems\n  }\n}",...Closed.parameters?.docs?.source}}};const __namedExportsOrder=["Open","Closed"]},"./src/stories/layout/sidebar/sidebar.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"mat-drawer,\nmat-drawer-content {\n  transition: all 200ms ease-out;\n}\n\n.collapse-btn {\n  display: flex;\n  color: #4f2c7c;\n  font-size: 20px;\n  font-weight: normal;\n  margin: 8px;\n}\n\nmat-drawer {\n  display: flex;\n  width: 300px;\n  background: white;\n  flex-flow: column;\n}\nmat-drawer.light-gray {\n  background: #eff2f1;\n}\nmat-drawer mat-list-item {\n  display: flex;\n  align-items: center;\n  color: #4e2d7f;\n}\nmat-drawer mat-list-item.active {\n  background: #E3E6E5;\n}\nmat-drawer mat-list-item.active mat-icon,\nmat-drawer mat-list-item.active a {\n  font-weight: bold;\n}\nmat-drawer mat-list-item mat-icon {\n  margin-right: 12px;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  overflow: visible;\n}\nmat-drawer mat-list-item [matlistitemtitle] {\n  margin: 0;\n  font-weight: 500;\n}\nmat-drawer.collapsed {\n  width: 64px;\n}\nmat-drawer.collapsed mat-list-item mat-icon {\n  margin: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);