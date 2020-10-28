(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-payments-user-module"],{

/***/ "./node_modules/primeng/inplace.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/inplace.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inplace/inplace */ "./node_modules/primeng/components/inplace/inplace.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-create/user-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/payments/user-create/user-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-12\">\n                <h4 class=\"remove-margin\">Add payment status to Employee </h4>\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n                  </div>\n                  <div class=\"card-body\">\n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser()\">\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n\n                              <label>User Name</label>\n                              <select  (change)=\"firstDropDownChanged()\" tooltipPosition=\"top\" class=\"form-control\" formControlName=\"userId\">\n                                <option value=\"\" selected=\"selected\">--Select Employee--</option>\n                                <option *ngFor=\"let order of users\" [value]=\"order.id\">\n                                    {{order.name}}</option>\n                            </select>\n\n\n                          </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"rate\">\n                        <div class=\"col-md-12\">\n                          <label>Rate</label>\n                          <input class=\"form-control\" type=\"number\" value=\"{{rate}}\" readonly>\n\n                        </div>\n                       </div>\n                       <div class=\"row\" *ngIf=\"companyName\">\n                        <div class=\"col-md-12\">\n                          <label>Company Name</label>\n                          <input class=\"form-control\" type=\"text\" value=\"{{companyName}}\" readonly>\n                        </div>\n                       </div>\n                       <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <label for=\"exampleInputEmail1\">Hours</label>\n                            <input type=\"number\" formControlName=\"hours\" class=\"form-control\" placeholder=\"Hours\" required>\n\n                            <div *ngIf=\"hours.invalid && (hours.dirty || hours.touched)\"\n                                    class=\"form-text text-muted\">\n                                  <div *ngIf=\"hours.errors?.required\">\n                                    Amount is required.\n                                  </div>\n\n                            </div>\n\n                            <small id=\"hoursHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.hours }}</small>\n                          </div>\n                        </div>\n                      </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label for=\"exampleInputEmail1\">Amount</label>\n                              <input type=\"number\" formControlName=\"amount\" class=\"form-control\" placeholder=\"Amount\" required>\n\n                              <div *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"amount.errors?.required\">\n                                      Amount is required.\n                                    </div>\n\n                              </div>\n\n                              <small id=\"amountHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.amount }}</small>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label for=\"exampleInputEmail1\">Transfer date</label>\n                              <input type=\"date\" formControlName=\"transferDate\" class=\"form-control\" placeholder=\"Amount\" required>\n\n                              <div *ngIf=\"transferDate.invalid && (transferDate.dirty || transferDate.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"transferDate.errors?.required\">\n                                      transferDate is required.\n                                    </div>\n\n                              </div>\n\n                              <small id=\"transferDateHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.transferDate }}</small>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label for=\"exampleInputEmail1\">Confirmation Number</label>\n                              <input type=\"text\" formControlName=\"confirmationNumber\" class=\"form-control\" placeholder=\"confirmationNumber\" required>\n\n                              <div *ngIf=\"confirmationNumber.invalid && (confirmationNumber.dirty || confirmationNumber.touched)\"\n                                      class=\"form-text text-muted\">\n                                    <div *ngIf=\"confirmationNumber.errors?.required\">\n                                      confirmationNumber is required.\n                                    </div>\n\n                              </div>\n\n                              <small id=\"confirmationNumberHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.confirmationNumber }}</small>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                              <label>Payment Status</label>\n                              <select class=\"form-control\" formControlName=\"paymentStatus\">\n                                <option value=\"\" selected>--Select--</option>\n                                <option value=\"Paid\" >Paid</option>\n                                <option value=\"Progress\" >Progress</option>\\\n                                <option value=\"To be pay\" > To be pay</option>\n                            </select>\n                            <div *ngIf=\"paymentStatus.invalid && (paymentStatus.dirty || paymentStatus.touched)\"\n                            class=\"form-text text-muted\">\n                          <div *ngIf=\"paymentStatus.errors?.required\">\n                            paymentStatus is required.\n                          </div>\n\n                    </div>\n\n                    <small id=\"paymentStatusHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.paymentStatus }}</small>\n                              </div>\n                          </div>\n                      </div>\n\n                        <div class=\"row\">\n                          <div class=\"update ml-auto mr-auto\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!disableBtn\" [disabled]=\"!registerForm.valid\">Submit</button>\n                          </div>\n                        </div>\n                      </form>\n                  </div>\n                </div>\n              </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-edit/user-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/payments/user-edit/user-edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n            <h4 class=\"remove-margin\">Edit User Detail </h4>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <!-- <h5 class=\"card-title\">Edit Profile</h5> -->\n              </div>\n              <div class=\"card-body\">\n                <form [formGroup]=\"updateUser\" (ngSubmit)=\"updateUserDetails()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <input type=\"hidden\" name=\"_method\" value=\"PUT\">\n                          <label>First Name</label>\n                          <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"First Name\" required>\n                          <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                                  class=\"form-text text-muted\">\n                                <div *ngIf=\"name.errors?.required\">\n                                  Name is required.\n                                </div>\n                                <div *ngIf=\"name.errors?.minlength\">\n                                  Name must be at least 5 characters long.\n                                </div>\n                          </div>\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.name }}</small>\n\n                          </div>\n                      </div>\n                  </div>\n\n                    <div class=\"row\">\n                      <!-- <div class=\"col-md-6 pr-1\">\n                        <div class=\"form-group\">\n                          <label>User Name</label>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n                        </div>\n                      </div> -->\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Email address</label>\n                          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" required>\n\n                          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                                  class=\"form-text text-muted\">\n                                <div *ngIf=\"email.errors?.required\">\n                                  Email is required.\n                                </div>\n                                <div *ngIf=\"email.errors?.email\">\n                                  Invalid email address.\n                                </div>\n                          </div>\n\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.email }}</small>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                          <label>Password</label>\n                          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" >\n\n                          <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                                  class=\"form-text text-muted\">\n\n                                <div *ngIf=\"password.errors?.minlength\">\n                                  Password must be at least 5 characters long.\n                                </div>\n                          </div>\n\n                          <small id=\"emailHelp\" class=\"form-text text-muted\" *ngIf=\"serverErrors\">{{ serverErrors.password }}</small>\n                          </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"row\">\n                      <div class=\"update ml-auto mr-auto\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!updateUser.valid\">Update</button>\n                      </div>\n                    </div>\n                  </form>\n              </div>\n            </div>\n          </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-index/user-index.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/payments/user-index/user-index.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-list/user-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/payments/user-list/user-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n          <h4 class=\"remove-margin\">Employee Payments </h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <!-- <div class=\"float-right\"> -->\r\n          <a routerLink=\"/payments/create\" class=\"btn btn-info btn-sm\">Add Payment</a>\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p-table #dt [value]=\"timeSheets\" dataKey=\"id\"\r\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[6,12]\" [loading]=\"loading\" styleClass=\"p-datatable-customers\"\r\n        [paginator]=\"false\"\r\n        [filterDelay]=\"0\" [globalFilterFields]=\"['amount','transferDate','confirmationNumber','paymentStatus']\">\r\n\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Hours</th>\r\n                <th>Amount</th>\r\n                <th>Transfer Date</th>\r\n                <th>Confirmation Number</th>\r\n                <th>Status</th>\r\n\r\n            </tr>\r\n\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-customer>\r\n            <tr>\r\n              <td>\r\n                {{customer.user_details.name}}\r\n              </td>\r\n              <td>\r\n                {{customer.hours}}\r\n              </td>\r\n              <td>\r\n                ${{customer.amount}}\r\n              </td>\r\n                <td>\r\n                    {{customer.transferDate | date}}\r\n                </td>\r\n                <td>\r\n                   {{customer.confirmationNumber}}\r\n                </td>\r\n                <td>\r\n                  {{customer.paymentStatus}}\r\n               </td>\r\n\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n                <td colspan=\"6\">No Payments found.</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-inplace >\r\n  <ng-template pTemplate=\"display\">\r\n      Click to Edit\r\n  </ng-template>\r\n  <ng-template pTemplate=\"content\">\r\n      <input type=\"text\" value=\"PrimeNG\" pInputText>\r\n  </ng-template>\r\n</p-inplace>\r\n"

/***/ }),

/***/ "./src/app/admin/payments/user-create/user-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/payments/user-create/user-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheW1lbnRzL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/payments/user-create/user-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/payments/user-create/user-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/payments/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
        this.users = [];
        this.disableBtn = false;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getUsers().subscribe(function (response) { console.log(_this.users = response.user); }, function (error) { console.log(error); });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'userId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'hours': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'transferDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'confirmationNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'paymentStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    Object.defineProperty(UserCreateComponent.prototype, "userId", {
        get: function () { return this.registerForm.get('userId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "amount", {
        get: function () { return this.registerForm.get('amount'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "hours", {
        get: function () { return this.registerForm.get('hours'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "transferDate", {
        get: function () { return this.registerForm.get('transferDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "paymentStatus", {
        get: function () { return this.registerForm.get('paymentStatus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserCreateComponent.prototype, "confirmationNumber", {
        get: function () { return this.registerForm.get('confirmationNumber'); },
        enumerable: true,
        configurable: true
    });
    UserCreateComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.registerForm);
        this.userRest.storePayment(this.registerForm).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['payments/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        });
    };
    UserCreateComponent.prototype.firstDropDownChanged = function () {
        var _this = this;
        if (this.registerForm.value.userId) {
            this.userRest.editUser(this.registerForm.value.userId).subscribe(function (response) {
                console.log(response.user);
                _this.rate = response.user.rate;
                _this.companyName = response.user.companyName;
            }, function (error) { return console.log(error); });
        }
        // console.log(this.selectedValue);
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/admin/payments/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/payments/user-edit/user-edit.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/payments/user-edit/user-edit.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheW1lbnRzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/payments/user-edit/user-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/payments/user-edit/user-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/payments/user-rest.service.ts");





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.serverErrors = [];
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.editUser(id).subscribe(function (response) {
            _this.updateUser.patchValue({
                'name': response.user.name,
                'email': response.user.email
            });
        }, function (error) { return console.log(error); });
        console.log(this.data);
        this.updateUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
    };
    Object.defineProperty(UserEditComponent.prototype, "name", {
        get: function () { return this.updateUser.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "email", {
        get: function () { return this.updateUser.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserEditComponent.prototype, "password", {
        get: function () { return this.updateUser.get('password'); },
        enumerable: true,
        configurable: true
    });
    UserEditComponent.prototype.updateUserDetails = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser, id).subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['users/list']);
        }, function (error) {
            _this.serverErrors = error.error.errors;
        }, function () { return console.log('completed'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEditComponent.prototype, "data", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/admin/payments/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_4__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/payments/user-index/user-index.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/payments/user-index/user-index.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheW1lbnRzL3VzZXItaW5kZXgvdXNlci1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/payments/user-index/user-index.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/payments/user-index/user-index.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/payments/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);





var UserIndexComponent = /** @class */ (function () {
    function UserIndexComponent(route, userRest, router) {
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.userList = [];
        this.timeSheets = [];
        this.loading = true;
    }
    UserIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getUsers().subscribe(function (response) { console.log(_this.userList = response.user); _this.loading = false; }, function (error) { console.log(error); });
    };
    UserIndexComponent.prototype.deleteUser = function (id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    UserIndexComponent.prototype.editUser = function (id) {
        this.router.navigate(['users/edit', id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"])
    ], UserIndexComponent.prototype, "table", void 0);
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! raw-loader!./user-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/admin/payments/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/payments/user-list/user-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/payments/user-list/user-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .p-cell-editing {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGF5bWVudHMvdXNlci1saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFx0aW1lc2hlZXRcXGFuZ3VsYXIvc3JjXFxhcHBcXGFkbWluXFxwYXltZW50c1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL3BheW1lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wYXltZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWNlbGwtZWRpdGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCAucC1jZWxsLWVkaXRpbmcge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/payments/user-list/user-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/payments/user-list/user-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-rest.service */ "./src/app/admin/payments/user-rest.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);







var colors = {
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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(fb, messageService, route, userRest, router) {
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.userRest = userRest;
        this.router = router;
        this.timeSheets = [];
        this.loading = true;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRest.getpayments().subscribe(function (response) { console.log(_this.timeSheets = response.timesheet); _this.loading = false; }, function (error) { console.log(error); });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        if (confirm("Are you sure to delete ")) {
            this.userRest.deleteUser(id).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    UserListComponent.prototype.editUser = function (id) {
        this.router.navigate(['users/edit', id]);
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
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/payments/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/payments/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _user_rest_service__WEBPACK_IMPORTED_MODULE_3__["UserRestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/payments/user-rest.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/payments/user-rest.service.ts ***!
  \*****************************************************/
/*! exports provided: UserRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRestService", function() { return UserRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserRestService = /** @class */ (function () {
    function UserRestService(http) {
        this.http = http;
        this.users = [];
    }
    UserRestService.prototype.getpayments = function () {
        return this.http.get('https://employees.webmobilez.com/public/api/payment-list');
    };
    UserRestService.prototype.getUsers = function () {
        return this.http.get('https://employees.webmobilez.com/public/api/user-list');
    };
    UserRestService.prototype.editUser = function (id) {
        return this.http.get('https://employees.webmobilez.com/public/api/user-list/' + id);
    };
    UserRestService.prototype.updateUser = function (form, id) {
        return this.http.put('https://employees.webmobilez.com/public/api/user-list/' + id, form.value);
    };
    UserRestService.prototype.storePayment = function (form) {
        return this.http.post('https://employees.webmobilez.com/public/api/payment-list', form.value);
    };
    UserRestService.prototype.storeUser = function (form) {
        return this.http.post('https://employees.webmobilez.com/public/api/user-list', form.value);
    };
    UserRestService.prototype.deleteUser = function (id) {
        return this.http.delete('https://employees.webmobilez.com/public/api/user-list/' + id);
    };
    UserRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserRestService);
    return UserRestService;
}());



/***/ }),

/***/ "./src/app/admin/payments/user-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/payments/user-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/payments/user-index/user-index.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/payments/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/payments/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/payments/user-list/user-list.component.ts");







var routes = [
    // { path: 'list', component: UserListComponent, outlet: 'users' },
    {
        path: '',
        component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"],
        children: [
            { path: 'create', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'edit/:id', component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["UserEditComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'delete', component: _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_3__["UserIndexComponent"], data: {
                    expectedRole: 'Admin'
                } },
            { path: 'list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], data: {
                    expectedRole: 'Admin'
                } }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/payments/user.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/payments/user.module.ts ***!
  \***********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/payments/user-routing.module.ts");
/* harmony import */ var _user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-index/user-index.component */ "./src/app/admin/payments/user-index/user-index.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/admin/payments/user-create/user-create.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/admin/payments/user-edit/user-edit.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/payments/user-list/user-list.component.ts");
/* harmony import */ var _user_rest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-rest.service */ "./src/app/admin/payments/user-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inplace */ "./node_modules/primeng/inplace.js");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_inplace__WEBPACK_IMPORTED_MODULE_25__);



























var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"]],
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
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_19__["TabMenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_23__["NgxDropzoneModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_25__["InplaceModule"]
            ],
            providers: [
                _user_rest_service__WEBPACK_IMPORTED_MODULE_8__["UserRestService"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-payments-user-module-es5.js.map