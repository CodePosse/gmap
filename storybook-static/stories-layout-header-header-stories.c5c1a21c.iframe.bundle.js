(self.webpackChunkgmap=self.webpackChunkgmap||[]).push([[745],{"./src/stories/layout/header/header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:()=>Actions,Blank:()=>Blank,Search:()=>Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>header_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var header_componentngResource=__webpack_require__("./src/stories/layout/header/header.component.scss?ngResource"),header_componentngResource_default=__webpack_require__.n(header_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),form_field=__webpack_require__("./node_modules/@angular/material/fesm2022/form-field.mjs"),input=__webpack_require__("./node_modules/@angular/material/fesm2022/input.mjs"),fesm2022_select=__webpack_require__("./node_modules/@angular/material/fesm2022/select.mjs"),fesm2022_button=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let nextId=0;const badgeApps=new Set;class _MatBadgeStyleLoader{static#_=this.ɵfac=function _MatBadgeStyleLoader_Factory(t){return new(t||_MatBadgeStyleLoader)};static#_2=this.ɵcmp=core["ɵɵdefineComponent"]({type:_MatBadgeStyleLoader,selectors:[["ng-component"]],standalone:!0,features:[core["ɵɵStandaloneFeature"]],decls:0,vars:0,template:function _MatBadgeStyleLoader_Template(rf,ctx){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](_MatBadgeStyleLoader,[{type:core.Component,args:[{standalone:!0,encapsulation:core.ViewEncapsulation.None,template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"]}]}],null,null);class MatBadge{get color(){return this._color}set color(value){this._setColor(value),this._color=value}get content(){return this._content}set content(newContent){this._updateRenderedContent(newContent)}get description(){return this._description}set description(newDescription){this._updateDescription(newDescription)}constructor(_ngZone,_elementRef,_ariaDescriber,_renderer,_animationMode){this._ngZone=_ngZone,this._elementRef=_elementRef,this._ariaDescriber=_ariaDescriber,this._renderer=_renderer,this._animationMode=_animationMode,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=nextId++,this._isInitialized=!1,this._interactivityChecker=(0,core.inject)(a11y.Z7),this._document=(0,core.inject)(common.DOCUMENT);const appRef=(0,core.inject)(core.ApplicationRef);if(!badgeApps.has(appRef)){badgeApps.add(appRef);const componentRef=(0,core.createComponent)(_MatBadgeStyleLoader,{environmentInjector:(0,core.inject)(core.EnvironmentInjector)});appRef.onDestroy((()=>{badgeApps.delete(appRef),0===badgeApps.size&&componentRef.destroy()}))}if("undefined"==typeof ngDevMode||ngDevMode){const nativeElement=_elementRef.nativeElement;if(nativeElement.nodeType!==nativeElement.ELEMENT_NODE)throw Error("matBadge must be attached to an element node.");const matIconTagName="mat-icon";nativeElement.tagName.toLowerCase()===matIconTagName&&"true"===nativeElement.getAttribute("aria-hidden")&&console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.\n${nativeElement.outerHTML}`)}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const badgeElement=this._renderer.createElement("span");return badgeElement.setAttribute("id",`mat-badge-content-${this._id}`),badgeElement.setAttribute("aria-hidden","true"),badgeElement.classList.add("mat-badge-content"),"NoopAnimations"===this._animationMode&&badgeElement.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(badgeElement),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular((()=>{requestAnimationFrame((()=>{badgeElement.classList.add("mat-badge-active")}))})):badgeElement.classList.add("mat-badge-active"),badgeElement}_updateRenderedContent(newContent){const newContentNormalized=`${newContent??""}`.trim();this._isInitialized&&newContentNormalized&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=newContentNormalized),this._content=newContentNormalized}_updateDescription(newDescription){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),newDescription&&!this._isHostInteractive()||this._removeInlineDescription(),this._description=newDescription,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,newDescription):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(colorPalette){const classList=this._elementRef.nativeElement.classList;classList.remove(`mat-badge-${this._color}`),colorPalette&&classList.add(`mat-badge-${colorPalette}`)}_clearExistingBadges(){const badges=this._elementRef.nativeElement.querySelectorAll(":scope > .mat-badge-content");for(const badgeElement of Array.from(badges))badgeElement!==this._badgeElement&&badgeElement.remove()}static#_=this.ɵfac=function MatBadge_Factory(t){return new(t||MatBadge)(core["ɵɵdirectiveInject"](core.NgZone),core["ɵɵdirectiveInject"](core.ElementRef),core["ɵɵdirectiveInject"](a11y.vr),core["ɵɵdirectiveInject"](core.Renderer2),core["ɵɵdirectiveInject"](core.ANIMATION_MODULE_TYPE,8))};static#_2=this.ɵdir=core["ɵɵdefineDirective"]({type:MatBadge,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function MatBadge_HostBindings(rf,ctx){2&rf&&core["ɵɵclassProp"]("mat-badge-overlap",ctx.overlap)("mat-badge-above",ctx.isAbove())("mat-badge-below",!ctx.isAbove())("mat-badge-before",!ctx.isAfter())("mat-badge-after",ctx.isAfter())("mat-badge-small","small"===ctx.size)("mat-badge-medium","medium"===ctx.size)("mat-badge-large","large"===ctx.size)("mat-badge-hidden",ctx.hidden||!ctx.content)("mat-badge-disabled",ctx.disabled)},inputs:{color:[core["ɵɵInputFlags"].None,"matBadgeColor","color"],overlap:[core["ɵɵInputFlags"].HasDecoratorInputTransform,"matBadgeOverlap","overlap",core.booleanAttribute],disabled:[core["ɵɵInputFlags"].HasDecoratorInputTransform,"matBadgeDisabled","disabled",core.booleanAttribute],position:[core["ɵɵInputFlags"].None,"matBadgePosition","position"],content:[core["ɵɵInputFlags"].None,"matBadge","content"],description:[core["ɵɵInputFlags"].None,"matBadgeDescription","description"],size:[core["ɵɵInputFlags"].None,"matBadgeSize","size"],hidden:[core["ɵɵInputFlags"].HasDecoratorInputTransform,"matBadgeHidden","hidden",core.booleanAttribute]},standalone:!0,features:[core["ɵɵInputTransformsFeature"]]})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatBadge,[{type:core.Directive,args:[{selector:"[matBadge]",host:{class:"mat-badge","[class.mat-badge-overlap]":"overlap","[class.mat-badge-above]":"isAbove()","[class.mat-badge-below]":"!isAbove()","[class.mat-badge-before]":"!isAfter()","[class.mat-badge-after]":"isAfter()","[class.mat-badge-small]":'size === "small"',"[class.mat-badge-medium]":'size === "medium"',"[class.mat-badge-large]":'size === "large"',"[class.mat-badge-hidden]":"hidden || !content","[class.mat-badge-disabled]":"disabled"},standalone:!0}]}],(()=>[{type:core.NgZone},{type:core.ElementRef},{type:a11y.vr},{type:core.Renderer2},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[core.ANIMATION_MODULE_TYPE]}]}]),{color:[{type:core.Input,args:["matBadgeColor"]}],overlap:[{type:core.Input,args:[{alias:"matBadgeOverlap",transform:core.booleanAttribute}]}],disabled:[{type:core.Input,args:[{alias:"matBadgeDisabled",transform:core.booleanAttribute}]}],position:[{type:core.Input,args:["matBadgePosition"]}],content:[{type:core.Input,args:["matBadge"]}],description:[{type:core.Input,args:["matBadgeDescription"]}],size:[{type:core.Input,args:["matBadgeSize"]}],hidden:[{type:core.Input,args:[{alias:"matBadgeHidden",transform:core.booleanAttribute}]}]});class MatBadgeModule{static#_=this.ɵfac=function MatBadgeModule_Factory(t){return new(t||MatBadgeModule)};static#_2=this.ɵmod=core["ɵɵdefineNgModule"]({type:MatBadgeModule,imports:[a11y.Pd,fesm2022_core.yE,MatBadge,_MatBadgeStyleLoader],exports:[MatBadge,fesm2022_core.yE]});static#_3=this.ɵinj=core["ɵɵdefineInjector"]({imports:[a11y.Pd,fesm2022_core.yE,fesm2022_core.yE]})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatBadgeModule,[{type:core.NgModule,args:[{imports:[a11y.Pd,fesm2022_core.yE,MatBadge,_MatBadgeStyleLoader],exports:[MatBadge,fesm2022_core.yE]}]}],null,null);var icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");let HeaderComponent=class HeaderComponent{constructor(){this.type="blank",this.profileButtonColor="#ffbb4d",this.notifyBadgeOverlap=!0,this.notifyCount=0,this.logoWidth=150,this.logoMargin=30,this.searchInputPlaceholder="Search by keywords, titles, etc. Then press Enter",this.searchOptions=[],this.title="Title",this.cancelText="Cancel",this.saveText="Save",this.cancel=new core.EventEmitter,this.save=new core.EventEmitter}get isLightGray(){return"search"===this.type}static#_=this.propDecorators={type:[{type:core.Input,args:[{required:!0}]}],profileButtonColor:[{type:core.Input}],notifyBadgeOverlap:[{type:core.Input}],notifyCount:[{type:core.Input}],logoWidth:[{type:core.Input}],logoMargin:[{type:core.Input}],searchInputPlaceholder:[{type:core.Input}],searchOptions:[{type:core.Input}],title:[{type:core.Input}],cancelText:[{type:core.Input}],saveText:[{type:core.Input}],cancel:[{type:core.Output}],save:[{type:core.Output}]}};HeaderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gmap-header",standalone:!0,imports:[form_field.RG,input.fS,fesm2022_select.Ve,fesm2022_button.Hl,icon.m_,MatBadgeModule],template:'<header [class.light-gray]="isLightGray">\r\n\r\n  \x3c!-- Brand --\x3e\r\n  <span class="logo">\r\n    <img [style.margin-left]="logoMargin + \'px\'" [style.width]="logoWidth + \'px\'" alt="Logo"\r\n         src="/assets/images/logo.png">\r\n  </span>\r\n\r\n  \x3c!-- Center --\x3e\r\n  @switch (type) {\r\n    @case (\'blank\') {\r\n      <span class="header-spacer"></span>\r\n    }\r\n    @case (\'actions\') {\r\n      <div class="actions">\r\n        <h3>{{ title }}</h3>\r\n        <div style="display: flex;">\r\n          @if (cancelText) {\r\n            <button class="cancel-btn" mat-button>{{ cancelText }}</button>\r\n          }\r\n\r\n          @if (saveText) {\r\n            <button class="create-btn" mat-raised-button color="primary">{{ saveText }}</button>\r\n          }\r\n        </div>\r\n      </div>\r\n    }\r\n    @case (\'search\') {\r\n      <div class="search-bar">\r\n        <mat-form-field class="search-options" [appearance]="\'outline\'" [subscriptSizing]="\'dynamic\'">\r\n          <mat-select [value]="\'all\'">\r\n            @for (option of searchOptions; track searchOptions) {\r\n              <mat-option [value]="option.value">{{ option.label }}</mat-option>\r\n            }\r\n          </mat-select>\r\n          <div class="info">Refine Search</div>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class="search-field" [appearance]="\'outline\'" [subscriptSizing]="\'dynamic\'">\r\n          <input matInput [placeholder]="searchInputPlaceholder">\r\n          <mat-icon class="material-symbols-outlined" matSuffix>search</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <div class="filter-btn">\r\n          <button mat-flat-button>\r\n            <mat-icon class="material-symbols-outlined" matSuffix>tune</mat-icon>\r\n          </button>\r\n          <div class="info">Advanced</div>\r\n        </div>\r\n      </div>\r\n    }\r\n  }\r\n\r\n  \x3c!-- Right --\x3e\r\n  <button class="notifications-btn" mat-mini-fab>\r\n    <div [matBadgeOverlap]="notifyBadgeOverlap" [matBadge]="notifyCount">\r\n      <mat-icon class="material-symbols-outlined">notifications_outlined</mat-icon>\r\n    </div>\r\n  </button>\r\n  <button [style.background]="profileButtonColor" mat-mini-fab>\r\n    <h2 class="user-initials">S</h2>\r\n  </button>\r\n</header>\r\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[header_componentngResource_default()]})],HeaderComponent);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const header_stories={title:"Layout/Header",component:HeaderComponent,decorators:[(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})],tags:["autodocs"],argTypes:{type:{name:"Type",description:"The type of header to display",defaultValue:{summary:"blank"},control:{type:"select",options:{Search:"search",Actions:"actions",Blank:"blank"}}},profileButtonColor:{defaultValue:{summary:"#ffbb4d"},name:"Profile Button Color",description:"The color of the profile button",control:{type:"color"}},notifyCount:{name:"Notifications Count",description:"The number of notifications to display",defaultValue:{summary:0},control:{type:"range",min:0,max:99,step:1}},notifyBadgeOverlap:{name:"Notification Badge Overlap",description:"Whether the notification badge should overlap the profile button",defaultValue:{summary:!0},control:{type:"boolean"}},logoWidth:{name:"Logo Width (px)",description:"The width of the logo",defaultValue:{summary:150},control:{type:"range",min:10,max:200,step:1}},logoMargin:{name:"Logo Margin (px)",description:"The left margin for the logo",defaultValue:{summary:30},control:{type:"range",min:0,max:20,step:1}},searchInputPlaceholder:{name:"Search Input Placeholder",description:"The placeholder text for the search input",defaultValue:{summary:"Search by keywords, titles, etc. Then press Enter"},control:{type:"text"},if:{arg:"type",eq:"search"}},searchOptions:{name:"Search Options",description:"The options to display in the search dropdown",defaultValue:{summary:"all"},control:{type:"object"},if:{arg:"type",eq:"search"}},title:{name:"Title",description:"The title to display in the header",defaultValue:{summary:"Title"},control:{type:"text"},if:{arg:"type",eq:"actions"}},cancelText:{name:"Cancel Text",description:"The text to display on the cancel button",defaultValue:{summary:"Cancel"},control:{type:"text"},if:{arg:"type",eq:"actions"}},saveText:{name:"Save Text",description:"The text to display on the save button",defaultValue:{summary:"Save"},control:{type:"text"},if:{arg:"type",eq:"actions"}}},args:{save:(0,test_dist.fn)(),cancel:(0,test_dist.fn)()}},Search={args:{notifyCount:4,profileButtonColor:"#ffbb4d",notifyBadgeOverlap:!0,logoWidth:150,logoMargin:30,type:"search",searchOptions:[{value:"all",label:"All"},{value:"title",label:"Title"},{value:"author",label:"Author"},{value:"publisher",label:"Publisher"},{value:"isbn",label:"ISBN"}],searchInputPlaceholder:"Search by keywords, titles, etc. Then press Enter"}},Actions={args:{notifyCount:4,profileButtonColor:"#ffbb4d",notifyBadgeOverlap:!0,logoWidth:150,logoMargin:30,type:"actions",title:"Create Entries",cancelText:"Cancel",saveText:"Save all Entries"}},Blank={args:{notifyCount:4,profileButtonColor:"#ffbb4d",notifyBadgeOverlap:!0,logoWidth:150,logoMargin:30,type:"blank"}};Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:"{\n  args: {\n    notifyCount: 4,\n    profileButtonColor: '#ffbb4d',\n    notifyBadgeOverlap: true,\n    logoWidth: 150,\n    logoMargin: 30,\n    type: 'search',\n    searchOptions: [{\n      value: 'all',\n      label: 'All'\n    }, {\n      value: 'title',\n      label: 'Title'\n    }, {\n      value: 'author',\n      label: 'Author'\n    }, {\n      value: 'publisher',\n      label: 'Publisher'\n    }, {\n      value: 'isbn',\n      label: 'ISBN'\n    }],\n    searchInputPlaceholder: \"Search by keywords, titles, etc. Then press Enter\"\n  }\n}",...Search.parameters?.docs?.source}}},Actions.parameters={...Actions.parameters,docs:{...Actions.parameters?.docs,source:{originalSource:"{\n  args: {\n    notifyCount: 4,\n    profileButtonColor: '#ffbb4d',\n    notifyBadgeOverlap: true,\n    logoWidth: 150,\n    logoMargin: 30,\n    type: 'actions',\n    title: 'Create Entries',\n    cancelText: 'Cancel',\n    saveText: 'Save all Entries'\n  }\n}",...Actions.parameters?.docs?.source}}},Blank.parameters={...Blank.parameters,docs:{...Blank.parameters?.docs,source:{originalSource:"{\n  args: {\n    notifyCount: 4,\n    profileButtonColor: '#ffbb4d',\n    notifyBadgeOverlap: true,\n    logoWidth: 150,\n    logoMargin: 30,\n    type: 'blank'\n  }\n}",...Blank.parameters?.docs?.source}}};const __namedExportsOrder=["Search","Actions","Blank"]},"./src/stories/layout/header/header.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".header-spacer {\n  flex: 1 1 auto;\n}\n\nheader {\n  --mdc-outlined-text-field-outline-width: 0;\n  --mat-select-enabled-arrow-color: white;\n  --mat-badge-background-color: #f07167;\n  --mat-select-focused-arrow-color: white;\n  background: white;\n  height: 128px;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n}\nheader.light-gray {\n  background: #eff2f1;\n}\nheader.light-gray mat-form-field {\n  background: white;\n}\nheader .logo img {\n  height: auto;\n}\nheader button {\n  box-shadow: none;\n}\nheader .notifications-btn {\n  background: transparent;\n  margin-right: 30px;\n}\nheader .notifications-btn mat-icon {\n  color: black;\n}\n\n.search-bar {\n  display: flex;\n  width: 100%;\n  margin: 0 30px;\n}\n.search-bar .info {\n  position: absolute;\n  bottom: -24px;\n  width: 100%;\n  font-size: 12px;\n  display: flex;\n  color: #4f2c7c;\n  font-weight: 500;\n  justify-content: center;\n}\n.search-bar .search-options {\n  width: 250px;\n  background: #2e1456;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n.search-bar .search-options mat-label,\n.search-bar .search-options mat-select {\n  color: white;\n}\n.search-bar .search-options svg {\n  fill: white;\n}\n.search-bar .search-field {\n  width: 100%;\n}\n.search-bar .filter-btn {\n  position: relative;\n  display: flex;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n.search-bar .filter-btn button {\n  width: 100px;\n  height: 56px;\n  line-height: 56px;\n  background: #f2eaf2;\n}\n.search-bar .filter-btn button mat-icon {\n  font-size: 32px;\n  color: #4f2c7c;\n  height: auto;\n  width: auto;\n  margin: 0;\n}\n\n.actions {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 50px;\n}\n.actions button {\n  height: 50px;\n  font-size: 18px;\n  padding: 0 40px;\n}\n.actions button.cancel-btn {\n  text-decoration: underline;\n  margin-right: 12px;\n}\n.actions button.create-btn {\n  background: var(--gmap-primary);\n}\n\n.user-initials {\n  font-weight: normal;\n  margin: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);