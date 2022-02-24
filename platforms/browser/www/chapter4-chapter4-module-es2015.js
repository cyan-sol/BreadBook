(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chapter4-chapter4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter4/chapter4.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chapter4/chapter4.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Chapter 4 | Semi Finalem\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <img src=\"./assets/img/chapter4.jpg\">\n<p>  Sed elementum tincidunt mi, at dapibus ipsum aliquam eget. Pellentesque odio nulla, blandit eget elit sed, lacinia ornare velit. Aenean vulputate odio lorem. Cras pellentesque lacus et risus mattis, sed maximus magna viverra. Donec sodales eget erat et consectetur. Donec iaculis quam nec turpis varius vulputate. Nulla mattis arcu orci, et rutrum massa euismod vel. Donec consectetur mi sit amet mauris bibendum, id maximus quam malesuada. Nam finibus mattis ornare.\n\n  Nulla tempus ut tortor et egestas. Sed vulputate quam sem, a ultrices mauris sagittis at. Nam lacinia nisl quis metus pretium, at laoreet ex malesuada. Duis vel feugiat erat, vitae vehicula ipsum. Duis volutpat, sapien feugiat viverra pellentesque, ligula felis faucibus est, a luctus leo odio sit amet augue. Sed molestie venenatis odio at feugiat. Etiam in justo quis dolor congue semper eu ut magna.\n  \n  Phasellus et magna eu massa mattis commodo ut quis diam. In hac habitasse platea dictumst. In euismod egestas lorem, ut dapibus ipsum efficitur vitae. Proin magna lorem, elementum sed quam viverra, fringilla feugiat erat. Nullam egestas sodales cursus. Ut aliquam lorem augue, quis elementum diam tempus non. Vestibulum sodales leo quam, vestibulum rutrum lorem sodales ut. In commodo aliquam porta. Sed non tempus magna. In cursus ipsum lectus, ut semper dolor molestie quis. Nulla lacinia pretium ullamcorper. Morbi ipsum dolor, pellentesque eu diam pretium, tristique mattis metus.\n  \n  Mauris ac felis at felis dignissim venenatis nec vitae nisl. Mauris tristique eu tortor id finibus. Praesent sollicitudin mauris ipsum, sed dapibus nibh finibus a. Sed at tincidunt purus. Aliquam ut ullamcorper enim, a lobortis sem. Phasellus laoreet sagittis libero, vitae commodo diam sodales eget. Aenean eget lectus vitae augue dapibus pellentesque et id ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam erat eros, congue quis purus non, porttitor viverra nulla. Sed dictum dignissim imperdiet. Aliquam congue elit ligula, quis ultricies mi mollis ut. Nullam non eros lorem.\n  \n  Maecenas ornare ligula eu imperdiet volutpat. Aenean pulvinar risus eget nisi lacinia vulputate. Aenean vel volutpat turpis. Proin consectetur mauris eget sapien tempus, sed dictum diam varius. Vivamus eget justo tincidunt, volutpat justo at, eleifend nibh. In ut nisl tellus. Nunc non auctor velit, in egestas nisi. Sed nec lobortis turpis, ut maximus odio. Fusce convallis tellus at pharetra vestibulum. Integer eget viverra nisi, non cursus nibh. Curabitur malesuada quis ipsum sed vestibulum. Pellentesque ex magna, elementum id scelerisque id, aliquam non dui. Mauris lacinia orci libero, vel sollicitudin urna feugiat id. Integer mi risus, fringilla sed bibendum vitae, sollicitudin tincidunt sapien.\n</p>\n<ion-button color=\"light\" expand=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/chapter5']\">Next Page</ion-button>\n<ion-button color=\"medium\" expand=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/chapter3']\">Previous Page</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/chapter4/chapter4.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chapter4/chapter4.module.ts ***!
  \*********************************************/
/*! exports provided: Chapter4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter4PageModule", function() { return Chapter4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chapter4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chapter4.page */ "./src/app/chapter4/chapter4.page.ts");







const routes = [
    {
        path: '',
        component: _chapter4_page__WEBPACK_IMPORTED_MODULE_6__["Chapter4Page"]
    }
];
let Chapter4PageModule = class Chapter4PageModule {
};
Chapter4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chapter4_page__WEBPACK_IMPORTED_MODULE_6__["Chapter4Page"]]
    })
], Chapter4PageModule);



/***/ }),

/***/ "./src/app/chapter4/chapter4.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chapter4/chapter4.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-padding {\n  --padding: .1em;\n}\n\np {\n  font-family: Garamond, Georgia, \"Times New Roman\", Times, serif;\n  text-indent: 1.8em;\n  font-size: 16px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcHRlcjQvQzpcXFVzZXJzXFxqc2dyYVxcRGVza3RvcFxcRnVsbFN0YWNrV2ViXFxNb2JpbGUgQXBwcyBhbmQgUmVzcG9uc2l2ZSBEZXNpZ25cXE15Q29yZG92YUFwcHNcXEJyZWFkQm9vay9zcmNcXGFwcFxcY2hhcHRlcjRcXGNoYXB0ZXI0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhcHRlcjQvY2hhcHRlcjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2hhcHRlcjQvY2hhcHRlcjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nOiAuMWVtO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEuOGVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufSIsIi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZzogLjFlbTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBHYXJhbW9uZCwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWluZGVudDogMS44ZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chapter4/chapter4.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chapter4/chapter4.page.ts ***!
  \*******************************************/
/*! exports provided: Chapter4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter4Page", function() { return Chapter4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Chapter4Page = class Chapter4Page {
    constructor() { }
    ngOnInit() {
    }
};
Chapter4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chapter4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter4/chapter4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chapter4.page.scss */ "./src/app/chapter4/chapter4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Chapter4Page);



/***/ })

}]);
//# sourceMappingURL=chapter4-chapter4-module-es2015.js.map