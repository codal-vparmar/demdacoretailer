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