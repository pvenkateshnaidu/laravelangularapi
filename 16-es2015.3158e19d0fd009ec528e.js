(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Riz8:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var a=e("pMnS"),o=e("iInd");class i{constructor(l,n){this.route=l,this.router=n,this.userList=[],this.timeSheets=[],this.loading=!0}ngOnInit(){}}var r=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](3,212992,null,0,o.RouterOutlet,[o.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,3,0)},null)}function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-user-index",[],null,null,null,d,r)),u["\u0275did"](1,114688,null,0,i,[o.ActivatedRoute,o.Router],null,null)],function(l,n){l(n,1,0)},null)}var c=u["\u0275ccf"]("app-user-index",i,s,{},{},[]),p=e("s7LF"),m=e("Fa87"),g=e("FUWh"),h=e("KB/w"),f=e("SVse"),v=e("RXyF"),C=e("Czxz"),M=e("7LN8"),y=e("rGLl"),R=e("EPYN"),S=e("4Vzq"),b=e("AytR"),_=e("IheW");class T{constructor(l){this.http=l,this.users=[]}getTimeSheet(){return this.http.get(`${b.a.api}/getAllTimesheets`)}getUsers(){return this.http.get(`${b.a.api}/getUsersbytimesheet`)}getpaymentSearchTimesheet(l){return this.http.get(`${b.a.api}/gettimesheets-by-userid?`+l)}}T.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new T(u["\u0275\u0275inject"](_.HttpClient))},token:T,providedIn:"root"}),e("uxFC"),e("8YFm"),e("24Yq");class w{constructor(l,n,e,u,t){this.fb=l,this.messageService=n,this.route=e,this.userRest=u,this.router=t,this.timeSheets=[],this.loading=!0}ngOnInit(){this.userRest.getTimeSheet().subscribe(l=>{console.log(this.timeSheets=l.timesheet),this.loading=!1},l=>{console.log(l)}),this.userRest.getUsers().subscribe(l=>{console.log(this.users=l.user)},l=>{console.log(l)}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}searchByDateReportSubmitId(){let l=this.formatDate(this.date12);if(this.userselect)var n="userId="+this.userselect+"&date="+l;this.userRest.getpaymentSearchTimesheet(n).subscribe(l=>{this.timeSheets=l.timesheets,this.totalHours=l.getHours},l=>{})}searchReportSubmitId(l){var n="userId="+l;this.date12&&(n="userId="+l+"&date="+this.formatDate(this.date12)),this.userRest.getpaymentSearchTimesheet(n).subscribe(l=>{this.timeSheets=l.timesheets,this.totalHours=l.getHours},l=>{})}onActivityChange(l){const n=l.target.value;if(n&&n.trim().length){const l=parseInt(n);isNaN(l)||this.table.filter(l,"activity","gte")}}onDateSelect(l){this.table.filter(this.formatDate(l),"fromDate","equals")}clearFilters(){this.userselect="",this.date12=null,this.userRest.getTimeSheet().subscribe(l=>{console.log(this.timeSheets=l.timesheet),this.loading=!1},l=>{console.log(l)})}formatDate(l){let n=l.getMonth()+1,e=l.getDate();return n<10&&(n="0"+n),e<10&&(e="0"+e),l.getFullYear()+"-"+n+"-"+e}onRepresentativeChange(l){this.table.filter(l.value,"representative","in")}}var I=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]     .p-cell-editing{padding-top:0!important;padding-bottom:0!important}"]],data:{}});function F(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[2,p.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](3,null,[" "," | "," "]))],function(l,n){l(n,1,0,n.context.$implicit.id),l(n,2,0,n.context.$implicit.id)},function(l,n){l(n,3,0,n.context.$implicit.name,n.context.$implicit.email)})}function N(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["Total Hours :",""]))],null,function(l,n){l(n,1,0,n.component.totalHours)})}function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Employee"])),(l()(),u["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Date"])),(l()(),u["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Duration"])),(l()(),u["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Assignment"])),(l()(),u["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Service Code"])),(l()(),u["\u0275eld"](11,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Employee"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,14).onInput(e)&&t),"input"===n&&(t=!1!==u["\u0275nov"](l.parent,42).filter(e.target.value,"user_details.name","startsWith")&&t),t},null,null)),u["\u0275did"](14,278528,null,0,m.InputText,[u.ElementRef,[2,p.NgModel]],null,null),(l()(),u["\u0275eld"](15,0,null,null,5,"th",[],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,4,"p-calendar",[["dateFormat","yy-mm-dd"],["placeholder","Date"],["styleClass","p-column-filter"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null]],[[null,"onSelect"],[null,"onClearClick"]],function(l,n,e){var t=!0;return"onSelect"===n&&(t=!1!==l.component.onDateSelect(e)&&t),"onClearClick"===n&&(t=!1!==u["\u0275nov"](l.parent,42).filter("","fromDate","equals")&&t),t},g.b,g.a)),u["\u0275prd"](5120,null,p.NG_VALUE_ACCESSOR,function(l){return[l]},[h.Calendar]),u["\u0275did"](18,1294336,null,1,h.Calendar,[u.ElementRef,u.Renderer2,u.ChangeDetectorRef,u.NgZone],{style:[0,"style"],styleClass:[1,"styleClass"],placeholder:[2,"placeholder"],dateFormat:[3,"dateFormat"],readonlyInput:[4,"readonlyInput"],showButtonBar:[5,"showButtonBar"]},{onSelect:"onSelect",onClearClick:"onClearClick"}),u["\u0275qud"](603979776,5,{templates:1}),u["\u0275pod"](20,{width:0}),(l()(),u["\u0275eld"](21,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Duration"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,23).onInput(e)&&t),"input"===n&&(t=!1!==u["\u0275nov"](l.parent,42).filter(e.target.value,"duration","startsWith")&&t),t},null,null)),u["\u0275did"](23,278528,null,0,m.InputText,[u.ElementRef,[2,p.NgModel]],null,null)],function(l,n){l(n,14,0);var e=l(n,20,0,"300px");l(n,18,0,e,"p-column-filter","Date","yy-mm-dd",!0,!0),l(n,23,0)},function(l,n){l(n,13,0,!0,!0,!0,!0,u["\u0275nov"](n,14).filled),l(n,16,0,u["\u0275nov"](n,18).filled,u["\u0275nov"](n,18).focus),l(n,22,0,!0,!0,!0,!0,u["\u0275nov"](n,23).filled)})}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" "," "])),(l()(),u["\u0275eld"](3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](4,null,[" "," "])),u["\u0275ppd"](5,1),(l()(),u["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](7,null,[" "," "])),(l()(),u["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,[" "," "])),(l()(),u["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](11,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.user_details.name);var e=u["\u0275unv"](n,4,0,l(n,5,0,u["\u0275nov"](n.parent,0),n.context.$implicit.fromDate));l(n,4,0,e),l(n,7,0,n.context.$implicit.duration),l(n,9,0,n.context.$implicit.assignment),l(n,11,0,n.context.$implicit.serviceCode)})}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"td",[["colspan","6"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["No Timesheet found."]))],null,null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](-1,null,[" Click to Edit "]))],null,null)}function A(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"input",[["pInputText",""],["type","text"],["value","PrimeNG"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==u["\u0275nov"](l,1).onInput(e)&&t),t},null,null)),u["\u0275did"](1,278528,null,0,m.InputText,[u.ElementRef,[2,p.NgModel]],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0,!0,!0,u["\u0275nov"](n,1).filled)})}function O(l){return u["\u0275vid"](0,[u["\u0275pid"](0,f.DatePipe,[u.LOCALE_ID]),u["\u0275qud"](402653184,1,{table:0}),u["\u0275qud"](402653184,2,{modalContent:0}),(l()(),u["\u0275eld"](3,0,null,null,1,"h4",[["class","remove-margin"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Timesheet List "])),(l()(),u["\u0275eld"](5,0,null,null,31,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,30,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,14,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Choose Employee"])),(l()(),u["\u0275eld"](10,0,null,null,11,"select",[["class","form-control"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,a=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,11).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,11).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(a.userselect=e)&&t),"change"===n&&(t=!1!==a.searchReportSubmitId(e.target.value)&&t),t},null,null)),u["\u0275did"](11,16384,null,0,p.SelectControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,function(l){return[l]},[p.SelectControlValueAccessor]),u["\u0275did"](13,671744,null,0,p.NgModel,[[8,null],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,p.NgControl,null,[p.NgModel]),u["\u0275did"](15,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(l()(),u["\u0275eld"](16,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),u["\u0275did"](17,147456,null,0,p.NgSelectOption,[u.ElementRef,u.Renderer2,[2,p.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](18,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["--Choose Employee--"])),(l()(),u["\u0275and"](16777216,null,null,1,null,F)),u["\u0275did"](21,278528,null,0,f.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](22,0,null,null,9,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Choose Month"])),(l()(),u["\u0275eld"](25,0,null,null,6,"p-calendar",[["dateFormat","mm/yy"],["view","month"],["yearRange","2000:2030"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onSelect"]],function(l,n,e){var u=!0,t=l.component;return"ngModelChange"===n&&(u=!1!==(t.date12=e)&&u),"onSelect"===n&&(u=!1!==t.searchByDateReportSubmitId()&&u),u},g.b,g.a)),u["\u0275did"](26,1294336,null,1,h.Calendar,[u.ElementRef,u.Renderer2,u.ChangeDetectorRef,u.NgZone],{dateFormat:[0,"dateFormat"],readonlyInput:[1,"readonlyInput"],yearNavigator:[2,"yearNavigator"],view:[3,"view"],yearRange:[4,"yearRange"]},{onSelect:"onSelect"}),u["\u0275qud"](603979776,3,{templates:1}),u["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,function(l){return[l]},[h.Calendar]),u["\u0275did"](29,671744,null,0,p.NgModel,[[8,null],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,p.NgControl,null,[p.NgModel]),u["\u0275did"](31,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(l()(),u["\u0275eld"](32,0,null,null,4,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Clear"])),(l()(),u["\u0275eld"](35,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.clearFilters()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Clear Fields"])),(l()(),u["\u0275eld"](37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,N)),u["\u0275did"](39,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](40,0,null,null,11,"p-table",[["dataKey","id"],["styleClass","p-datatable-customers"]],null,null,null,v.d,v.b)),u["\u0275prd"](512,null,C.TableService,C.TableService,[]),u["\u0275did"](42,5488640,[[1,4],["dt",4]],1,C.Table,[u.ElementRef,u.NgZone,C.TableService,u.ChangeDetectorRef],{styleClass:[0,"styleClass"],paginator:[1,"paginator"],rowsPerPageOptions:[2,"rowsPerPageOptions"],showCurrentPageReport:[3,"showCurrentPageReport"],dataKey:[4,"dataKey"],globalFilterFields:[5,"globalFilterFields"],filterDelay:[6,"filterDelay"],loading:[7,"loading"],value:[8,"value"],rows:[9,"rows"]},null),u["\u0275qud"](603979776,4,{templates:1}),u["\u0275pad"](44,4),u["\u0275pad"](45,5),(l()(),u["\u0275and"](0,null,null,1,null,D)),u["\u0275did"](47,16384,[[4,4]],0,M.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275and"](0,null,null,1,null,x)),u["\u0275did"](49,16384,[[4,4]],0,M.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275and"](0,null,null,1,null,E)),u["\u0275did"](51,16384,[[4,4]],0,M.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275eld"](52,0,null,null,5,"p-inplace",[],null,null,null,y.b,y.a)),u["\u0275did"](53,49152,null,0,R.Inplace,[],null,null),(l()(),u["\u0275and"](0,null,null,1,null,P)),u["\u0275did"](55,16384,null,0,M.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null),(l()(),u["\u0275and"](0,null,null,1,null,A)),u["\u0275did"](57,16384,null,0,M.PrimeTemplate,[u.TemplateRef],{name:[0,"name"]},null)],function(l,n){var e=n.component;l(n,13,0,e.userselect),l(n,17,0,""),l(n,18,0,""),l(n,21,0,e.users),l(n,26,0,"mm/yy",!0,!0,"month","2000:2030"),l(n,29,0,e.date12),l(n,39,0,e.totalHours);var u=l(n,44,0,5,10,20,30),t=l(n,45,0,"user_details.name","fromDate","duration","assignment","serviceCode");l(n,42,0,"p-datatable-customers",!0,u,!0,"id",t,0,e.loading,e.timeSheets,10),l(n,47,0,"header"),l(n,49,0,"body"),l(n,51,0,"emptymessage"),l(n,55,0,"display"),l(n,57,0,"content")},function(l,n){l(n,10,0,u["\u0275nov"](n,15).ngClassUntouched,u["\u0275nov"](n,15).ngClassTouched,u["\u0275nov"](n,15).ngClassPristine,u["\u0275nov"](n,15).ngClassDirty,u["\u0275nov"](n,15).ngClassValid,u["\u0275nov"](n,15).ngClassInvalid,u["\u0275nov"](n,15).ngClassPending),l(n,25,0,u["\u0275nov"](n,26).filled,u["\u0275nov"](n,26).focus,u["\u0275nov"](n,31).ngClassUntouched,u["\u0275nov"](n,31).ngClassTouched,u["\u0275nov"](n,31).ngClassPristine,u["\u0275nov"](n,31).ngClassDirty,u["\u0275nov"](n,31).ngClassValid,u["\u0275nov"](n,31).ngClassInvalid,u["\u0275nov"](n,31).ngClassPending)})}function V(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"app-user-list",[],null,null,null,O,I)),u["\u0275prd"](512,null,S.MessageService,S.MessageService,[]),u["\u0275did"](2,114688,null,0,w,[p.FormBuilder,S.MessageService,o.ActivatedRoute,T,o.Router],null,null)],function(l,n){l(n,2,0)},null)}var k=u["\u0275ccf"]("app-user-list",w,V,{},{},[]);const L={expectedRole:"Admin"};class U{}var B=e("IP0z"),q=e("/HVE"),$=e("hOhj"),H=e("g4HV"),G=e("nciF"),z=e("mU/a"),Y=e("No4M"),j=e("VSng"),K=e("K8Pq"),W=e("66nc"),J=e("OPzY"),X=e("G5kV"),Z=e("GS5F"),Q=e("CC75"),ll=e("WwML"),nl=e("VYqR"),el=e("tq8E");e.d(n,"UserModuleNgFactory",function(){return ul});var ul=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,c,k]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[u.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),u["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_o"],p["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,T,T,[_.HttpClient]),u["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),u["\u0275mpd"](1073742336,o.RouterModule,o.RouterModule,[[2,o["\u0275angular_packages_router_router_a"]],[2,o.Router]]),u["\u0275mpd"](1073742336,U,U,[]),u["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_d"],p["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,M.SharedModule,M.SharedModule,[]),u["\u0275mpd"](1073742336,B.a,B.a,[]),u["\u0275mpd"](1073742336,q.b,q.b,[]),u["\u0275mpd"](1073742336,$.ScrollingModule,$.ScrollingModule,[]),u["\u0275mpd"](1073742336,H.TooltipModule,H.TooltipModule,[]),u["\u0275mpd"](1073742336,G.DropdownModule,G.DropdownModule,[]),u["\u0275mpd"](1073742336,p.FormsModule,p.FormsModule,[]),u["\u0275mpd"](1073742336,z.PaginatorModule,z.PaginatorModule,[]),u["\u0275mpd"](1073742336,C.TableModule,C.TableModule,[]),u["\u0275mpd"](1073742336,Y.MultiSelectModule,Y.MultiSelectModule,[]),u["\u0275mpd"](1073742336,j.ButtonModule,j.ButtonModule,[]),u["\u0275mpd"](1073742336,h.CalendarModule,h.CalendarModule,[]),u["\u0275mpd"](1073742336,K.SliderModule,K.SliderModule,[]),u["\u0275mpd"](1073742336,W.DialogModule,W.DialogModule,[]),u["\u0275mpd"](1073742336,J.ContextMenuModule,J.ContextMenuModule,[]),u["\u0275mpd"](1073742336,X.ToastModule,X.ToastModule,[]),u["\u0275mpd"](1073742336,m.InputTextModule,m.InputTextModule,[]),u["\u0275mpd"](1073742336,Z.ProgressBarModule,Z.ProgressBarModule,[]),u["\u0275mpd"](1073742336,Q.TabMenuModule,Q.TabMenuModule,[]),u["\u0275mpd"](1073742336,ll.MessagesModule,ll.MessagesModule,[]),u["\u0275mpd"](1073742336,nl.FileUploadModule,nl.FileUploadModule,[]),u["\u0275mpd"](1073742336,el.c,el.c,[]),u["\u0275mpd"](1073742336,R.InplaceModule,R.InplaceModule,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,o.ROUTES,function(){return[[{path:"",component:i,children:[{path:"list",component:w,data:L}]}]]},[])])})}}]);