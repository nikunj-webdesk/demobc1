(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








var Cart =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not quality for min/max quantity

    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);

      _this5.$cartTotals.html(response.totals);

      _this5.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this5.bindEvents();

      _this5.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_3___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_3___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_3___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this9.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_7__["default"]($('[data-shipping-estimator]'));
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_4__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");









var ShippingEstimator =
/*#__PURE__*/
function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };

  return ShippingEstimator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");








/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_4___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_4___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    Object(_form_utils__WEBPACK_IMPORTED_MODULE_6__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_2___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });

    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
 // Set defaults for sweetalert2 popup boxes

sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
}); // Re-export

/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlV3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRIb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcmVwbGFjZUhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9iaW5kLmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJvblJlYWR5IiwiJGNhcnRDb250ZW50IiwiJCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRvdmVybGF5IiwiaGlkZSIsImJpbmRFdmVudHMiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidGV4dCIsInR5cGUiLCJzaG93IiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJjYXJ0UmVtb3ZlSXRlbSIsIml0ZW1SZW1vdmUiLCJjYXJ0RWRpdE9wdGlvbnMiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsInVwZGF0ZUNvbnRlbnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwiZXZlbnQiLCJvcHRpb24iLCIkY2hhbmdlZE9wdGlvbiIsIiRmb3JtIiwicGFyZW50cyIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIml0ZW0iLCJhdHRyIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsIiRjYXJ0SXRlbXNSb3dzIiwiJGNhcnRQYWdlVGl0bGUiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImxlbmd0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImJpbmRDYXJ0RXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwiY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwib25RdHlGb2N1cyIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsInRoZW4iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwiZ2lmdENlcnRDaGVjayIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpZCIsImluZGV4IiwiYWxsb3dNZXNzYWdlIiwiZmluZCIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJTaGlwcGluZ0VzdGltYXRvciIsIlBhZ2VNYW5hZ2VyIiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImNvbnRleHQiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsIlZhbGlkYXRvcnMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsImFkZENsYXNzIiwiY2VydCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJyZXQiLCJuYW1lIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiY2xhc3MiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJyZXF1aXJlZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHVzaCIsInByZWZpeCIsInN0YXRlcyIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImNvdW50cnkiLCJnZXRCeU5hbWUiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0FBQ04sU0FBS0MsWUFBTCxHQUFvQkMsQ0FBQyxDQUFDLHFCQUFELENBQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkQsQ0FBQyxDQUFDLG9CQUFELENBQXRCO0FBQ0EsU0FBS0UsV0FBTCxHQUFtQkYsQ0FBQyxDQUFDLG9CQUFELENBQXBCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkgsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FDWEksSUFEVyxFQUFoQixDQUpNLENBS087O0FBRWIsU0FBS0MsVUFBTDtBQUNILEc7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dEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEJBLGVBQWUsbUJBQU8sQ0FBQyx1REFBYTtBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYztBQUN0QyxxQkFBcUIsbUJBQU8sQ0FBQyxtRUFBbUI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsRUFBRTtBQUNiLFdBQVcsS0FBSztBQUNoQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUEiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG5cbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAoIW5ld1F0eSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZENhcnRFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGxldCBwcmVWYWw7XG5cbiAgICAgICAgLy8gY2FydCB1cGRhdGVcbiAgICAgICAgJCgnW2RhdGEtY2FydC11cGRhdGVdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZSgkdGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2FydCBxdHkgbWFudWFsbHkgdXBkYXRlc1xuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSkuY2hhbmdlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdDb3VudHJ5XFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsZSA9ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlVmFsID0gJGVsZS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBiZXR3ZWVuIGRlZmF1bHQgc2hpcHBpbmcgYW5kIHVwcyBzaGlwcGluZyByYXRlc1xuICAgICAqL1xuICAgIGJpbmRVUFNSYXRlcygpIHtcbiAgICAgICAgY29uc3QgVVBTUmF0ZVRvZ2dsZSA9ICcuZXN0aW1hdG9yLWZvcm0tdG9nZ2xlVVBTUmF0ZSc7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1VcHMgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLXVwcycpO1xuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybURlZmF1bHQudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcbiAgICAgICAgbGV0ICRsYXN0O1xuXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG4vKipcbiAqIElmIHRoZXJlIGFyZSBubyBvcHRpb25zIGZyb20gYmNhcHAsIGEgdGV4dCBmaWVsZCB3aWxsIGJlIHNlbnQuIFRoaXMgd2lsbCBjcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBob2xkIG9wdGlvbnMgYWZ0ZXIgdGhlIHJlbW90ZSByZXF1ZXN0LlxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlUmVxdWlyZWQoc3RhdGVFbGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8c2VsZWN0Pjwvc2VsZWN0PicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkKCdbbmFtZSo9XCJGb3JtRmllbGRJc1RleHRcIl0nKTtcblxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICRoaWRkZW5JbnB1dC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcbiAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc3dpdGNoIHRvIGFuIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSByZXF1aXJlZCBmaWVsZFxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBpZDogYXR0cnMuaWQsXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xuXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkbmV3RWxlbWVudCk7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlc0FycmF5XG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gW107XG5cbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xuXG4gICAgaWYgKCFfLmlzRW1wdHkoJHNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgIF8uZWFjaChzdGF0ZXNBcnJheS5zdGF0ZXMsIChzdGF0ZU9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmouaWR9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzKHtcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbiAgICBjYW5jZWxCdXR0b25DbGFzczogJ2J1dHRvbicsXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzd2VldEFsZXJ0O1xuIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGluc3RhbmNlIG9mIGBDdG9yYCByZWdhcmRsZXNzIG9mXG4gKiB3aGV0aGVyIGl0IHdhcyBpbnZva2VkIGFzIHBhcnQgb2YgYSBgbmV3YCBleHByZXNzaW9uIG9yIGJ5IGBjYWxsYCBvciBgYXBwbHlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDdG9yIFRoZSBjb25zdHJ1Y3RvciB0byB3cmFwLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgd3JhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3RvcihDdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAvLyBVc2UgYSBgc3dpdGNoYCBzdGF0ZW1lbnQgdG8gd29yayB3aXRoIGNsYXNzIGNvbnN0cnVjdG9ycy4gU2VlXG4gICAgLy8gaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1mdW5jdGlvbi1vYmplY3RzLWNhbGwtdGhpc2FyZ3VtZW50LWFyZ3VtZW50c2xpc3RcbiAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDdG9yO1xuICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSk7XG4gICAgICBjYXNlIDI6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICBjYXNlIDU6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0pO1xuICAgICAgY2FzZSA3OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSwgYXJnc1s2XSk7XG4gICAgfVxuICAgIHZhciB0aGlzQmluZGluZyA9IGJhc2VDcmVhdGUoQ3Rvci5wcm90b3R5cGUpLFxuICAgICAgICByZXN1bHQgPSBDdG9yLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzKTtcblxuICAgIC8vIE1pbWljIHRoZSBjb25zdHJ1Y3RvcidzIGByZXR1cm5gIGJlaGF2aW9yLlxuICAgIC8vIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxMy4yLjIgZm9yIG1vcmUgZGV0YWlscy5cbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IHRoaXNCaW5kaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUN0b3I7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIGNyZWF0ZUN0b3IgPSByZXF1aXJlKCcuL19jcmVhdGVDdG9yJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdyYXBzIGBmdW5jYCB0byBpbnZva2UgaXQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmdcbiAqIG9mIGB0aGlzQXJnYCBhbmQgYHBhcnRpYWxzYCBwcmVwZW5kZWQgdG8gdGhlIGFyZ3VtZW50cyBpdCByZWNlaXZlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGNyZWF0ZVdyYXBgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcnRpYWxzIFRoZSBhcmd1bWVudHMgdG8gcHJlcGVuZCB0byB0aG9zZSBwcm92aWRlZCB0b1xuICogIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQYXJ0aWFsKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gIHZhciBpc0JpbmQgPSBiaXRtYXNrICYgV1JBUF9CSU5EX0ZMQUcsXG4gICAgICBDdG9yID0gY3JlYXRlQ3RvcihmdW5jKTtcblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIHZhciBhcmdzSW5kZXggPSAtMSxcbiAgICAgICAgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGxlZnRJbmRleCA9IC0xLFxuICAgICAgICBsZWZ0TGVuZ3RoID0gcGFydGlhbHMubGVuZ3RoLFxuICAgICAgICBhcmdzID0gQXJyYXkobGVmdExlbmd0aCArIGFyZ3NMZW5ndGgpLFxuICAgICAgICBmbiA9ICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpID8gQ3RvciA6IGZ1bmM7XG5cbiAgICB3aGlsZSAoKytsZWZ0SW5kZXggPCBsZWZ0TGVuZ3RoKSB7XG4gICAgICBhcmdzW2xlZnRJbmRleF0gPSBwYXJ0aWFsc1tsZWZ0SW5kZXhdO1xuICAgIH1cbiAgICB3aGlsZSAoYXJnc0xlbmd0aC0tKSB7XG4gICAgICBhcmdzW2xlZnRJbmRleCsrXSA9IGFyZ3VtZW50c1srK2FyZ3NJbmRleF07XG4gICAgfVxuICAgIHJldHVybiBhcHBseShmbiwgaXNCaW5kID8gdGhpc0FyZyA6IHRoaXMsIGFyZ3MpO1xuICB9XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVBhcnRpYWw7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgY3JlYXRlV3JhcCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVdyYXAnKSxcbiAgICBnZXRIb2xkZXIgPSByZXF1aXJlKCcuL19nZXRIb2xkZXInKSxcbiAgICByZXBsYWNlSG9sZGVycyA9IHJlcXVpcmUoJy4vX3JlcGxhY2VIb2xkZXJzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMSxcbiAgICBXUkFQX1BBUlRJQUxfRkxBRyA9IDMyO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYFxuICogYW5kIGBwYXJ0aWFsc2AgcHJlcGVuZGVkIHRvIHRoZSBhcmd1bWVudHMgaXQgcmVjZWl2ZXMuXG4gKlxuICogVGhlIGBfLmJpbmQucGxhY2Vob2xkZXJgIHZhbHVlLCB3aGljaCBkZWZhdWx0cyB0byBgX2AgaW4gbW9ub2xpdGhpYyBidWlsZHMsXG4gKiBtYXkgYmUgdXNlZCBhcyBhIHBsYWNlaG9sZGVyIGZvciBwYXJ0aWFsbHkgYXBwbGllZCBhcmd1bWVudHMuXG4gKlxuICogKipOb3RlOioqIFVubGlrZSBuYXRpdmUgYEZ1bmN0aW9uI2JpbmRgLCB0aGlzIG1ldGhvZCBkb2Vzbid0IHNldCB0aGUgXCJsZW5ndGhcIlxuICogcHJvcGVydHkgb2YgYm91bmQgZnVuY3Rpb25zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmluZC5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHsuLi4qfSBbcGFydGlhbHNdIFRoZSBhcmd1bWVudHMgdG8gYmUgcGFydGlhbGx5IGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBib3VuZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gZ3JlZXQoZ3JlZXRpbmcsIHB1bmN0dWF0aW9uKSB7XG4gKiAgIHJldHVybiBncmVldGluZyArICcgJyArIHRoaXMudXNlciArIHB1bmN0dWF0aW9uO1xuICogfVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogdmFyIGJvdW5kID0gXy5iaW5kKGdyZWV0LCBvYmplY3QsICdoaScpO1xuICogYm91bmQoJyEnKTtcbiAqIC8vID0+ICdoaSBmcmVkISdcbiAqXG4gKiAvLyBCb3VuZCB3aXRoIHBsYWNlaG9sZGVycy5cbiAqIHZhciBib3VuZCA9IF8uYmluZChncmVldCwgb2JqZWN0LCBfLCAnIScpO1xuICogYm91bmQoJ2hpJyk7XG4gKiAvLyA9PiAnaGkgZnJlZCEnXG4gKi9cbnZhciBiaW5kID0gYmFzZVJlc3QoZnVuY3Rpb24oZnVuYywgdGhpc0FyZywgcGFydGlhbHMpIHtcbiAgdmFyIGJpdG1hc2sgPSBXUkFQX0JJTkRfRkxBRztcbiAgaWYgKHBhcnRpYWxzLmxlbmd0aCkge1xuICAgIHZhciBob2xkZXJzID0gcmVwbGFjZUhvbGRlcnMocGFydGlhbHMsIGdldEhvbGRlcihiaW5kKSk7XG4gICAgYml0bWFzayB8PSBXUkFQX1BBUlRJQUxfRkxBRztcbiAgfVxuICByZXR1cm4gY3JlYXRlV3JhcChmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscywgaG9sZGVycyk7XG59KTtcblxuLy8gQXNzaWduIGRlZmF1bHQgcGxhY2Vob2xkZXJzLlxuYmluZC5wbGFjZWhvbGRlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9
