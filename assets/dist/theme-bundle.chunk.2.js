(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{364:function(e,t,i){"use strict";(function(e){var r=i(5),n=i(6),a=i(12);t.a=class{constructor(t){this.validator=Object(r.a)({submit:t.find('input[type="submit"]')}),this.$reviewsContent=e("#product-reviews"),this.$collapsible=e("[data-collapsible]",this.$reviewsContent),this.initLinkBind(),this.injectPaginationLink(),this.collapseReviews()}initLinkBind(){const t=e("#productReviews-content",this.$reviewsContent);e(".productView-reviewLink").on("click",()=>{e(".productView-reviewTabLink").trigger("click"),t.hasClass("is-open")||this.$collapsible.trigger(n.a.click)})}collapseReviews(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")||this.$collapsible.trigger(n.a.click)}injectPaginationLink(){const t=e(".pagination-item--next .pagination-link",this.$reviewsContent),i=e(".pagination-item--previous .pagination-link",this.$reviewsContent);t.length&&t.attr("href",`${t.attr("href")} #product-reviews`),i.length&&i.attr("href",`${i.attr("href")} #product-reviews`)}registerValidation(e){return this.context=e,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:"presence",errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:"presence",errorMessage:this.context.reviewComment},{selector:'.writeReview-form [name="email"]',validate:(e,t)=>{e(a.a.email(t))},errorMessage:this.context.reviewEmail}]),this.validator}validate(){return this.validator.performCheck()}}}).call(this,i(0))},365:function(e,t,i){"use strict";(function(e){i.d(t,"a",(function(){return n}));class r{constructor(e){this.$player=e.find("[data-video-player]"),this.$videos=e.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}selectNewVideo(t){t.preventDefault();const i=e(t.currentTarget);this.currentVideo={id:i.data("videoId"),$selectedThumb:i},this.setMainVideo(),this.setActiveThumb()}setMainVideo(){this.$player.attr("src",`//www.youtube.com/embed/${this.currentVideo.id}`)}setActiveThumb(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")}bindEvents(){this.$videos.on("click",this.selectNewVideo.bind(this))}}function n(){e("[data-video-gallery]").each((t,i)=>{const n=e(i);n.data("video-gallery")instanceof r||n.data("video-gallery",new r(n))})}}).call(this,i(0))},53:function(e,t,i){"use strict";i.r(t),function(e){i.d(t,"default",(function(){return l}));var r=i(11),n=i(364),a=i(6),s=i(21),o=i(365),c=i(19);class l extends r.a{constructor(t){super(t),this.url=window.location.href,this.$reviewLink=e('[data-reveal-id="modal-review-form"]'),this.$bulkPricingLink=e('[data-reveal-id="modal-bulk-pricing"]')}onReady(){let t;e(document).on("close.fndtn.reveal",()=>{-1!==this.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),Object(a.b)(),this.productDetails=new s.a(e(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),Object(o.a)();const i=Object(c.b)(".writeReview-form"),r=new n.a(i);e("body").on("click",'[data-reveal-id="modal-review-form"]',()=>{t=r.registerValidation(this.context)}),i.on("submit",()=>!!t&&(t.performCheck(),t.areAll("valid"))),this.productReviewHandler(),this.bulkPricingHandler()}productReviewHandler(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")}bulkPricingHandler(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")}}}.call(this,i(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.2.js.map
