(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Riz8:function(l,e,n){"use strict";n.r(e);var t=n("8Y7J");class u{}var a=n("pMnS"),o=n("iInd"),i=n("IheW");class r{constructor(l){this.http=l,this.users=[]}getUsers(){return this.http.get("https://employees.webmobilez.com/public/api/user-list")}getTimeSheet(){return this.http.get("https://employees.webmobilez.com/public/api/getAllTimesheets")}getTimeSheets(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet/"+l)}editUser(l){return this.http.get("https://employees.webmobilez.com/public/api/user-list/"+l)}editTimeSheet(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet/"+l+"/edit")}updateUser(l,e){return this.http.put("https://employees.webmobilez.com/public/api/user-list/"+e,l.value)}updateTimeSheet(l,e){return this.http.put("https://employees.webmobilez.com/public/api/time-sheet/"+e,l.value)}storeUser(l){return this.http.post("https://employees.webmobilez.com/public/api/time-sheet",l)}storeDocument(l){return this.http.post("https://employees.webmobilez.com/public/api/time-sheet-documents",l)}getTimeDocuments(l){return this.http.get("https://employees.webmobilez.com/public/api/time-sheet-documents/"+l)}deleteUser(l){return this.http.delete("https://employees.webmobilez.com/public/api/user-list/"+l)}deleteDocument(l){return this.http.delete("https://employees.webmobilez.com/public/api/time-sheet-documents/"+l)}}r.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new r(t["\u0275\u0275inject"](i.HttpClient))},token:r,providedIn:"root"}),n("8YFm");class d{constructor(l,e,n){this.route=l,this.userRest=e,this.router=n,this.userList=[],this.timeSheets=[],this.loading=!0}ngOnInit(){this.userRest.getUsers().subscribe(l=>{console.log(this.userList=l.user),this.loading=!1},l=>{console.log(l)})}deleteUser(l){confirm("Are you sure to delete ")&&this.userRest.deleteUser(l).subscribe(l=>console.log(l),l=>console.log(l))}editUser(l){this.router.navigate(["users/edit",l])}}var s=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{table:0}),(l()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](4,212992,null,0,o.RouterOutlet,[o.ChildrenOutletContexts,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(l,e){l(e,4,0)},null)}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-user-index",[],null,null,null,p,s)),t["\u0275did"](1,114688,null,0,d,[o.ActivatedRoute,r,o.Router],null,null)],function(l,e){l(e,1,0)},null)}var c=t["\u0275ccf"]("app-user-index",d,m,{},{},[]),h=n("Fa87"),g=n("s7LF"),f=n("FUWh"),v=n("KB/w"),b=n("SVse"),M=n("RXyF"),y=n("Czxz"),C=n("7LN8"),w=n("rGLl"),R=n("EPYN"),S=n("4Vzq");n("uxFC"),n("24Yq");class T{constructor(l,e,n,t,u){this.fb=l,this.messageService=e,this.route=n,this.userRest=t,this.router=u,this.timeSheets=[],this.loading=!0}ngOnInit(){this.userRest.getTimeSheet().subscribe(l=>{console.log(this.timeSheets=l.timesheet),this.loading=!1},l=>{console.log(l)}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}onActivityChange(l){const e=l.target.value;if(e&&e.trim().length){const l=parseInt(e);isNaN(l)||this.table.filter(l,"activity","gte")}}onDateSelect(l){this.table.filter(this.formatDate(l),"fromDate","equals")}formatDate(l){let e=l.getMonth()+1,n=l.getDate();return e<10&&(e="0"+e),n<10&&(n="0"+n),l.getFullYear()+"-"+e+"-"+n}onRepresentativeChange(l){this.table.filter(l.value,"representative","in")}}var F=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]     .p-cell-editing{padding-top:0!important;padding-bottom:0!important}"]],data:{}});function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Employee"])),(l()(),t["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Date"])),(l()(),t["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Duration"])),(l()(),t["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Assignment"])),(l()(),t["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Service Code"])),(l()(),t["\u0275eld"](11,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Employee"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,14).onInput(n)&&u),"input"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter(n.target.value,"user_details.name","startsWith")&&u),u},null,null)),t["\u0275did"](14,278528,null,0,h.InputText,[t.ElementRef,[2,g.NgModel]],null,null),(l()(),t["\u0275eld"](15,0,null,null,4,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,3,"p-calendar",[["dateFormat","yy-mm-dd"],["placeholder","Date"],["styleClass","p-column-filter"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null]],[[null,"onSelect"],[null,"onClearClick"]],function(l,e,n){var u=!0;return"onSelect"===e&&(u=!1!==l.component.onDateSelect(n)&&u),"onClearClick"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter("","fromDate","equals")&&u),u},f.b,f.a)),t["\u0275prd"](5120,null,g.NG_VALUE_ACCESSOR,function(l){return[l]},[v.Calendar]),t["\u0275did"](18,1294336,null,1,v.Calendar,[t.ElementRef,t.Renderer2,t.ChangeDetectorRef,t.NgZone],{styleClass:[0,"styleClass"],placeholder:[1,"placeholder"],dateFormat:[2,"dateFormat"],readonlyInput:[3,"readonlyInput"],showButtonBar:[4,"showButtonBar"]},{onSelect:"onSelect",onClearClick:"onClearClick"}),t["\u0275qud"](603979776,4,{templates:1}),(l()(),t["\u0275eld"](20,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t["\u0275eld"](21,0,null,null,1,"input",[["class","p-column-filter"],["pInputText",""],["placeholder","Search by Duration"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,22).onInput(n)&&u),"input"===e&&(u=!1!==t["\u0275nov"](l.parent,7).filter(n.target.value,"duration","startsWith")&&u),u},null,null)),t["\u0275did"](22,278528,null,0,h.InputText,[t.ElementRef,[2,g.NgModel]],null,null)],function(l,e){l(e,14,0),l(e,18,0,"p-column-filter","Date","yy-mm-dd",!0,!0),l(e,22,0)},function(l,e){l(e,13,0,!0,!0,!0,!0,t["\u0275nov"](e,14).filled),l(e,16,0,t["\u0275nov"](e,18).filled,t["\u0275nov"](e,18).focus),l(e,21,0,!0,!0,!0,!0,t["\u0275nov"](e,22).filled)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,[" "," "])),(l()(),t["\u0275eld"](3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](4,null,[" "," "])),t["\u0275ppd"](5,1),(l()(),t["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](7,null,[" "," "])),(l()(),t["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](9,null,[" "," "])),(l()(),t["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t["\u0275ted"](11,null,[" "," "]))],null,function(l,e){l(e,2,0,e.context.$implicit.user_details.name);var n=t["\u0275unv"](e,4,0,l(e,5,0,t["\u0275nov"](e.parent,0),e.context.$implicit.fromDate));l(e,4,0,n),l(e,7,0,e.context.$implicit.duration),l(e,9,0,e.context.$implicit.assignment),l(e,11,0,e.context.$implicit.serviceCode)})}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"td",[["colspan","6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Timesheet found."]))],null,null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275ted"](-1,null,[" Click to Edit "]))],null,null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"input",[["pInputText",""],["type","text"],["value","PrimeNG"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],function(l,e,n){var u=!0;return"input"===e&&(u=!1!==t["\u0275nov"](l,1).onInput(n)&&u),u},null,null)),t["\u0275did"](1,278528,null,0,h.InputText,[t.ElementRef,[2,g.NgModel]],null,null)],function(l,e){l(e,1,0)},function(l,e){l(e,0,0,!0,!0,!0,!0,t["\u0275nov"](e,1).filled)})}function z(l){return t["\u0275vid"](0,[t["\u0275pid"](0,b.DatePipe,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{table:0}),t["\u0275qud"](402653184,2,{modalContent:0}),(l()(),t["\u0275eld"](3,0,null,null,1,"h4",[["class","remove-margin"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Timesheet List "])),(l()(),t["\u0275eld"](5,0,null,null,11,"p-table",[["dataKey","id"],["styleClass","p-datatable-customers"]],null,null,null,M.d,M.b)),t["\u0275prd"](512,null,y.TableService,y.TableService,[]),t["\u0275did"](7,5488640,[[1,4],["dt",4]],1,y.Table,[t.ElementRef,t.NgZone,y.TableService,t.ChangeDetectorRef],{styleClass:[0,"styleClass"],paginator:[1,"paginator"],rowsPerPageOptions:[2,"rowsPerPageOptions"],showCurrentPageReport:[3,"showCurrentPageReport"],dataKey:[4,"dataKey"],globalFilterFields:[5,"globalFilterFields"],filterDelay:[6,"filterDelay"],loading:[7,"loading"],value:[8,"value"],rows:[9,"rows"]},null),t["\u0275qud"](603979776,3,{templates:1}),t["\u0275pad"](9,4),t["\u0275pad"](10,5),(l()(),t["\u0275and"](0,null,null,1,null,_)),t["\u0275did"](12,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,D)),t["\u0275did"](14,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,x)),t["\u0275did"](16,16384,[[3,4]],0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275eld"](17,0,null,null,5,"p-inplace",[],null,null,null,w.b,w.a)),t["\u0275did"](18,49152,null,0,R.Inplace,[],null,null),(l()(),t["\u0275and"](0,null,null,1,null,I)),t["\u0275did"](20,16384,null,0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null),(l()(),t["\u0275and"](0,null,null,1,null,P)),t["\u0275did"](22,16384,null,0,C.PrimeTemplate,[t.TemplateRef],{name:[0,"name"]},null)],function(l,e){var n=e.component,t=l(e,9,0,5,10,20,30),u=l(e,10,0,"user_details.name","fromDate","duration","assignment","serviceCode");l(e,7,0,"p-datatable-customers",!0,t,!0,"id",u,0,n.loading,n.timeSheets,10),l(e,12,0,"header"),l(e,14,0,"body"),l(e,16,0,"emptymessage"),l(e,20,0,"display"),l(e,22,0,"content")},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"app-user-list",[],null,null,null,z,F)),t["\u0275prd"](512,null,S.MessageService,S.MessageService,[]),t["\u0275did"](2,114688,null,0,T,[g.FormBuilder,S.MessageService,o.ActivatedRoute,r,o.Router],null,null)],function(l,e){l(e,2,0)},null)}var E=t["\u0275ccf"]("app-user-list",T,N,{},{},[]);const U={expectedRole:"Admin"},L={expectedRole:"Admin"};class k{}var q=n("IP0z"),A=n("/HVE"),B=n("hOhj"),O=n("g4HV"),V=n("nciF"),Y=n("mU/a"),j=n("No4M"),G=n("VSng"),K=n("K8Pq"),W=n("66nc"),$=n("OPzY"),H=n("G5kV"),J=n("GS5F"),X=n("CC75"),Z=n("WwML"),Q=n("VYqR"),ll=n("tq8E");n.d(e,"UserModuleNgFactory",function(){return el});var el=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,c,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),t["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r,r,[i.HttpClient]),t["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["\u0275mpd"](1073742336,o.RouterModule,o.RouterModule,[[2,o["\u0275angular_packages_router_router_a"]],[2,o.Router]]),t["\u0275mpd"](1073742336,k,k,[]),t["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,C.SharedModule,C.SharedModule,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,A.b,A.b,[]),t["\u0275mpd"](1073742336,B.ScrollingModule,B.ScrollingModule,[]),t["\u0275mpd"](1073742336,O.TooltipModule,O.TooltipModule,[]),t["\u0275mpd"](1073742336,V.DropdownModule,V.DropdownModule,[]),t["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),t["\u0275mpd"](1073742336,Y.PaginatorModule,Y.PaginatorModule,[]),t["\u0275mpd"](1073742336,y.TableModule,y.TableModule,[]),t["\u0275mpd"](1073742336,j.MultiSelectModule,j.MultiSelectModule,[]),t["\u0275mpd"](1073742336,G.ButtonModule,G.ButtonModule,[]),t["\u0275mpd"](1073742336,v.CalendarModule,v.CalendarModule,[]),t["\u0275mpd"](1073742336,K.SliderModule,K.SliderModule,[]),t["\u0275mpd"](1073742336,W.DialogModule,W.DialogModule,[]),t["\u0275mpd"](1073742336,$.ContextMenuModule,$.ContextMenuModule,[]),t["\u0275mpd"](1073742336,H.ToastModule,H.ToastModule,[]),t["\u0275mpd"](1073742336,h.InputTextModule,h.InputTextModule,[]),t["\u0275mpd"](1073742336,J.ProgressBarModule,J.ProgressBarModule,[]),t["\u0275mpd"](1073742336,X.TabMenuModule,X.TabMenuModule,[]),t["\u0275mpd"](1073742336,Z.MessagesModule,Z.MessagesModule,[]),t["\u0275mpd"](1073742336,Q.FileUploadModule,Q.FileUploadModule,[]),t["\u0275mpd"](1073742336,ll.c,ll.c,[]),t["\u0275mpd"](1073742336,R.InplaceModule,R.InplaceModule,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,o.ROUTES,function(){return[[{path:"",component:d,children:[{path:"delete",component:d,data:U},{path:"list",component:T,data:L}]}]]},[])])})}}]);