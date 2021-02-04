<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/checkout.js":
/*!*************************************!*\
  !*** ./assets/js/theme/checkout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/checkout-sdk */ "./node_modules/@bigcommerce/checkout-sdk/dist/checkout-sdk.js");
/* harmony import */ var _bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_1__);



const service = Object(_bigcommerce_checkout_sdk__WEBPACK_IMPORTED_MODULE_1__["createCheckoutService"])();

class Checkout extends _page_manager__WEBPACK_IMPORTED_MODULE_0__["default"] {
	async onReady() {
		const state = await service.loadCheckout();
console.log(state.data.getCheckout());
	}
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2hlY2tvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDeUI7O0FBRWxFLGdCQUFnQix1RkFBcUI7O0FBRXRCLHVCQUF1QixxREFBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNoZWNrb3V0U2VydmljZSB9IGZyb20gJ0BiaWdjb21tZXJjZS9jaGVja291dC1zZGsnO1xyXG5cclxuY29uc3Qgc2VydmljZSA9IGNyZWF0ZUNoZWNrb3V0U2VydmljZSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tvdXQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcblx0YXN5bmMgb25SZWFkeSgpIHtcclxuXHRcdGNvbnN0IHN0YXRlID0gYXdhaXQgc2VydmljZS5sb2FkQ2hlY2tvdXQoKTtcclxuY29uc29sZS5sb2coc3RhdGUuZGF0YS5nZXRDaGVja291dCgpKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{71:function(t,e,c){"use strict";c.r(e),function(t){c.d(e,"default",(function(){return s}));var n=c(11),o=c(4),a=c(91);class s extends n.a{onReady(){Object(a.a)(this.context.urls);const e=this.context.compareRemoveMessage;t("body").on("click","[data-comparison-remove]",t=>{this.context.comparisons.length<=2&&(Object(o.c)(e),t.preventDefault())})}}}.call(this,c(0))},91:function(t,e,c){"use strict";(function(t){var n=c(2),o=c.n(n),a=c(4);function s(t,e,c){0!==t.length?(e.is("visible")||e.addClass("show"),e.attr("href",`${c.compare}/${t.join("/")}`),e.find("span.countPill").html(t.length)):e.removeClass("show")}e.a=function(e){let c=[];const n=t("a[data-compare-nav]");t("body").on("compareReset",()=>{const a=t("body").find('input[name="products[]"]:checked');c=a.length?o.a.map(a,t=>t.value):[],s(c,n,e)}),t("body").triggerHandler("compareReset"),t("body").on("click","[data-compare-id]",n=>{const o=n.currentTarget.value,a=t("a[data-compare-nav]");var r;n.currentTarget.checked?(r=o,c.push(r)):function(t,e){const c=t.indexOf(e);c>-1&&t.splice(c,1)}(c,o),s(c,a,e)}),t("body").on("submit","[data-product-compare]",e=>{t(e.currentTarget).find('input[name="products[]"]:checked').length<=1&&(Object(a.c)("You must select at least two products to compare"),e.preventDefault())}),t("body").on("click","a[data-compare-nav]",()=>{if(t("body").find('input[name="products[]"]:checked').length<=1)return Object(a.c)("You must select at least two products to compare"),!1})}}).call(this,c(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.13.js.map
>>>>>>> 44f31af017b7f2ab5f385252ef164cf06d8421dd
