(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var Account =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_7__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_10__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
          text: _this2.context.selectItem,
          type: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
        text: errorMessage,
        type: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_9__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_11__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\""); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_4___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_11__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_12__["default"])({
            text: _this3.context.generic_error,
            type: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_8__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setEmailValidation(editValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_6__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);





/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */


function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_2___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vc3RhdGUtY291bnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0LmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJjb250ZXh0IiwiJHN0YXRlIiwiJCIsIiRib2R5Iiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsImxlbmd0aCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwib24iLCJsZWZ0Iiwid2luZG93Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0IiwidXJsIiwiZGF0YSIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJldmVudCIsIm1lc3NhZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY29uZmlybSIsInByZXZlbnREZWZhdWx0IiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJmaW5kIiwicmVtb3ZlIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsInN3YWwiLCJ0ZXh0Iiwic2VsZWN0SXRlbSIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiYXR0ciIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJ0YXJnZXQiLCJjcmVkaXRDYXJkVHlwZSIsInNpYmxpbmdzIiwiY3NzIiwiQ0NWYWxpZGF0b3JzIiwic2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24iLCJjcmVkaXRDYXJkTnVtYmVyIiwic2V0RXhwaXJhdGlvblZhbGlkYXRpb24iLCJleHBpcmF0aW9uIiwic2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24iLCJuYW1lT25DYXJkIiwic2V0Q3Z2VmFsaWRhdGlvbiIsImN2diIsIkNDRm9ybWF0dGVycyIsInNldENyZWRpdENhcmROdW1iZXJGb3JtYXQiLCJzZXRFeHBpcmF0aW9uRm9ybWF0Iiwic2VyaWFsaXplQXJyYXkiLCJvYmoiLCJpdGVtIiwicmVmT2JqIiwiY291bnRyeSIsImNvdW50cmllcyIsInN0YXRlIiwic3RhdGVzIiwiY291bnRyeV9jb2RlIiwiY29kZSIsInN0YXRlX29yX3Byb3ZpbmNlX2NvZGUiLCJkZWZhdWx0X2luc3RydW1lbnQiLCJzdG9yZUluc3RydW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXltZW50TWV0aG9kc1VybCIsImdlbmVyaWNfZXJyb3IiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbmJveFZhbGlkYXRvciIsIk51bWJlciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJQYWdlTWFuYWdlciIsImJ1aWxkRGF0ZVZhbGlkYXRpb24iLCIkZm9ybUZpZWxkIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInRyaWdnZXJlZEJ5IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiY2hvc2VuRGF0ZSIsImJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24iLCJmb3JtRmllbGRJZCIsInByaW1hcnlTZWxlY3RvciIsInNlY29uZGFyeVNlbGVjdG9yIiwiY2hlY2tib3giLCJjaGVja2VkIiwibGFiZWwiLCJidWlsZFJlcXVpcmVkVmFsaWRhdGlvbiIsImJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uIiwiZm9ybUZpZWxkU2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJudW1iZXJWYWwiLCJidWlsZFZhbGlkYXRpb24iLCIkdmFsaWRhdGVhYmxlRWxlbWVudCIsImZpZWxkVmFsaWRhdGlvbnMiLCJkYXRlVmFsaWRhdGlvbiIsInB1c2giLCJyZXF1aXJlZCIsImVsZW1lbnQiLCIkaW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImdldCIsImlucHV0TmFtZSIsImVsZW1lbnRTZWxlY3RvciIsIiRmb3JtIiwidmFsaWRhdGlvbnNUb1BlcmZvcm0iLCJpbnB1dCIsImNvbmNhdCIsIm9taXROdWxsU3RyaW5nIiwia2V5IiwiY3JlZGl0Y2FyZHMiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInBheW1lbnRzVXJsIiwic2hvcHBlcklkIiwic3RvcmVIYXNoIiwidmF1bHRUb2tlbiIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJhamF4IiwiZGF0YVR5cGUiLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJleHBpcnlfeWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsInByb3AiLCJyZXQiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJpZCIsImNsYXNzIiwicmVwbGFjZVdpdGgiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJzaG93IiwibWFrZVN0YXRlT3B0aW9uYWwiLCJoaWRlIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJvcHRpb25zIiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVPYmoiLCJ1c2VJZEZvclN0YXRlcyIsImh0bWwiLCJqb2luIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsInV0aWxzIiwiYXBpIiwiZ2V0QnlOYW1lIiwicmVzcG9uc2UiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUVBLFVBQUtDLE1BQUwsR0FBY0MsQ0FBQyxDQUFDLDJCQUFELENBQWY7QUFDQSxVQUFLQyxLQUFMLEdBQWFELENBQUMsQ0FBQyxNQUFELENBQWQ7QUFKaUI7QUFL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Y0FBYyxHQUFHakIsaUJBQWlCLENBQUNpQyxhQUFELEVBQWdCaFMsT0FBaEIsQ0FBeEM7QUFFQThRLGtCQUFVLENBQUNlLFFBQVEsQ0FBQ2pRLElBQVYsRUFBZ0JvUCxjQUFoQixFQUFnQ0MsT0FBaEMsQ0FBVjtBQUNBTyxnQkFBUSxDQUFDLElBQUQsRUFBT1IsY0FBUCxDQUFSO0FBQ0gsT0FORCxNQU1PO0FBQ0gsWUFBTWlCLFVBQVUsR0FBR3JCLGlCQUFpQixDQUFDb0IsYUFBRCxFQUFnQmhTLE9BQWhCLENBQXBDO0FBRUF3UixnQkFBUSxDQUFDLElBQUQsRUFBT1MsVUFBUCxDQUFSO0FBQ0g7QUFDSixLQW5CRDtBQW9CSCxHQTNCRDtBQTRCSCxDOzs7Ozs7Ozs7Ozs7O0FDdEpEO0FBQUE7QUFBQTtDQUVBOztBQUNBQyxrREFBVSxDQUFDQyxXQUFYLENBQXVCO0FBQ25CQyxnQkFBYyxFQUFFLEtBREc7QUFFbkJDLG9CQUFrQixFQUFFLFFBRkQ7QUFHbkJDLG1CQUFpQixFQUFFO0FBSEEsQ0FBdkIsRSxDQU1BOztBQUNlSixpSEFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSwgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkZWRpdEFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGluYm94Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWluYm94LWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRhY2NvdW50UmV0dXJuRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZXR1cm4tZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJHJlb3JkZXJGb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGludm9pY2VCdXR0b24gPSAkKCdbZGF0YS1wcmludC1pbnZvaWNlXScpO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXG4gICAgICovXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xuXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2QoeyBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XG5cbiAgICAgICAgbGV0ICRsYXN0O1xuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJgKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJgKTtcblxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XG5cbi8qKlxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3Qgb21pdE51bGxTdHJpbmcgPSBvYmogPT4ge1xuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcblxuICAgICQuZWFjaChyZWZPYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZk9iajtcbn07XG5cbi8qKlxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgYm9keVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxuICAgIHBheW1lbnRzVXJsLFxuICAgIHNob3BwZXJJZCxcbiAgICBzdG9yZUhhc2gsXG4gICAgdmF1bHRUb2tlbixcbn0sIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIC8vIFByb3ZpZGVyIEluZm9cbiAgICBwcm92aWRlcl9pZCxcbiAgICBjdXJyZW5jeV9jb2RlLFxuXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxuICAgIGV4cGlyYXRpb24sXG4gICAgbmFtZV9vbl9jYXJkLFxuICAgIGN2dixcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXG5cbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcbiAgICBhZGRyZXNzMSxcbiAgICBhZGRyZXNzMixcbiAgICBjaXR5LFxuICAgIHBvc3RhbF9jb2RlLFxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgY291bnRyeV9jb2RlLFxuICAgIGNvbXBhbnksXG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmUsXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSwgZG9uZSwgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgICAgICAuZG9uZShkb25lKVxuICAgICAgICAuZmFpbChmYWlsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IDggJiYgLy4qKFxcLykkLy50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzEtOV1cXC98WzItOV0pJC9nLCAnMCQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pKFswLTldezJ9KSQvZywgJyQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcnkgPSB2YWwuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgbmFtZSBvbiBjYXJkXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge2FueX0gY2FyZFR5cGUgVGhlIGNyZWRpdCBjYXJkIG51bWJlciB0eXBlXG4gICAgICovXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgc3dlZXRBbGVydCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbi8vIFNldCBkZWZhdWx0cyBmb3Igc3dlZXRhbGVydDIgcG9wdXAgYm94ZXNcbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMoe1xuICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICBjb25maXJtQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxuICAgIGNhbmNlbEJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbn0pO1xuXG4vLyBSZS1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IHN3ZWV0QWxlcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9
