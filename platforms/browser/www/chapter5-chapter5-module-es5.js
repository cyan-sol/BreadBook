function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chapter5-chapter5-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter5/chapter5.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chapter5/chapter5.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChapter5Chapter5PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Chapter 5 | Terminus\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <img src=\"./assets/img/chapter5.jpg\">\n<p>  Donec placerat volutpat tellus vitae egestas. In erat justo, vulputate quis lorem id, lobortis condimentum lacus. Integer mollis sapien a eros suscipit, sit amet condimentum felis mattis. Suspendisse vel lectus efficitur, imperdiet nibh sit amet, lobortis ante. Maecenas fringilla, nulla mattis tempor vulputate, metus nulla malesuada ante, quis ultricies ante metus at augue. Praesent nec rhoncus enim, ut vestibulum ipsum. Curabitur finibus lectus at neque sagittis, et viverra massa lacinia. Maecenas nisl ex, euismod sed quam nec, laoreet rhoncus magna. Donec metus nisl, feugiat malesuada dictum eget, aliquam non elit. Suspendisse auctor tincidunt magna eget venenatis. Ut id tempus elit.\n\n  Suspendisse sed lorem massa. Vivamus ac elit purus. Duis vestibulum in quam nec faucibus. Fusce id mattis sem, ut luctus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vestibulum mi quis metus bibendum, sed egestas orci dapibus. Vivamus arcu elit, aliquet vitae viverra sit amet, suscipit eget leo. Mauris accumsan, enim molestie laoreet posuere, felis odio sagittis est, et pharetra sapien magna vitae est. Proin elit tellus, maximus in tempus vitae, tempus quis nunc. Aenean congue gravida neque a consequat. Nam rutrum vitae sem sed imperdiet. Duis consectetur interdum quam, in dapibus sem consequat eu. Nulla orci justo, auctor a sem vel, aliquam maximus quam. Nullam nisl felis, finibus sit amet finibus eget, mattis ut mi. Nullam ac quam ut nunc suscipit dignissim. In hac habitasse platea dictumst.\n  \n  Phasellus bibendum lorem eget erat venenatis, ut gravida odio faucibus. Quisque consectetur nisl mi, eget condimentum eros convallis eu. Ut at feugiat diam. Curabitur luctus blandit posuere. Cras a ligula eu lacus eleifend placerat eget sed augue. Morbi vel sollicitudin orci. Maecenas feugiat sem non risus pellentesque, in lacinia sapien finibus. Aenean sagittis, nibh in placerat rhoncus, ligula nibh lobortis eros, quis fringilla lorem neque sit amet turpis. Proin tincidunt semper sem, non vulputate ipsum cursus ut. Maecenas magna arcu, tincidunt in euismod sit amet, tristique quis elit. Sed facilisis ornare odio, viverra porttitor velit malesuada eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur feugiat nibh vel dui suscipit, in rhoncus tortor placerat.\n</p>\n\n<ion-button color=\"medium\" expand=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/chapter4']\">Previous Page</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/chapter5/chapter5.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chapter5/chapter5.module.ts ***!
    \*********************************************/

  /*! exports provided: Chapter5PageModule */

  /***/
  function srcAppChapter5Chapter5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chapter5PageModule", function () {
      return Chapter5PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _chapter5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chapter5.page */
    "./src/app/chapter5/chapter5.page.ts");

    var routes = [{
      path: '',
      component: _chapter5_page__WEBPACK_IMPORTED_MODULE_6__["Chapter5Page"]
    }];

    var Chapter5PageModule = function Chapter5PageModule() {
      _classCallCheck(this, Chapter5PageModule);
    };

    Chapter5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_chapter5_page__WEBPACK_IMPORTED_MODULE_6__["Chapter5Page"]]
    })], Chapter5PageModule);
    /***/
  },

  /***/
  "./src/app/chapter5/chapter5.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/chapter5/chapter5.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChapter5Chapter5PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-padding {\n  --padding: .1em;\n}\n\np {\n  font-family: Garamond, Georgia, \"Times New Roman\", Times, serif;\n  text-indent: 1.8em;\n  font-size: 16px;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcHRlcjUvQzpcXFVzZXJzXFxqc2dyYVxcRGVza3RvcFxcRnVsbFN0YWNrV2ViXFxNb2JpbGUgQXBwcyBhbmQgUmVzcG9uc2l2ZSBEZXNpZ25cXE15Q29yZG92YUFwcHNcXEJyZWFkQm9vay9zcmNcXGFwcFxcY2hhcHRlcjVcXGNoYXB0ZXI1LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhcHRlcjUvY2hhcHRlcjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY2hhcHRlcjUvY2hhcHRlcjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wYWRkaW5ne1xyXG4gICAgLS1wYWRkaW5nOiAuMWVtO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IEdhcmFtb25kLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDEuOGVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxufSIsIi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZzogLjFlbTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBHYXJhbW9uZCwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWluZGVudDogMS44ZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chapter5/chapter5.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/chapter5/chapter5.page.ts ***!
    \*******************************************/

  /*! exports provided: Chapter5Page */

  /***/
  function srcAppChapter5Chapter5PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Chapter5Page", function () {
      return Chapter5Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Chapter5Page = /*#__PURE__*/function () {
      function Chapter5Page() {
        _classCallCheck(this, Chapter5Page);
      }

      _createClass(Chapter5Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Chapter5Page;
    }();

    Chapter5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chapter5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chapter5.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chapter5/chapter5.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chapter5.page.scss */
      "./src/app/chapter5/chapter5.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Chapter5Page);
    /***/
  }
}]);
//# sourceMappingURL=chapter5-chapter5-module-es5.js.map