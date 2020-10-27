(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-invoice-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-create/user-create.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/invoice/user-create/user-create.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Invoice\" [(visible)]=\"displayBasic\" [baseZIndex]=\"10000\">\n\n  <div class=\"container\" id=\"tablecontent\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th colspan=\"3\">Customer/Client Name : {{users.name}} {{users.lastName}} </th>\n              <th colspan=\"2\">Invoice number : {{registerForm.value.invoiceNumber}}</th>\n              <th rowspan>Date : {{registerForm.value.date}} </th>\n            </tr>\n          </thead>\n        <tbody>\n            <tr>\n                <td colspan=\"3\"><strong>WebmobileZ/ARI Fleet</strong><br /><br />\n                  Address:  {{users.address}} {{users.address1}},  {{users.state}},  {{users.city}},  {{users.zipcode}}.<br /></td>\n                <td colspan=\"3\"></td>\n\n            </tr>\n            <tr>\n              <td rowspan> <strong>SR</strong></td>\n              <td class=\"text-right\" colspan=\"2\"><strong>Description of services</strong></td>\n              <td rowspan><strong>Hours</strong></td>\n              <td rowspan><strong>Rate</strong></td>\n              <td rowspan><strong>Amount</strong></td>\n            </tr>\n            <tr>\n              <td rowspan> 1</td>\n              <td class=\"text-right\" colspan=\"2\">{{registerForm.value.services}}</td>\n              <td rowspan>{{registerForm.value.hours}}</td>\n              <td rowspan>{{registerForm.value.rate}}</td>\n              <td rowspan>${{registerForm.value.amount}}</td>\n          </tr>\n          <tr>\n            <td rowspan colspan=\"5\" class=\"text-right\"><strong>Total Amount</strong> </td>\n            <td rowspan>${{registerForm.value.amount}}</td>\n        </tr>\n        <tr>\n\n          <td rowspan colspan=\"5\" class=\"text-right\">Signature</td>\n          <td rowspan><img [src]=\"signatureImage\" /></td>\n      </tr>\n      <tr>\n         <td rowspan colspan=\"5\" class=\"text-right\">Print Name</td>\n        <td rowspan>{{registerForm.value.printName}}</td>\n    </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n</div>\n  <button (click)=\"generatePDF()\">Submit Invoice</button>\n</p-dialog>\n\n<div class=\"table-bordered\" id=\"tablecontent\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n  <table class=\"table table-bordered\">\n      <thead>\n          <tr>\n              <th colspan=\"3\">Customer/Client Name : {{users.name}} {{users.lastName}}</th>\n              <th colspan=\"2\">Invoice number<br /><input type=\"text\" colspan=\"\" formControlName=\"invoiceNumber\" class=\"form-control\" disabled></th>\n              <th>Date :<input type=\"date\" [ngModel]=\"BDate | date:'yyyy-MM-dd'\"  class=\"form-control\" formControlName=\"date\" ></th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td colspan=\"3\"><strong>WebmobileZ/ARI Fleet</strong><br /><br />\n                Address:  {{users.address}} {{users.address1}}  {{users.state}}  {{users.city}}  {{users.zipcode}}.<br /></td>\n              <td colspan=\"3\"></td>\n\n          </tr>\n          <tr>\n              <td rowspan> SR</td>\n              <td class=\"text-right\" colspan=\"2\"><strong>Description of services</strong></td>\n              <td rowspan>Hours</td>\n              <td rowspan>Rate</td>\n              <td rowspan>Amount</td>\n\n          </tr>\n          <tr>\n            <td rowspan> 1</td>\n            <td class=\"text-right\" colspan=\"2\"><textarea class=\"form-control\" formControlName=\"services\"></textarea></td>\n            <td rowspan><input type=\"number\" formControlName=\"hours\" class=\"form-control\"></td>\n            <td rowspan><input type=\"number\" formControlName=\"rate\" class=\"form-control\" disabled></td>\n            <td rowspan><input type=\"number\" formControlName=\"amount\" class=\"form-control\" disabled></td>\n        </tr>\n        <tr>\n\n          <td rowspan colspan=\"5\" class=\"text-right\"><strong>Total Amount</strong> </td>\n          <td rowspan>${{registerForm.value.amount}}</td>\n      </tr>\n      <tr>\n\n        <td rowspan colspan=\"5\" class=\"text-right\">Signature</td>\n        <td rowspan><img [src]=\"signatureImage\" *ngIf=\"signatureImage\"/> <button (click)=\"onSave($event)\">Add Signature</button></td>\n    </tr>\n    <tr>\n       <td rowspan colspan=\"5\" class=\"text-right\">Print Name</td>\n      <td rowspan><input type=\"text\" formControlName=\"printName\" class=\"form-control\"></td>\n  </tr>\n\n\n      </tbody>\n  </table>\n  </form>\n  <button [disabled]=\"!registerForm.valid\" (click)=\"showBasicDialog()\">Preview Invoice</button>\n\n\n</div>\n\n<p-dialog header=\"Signature\"    [responsive]=\"true\"\n[styleClass]=\"myDialogClass\" [(visible)]=\"displayBasic1\"  >\n\n  <ng-signature-pad  [(height)]=\"height\"  [(width)]=\"width\" [editable]=\"true\" doneButtonText=\"Submit\" format=\"base64\"  (done)=\"showImage($event)\">\n  </ng-signature-pad>\n\n\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-edit/user-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/invoice/user-edit/user-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p-dialog header=\"Invoice\" [(visible)]=\"displayBasic\" [baseZIndex]=\"10000\">\n  <div class=\"container\" id=\"tablecontent\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th colspan=\"3\">Customer/Client Name : {{users.name}} {{users.lastName}} </th>\n              <th colspan=\"2\">Invoice number : {{updateUser.value.invoiceNumber}}</th>\n              <th rowspan>Date : {{updateUser.value.date}} </th>\n            </tr>\n          </thead>\n\n          <tbody>\n\n            <tr>\n              <td colspan=\"3\"><strong>WebmobileZ/ARI Fleet</strong><br /><br />\n                Address: {{users.address}}, {{users.address1}} {{users.state}} {{users.city}} {{users.zipcode}}<br />\n              </td>\n              <td colspan=\"3\"></td>\n\n            </tr>\n\n            <tr>\n              <td rowspan> SR</td>\n              <td class=\"text-right\" colspan=\"2\"><strong>Description of services</strong></td>\n              <td rowspan>Hours</td>\n              <td rowspan>Rate</td>\n              <td rowspan>Amount</td>\n\n            </tr>\n            <tr>\n              <td rowspan> 1</td>\n              <td class=\"text-right\" colspan=\"2\">{{updateUser.value.services}}</td>\n              <td rowspan>{{updateUser.value.hours}}</td>\n              <td rowspan>{{updateUser.value.rate}}</td>\n              <td rowspan>{{updateUser.value.amount}}</td>\n            </tr>\n            <tr>\n              <td rowspan colspan=\"5\" class=\"text-right\"><strong>Total Amount</strong> </td>\n              <td rowspan>${{updateUser.value.amount}}</td>\n            </tr>\n            <tr>\n\n              <td rowspan colspan=\"5\" class=\"text-right\"><strong>Signature</strong></td>\n              <td rowspan><img src=\"{{updateUser.value.signature}}\" /></td>\n            </tr>\n            <tr>\n              <td rowspan colspan=\"5\" class=\"text-right\"><strong>Print Name</strong></td>\n              <td rowspan>{{updateUser.value.printName}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <button (click)=\"generatePDF()\">Update Invoice</button>\n</p-dialog>\n<div id=\"tablecontent\">\n  <form [formGroup]=\"updateUser\" (ngSubmit)=\"updateUserDetails()\">\n  <table class=\"table table-bordered\">\n      <thead>\n          <tr>\n              <th colspan=\"3\">Customer/Client Name :{{users.name}} {{users.lastName}}</th>\n              <th colspan=\"2\">Invoice number<br /><input type=\"text\" colspan=\"\" formControlName=\"invoiceNumber\" class=\"form-control\" disabled></th>\n              <th>Date :<input type=\"date\" class=\"form-control\" formControlName=\"date\" value=\"2020-10-19\"></th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr>\n              <td colspan=\"3\"><strong>WebmobileZ/ARI Fleet</strong><br /><br />\n                Address:  {{users.address}} {{users.address1}}  {{users.state}}  {{users.city}}  {{users.zipcode}}.<br /></td>\n              <td colspan=\"3\"></td>\n\n          </tr>\n          <tr>\n              <td rowspan> SR</td>\n              <td class=\"text-right\" colspan=\"2\"><strong>Description of services</strong></td>\n              <td rowspan>Hours</td>\n              <td rowspan>Rate</td>\n              <td rowspan>Amount</td>\n\n          </tr>\n          <tr>\n            <td rowspan> 1</td>\n            <td class=\"text-right\" colspan=\"2\"><textarea class=\"form-control\" formControlName=\"services\"></textarea></td>\n            <td rowspan><input type=\"number\" formControlName=\"hours\" class=\"form-control\"></td>\n            <td rowspan><input type=\"number\" formControlName=\"rate\" class=\"form-control\" disabled></td>\n            <td rowspan><input type=\"number\" formControlName=\"amount\" class=\"form-control\" disabled></td>\n        </tr>\n        <tr>\n          <td rowspan colspan=\"5\" class=\"text-right\"><strong>Total Amount</strong> </td>\n          <td rowspan>${{updateUser.value.amount}}</td>\n      </tr>\n      <tr>\n\n        <td rowspan colspan=\"5\" class=\"text-right\">Signature</td>\n        <td rowspan><img src=\"{{updateUser.value.signature}}\"/></td>\n    </tr>\n    <tr>\n       <td rowspan colspan=\"5\" class=\"text-right\">Print Name</td>\n      <td rowspan><input type=\"text\" formControlName=\"printName\" class=\"form-control\"></td>\n  </tr>\n\n      </tbody>\n  </table>\n  </form>\n  <button [disabled]=\"!updateUser.valid\" (click)=\"showBasicDialog()\">Preview Invoice</button>\n\n\n</div>\n\n<p-dialog header=\"Signature\" [(visible)]=\"displayBasic1\" [baseZIndex]=\"10000\" >\n\n        <ng-signature-pad doneButtonText=\"Submit\" format=\"base64\"  (done)=\"showImage($event)\">\n        </ng-signature-pad>\n\n</p-dialog>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-index/user-index.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/invoice/user-index/user-index.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-list/user-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/invoice/user-list/user-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\">Invoices </h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <!-- <div class=\"float-right\"> -->\r\n\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[6,12]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['amount','transferDate','confirmationNumber','paymentStatus']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Hours</th>\r\n                <th>Amount</th>\r\n                <th>Date</th>\r\n                <th>Description</th>\r\n                <th>Action</th>\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.user_details.name}} {{customer.user_details.lastName}}\r\n              </td>\r\n\r\n              <td>\r\n                {{customer.hours}}\r\n             </td>\r\n             <td>\r\n              ${{customer.amount}}\r\n            </td>\r\n                <td>\r\n                    {{customer.date | date}}\r\n                </td>\r\n                <td>\r\n                   {{customer.services}}\r\n                </td>\r\n\r\n               <td>\r\n                <a (click)=\"editUser(customer.invoiceId)\"  class=\"btn btn-warning btn-sm\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a>\r\n                <a (click)=\"viewUser(customer.invoiceId)\"  class=\"btn btn-warning btn-sm\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\r\n\r\n              </td>\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Invoices found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-inplace >\r\n  <ng-template pTemplate=\"display\">\r\n      Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n      <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-view/user-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/invoice/user-view/user-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto\" >\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h6 class=\"remove-margin\"> <button class=\"remove-margin\" (click)=\"generatePDF()\">Download Invoice</button> </h6>\n\n    </div>\n  </div>\n</div>\n\n\n\n  <div class=\"container\" id=\"tablecontent\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n    <table class=\"table table-bordered\">\n        <thead>\n            <tr>\n                <th colspan=\"3\">Customer/Client Name : {{users.name}} {{users.lastName}} </th>\n                <th colspan=\"2\">Invoice number : {{updateUser.value.invoiceNumber}}</th>\n                <th>Date : {{updateUser.value.date}}</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td colspan=\"3\"><strong>WebmobileZ/ARI Fleet</strong><br /><br />\n                  Address:  {{users.address}} {{users.address1}}  {{users.state}}  {{users.city}}  {{users.zipcode}}.<br /></td>\n                <td colspan=\"3\"></td>\n\n            </tr>\n            <tr>\n                <td rowspan> <strong>SR</strong></td>\n                <td class=\"text-right\" colspan=\"2\"><strong>Description of services</strong></td>\n                <td rowspan><strong>Hours</strong></td>\n                <td rowspan><strong>Rate</strong></td>\n                <td rowspan><strong>Amount</strong></td>\n\n            </tr>\n            <tr>\n              <td rowspan> 1</td>\n              <td class=\"text-right\" colspan=\"2\">{{updateUser.value.services}}</td>\n              <td rowspan>{{updateUser.value.hours}}</td>\n              <td rowspan>{{updateUser.value.rate}}</td>\n              <td rowspan>${{updateUser.value.amount}}</td>\n          </tr>\n          <tr>\n\n            <td rowspan colspan=\"5\" class=\"text-right\"><strong>Total Amount</strong></td>\n            <td rowspan>${{updateUser.value.amount}}</td>\n        </tr>\n        <tr>\n\n          <td rowspan colspan=\"5\" class=\"text-right\"><strong>Signature</strong></td>\n          <td rowspan><img src=\"{{updateUser.value.signature}}\"/></td>\n      </tr>\n      <tr>\n         <td rowspan colspan=\"5\" class=\"text-right\"><strong>Print Name</strong></td>\n        <td rowspan>{{updateUser.value.printName}}</td>\n    </tr>\n\n        </tbody>\n    </table>\n\n  </div>\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/admin/invoice/user-create/user-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/invoice/user-create/user-create.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-button {\n  margin: 0 0.5rem 0 0;\n  min-width: 10rem;\n}\n\np {\n  margin: 0;\n}\n\n.confirmation-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n:host ::ng-deep .p-dialog .p-button {\n  min-width: 6rem;\n}\n\npcard {\n  margin-right: 20px;\n}\n\n.invoice-head td {\n  padding: 0 8px;\n}\n\n.container {\n  padding-top: 30px;\n}\n\n.invoice-body {\n  background-color: transparent;\n}\n\n.invoice-thank {\n  margin-top: 60px;\n  padding: 5px;\n}\n\naddress {\n  margin-top: 15px;\n}\n\np-dialog .ui-dialog {\n  overflow: scroll;\n  max-height: 70%;\n}\n\n.signature-pad {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 400px;\n  height: 200px;\n}\n\ncanvas {\n  width: 187;\n}\n\n.signature_pad {\n  width: 700px;\n  height: 400px;\n  margin: 0 auto;\n}\n\n.signature_pad_body canvas {\n  width: 100% !important;\n  height: 100%;\n  border: dotted #444;\n  background: #CCCCCC;\n}\n\ncanvas {\n  height: 100vh !important;\n  width: 100vw !important;\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaW52b2ljZS91c2VyLWNyZWF0ZS9DOlxceGFtcHBcXGh0ZG9jc1xcdGltZXNoZWV0XFxhbmd1bGFyL3NyY1xcYXBwXFxhZG1pblxcaW52b2ljZVxcdXNlci1jcmVhdGVcXHVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9pbnZvaWNlL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNBLGtCQUFBO0FDRUE7O0FEQUE7RUFDQSxjQUFBO0FDR0E7O0FEREE7RUFDQSxpQkFBQTtBQ0lBOztBREZBO0VBQ0EsNkJBQUE7QUNLQTs7QURIQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ01BOztBREpBO0VBQ0EsZ0JBQUE7QUNPQTs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxVQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNXRjs7QURSQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNXRjs7QURSQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaW52b2ljZS91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAucC1idXR0b24ge1xyXG4gIG1hcmdpbjogMCAuNXJlbSAwIDA7XHJcbiAgbWluLXdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLWRpYWxvZyAucC1idXR0b24ge1xyXG4gIG1pbi13aWR0aDogNnJlbTtcclxufVxyXG5wY2FyZHtcclxubWFyZ2luLXJpZ2h0OiAyMHB4XHJcbn1cclxuLmludm9pY2UtaGVhZCB0ZCB7XHJcbnBhZGRpbmc6IDAgOHB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG5wYWRkaW5nLXRvcDozMHB4O1xyXG59XHJcbi5pbnZvaWNlLWJvZHl7XHJcbmJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuLmludm9pY2UtdGhhbmt7XHJcbm1hcmdpbi10b3A6IDYwcHg7XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5hZGRyZXNze1xyXG5tYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxucC1kaWFsb2cgLnVpLWRpYWxvZyB7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBtYXgtaGVpZ2h0OiA3MCU7XHJcbn1cclxuLnNpZ25hdHVyZS1wYWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5jYW52YXN7XHJcbiAgd2lkdGg6MTg3XHJcbn1cclxuLnNpZ25hdHVyZV9wYWQge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc2lnbmF0dXJlX3BhZF9ib2R5IGNhbnZhcyB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgIzQ0NDtcclxuICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDO1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwdnchaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xuICBtaW4td2lkdGg6IDEwcmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29uZmlybWF0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5wLWRpYWxvZyAucC1idXR0b24ge1xuICBtaW4td2lkdGg6IDZyZW07XG59XG5cbnBjYXJkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaW52b2ljZS1oZWFkIHRkIHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmludm9pY2UtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaW52b2ljZS10aGFuayB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYWRkcmVzcyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbnAtZGlhbG9nIC51aS1kaWFsb2cge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG59XG5cbi5zaWduYXR1cmUtcGFkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuY2FudmFzIHtcbiAgd2lkdGg6IDE4Nztcbn1cblxuLnNpZ25hdHVyZV9wYWQge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2lnbmF0dXJlX3BhZF9ib2R5IGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBkb3R0ZWQgIzQ0NDtcbiAgYmFja2dyb3VuZDogI0NDQ0NDQztcbn1cblxuY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/invoice/user-create/user-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/invoice/user-create/user-create.component.ts ***!
  \********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);








let UserCreateComponent = class UserCreateComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
        this.users = [];
        this.disableBtn = false;
        this.points = [];
        this.display = false;
        this.routerChanged = false;
    }
    generatePDF() {
        this.displayBasic = false;
        var data = document.getElementById('tablecontent');
        console.log(data);
        html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(canvas => {
            var imgWidth = 200;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
            var position = 5;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('invoice-payment.pdf');
        });
        this.userRest.storeInvoices(this.registerForm).subscribe(response => {
            console.log(response);
            this.router.navigate(['invoice/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    showBasicDialog() {
        this.displayBasic = true;
        console.log();
    }
    showImage(data) {
        this.signatureImage = data;
        this.registerForm.patchValue({ signature: this.signatureImage });
        console.log(this.signatureImage);
        this.displayBasic1 = false;
    }
    ngOnInit() {
        this.BDate = new Date();
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'invoiceNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'hours': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'services': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'printName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'signature': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.userRest.getCountInvoices().subscribe((response) => {
            console.log(this.count = response.count);
            let countnum = "WMZ00" + this.count;
            this.registerForm.patchValue({ invoiceNumber: countnum });
        }, (error) => { console.log(error); });
        this.userRest.getCurentUser().subscribe((response) => {
            console.log(this.users = response.user);
            this.registerForm.patchValue({ rate: response.user.rate });
        }, (error) => { console.log(error); });
        this.registerForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(this.isSame)).subscribe(values => {
            console.log(values);
            const { rate, hours } = values;
            this.registerForm.patchValue({
                amount: (rate * hours).toFixed(2)
            });
        });
        this.signatureImage = "";
    }
    get invoiceNumber() { return this.registerForm.get('invoiceNumber'); }
    get amount() { return this.registerForm.get('amount'); }
    get rate() { return this.registerForm.get('rate'); }
    get hours() { return this.registerForm.get('hours'); }
    get services() { return this.registerForm.get('services'); }
    get printName() { return this.registerForm.get('printName'); }
    get date() { return this.registerForm.get('date'); }
    get signature() { return this.registerForm.get('signature'); }
    isSame(prev, next) {
        return (prev.rate === next.rate)
            && (prev.hours === next.hours);
    }
    onSave() {
        this.width = "300";
        this.height = "100";
        this.displayBasic1 = true;
    }
    registerUser() {
        /*
            console.log(this.registerForm);
            this.userRest.storeInvoices(this.registerForm).subscribe(
              response => {
                console.log(response),
                  this.router.navigate(['invoices/list'])
              },
              error => {
                this.serverErrors = error.error.errors
              }
            ); */
    }
};
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-create/user-create.component.html"),
        styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/invoice/user-create/user-create.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserCreateComponent);



/***/ }),

/***/ "./src/app/admin/invoice/user-edit/user-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/invoice/user-edit/user-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ludm9pY2UvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/invoice/user-edit/user-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/invoice/user-edit/user-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);








let UserEditComponent = class UserEditComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
        this.users = [];
        this.disableBtn = false;
        this.points = [];
        this.display = false;
        this.routerChanged = false;
    }
    ngOnInit() {
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.users = response.user;
            console.log(this.users);
            console.log(response);
            this.updateUser.patchValue({
                'invoiceNumber': response.payment.invoiceNumber,
                'amount': response.payment.amount,
                'rate': response.payment.rate,
                'hours': response.payment.hours,
                'services': response.payment.services,
                'printName': response.payment.printName,
                'date': response.payment.date,
                'signature': response.payment.signature,
            });
        }, (error) => console.log(error));
        console.log(this.data);
        this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'invoiceNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'hours': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'services': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'printName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'signature': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.updateUser.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(this.isSame)).subscribe(values => {
            console.log(values);
            const { rate, hours } = values;
            this.updateUser.patchValue({
                amount: (rate * hours).toFixed(2)
            });
        });
    }
    isSame(prev, next) {
        return (prev.rate === next.rate)
            && (prev.hours === next.hours);
    }
    onSave() {
        this.displayBasic1 = true;
    }
    get invoiceNumber() { return this.updateUser.get('invoiceNumber'); }
    get amount() { return this.updateUser.get('amount'); }
    get rate() { return this.updateUser.get('rate'); }
    get hours() { return this.updateUser.get('hours'); }
    get services() { return this.updateUser.get('services'); }
    get printName() { return this.updateUser.get('printName'); }
    get date() { return this.updateUser.get('date'); }
    get signature() { return this.updateUser.get('signature'); }
    generatePDF() {
        var data = document.getElementById('tablecontent');
        console.log(data);
        html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(canvas => {
            var imgWidth = 210;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
            var position = 5;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('invoice-payment.pdf');
            let id = this.route.snapshot.params.id;
            this.userRest.updateUser(this.updateUser, id).subscribe((response) => {
                console.log(response),
                    this.router.navigate(['invoice/list']);
            }, error => {
                this.serverErrors = error.error.errors;
            }, () => console.log('completed'));
        });
        this.userRest.storeInvoices(this.registerForm).subscribe(response => {
            console.log(response);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    showBasicDialog() {
        this.displayBasic = true;
        console.log();
    }
    showImage(data) {
        this.signatureImage = data;
        this.registerForm.patchValue({ signature: this.signatureImage });
        console.log(this.signatureImage);
        this.displayBasic1 = false;
    }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['users/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        }, () => console.log('completed'));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserEditComponent.prototype, "data", void 0);
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-edit/user-edit.component.html"),
        styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/admin/invoice/user-edit/user-edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_4__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserEditComponent);



/***/ }),

/***/ "./src/app/admin/invoice/user-index/user-index.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/invoice/user-index/user-index.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ludm9pY2UvdXNlci1pbmRleC91c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/invoice/user-index/user-index.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/invoice/user-index/user-index.component.ts ***!
  \******************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);





let UserIndexComponent = class UserIndexComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    ngOnInit() {
        /*  this.userRest.getUsers().subscribe(
          (response) => { console.log(this.userList = response.user);  this.loading = false; },
          (error) => { console.log(error) }
         );
     */
    }
    deleteUser(id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe((response) => console.log(response), (error) => console.log(error));
        }
    }
    editUser(id) {
        this.router.navigate(['users/edit', id]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
], UserIndexComponent.prototype, "table", void 0);
UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-index',
        template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-index/user-index.component.html"),
        styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/invoice/user-index/user-index.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserIndexComponent);



/***/ }),

/***/ "./src/app/admin/invoice/user-list/user-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/invoice/user-list/user-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaW52b2ljZS91c2VyLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXHRpbWVzaGVldFxcYW5ndWxhci9zcmNcXGFwcFxcYWRtaW5cXGludm9pY2VcXHVzZXItbGlzdFxcdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9pbnZvaWNlL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9pbnZvaWNlL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtY2VsbC1lZGl0aW5nIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin/invoice/user-list/user-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/invoice/user-list/user-list.component.ts ***!
  \****************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);







const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3',
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF',
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA',
    },
};
let UserListComponent = class UserListComponent {
    constructor(fb, messageService, route, userRest, router) {
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.loading = true;
    }
    ngOnInit() {
        this.userRest.getInvoices().subscribe((response) => { console.log(this.timeSheets = response.timesheet); this.loading = false; }, (error) => { console.log(error); });
    }
    deleteUser(id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe((response) => console.log(response), (error) => console.log(error));
        }
    }
    editUser(id) {
        this.router.navigate(['invoice/edit', id]);
    }
    viewUser(id) {
        this.router.navigate(['invoice/view', id]);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
], UserListComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], UserListComponent.prototype, "modalContent", void 0);
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        // changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/invoice/user-list/user-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/admin/invoice/user-rest.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/invoice/user-rest.service.ts ***!
  \****************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRestService = class UserRestService {
    constructor(http) {
        this.http = http;
        this.users = [];
    }
    loadUser() {
        return this.http.get('https://employees.webmobilez.com/public/api/user-list/create');
    }
    getCountInvoices() {
        return this.http.get('https://employees.webmobilez.com/public/api/get-count-invoice-list');
    }
    getInvoices() {
        return this.http.get('https://employees.webmobilez.com/public/api/invoice-list');
    }
    storeInvoices(form) {
        return this.http.post('https://employees.webmobilez.com/public/api/invoice-list', form.value);
    }
    getpayments() {
        return this.http.get('https://employees.webmobilez.com/public/api/payment-list');
    }
    getUsers() {
        return this.http.get('https://employees.webmobilez.com/public/api/user-list');
    }
    getCurentUser() {
        return this.http.get('https://employees.webmobilez.com/public/api/get-user-data');
    }
    editUser(id) {
        return this.http.get('https://employees.webmobilez.com/public/api/invoice-list/' + id);
    }
    updateUser(form, id) {
        return this.http.put('https://employees.webmobilez.com/public/api/invoice-list/' + id, form.value);
    }
    storePayment(form) {
        return this.http.post('https://employees.webmobilez.com/public/api/payment-list', form.value);
    }
    storeUser(form) {
        return this.http.post('https://employees.webmobilez.com/public/api/user-list', form.value);
    }
    deleteUser(id) {
        return this.http.delete('https://employees.webmobilez.com/public/api/user-list/' + id);
    }
};
UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserRestService);



/***/ }),

/***/ "./src/app/admin/invoice/user-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/invoice/user-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/invoice/user-index/user-index.component.ts");
/* harmony import */ var _user_view_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-view/user-edit.component */ "./src/app/admin/invoice/user-view/user-edit.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/invoice/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/invoice/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/invoice/user-list/user-list.component.ts");








const routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], data: {
                    expectedRole: 'User'
                } },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], data: {
                    expectedRole: 'User'
                } },
            { path: 'delete', component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"], data: {
                    expectedRole: 'User'
                } },
            { path: 'view/:id', component: _user_view_user_edit_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"], data: {
                    expectedRole: 'User'
                } },
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], data: {
                    expectedRole: 'User'
                } }
        ]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/admin/invoice/user-view/user-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/invoice/user-view/user-edit.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ludm9pY2UvdXNlci12aWV3L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/invoice/user-view/user-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/invoice/user-view/user-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);







let UserViewComponent = class UserViewComponent {
    constructor(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
        this.users = [];
        this.disableBtn = false;
        this.points = [];
        this.display = false;
        this.routerChanged = false;
    }
    ngOnInit() {
        let id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe((response) => {
            this.users = response.user;
            console.log(this.users);
            console.log(response);
            this.updateUser.patchValue({
                'invoiceNumber': response.payment.invoiceNumber,
                'amount': response.payment.amount,
                'rate': response.payment.rate,
                'hours': response.payment.hours,
                'services': response.payment.services,
                'printName': response.payment.printName,
                'date': response.payment.date,
                'signature': response.payment.signature,
            });
        }, (error) => console.log(error));
        console.log(this.data);
        this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'invoiceNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'rate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'hours': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'services': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'printName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'signature': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    isSame(prev, next) {
        return (prev.rate === next.rate)
            && (prev.hours === next.hours);
    }
    onSave() {
        this.displayBasic1 = true;
    }
    get invoiceNumber() { return this.registerForm.get('invoiceNumber'); }
    get amount() { return this.registerForm.get('amount'); }
    get rate() { return this.registerForm.get('rate'); }
    get hours() { return this.registerForm.get('hours'); }
    get services() { return this.registerForm.get('services'); }
    get printName() { return this.registerForm.get('printName'); }
    get date() { return this.registerForm.get('date'); }
    get signature() { return this.registerForm.get('signature'); }
    generatePDF() {
        var data = document.getElementById('tablecontent');
        console.log(data);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(data).then(canvas => {
            var imgWidth = 205;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]();
            var position = 5;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('invoice-payment.pdf');
            let id = this.route.snapshot.params.id;
        });
        this.userRest.storeInvoices(this.registerForm).subscribe(response => {
            console.log(response);
        }, error => {
            this.serverErrors = error.error.errors;
        });
    }
    showBasicDialog() {
        this.displayBasic = true;
        console.log();
    }
    showImage(data) {
        this.signatureImage = data;
        this.registerForm.patchValue({ signature: this.signatureImage });
        console.log(this.signatureImage);
        this.displayBasic1 = false;
    }
    updateUserDetails() {
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser, id).subscribe((response) => {
            console.log(response),
                this.router.navigate(['users/list']);
        }, error => {
            this.serverErrors = error.error.errors;
        }, () => console.log('completed'));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserViewComponent.prototype, "data", void 0);
UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/invoice/user-view/user-edit.component.html"),
        styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/admin/invoice/user-view/user-edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_4__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], UserViewComponent);



/***/ }),

/***/ "./src/app/admin/invoice/user.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/invoice/user.module.ts ***!
  \**********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/invoice/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/invoice/user-index/user-index.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/invoice/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/invoice/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/invoice/user-list/user-list.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/invoice/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/contextmenu.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _user_view_user_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-view/user-edit.component */ "./src/app/admin/invoice/user-view/user-edit.component.ts");
/* harmony import */ var _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-plus/signature-pad */ "./node_modules/@ng-plus/signature-pad/fesm2015/ng-plus-signature-pad.js");





























let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], _user_view_user_edit_component__WEBPACK_IMPORTED_MODULE_26__["UserViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_22__["CalendarModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_13__["SliderModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["MultiSelectModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__["ContextMenuModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_12__["ToastModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"], _ng_plus_signature_pad__WEBPACK_IMPORTED_MODULE_27__["SignaturePadModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_23__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_25__["InplaceModule"]
        ],
        providers: [
            _user_rest_service__WEBPACK_IMPORTED_MODULE_8__["UserRestService"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=admin-invoice-user-module-es2015.js.map