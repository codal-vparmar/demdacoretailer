<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");





class Category extends _catalog__WEBPACK_IMPORTED_MODULE_1__["default"] {
    onReady() {
        Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
        }
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7O0FBRXJDLHVCQUF1QixnREFBVztBQUNqRDtBQUNBLFFBQVEsd0VBQWU7O0FBRXZCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLGdFQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxpQ0FBaUMsOERBQWE7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(e,t,a){"use strict";(function(e){var r=a(1),o=a(2),i=a.n(o),s=a(19),n=a(4);t.a=function(t,a={},o,l){"function"==typeof o&&(l=o,o={}),e('select[data-field-type="Country"]').on("change",t=>{const d=e(t.currentTarget).val();""!==d&&r.b.api.country.getByName(d,(t,r)=>{if(t)return Object(n.c)(a.state_error),l(t);const d=e('[data-field-type="State"]');if(i.a.isEmpty(r.data.states)){const t=function(t){const a=i.a.transform(t.prop("attributes"),(e,t)=>{const a=e;return a[t.name]=t.value,a}),r={type:"text",id:a.id,"data-label":a["data-label"],class:"form-input",name:a.name,"data-field-type":a["data-field-type"]};t.replaceWith(e("<input />",r));const o=e('[data-field-type="State"]');return 0!==o.length&&(Object(s.c)(o),o.prev().find("small").hide()),o}(d);l(null,t)}else{const t=function(t,a){const r=i.a.transform(t.prop("attributes"),(e,t)=>{const a=e;return a[t.name]=t.value,a}),o={id:r.id,"data-label":r["data-label"],class:"form-select",name:r.name,"data-field-type":r["data-field-type"]};t.replaceWith(e("<select></select>",o));const s=e('[data-field-type="State"]'),n=e('[name*="FormFieldIsText"]');return 0!==n.length&&n.remove(),0===s.prev().find("small").length?s.prev().append(`<small>${a.required}</small>`):s.prev().find("small").show(),s}(d,a);!function(e,t,a){const r=[];r.push(`<option value="">${e.prefix}</option>`),i.a.isEmpty(t)||(i.a.each(e.states,e=>{a.useIdForStates?r.push(`<option value="${e.id}">${e.name}</option>`):r.push(`<option value="${e.name}">${e.name}</option>`)}),t.html(r.join(" ")))}(r.data,t,o),l(null,t)}})})}}).call(this,a(0))},129:function(e,t,a){"use strict";(function(e){function a(t){const a=t.data("validation"),r=[],o="#"+t.attr("id");if("datechooser"===a.type){const e=function(e,t){if(t.min_date&&t.max_date){const a=`Your chosen date must fall between ${t.min_date} and ${t.max_date}.`,r=e.attr("id"),o=t.min_date.split("-"),i=t.max_date.split("-"),s=new Date(o[0],o[1]-1,o[2]),n=new Date(i[0],i[1]-1,i[2]);return{selector:`#${r} select[data-label="year"]`,triggeredBy:`#${r} select:not([data-label="year"])`,validate:(t,a)=>{const r=Number(e.find('select[data-label="day"]').val()),o=Number(e.find('select[data-label="month"]').val())-1,i=Number(a),l=new Date(i,o,r);t(l>=s&&l<=n)},errorMessage:a}}}(t,a);e&&r.push(e)}else!a.required||"checkboxselect"!==a.type&&"radioselect"!==a.type?t.find("input, select, textarea").each((t,i)=>{const s=e(i),n=s.get(0).tagName,l=s.attr("name"),d=`${o} ${n}[name="${l}"]`;"numberonly"===a.type&&r.push(function(e,t){const a=`The value for ${e.label} must be between ${e.min} and ${e.max}.`,r=Number(e.min),o=Number(e.max);return{selector:`${t} input[name="${e.name}"]`,validate:(e,t)=>{const a=Number(t);e(a>=r&&a<=o)},errorMessage:a}}(a,o)),a.required&&r.push(function(e,t){return{selector:t,validate(e,t){e(t.length>0)},errorMessage:`The '${e.label}' field cannot be blank.`}}(a,d))}):r.push(function(t,a){const r=t.attr("id"),o=`#${r} input`;return{selector:`#${r} input:first-of-type`,triggeredBy:o,validate:t=>{let a=!1;e(o).each((e,t)=>{if(t.checked)return a=!0,!1}),t(a)},errorMessage:`The '${a.label}' field cannot be blank.`}}(t,a));return r}t.a=function(t){let r=[];return t.find("[data-validation]").each((t,o)=>{r=r.concat(a(e(o)))}),r}}).call(this,a(0))},66:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return d}));var r=a(11),o=a(101),i=a(5),s=a(129),n=a(12),l=a(19);class d extends r.a{constructor(e){super(e),this.formCreateSelector="form[data-create-account-form]"}registerLoginValidation(e){const t=n.a;this.loginValidator=Object(i.a)({submit:'.login-form input[type="submit"]'}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:(e,a)=>{e(t.email(a))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:(e,a)=>{e(t.password(a))},errorMessage:this.context.enterPass}]),e.on("submit",e=>{this.loginValidator.performCheck(),this.loginValidator.areAll("valid")||e.preventDefault()})}registerForgotPasswordValidation(e){this.forgotPasswordValidator=Object(i.a)({submit:'.forgot-password-form input[type="submit"]'}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:(e,t)=>{e(n.a.email(t))},errorMessage:this.context.useValidEmail}]),e.on("submit",e=>{this.forgotPasswordValidator.performCheck(),this.forgotPasswordValidator.areAll("valid")||e.preventDefault()})}registerNewPasswordValidation(){const t=Object(i.a)({submit:e('.new-password-form input[type="submit"]')}),a=e('.new-password-form input[name="password"]'),r=e('.new-password-form input[name="password_confirm"]');l.a.setPasswordValidation(t,a,r,this.passwordRequirements)}registerCreateAccountValidator(t){const a=Object(s.a)(t),r=Object(i.a)({submit:this.formCreateSelector+" input[type='submit']"}),n=e('[data-field-type="State"]'),d=this.formCreateSelector+" [data-field-type='EmailAddress']",c=e(d),u=this.formCreateSelector+" [data-field-type='Password']",m=e(u),p=this.formCreateSelector+" [data-field-type='ConfirmPassword']",f=e(p);if(r.add(a),n){let t;Object(o.a)(n,this.context,(a,o)=>{if(a)throw new Error(a);const i=e(o);"undefined"!==r.getStatus(n)&&r.remove(n),t&&r.remove(t),i.is("select")?(t=o,l.a.setStateCountryValidation(r,o)):l.a.cleanUpStateValidation(o)})}c&&(r.remove(d),l.a.setEmailValidation(r,d)),m&&f&&(r.remove(u),r.remove(p),l.a.setPasswordValidation(r,u,p,this.passwordRequirements)),t.on("submit",e=>{r.performCheck(),r.areAll("valid")||e.preventDefault()})}onReady(){const e=Object(l.b)(this.formCreateSelector),t=Object(l.b)(".login-form"),a=Object(l.b)(".forgot-password-form"),r=Object(l.b)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,t.length&&this.registerLoginValidation(t),r.length&&this.registerNewPasswordValidation(),a.length&&this.registerForgotPasswordValidation(a),e.length&&this.registerCreateAccountValidator(e)}}}.call(this,a(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.12.js.map
>>>>>>> 44f31af017b7f2ab5f385252ef164cf06d8421dd
