(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chapter2-chapter2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Chapter 2 | Secundus\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  \n  <img src=\"./assets/img/chapter2.jpg\">\n<p>  Ut vel lacinia sem. Integer ut ex id lacus pretium hendrerit. Vivamus interdum, quam id fringilla pretium, est felis laoreet ante, mattis varius quam ex id ex. Donec pellentesque lectus viverra augue accumsan, ut dignissim nisi fringilla. Donec suscipit ipsum sit amet arcu fermentum, et dapibus urna accumsan. Sed semper erat risus, et scelerisque dui congue eget. Pellentesque a consequat erat, non vestibulum diam. Mauris ante nibh, euismod semper lobortis at, ultrices et purus. Nullam tristique nunc id lorem condimentum aliquam. Duis sed leo vehicula, bibendum tellus at, luctus turpis. Suspendisse potenti. Etiam in dapibus enim. Phasellus porttitor magna id hendrerit laoreet.\n\n  Sed nibh ligula, consequat et euismod ut, mollis a ante. Sed non nulla in dolor placerat convallis vel non ex. Praesent at volutpat quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam non nulla et ipsum gravida gravida. Ut ac porta mauris, eu sagittis risus. Curabitur nec tellus mauris. Aliquam vel purus pellentesque, ullamcorper diam eget, luctus urna. Pellentesque tristique eget lacus elementum faucibus. Nulla luctus, risus a rutrum bibendum, sem erat ultrices ipsum, ut rutrum mi sapien nec leo. Quisque sed diam sit amet magna imperdiet suscipit. Morbi convallis nisl risus, eget viverra enim cursus id.\n  \n  Maecenas id arcu sed velit euismod dignissim a sit amet erat. Donec ac enim in magna tincidunt dictum. Nullam at facilisis erat. Phasellus hendrerit sit amet nisl porttitor faucibus. Donec porta tortor nec bibendum ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a commodo urna. Mauris malesuada nisi dolor. Quisque gravida ex enim, eu commodo tellus tempor ut. Nullam malesuada accumsan ante ac dapibus.\n  \n  Etiam vulputate in eros id placerat. Vestibulum at maximus risus. Maecenas porttitor est nec ex dictum, quis ultricies neque mattis. Donec rutrum cursus ante sed luctus. Proin ut facilisis arcu. Suspendisse efficitur mauris quis magna dapibus, nec imperdiet orci suscipit. Aliquam hendrerit convallis arcu a vehicula. Praesent quis vehicula sapien. Vestibulum volutpat, lectus id sodales fringilla, urna neque pretium urna, vel molestie eros massa sed mi.\n</p>\n<ion-button color=\"light\" expand=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/chapter3']\">Next Page</ion-button>\n<ion-button color=\"medium\" expand=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/chapter1']\">Previous Page</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/chapter2/chapter2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chapter2/chapter2.module.ts ***!
  \*********************************************/
/*! exports provided: Chapter2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter2PageModule", function() { return Chapter2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chapter2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chapter2.page */ "./src/app/chapter2/chapter2.page.ts");







const routes = [
    {
        path: '',
        component: _chapter2_page__WEBPACK_IMPORTED_MODULE_6__["Chapter2Page"]
    }
];
let Chapter2PageModule = class Chapter2PageModule {
};
Chapter2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chapter2_page__WEBPACK_IMPORTED_MODULE_6__["Chapter2Page"]]
    })
], Chapter2PageModule);



/***/ }),

/***/ "./src/app/chapter2/chapter2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chapter2/chapter2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-padding {\n  --padding: .1em;\n}\n\np {\n  font-family: Garamond, Georgia, \"Times New Roman\", Times, serif;\n  text-indent: 1.8em;\n  font-size: 16px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcHRlcjIvQzpcXFVzZXJzXFxqc2dyYVxcRGVza3RvcFxcRnVsbFN0YWNrV2ViXFxNb2JpbGUgQXBwcyBhbmQgUmVzcG9uc2l2ZSBEZXNpZ25cXE15Q29yZG92YUFwcHNcXEJyZWFkQm9vay9zcmNcXGFwcFxcY2hhcHRlcjJcXGNoYXB0ZXIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhcHRlcjIvY2hhcHRlcjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2hhcHRlcjIvY2hhcHRlcjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nOiAuMWVtO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEuOGVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufSIsIi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZzogLjFlbTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBHYXJhbW9uZCwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWluZGVudDogMS44ZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chapter2/chapter2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chapter2/chapter2.page.ts ***!
  \*******************************************/
/*! exports provided: Chapter2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter2Page", function() { return Chapter2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Chapter2Page = class Chapter2Page {
    constructor() { }
    ngOnInit() {
    }
};
Chapter2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chapter2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter2/chapter2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chapter2.page.scss */ "./src/app/chapter2/chapter2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Chapter2Page);



/***/ })

}]);
//# sourceMappingURL=chapter2-chapter2-module-es2015.js.map