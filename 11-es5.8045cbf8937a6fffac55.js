(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Riz8:function(l,e,n){"use strict";n.r(e);var t=n("CcnG"),u=function(){return function(){}}(),o=n("pMnS"),i=n("ZYCi"),a=n("t/Na"),r=function(){function l(l){this.http=l,this.users=[]}return l.prototype.getUsers=function(){return this.http.get("https://employees.webmobilez.com/public/api/user-list")},l.prototype.getTimeSheet=function(){return this.http.get("https://employees.webmobilez.com/public/api/getAllTimesheets")},l.prototype.getTimeSheets=function(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet/"+l)},l.prototype.editUser=function(l){return this.http.get("https://employees.webmobilez.com/public/api/user-list/"+l)},l.prototype.editTimeSheet=function(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet/"+l+"/edit")},l.prototype.updateUser=function(l,e){return this.http.put("https://employees.webmobilez.com/public/api/user-list/"+e,l.value)},l.prototype.updateTimeSheet=function(l,e){return this.http.put("https://employees.webmobilez.com/public/api/time-sheet/"+e,l.value)},l.prototype.storeUser=function(l){return this.http.post("https://employees.webmobilez.com/public/api/time-sheet",l)},l.prototype.storeDocument=function(l){return this.http.post("https://employees.webmobilez.com/public/api/time-sheet-documents",l)},l.prototype.getTimeDocuments=function(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet-documents/"+l)},l.prototype.deleteUser=function(l){return this.http.delete("https://employees.webmobilez.com/public/api/user-list/"+l)},l.prototype.deleteDocument=function(l){return this.http.delete("https://employees.webmobilez.com/public/api/time-sheet-documents/"+l)},l.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new l(t["\u0275\u0275inject"](a.HttpClient))},token:l,providedIn:"root"}),l}(),d=(n("8YFm"),function(){function l(l,e,n){this.route=l,this.userRest=e,this.router=n,this.userList=[],this.timeSheets=[],this.loading=!0}return l.prototype.ngOnInit=function(){var l=this;this.userRest.getUsers().subscribe(function(e){console.log(l.userList=e.user),l.loading=!1},function(l){console.log(l)})},l.prototype.deleteUser=function(l){confirm("Are you sure to delete ")&&this.userRest.deleteUser(l).subscribe(function(l){return console.log(l)},function(l){return console.log(l)})},l.prototype.editUser=function(l){this.router.navigate(["users/edit",l])},l}()),p=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{table:0}),(l()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](4,212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,e){l(e,4,0)},null)}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-user-index",[],null,null,null,s,p)),t["\u0275did"](1,114688,null,0,d,[i.ActivatedRoute,r,i.Router],null,null)],function(l,e){l(e,1,0)},null)}var c=t["\u0275ccf"]("app-user-index",d,m,{},{},[]),f=n("Fa87"),h=n("gIcY"),g=n("FUWh"),v=n("KB/w"),b=n("Ip0R"),y=n("RXyF"),M=n("Czxz"),C=n("7LN8"),w=n("rGLl"),R=n("EPYN"),S=n("4Vzq"),T=(n("uxFC"),n("24Yq"),function(){function l(l,e,n,t,u){this.fb=l,this.messageService=e,this.route=n,this.userRest=t,this.router=u,this.timeSheets=[],this.loading=!0}return l.prototype.ngOnInit=function(){var l=this;this.userRest.getTimeSheet().subscribe(function(e){console.log(l.timeSheets=e.timesheet),l.loading=!1},function(l){console.log(l)}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]},l.prototype.onActivityChange=function(l){var e=l.target.value;if(e&&e.trim().length){var n=parseInt(e);isNaN(n)||this.table.filter(n,"activity","gte")}},l.prototype.onDateSelect=function(l){this.table.filter(this.formatDate(l),"fromDate","equals")},l.prototype.formatDate=function(l){var e=l.getMonth()+1,n=l.getDate();return e<10&&(e="0"+e),n<10&&(n="0"+n),l.getFullYear()+"-"+e+"-"+n},l.prototype.onRepresentativeChange=function(l){this.table.filter(l.value,"representative","in")},l}()),F=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]     .p-cell-editing{padding-top:0!important;padding-bottom:0!important}"]],data:{}});function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Employee"])),(l()(),t["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Duration"])),(l()(),t["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Assignment"])),(l()(),t["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Service Code"])),(l()(),t["\u0275eld"](11,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Employee"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,14).onInput(n)&&u),"input"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter(n.target.value,"user_details.name","startsWith")&&u),u},null,null)),t["\u0275did"](14,278528,null,0,f.InputText,[t.ElementRef,[2,h.NgModel]],null,null),(l()(),t["\u0275eld"](15,0,null,null,4,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,3,"p-calendar",[["dateFormat","yy-mm-dd"],["placeholder","Date"],["styleClass","p-column-filter"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null]],[[null,"onSelect"],[null,"onClearClick"]],function(l,e,n){var u=!0;return"onSelect"===e&&(u=!1!==l.component.onDateSelect(n)&&u),"onClearClick"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter("","fromDate","equals")&&u),u},g.b,g.a)),t["\u0275prd"](5120,null,h.NG_VALUE_ACCESSOR,function(l){return[l]},[v.Calendar]),t["\u0275did"](18,1294336,null,1,v.Calendar,[t.ElementRef,t.Renderer2,t.ChangeDetectorRef,t.NgZone],{styleClass:[0,"styleClass"],placeholder:[1,"placeholder"],dateFormat:[2,"dateFormat"],readonlyInput:[3,"readonlyInput"],showButtonBar:[4,"showButtonBar"]},{onSelect:"onSelect",onClearClick:"onClearClick"}),t["\u0275qud"](603979776,4,{templates:1}),(l()(),t["\u0275eld"](20,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Duration"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,22).onInput(n)&&u),"input"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter(n.target.value,"duration","startsWith")&&u),u},null,null)),t["\u0275did"](22,278528,null,0,f.InputText,[t.ElementRef,[2,h.NgModel]],null,null)],function(l,e){l(e,14,0),l(e,18,0,"p-column-filter","Date","yy-mm-dd",!0,!0),l(e,22,0)},function(l,e){l(e,13,0,!0,!0,!0,!0,t["\u0275nov"](e,14).filled),l(e,16,0,t["\u0275nov"](e,18).filled,t["\u0275nov"](e,18).focus),l(e,21,0,!0,!0,!0,!0,t["\u0275nov"](e,22).filled)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" "," "])),t["\u0275ppd"](5,1),(l()(),t["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,[" "," "])),(l()(),t["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,[" "," "]))],null,function(l,e){l(e,2,0,e.context.$implicit.user_details.name);var n=t["\u0275unv"](e,4,0,l(e,5,0,t["\u0275nov"](e.parent,0),e.context.$implicit.fromDate));l(e,4,0,n),l(e,7,0,e.context.$implicit.duration),l(e,9,0,e.context.$implicit.assignment),l(e,11,0,e.context.$implicit.serviceCode)})}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[["colspan","6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Timesheet found."]))],null,null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275ted"](-1,null,[" Click to Edit "]))],null,null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"input",[["pInputText",""],["type","text"],["value","PrimeNG"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,1).onInput(n)&&u),u},null,null)),t["\u0275did"](1,278528,null,0,f.InputText,[t.ElementRef,[2,h.NgModel]],null,null)],function(l,e){l(e,1,0)},function(l,e){l(e,0,0,!0,!0,!0,!0,t["\u0275nov"](e,1).filled)})}function z(l){return t["\u0275vid"](0,[t["\u0275pid"](0,b.DatePipe,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{table:0}),t["\u0275qud"](402653184,2,{modalContent:0}),(l()(),t["\u0275eld"](3,0,null,null,1,"h4",[["class","remove-margin"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Timesheet List "])),(l()(),t["\u0275eld"](5,0,null,null,11,"p-table",[["dataKey","id"],["styleClass","p-datatable-customers"]],null,null,null,y.d,y.b)),t["\u0275prd"](512,null,M.TableService,M.TableService,[]),t["\u0275did"](7,5488640,[[1,4],["dt",4]],1,M.Table,[t.ElementRef,t.NgZone,M.TableService,t.ChangeDetectorRef],{styleClass:[0,"styleClass"],paginator:[1,"paginator"],rowsPerPageOptions:[2,"rowsPerPageOptions"],showCurrentPageReport:[3,"showCurrentPageReport"],dataKey:[4,"dataKey"],globalFilterFields:[5,"globalFilterFields"],filterDelay:[6,"filterDelay"],loading:[7,"loading"],value:[8,"value"],rows:[9,"rows"]},null),t["\u0275qud"](603979776,3,{templates:1}),t["\u0275pad"](9,4),t["\u0275pad"](10,5),(l()(),t["\u0275and"](0,null,null,1,null,_)),t["\u0275did"](12,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,D)),t["\u0275did"](14,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,x)),t["\u0275did"](16,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](17,0,null,null,5,"p-inplace",[],null,null,null,w.b,w.a)),t["\u0275did"](18,49152,null,0,R.Inplace,[],null,null),(l()(),t["\u0275and"](0,null,null,1,null,I)),t["\u0275did"](20,16384,null,0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,P)),t["\u0275did"](22,16384,null,0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null)],function(l,e){var n=e.component,t=l(e,9,0,5,10,20,30),u=l(e,10,0,"user_details.name","fromDate","duration","assignment","serviceCode");l(e,7,0,"p-datatable-customers",!0,t,!0,"id",u,0,n.loading,n.timeSheets,10),l(e,12,0,"header"),l(e,14,0,"body"),l(e,16,0,"emptymessage"),l(e,20,0,"display"),l(e,22,0,"content")},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"app-user-list",[],null,null,null,z,F)),t["\u0275prd"](512,null,S.MessageService,S.MessageService,[]),t["\u0275did"](2,114688,null,0,T,[h.FormBuilder,S.MessageService,i.ActivatedRoute,r,i.Router],null,null)],function(l,e){l(e,2,0)},null)}var U=t["\u0275ccf"]("app-user-list",T,N,{},{},[]),q={expectedRole:"Admin"},A={expectedRole:"Admin"},E=function(){return function(){}}(),k=n("Fzqc"),L=n("dWZg"),B=n("qAlS"),O=n("g4HV"),Y=n("nciF"),V=n("mU/a"),G=n("No4M"),W=n("VSng"),K=n("K8Pq"),$=n("66nc"),j=n("OPzY"),Z=n("G5kV"),H=n("GS5F"),J=n("CC75"),X=n("WwML"),Q=n("VYqR"),ll=n("fwCW");n.d(e,"UserModuleNgFactory",function(){return el});var el=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,c,U]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,h.FormBuilder,h.FormBuilder,[]),t["\u0275mpd"](4608,h["\u0275angular_packages_forms_forms_o"],h["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r,r,[a.HttpClient]),t["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["\u0275mpd"](1073742336,i.RouterModule,i.RouterModule,[[2,i["\u0275angular_packages_router_router_a"]],[2,i.Router]]),t["\u0275mpd"](1073742336,E,E,[]),t["\u0275mpd"](1073742336,h["\u0275angular_packages_forms_forms_d"],h["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,h.ReactiveFormsModule,h.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,C.SharedModule,C.SharedModule,[]),t["\u0275mpd"](1073742336,k.a,k.a,[]),t["\u0275mpd"](1073742336,L.b,L.b,[]),t["\u0275mpd"](1073742336,B.ScrollingModule,B.ScrollingModule,[]),t["\u0275mpd"](1073742336,O.TooltipModule,O.TooltipModule,[]),t["\u0275mpd"](1073742336,Y.DropdownModule,Y.DropdownModule,[]),t["\u0275mpd"](1073742336,h.FormsModule,h.FormsModule,[]),t["\u0275mpd"](1073742336,V.PaginatorModule,V.PaginatorModule,[]),t["\u0275mpd"](1073742336,M.TableModule,M.TableModule,[]),t["\u0275mpd"](1073742336,G.MultiSelectModule,G.MultiSelectModule,[]),t["\u0275mpd"](1073742336,W.ButtonModule,W.ButtonModule,[]),t["\u0275mpd"](1073742336,v.CalendarModule,v.CalendarModule,[]),t["\u0275mpd"](1073742336,K.SliderModule,K.SliderModule,[]),t["\u0275mpd"](1073742336,$.DialogModule,$.DialogModule,[]),t["\u0275mpd"](1073742336,j.ContextMenuModule,j.ContextMenuModule,[]),t["\u0275mpd"](1073742336,Z.ToastModule,Z.ToastModule,[]),t["\u0275mpd"](1073742336,f.InputTextModule,f.InputTextModule,[]),t["\u0275mpd"](1073742336,H.ProgressBarModule,H.ProgressBarModule,[]),t["\u0275mpd"](1073742336,J.TabMenuModule,J.TabMenuModule,[]),t["\u0275mpd"](1073742336,X.MessagesModule,X.MessagesModule,[]),t["\u0275mpd"](1073742336,Q.FileUploadModule,Q.FileUploadModule,[]),t["\u0275mpd"](1073742336,ll.c,ll.c,[]),t["\u0275mpd"](1073742336,R.InplaceModule,R.InplaceModule,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,i.ROUTES,function(){return[[{path:"",component:d,children:[{path:"delete",component:d,data:q},{path:"list",component:T,data:A}]}]]},[])])})}}]);