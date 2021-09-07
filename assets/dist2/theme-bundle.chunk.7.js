(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }








var Auth =
/*#__PURE__*/
function (_PageManager) {
  _inheritsLoose(Auth, _PageManager);

  function Auth(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.formCreateSelector = 'form[data-create-account-form]';
    return _this;
  }

  var _proto = Auth.prototype;

  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;

    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]'
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();

      if (_this2.loginValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;

    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]'
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();

      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]")
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements);
  };

  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm);
    var createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']"
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }

        if ($last) {
          createAccountValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setStateCountryValidation(createAccountValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setEmailValidation(createAccountValidator, emailSelector);
    }

    if ($passwordElement && $password2Element) {
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_5__["Validators"].setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements);
    }

    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();

      if (createAccountValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  }
  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */
  ;

  _proto.onReady = function onReady() {
    var $createAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.new-password-form'); // reset password
    // Injected via auth.html

    this.passwordRequirements = this.context.passwordRequirements;

    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }

    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }

    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }

    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };

  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


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

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RyYW5zZm9ybS5qcyJdLCJuYW1lcyI6WyJBdXRoIiwiY29udGV4dCIsImZvcm1DcmVhdGVTZWxlY3RvciIsInJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uIiwiJGxvZ2luRm9ybSIsImxvZ2luTW9kZWwiLCJmb3JtcyIsImxvZ2luVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJ1c2VWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJlbnRlclBhc3MiLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbiIsIiRmb3Jnb3RQYXNzd29yZEZvcm0iLCJmb3Jnb3RQYXNzd29yZFZhbGlkYXRvciIsInJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uIiwibmV3UGFzc3dvcmRGb3JtIiwibmV3UGFzc3dvcmRWYWxpZGF0b3IiLCIkIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwicmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJGNyZWF0ZUFjY291bnRGb3JtIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsImNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkc3RhdGVFbGVtZW50IiwiZW1haWxTZWxlY3RvciIsIiRlbWFpbEVsZW1lbnQiLCIkcGFzc3dvcmRFbGVtZW50IiwiJHBhc3N3b3JkMkVsZW1lbnQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJyZW1vdmUiLCJpcyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwic2V0RW1haWxWYWxpZGF0aW9uIiwib25SZWFkeSIsImNsYXNzaWZ5Rm9ybSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiLCJQYWdlTWFuYWdlciIsImJ1aWxkRGF0ZVZhbGlkYXRpb24iLCIkZm9ybUZpZWxkIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsImF0dHIiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJ0cmlnZ2VyZWRCeSIsImRheSIsIk51bWJlciIsImZpbmQiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJlYWNoIiwiaW5kZXgiLCJjaGVja2JveCIsImNoZWNrZWQiLCJsYWJlbCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsIm1pbiIsIm1heCIsIm5hbWUiLCJudW1iZXJWYWwiLCJidWlsZFZhbGlkYXRpb24iLCIkdmFsaWRhdGVhYmxlRWxlbWVudCIsImRhdGEiLCJmaWVsZFZhbGlkYXRpb25zIiwidHlwZSIsImRhdGVWYWxpZGF0aW9uIiwicHVzaCIsInJlcXVpcmVkIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJ2YWxpZGF0aW9uc1RvUGVyZm9ybSIsImlucHV0IiwiY29uY2F0IiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsInByb3AiLCJpdGVtIiwicmV0IiwidmFsdWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJpZCIsImNsYXNzIiwicmVwbGFjZVdpdGgiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJzaG93IiwibWFrZVN0YXRlT3B0aW9uYWwiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiaGlkZSIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50Iiwib3B0aW9ucyIsImNvbnRhaW5lciIsInByZWZpeCIsInN0YXRlcyIsInN0YXRlT2JqIiwidXNlSWRGb3JTdGF0ZXMiLCJodG1sIiwiam9pbiIsImNhbGxiYWNrIiwiY291bnRyeU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidXRpbHMiLCJhcGkiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwicmVzcG9uc2UiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVx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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLElBQUksSUFBSTtBQUNSLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNyZWF0ZS1hY2NvdW50LWZvcm1dJztcbiAgICB9XG5cbiAgICByZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGxvZ2luTW9kZWwgPSBmb3JtcztcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX3Bhc3NcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyUGFzcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRsb2dpbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSkge1xuICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmZvcmdvdC1wYXNzd29yZC1mb3JtIGlucHV0W25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZm9yZ290UGFzc3dvcmRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBuZXdQYXNzd29yZEZvcm0gPSAnLm5ldy1wYXNzd29yZC1mb3JtJztcbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWApLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl1gKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1cIl1gKTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkVmFsaWRhdG9yLFxuICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGNyZWF0ZUFjY291bnRGb3JtKTtcbiAgICAgICAgY29uc3QgY3JlYXRlQWNjb3VudFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBpbnB1dFt0eXBlPSdzdWJtaXQnXWAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nRW1haWxBZGRyZXNzJ11gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcblxuICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZmllbGQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRjcmVhdGVBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGlzIG1hZGUgaW4gdGhpcyBmdW5jdGlvbiB0byB0aGUgcmVtb3RlIGVuZHBvaW50IGFuZCBwdWxscyBiYWNrIHRoZSBzdGF0ZXMgZm9yIGNvdW50cnkuXG4gICAgICovXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGNyZWF0ZUFjY291bnRGb3JtID0gY2xhc3NpZnlGb3JtKHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgJGxvZ2luRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmxvZ2luLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGZvcmdvdFBhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmZvcmdvdC1wYXNzd29yZC1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRuZXdQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5uZXctcGFzc3dvcmQtZm9ybScpOyAvLyByZXNldCBwYXNzd29yZFxuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSBhdXRoLmh0bWxcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICBpZiAoJGxvZ2luRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJG5ld1Bhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZm9yZ290UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3JlYXRlQWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKlxuICogQW4gYWx0ZXJuYXRpdmUgdG8gYF8ucmVkdWNlYDsgdGhpcyBtZXRob2QgdHJhbnNmb3JtcyBgb2JqZWN0YCB0byBhIG5ld1xuICogYGFjY3VtdWxhdG9yYCBvYmplY3Qgd2hpY2ggaXMgdGhlIHJlc3VsdCBvZiBydW5uaW5nIGVhY2ggb2YgaXRzIG93blxuICogZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyB0aHJ1IGBpdGVyYXRlZWAsIHdpdGggZWFjaCBpbnZvY2F0aW9uXG4gKiBwb3RlbnRpYWxseSBtdXRhdGluZyB0aGUgYGFjY3VtdWxhdG9yYCBvYmplY3QuIElmIGBhY2N1bXVsYXRvcmAgaXMgbm90XG4gKiBwcm92aWRlZCwgYSBuZXcgb2JqZWN0IHdpdGggdGhlIHNhbWUgYFtbUHJvdG90eXBlXV1gIHdpbGwgYmUgdXNlZC4gVGhlXG4gKiBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6IChhY2N1bXVsYXRvciwgdmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGN1c3RvbSBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50cmFuc2Zvcm0oWzIsIDMsIDRdLCBmdW5jdGlvbihyZXN1bHQsIG4pIHtcbiAqICAgcmVzdWx0LnB1c2gobiAqPSBuKTtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9LCBbXSk7XG4gKiAvLyA9PiBbNCwgOV1cbiAqXG4gKiBfLnRyYW5zZm9ybSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gKiAgIChyZXN1bHRbdmFsdWVdIHx8IChyZXN1bHRbdmFsdWVdID0gW10pKS5wdXNoKGtleSk7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICcxJzogWydhJywgJ2MnXSwgJzInOiBbJ2InXSB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybShvYmplY3QsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBpc0Fyckxpa2UgPSBpc0FyciB8fCBpc0J1ZmZlcihvYmplY3QpIHx8IGlzVHlwZWRBcnJheShvYmplY3QpO1xuXG4gIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCA0KTtcbiAgaWYgKGFjY3VtdWxhdG9yID09IG51bGwpIHtcbiAgICB2YXIgQ3RvciA9IG9iamVjdCAmJiBvYmplY3QuY29uc3RydWN0b3I7XG4gICAgaWYgKGlzQXJyTGlrZSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0FyciA/IG5ldyBDdG9yIDogW107XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIGFjY3VtdWxhdG9yID0gaXNGdW5jdGlvbihDdG9yKSA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpIDoge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYWNjdW11bGF0b3IgPSB7fTtcbiAgICB9XG4gIH1cbiAgKGlzQXJyTGlrZSA/IGFycmF5RWFjaCA6IGJhc2VGb3JPd24pKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgICByZXR1cm4gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgb2JqZWN0KTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9
