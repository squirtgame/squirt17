module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getChildProps; });
/* unused harmony export hasResponseData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseErrorString; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var isClient = function isClient() {
  return typeof window !== "undefined";
};
var isServer = function isServer() {
  return typeof window === "undefined";
};
var getChildProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ChildClass, appContext) {
    var childProps;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            childProps = {};

            if (!ChildClass.getInitialProps) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return ChildClass.getInitialProps(appContext);

          case 4:
            childProps = _context.sent;

          case 5:
            return _context.abrupt("return", _objectSpread({}, childProps));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getChildProps(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var hasResponseData = function hasResponseData(err) {
  if (!err.response) return false;
  return strings.isDefined(err.response.data);
};
var parseErrorString = function parseErrorString(err) {
  var error = hasResponseData(err) ? err.response.data : err.toString();

  if (Array.isArray(error)) {
    error = error[0];
  }

  error = error.replace(/Error: /g, "");
  error = error.replace(/Returned error: /g, "");
  return error;
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
var constants = {
  UPDATE_FACTORY_CONTRACT: "UPDATE_FACTORY_CONTRACT",
  UPDATE_TEMPLATE_CONTRACT: "UPDATE_TEMPLATE_CONTRACT",
  UPDATE_METAMASK_ACCOUNT: "UPDATE_METAMASK_ACCOUNT",
  UPDATE_PREVIOUS_CONTRACT: "UPDATE_PREVIOUS_CONTRACT",
  TURN_ON_DANGER_MODE: "TURN_ON_DANGER_MODE",
  TURN_OFF_DANGER_MODE: "TURN_OFF_DANGER_MODE"
};
/* harmony default export */ __webpack_exports__["b"] = (constants);

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(30);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__(11);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(9);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// CONCATENATED MODULE: ./redux/reducers.js


var reducers_initialState = {
  factoryContract: {},
  templateContract: {},
  previousContract: {},
  metamaskAccount: {},
  dangerMode: false
};
var reducers_dangerMode = function dangerMode() {
  var dangerMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants["a" /* constants */].TURN_OFF_DANGER_MODE:
      return false;

    case constants["a" /* constants */].TURN_ON_DANGER_MODE:
      return true;

    default:
      return dangerMode;
  }
};
var reducers_metamaskAccount = function metamaskAccount() {
  var metamaskAccount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants["a" /* constants */].UPDATE_METAMASK_ACCOUNT:
      return action.payload;

    default:
      return metamaskAccount;
  }
};
var reducers_previousContract = function previousContract() {
  var previousContract = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants["a" /* constants */].UPDATE_PREVIOUS_CONTRACT:
      return action.payload;

    default:
      return previousContract;
  }
};
var reducers_factoryContract = function factoryContract() {
  var factoryContract = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants["a" /* constants */].UPDATE_FACTORY_CONTRACT:
      return action.payload;

    default:
      return factoryContract;
  }
};
var reducers_templateContract = function templateContract() {
  var templateContract = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case constants["a" /* constants */].UPDATE_TEMPLATE_CONTRACT:
      return action.payload;

    default:
      return templateContract;
  }
};
/* harmony default export */ var reducers = (Object(external__redux_["combineReducers"])({
  factoryContract: reducers_factoryContract,
  templateContract: reducers_templateContract,
  metamaskAccount: reducers_metamaskAccount,
  previousContract: reducers_previousContract,
  dangerMode: reducers_dangerMode
}));
// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(33);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(34);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./redux/store.js





var store_initStore = function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_initialState;
  return Object(external__redux_["createStore"])(reducers, state, Object(external__redux_devtools_extension_["composeWithDevTools"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a)));
};
// EXTERNAL MODULE: ./services/utils.js
var utils = __webpack_require__(6);

// CONCATENATED MODULE: ./components/hocs/withReduxStore.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if (Object(utils["c" /* isServer */])()) {
    return store_initStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = store_initStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var withReduxStore = (function (App) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(Redux, _Component);

      _createClass(Redux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    reduxStore = getOrCreateStore();
                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!App.getInitialProps) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps(appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function Redux(props) {
        var _this;

        _classCallCheck(this, Redux);

        _this = _possibleConstructorReturn(this, (Redux.__proto__ || Object.getPrototypeOf(Redux)).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(Redux, [{
        key: "render",
        value: function render() {
          return external__react__default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return Redux;
    }(external__react_["Component"])
  );
});
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(3);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// CONCATENATED MODULE: ./pages/_app.js
function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _app_App =
/*#__PURE__*/
function (_NextApp) {
  _app__inherits(App, _NextApp);

  function App() {
    _app__classCallCheck(this, App);

    return _app__possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _app__createClass(App, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          reduxStore = _props.reduxStore;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: reduxStore
      }, external__react__default.a.createElement(Component, pageProps)));
    }
  }]);

  return App;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withReduxStore(_app_App));

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);