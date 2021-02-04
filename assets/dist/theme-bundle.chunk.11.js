<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");





class Brand extends _catalog__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
        const productsPerPage = this.context.brandProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar',
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            showMore: 'brand/show-more',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7O0FBRXJDLG9CQUFvQixnREFBVztBQUM5QztBQUNBLFFBQVEsd0VBQWU7O0FBRXZCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLGdFQUFLO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQSxpQ0FBaUMsOERBQWE7QUFDOUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBicmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var o=a(11),s=a(89),r=a(87),i=a.n(r);class c extends o.a{onSortBySubmit(t){const a=i.a.parse(window.location.href,!0),o=e(t.currentTarget).serialize().split("=");a.query[o[0]]=o[1],delete a.query.page,t.preventDefault(),window.location=i.a.format({pathname:a.pathname,search:s.a.buildQueryString(a.query)})}}}).call(this,a(0))},103:function(e,t,a){"use strict";(function(e){var o=a(1),s=a(2),r=a.n(s),i=a(87),c=a.n(i),n=a(89),l=a(4),d=a(6),h=a(19),u=a(5);t.a=class{constructor(t,a,o){const s={accordionToggleSelector:"#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle",blockerSelector:"#facetedSearch .blocker",clearFacetSelector:"#facetedSearch .facetedSearch-clearLink",componentSelector:"#facetedSearch-navList",facetNavListSelector:"#facetedSearch .navList",priceRangeErrorSelector:"#facet-range-form .form-inlineMessage",priceRangeFieldsetSelector:"#facet-range-form .form-fieldset",priceRangeFormSelector:"#facet-range-form",priceRangeMaxPriceSelector:"#facet-range-form [name=max_price]",priceRangeMinPriceSelector:"#facet-range-form [name=min_price]",showMoreToggleSelector:"#facetedSearch .accordion-content .toggleLink",facetedSearchFilterItems:"#facetedSearch-filterItems .form-input",modal:Object(l.a)("#modal")[0],modalOpen:!1};this.requestOptions=t,this.callback=a,this.options=r.a.extend({},s,o),this.collapsedFacets=[],this.collapsedFacetItems=[],Object(d.b)(),this.initPriceValidator(),e(this.options.facetNavListSelector).each((t,a)=>{this.collapseFacetItems(e(a))}),e(this.options.accordionToggleSelector).each((t,a)=>{const o=e(a).data("collapsibleInstance");o.isCollapsed&&this.collapsedFacets.push(o.targetId)}),setTimeout(()=>{e(this.options.componentSelector).is(":hidden")&&this.collapseAllFacets()}),this.onStateChange=this.onStateChange.bind(this),this.onToggleClick=this.onToggleClick.bind(this),this.onAccordionToggle=this.onAccordionToggle.bind(this),this.onClearFacet=this.onClearFacet.bind(this),this.onFacetClick=this.onFacetClick.bind(this),this.onRangeSubmit=this.onRangeSubmit.bind(this),this.onSortBySubmit=this.onSortBySubmit.bind(this),this.filterFacetItems=this.filterFacetItems.bind(this),this.bindEvents()}refreshView(e){e&&this.callback(e),Object(d.b)(),this.initPriceValidator(),this.restoreCollapsedFacets(),this.restoreCollapsedFacetItems(),this.bindEvents()}updateView(){e(this.options.blockerSelector).show(),o.a.getPage(n.a.getUrl(),this.requestOptions,(t,a)=>{if(e(this.options.blockerSelector).hide(),t)throw new Error(t);this.refreshView(a)})}expandFacetItems(e){const t=e.attr("id");this.collapsedFacetItems=r.a.without(this.collapsedFacetItems,t)}collapseFacetItems(e){const t=e.attr("id"),a=e.data("hasMoreResults");this.collapsedFacetItems=a?r.a.union(this.collapsedFacetItems,[t]):r.a.without(this.collapsedFacetItems,t)}toggleFacetItems(e){const t=e.attr("id");return r.a.includes(this.collapsedFacetItems,t)?(this.getMoreFacetResults(e),!0):(this.collapseFacetItems(e),!1)}getMoreFacetResults(e){const t=e.data("facet"),a=n.a.getUrl();return this.requestOptions.showMore&&o.a.getPage(a,{template:this.requestOptions.showMore,params:{list_all:t}},(e,t)=>{if(e)throw new Error(e);this.options.modal.open(),this.options.modalOpen=!0,this.options.modal.updateContent(t)}),this.collapseFacetItems(e),!1}filterFacetItems(t){const a=e(".navList-item"),o=e(t.currentTarget).val().toLowerCase();a.each((t,a)=>{-1!==e(a).text().toLowerCase().indexOf(o)?e(a).show():e(a).hide()})}expandFacet(e){e.data("collapsibleInstance").open()}collapseFacet(e){e.data("collapsibleInstance").close()}collapseAllFacets(){e(this.options.accordionToggleSelector).each((t,a)=>{const o=e(a);this.collapseFacet(o)})}expandAllFacets(){e(this.options.accordionToggleSelector).each((t,a)=>{const o=e(a);this.expandFacet(o)})}initPriceValidator(){if(0===e(this.options.priceRangeFormSelector).length)return;const t=Object(u.a)(),a={errorSelector:this.options.priceRangeErrorSelector,fieldsetSelector:this.options.priceRangeFieldsetSelector,formSelector:this.options.priceRangeFormSelector,maxPriceSelector:this.options.priceRangeMaxPriceSelector,minPriceSelector:this.options.priceRangeMinPriceSelector};h.a.setMinMaxPriceValidation(t,a),this.priceRangeValidator=t}restoreCollapsedFacetItems(){e(this.options.facetNavListSelector).each((t,a)=>{const o=e(a),s=o.attr("id");r.a.includes(this.collapsedFacetItems,s)?this.collapseFacetItems(o):this.expandFacetItems(o)})}restoreCollapsedFacets(){e(this.options.accordionToggleSelector).each((t,a)=>{const o=e(a),s=o.data("collapsibleInstance").targetId;r.a.includes(this.collapsedFacets,s)?this.collapseFacet(o):this.expandFacet(o)})}bindEvents(){this.unbindEvents(),e(window).on("statechange",this.onStateChange),e(document).on("click",this.options.showMoreToggleSelector,this.onToggleClick),e(document).on("toggle.collapsible",this.options.accordionToggleSelector,this.onAccordionToggle),e(document).on("keyup",this.options.facetedSearchFilterItems,this.filterFacetItems),e(this.options.clearFacetSelector).on("click",this.onClearFacet),o.c.on("facetedSearch-facet-clicked",this.onFacetClick),o.c.on("facetedSearch-range-submitted",this.onRangeSubmit),o.c.on("sortBy-submitted",this.onSortBySubmit)}unbindEvents(){e(window).off("statechange",this.onStateChange),e(document).off("click",this.options.showMoreToggleSelector,this.onToggleClick),e(document).off("toggle.collapsible",this.options.accordionToggleSelector,this.onAccordionToggle),e(document).off("keyup",this.options.facetedSearchFilterItems,this.filterFacetItems),e(this.options.clearFacetSelector).off("click",this.onClearFacet),o.c.off("facetedSearch-facet-clicked",this.onFacetClick),o.c.off("facetedSearch-range-submitted",this.onRangeSubmit),o.c.off("sortBy-submitted",this.onSortBySubmit)}onClearFacet(t){const a=e(t.currentTarget).attr("href");t.preventDefault(),t.stopPropagation(),n.a.goToUrl(a)}onToggleClick(t){const a=e(t.currentTarget),o=e(a.attr("href"));t.preventDefault(),this.toggleFacetItems(o)}onFacetClick(t){const a=e(t.currentTarget),o=a.attr("href");t.preventDefault(),a.toggleClass("is-selected"),n.a.goToUrl(o),this.options.modalOpen&&this.options.modal.close()}onSortBySubmit(t){const a=c.a.parse(window.location.href,!0),o=e(t.currentTarget).serialize().split("=");a.query[o[0]]=o[1],delete a.query.page,t.preventDefault(),n.a.goToUrl(c.a.format({pathname:a.pathname,search:n.a.buildQueryString(a.query)}))}onRangeSubmit(t){if(t.preventDefault(),!this.priceRangeValidator.areAll(u.a.constants.VALID))return;const a=c.a.parse(window.location.href,!0);let o=decodeURI(e(t.currentTarget).serialize()).split("&");o=n.a.parseQueryParams(o);for(const e in o)o.hasOwnProperty(e)&&(a.query[e]=o[e]);n.a.goToUrl(c.a.format({pathname:a.pathname,search:n.a.buildQueryString(a.query)}))}onStateChange(){this.updateView()}onAccordionToggle(t){const a=e(t.currentTarget).data("collapsibleInstance"),o=a.targetId;a.isCollapsed?this.collapsedFacets=r.a.union(this.collapsedFacets,[o]):this.collapsedFacets=r.a.without(this.collapsedFacets,o)}}}).call(this,a(0))},73:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return u}));var o=a(1),s=a(102),r=a(103),i=a(91),c=a(89),n=a(87),l=a.n(n),d=a(6),h=(a(322),a(5));class u extends s.a{formatCategoryTreeForJSTree(e){const t={text:e.data,id:e.metadata.id,state:{selected:e.selected}};return e.state&&(t.state.opened="open"===e.state,t.children=!0),e.children&&(t.children=[],e.children.forEach(e=>{t.children.push(this.formatCategoryTreeForJSTree(e))})),t}showProducts(){const t=c.a.replaceParams(window.location.href,{section:"product"});this.$productListingContainer.removeClass("u-hiddenVisually"),this.$facetedSearchContainer.removeClass("u-hiddenVisually"),this.$contentResultsContainer.addClass("u-hiddenVisually"),e("[data-content-results-toggle]").removeClass("navBar-action-color--active"),e("[data-content-results-toggle]").addClass("navBar-action"),e("[data-product-results-toggle]").removeClass("navBar-action"),e("[data-product-results-toggle]").addClass("navBar-action-color--active"),c.a.goToUrl(t)}showContent(){const t=c.a.replaceParams(window.location.href,{section:"content"});this.$contentResultsContainer.removeClass("u-hiddenVisually"),this.$productListingContainer.addClass("u-hiddenVisually"),this.$facetedSearchContainer.addClass("u-hiddenVisually"),e("[data-product-results-toggle]").removeClass("navBar-action-color--active"),e("[data-product-results-toggle]").addClass("navBar-action"),e("[data-content-results-toggle]").removeClass("navBar-action"),e("[data-content-results-toggle]").addClass("navBar-action-color--active"),c.a.goToUrl(t)}onReady(){Object(i.a)(this.context.urls);const t=e("[data-advanced-search-form]"),a=t.find("[data-search-category-tree]"),s=l.a.parse(window.location.href,!0),r=[];this.$productListingContainer=e("#product-listing-container"),this.$facetedSearchContainer=e("#faceted-search-container"),this.$contentResultsContainer=e("#search-results-content"),e("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),o.c.on("sortBy-submitted",this.onSortBySubmit)),Object(d.b)(),e("[data-product-results-toggle]").on("click",e=>{e.preventDefault(),this.showProducts()}),e("[data-content-results-toggle]").on("click",e=>{e.preventDefault(),this.showContent()}),0===this.$productListingContainer.find("li.product").length||"content"===s.query.section?this.showContent():this.showProducts();const c=this.initValidation(t).bindValidation(t.find("#search_query_adv"));this.context.categoryTree.forEach(e=>{r.push(this.formatCategoryTreeForJSTree(e))}),this.categoryTreeData=r,this.createCategoryTree(a),t.on("submit",o=>{const s=a.jstree().get_selected();if(!c.check())return o.preventDefault();t.find('input[name="category[]"]').remove();for(const a of s){const o=e("<input>",{type:"hidden",name:"category[]",value:a});t.append(o)}})}loadTreeNodes(t,a){e.ajax({url:"/remote/v1/category-tree",data:{selectedCategoryId:t.id,prefix:"category"},headers:{"x-xsrf-token":window.BCData&&window.BCData.csrf_token?window.BCData.csrf_token:""}}).done(e=>{const t=[];e.forEach(e=>{t.push(this.formatCategoryTreeForJSTree(e))}),a(t)})}createCategoryTree(e){const t={core:{data:(e,t)=>{"#"===e.id?t(this.categoryTreeData):this.loadTreeNodes(e,t)},themes:{icons:!0}},checkbox:{three_state:!1},plugins:["checkbox"]};e.jstree(t)}initFacetedSearch(){const t=e("#product-listing-container"),a=e("#faceted-search-container"),o=e("#search-results-heading"),s=e("#search-results-product-count"),i={template:{productListing:"search/product-listing",sidebar:"search/sidebar",heading:"search/heading",productCount:"search/product-count"},config:{product_results:{limit:this.context.searchProductsPerPage}},showMore:"search/show-more"};this.facetedSearch=new r.a(i,r=>{t.html(r.productListing),a.html(r.sidebar),o.html(r.heading),s.html(r.productCount),e("body").triggerHandler("compareReset"),e("html, body").animate({scrollTop:0},100)})}initValidation(e){return this.$form=e,this.validator=Object(h.a)({submit:e}),this}bindValidation(e){return this.validator&&this.validator.add({selector:e,validate:"presence",errorMessage:e.data("errorMessage")}),this}check(){return!!this.validator&&(this.validator.performCheck(),this.validator.areAll("valid"))}}}.call(this,a(0))},89:function(e,t,a){"use strict";(function(e){var o=a(87),s=a.n(o);const r={getUrl:()=>`${window.location.pathname}${window.location.search}`,goToUrl:t=>{window.history.pushState({},document.title,t),e(window).trigger("statechange")},replaceParams:(e,t)=>{const a=s.a.parse(e,!0);let o;for(o in a.search=null,t)t.hasOwnProperty(o)&&(a.query[o]=t[o]);return s.a.format(a)},buildQueryString:e=>{let t,a="";for(t in e)if(e.hasOwnProperty(t))if(Array.isArray(e[t])){let o;for(o in e[t])e[t].hasOwnProperty(o)&&(a+=`&${t}=${e[t][o]}`)}else a+=`&${t}=${e[t]}`;return a.substring(1)},parseQueryParams:e=>{const t={};for(let a=0;a<e.length;a++){const o=e[a].split("=");o[0]in t?Array.isArray(t[o[0]])?t[o[0]].push(o[1]):t[o[0]]=[t[o[0]],o[1]]:t[o[0]]=o[1]}return t}};t.a=r}).call(this,a(0))},91:function(e,t,a){"use strict";(function(e){var o=a(2),s=a.n(o),r=a(4);function i(e,t,a){0!==e.length?(t.is("visible")||t.addClass("show"),t.attr("href",`${a.compare}/${e.join("/")}`),t.find("span.countPill").html(e.length)):t.removeClass("show")}t.a=function(t){let a=[];const o=e("a[data-compare-nav]");e("body").on("compareReset",()=>{const r=e("body").find('input[name="products[]"]:checked');a=r.length?s.a.map(r,e=>e.value):[],i(a,o,t)}),e("body").triggerHandler("compareReset"),e("body").on("click","[data-compare-id]",o=>{const s=o.currentTarget.value,r=e("a[data-compare-nav]");var c;o.currentTarget.checked?(c=s,a.push(c)):function(e,t){const a=e.indexOf(t);a>-1&&e.splice(a,1)}(a,s),i(a,r,t)}),e("body").on("submit","[data-product-compare]",t=>{e(t.currentTarget).find('input[name="products[]"]:checked').length<=1&&(Object(r.c)("You must select at least two products to compare"),t.preventDefault())}),e("body").on("click","a[data-compare-nav]",()=>{if(e("body").find('input[name="products[]"]:checked').length<=1)return Object(r.c)("You must select at least two products to compare"),!1})}}).call(this,a(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.11.js.map
>>>>>>> 44f31af017b7f2ab5f385252ef164cf06d8421dd
