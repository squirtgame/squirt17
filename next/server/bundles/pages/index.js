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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return spreadClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return joinClassNames; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);

var spreadClassName = function spreadClassName() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return string === "" ? {} : {
    className: string
  };
};
var classNames = function classNames(optionalClasses) {
  var className2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()(optionalClasses, className2);
};
var joinClassNames = function joinClassNames(className1) {
  var className2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return className2 === "" ? className1 : [className1, className2].join(" ");
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"masterContract":"0x76c266d2284d74e6ec2de69282c4e1bd4d9444ee","httpProvider":"https://node.hpb.io","etherscanUrl":"https://hpbscan.org","contractUpdateInterval":{"seconds":2},"randomNumberWaitTime":{"seconds":60},"dangerModeStartTime":{"minutes":3,"seconds":0}}

/***/ }),
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./services/smart-contracts/Contract.js
var Contract = __webpack_require__(19);

// CONCATENATED MODULE: ./services/smart-contracts/templateAbi.js
var templateAbi = [{
  "constant": false,
  "inputs": [{
    "name": "_guess",
    "type": "uint256"
  }],
  "name": "guessNumber",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "name": "setAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "showRandomNumber",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "spawnNewContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "spawnNewContractSeventeenGuesses",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "startNewGame",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "",
    "type": "bytes32"
  }],
  "name": "newRandomNumber_bytes",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "",
    "type": "uint256"
  }],
  "name": "newRandomNumber_uint256",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "contractHasBeenSpawned",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "costOfNextGuess",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "currentRange",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "factoryAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "fixDevAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameAbandoned",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameEnd",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "guessedCorrectly",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "highValue",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "lastGuessAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "lowValue",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "masterAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "mutex",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "nextGuess",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "randomNumberRetrieved",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "randomPublic",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "theCorrectNumber",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "timeReset",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
// CONCATENATED MODULE: ./services/smart-contracts/TemplateContract.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var TemplateContract_TemplateContract =
/*#__PURE__*/
function (_Contract) {
  _inherits(TemplateContract, _Contract);

  function TemplateContract(address) {
    var _this;

    _classCallCheck(this, TemplateContract);

    _this = _possibleConstructorReturn(this, (TemplateContract.__proto__ || Object.getPrototypeOf(TemplateContract)).call(this, templateAbi, address));

    TemplateContract__initialiseProps.call(_assertThisInitialized(_this));

    return _this;
  }

  return TemplateContract;
}(Contract["a" /* default */]);

Object.defineProperty(TemplateContract_TemplateContract, "hasContractAddress", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: []
});
Object.defineProperty(TemplateContract_TemplateContract, "instance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: null
});
Object.defineProperty(TemplateContract_TemplateContract, "getInstance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(address) {
    if (TemplateContract_TemplateContract.hasContractAddress[address]) {
      return TemplateContract_TemplateContract.instance;
    }

    TemplateContract_TemplateContract.instance = new TemplateContract_TemplateContract(address);
    TemplateContract_TemplateContract.hasContractAddress[address] = true;
    return TemplateContract_TemplateContract.instance;
  }
});

var TemplateContract__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.all([_this2.getAdmin(), _this2.getAddress(), _this2.getBalance(), _this2.getLowValue(), _this2.getHighValue(), _this2.getCostOfNextGuess(), _this2.getNextGuess(), _this2.getLastGuessAddress(), _this2.getGameEndTime(), _this2.getGuessedCorrectly(), _this2.getCorrectNumber(), _this2.randomNumberWasRetrieved()]).then(_this2.arrayToObject));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function value() {
        return _value.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "makeGuess", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(_ref) {
        var guessedNumber, walletAddress;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                guessedNumber = _ref.guessedNumber, walletAddress = _ref.walletAddress;
                return _context2.abrupt("return", _this2.methods.costOfNextGuess().call().then(function (costOfNextGuess) {
                  return _this2.methods.guessNumber(guessedNumber).send({
                    from: walletAddress,
                    value: costOfNextGuess
                  });
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function value(_x) {
        return _value2.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "startNewGame", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value3 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(address) {
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this2.methods.startNewGame().send({
                  from: address
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function value(_x2) {
        return _value3.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "startNewGameError", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value4 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(address) {
        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this2.methods.startNewGameError().send({
                  from: address
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function value(_x3) {
        return _value4.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "randomNumberWasRetrieved", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value5 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5() {
        return regenerator__default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", _this2.methods.randomNumberRetrieved().call().then(function (randomNumberRetrieved) {
                  return {
                    randomNumberRetrieved: randomNumberRetrieved
                  };
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function value() {
        return _value5.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getCorrectNumber", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value6 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee6() {
        return regenerator__default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", _this2.methods.theCorrectNumber().call().then(function (correctNumber) {
                  return {
                    correctNumber: correctNumber
                  };
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function value() {
        return _value6.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getGuessedCorrectly", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value7 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee7() {
        return regenerator__default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _this2.methods.guessedCorrectly().call().then(function (guessedCorrectly) {
                  return {
                    guessedCorrectly: guessedCorrectly
                  };
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function value() {
        return _value7.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getWinningNumber", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value8 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee8() {
        return regenerator__default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", _this2.methods.randomPublic().call().then(function (winningNumber) {
                  return {
                    winningNumber: parseInt(winningNumber, 10)
                  };
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function value() {
        return _value8.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getGameEndTime", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value9 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee9() {
        return regenerator__default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", _this2.methods.gameEnd().call().then(function (gameEndTime) {
                  return {
                    gameEndTime: _this2.toMilliseconds(gameEndTime)
                  };
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function value() {
        return _value9.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getLastGuessAddress", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value10 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee10() {
        return regenerator__default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", _this2.methods.lastGuessAddress().call().then(function (lastGuessAddress) {
                  return {
                    lastGuessAddress: lastGuessAddress
                  };
                }));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function value() {
        return _value10.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getLowValue", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value11 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee11() {
        return regenerator__default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", _this2.methods.lowValue().call().then(function (lowValue) {
                  return {
                    lowValue: parseInt(lowValue, 10)
                  };
                }));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function value() {
        return _value11.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getHighValue", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value12 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee12() {
        return regenerator__default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", _this2.methods.highValue().call().then(function (highValue) {
                  return {
                    highValue: parseInt(highValue, 10)
                  };
                }));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function value() {
        return _value12.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getNextGuess", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value13 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee13() {
        return regenerator__default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", _this2.methods.nextGuess().call().then(function (nextGuess) {
                  return {
                    nextGuess: parseInt(nextGuess, 10)
                  };
                }));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function value() {
        return _value13.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getCostOfNextGuess", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value14 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee14() {
        return regenerator__default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", _this2.methods.costOfNextGuess().call().then(function (costOfNextGuess) {
                  return {
                    costOfNextGuess: _this2.toEth(costOfNextGuess)
                  };
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function value() {
        return _value14.apply(this, arguments);
      };
    }()
  });
};

/* harmony default export */ var smart_contracts_TemplateContract = __webpack_exports__["a"] = (TemplateContract_TemplateContract);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return turnOnDangerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return turnOffDangerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateMetamaskAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateFactoryContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateTemplateContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updatePreviousContract; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);


var turnOnDangerMode = function turnOnDangerMode() {
  __WEBPACK_IMPORTED_MODULE_1_jquery___default()("body").addClass("danger");
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].TURN_ON_DANGER_MODE
  };
};
var turnOffDangerMode = function turnOffDangerMode() {
  __WEBPACK_IMPORTED_MODULE_1_jquery___default()("body").removeClass("danger");
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].TURN_OFF_DANGER_MODE
  };
};
var updateMetamaskAccount = function updateMetamaskAccount(metamaskAccount) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].UPDATE_METAMASK_ACCOUNT,
    payload: metamaskAccount
  };
};
var updateFactoryContract = function updateFactoryContract(factoryContract) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].UPDATE_FACTORY_CONTRACT,
    payload: factoryContract
  };
};
var updateTemplateContract = function updateTemplateContract(templateContract) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].UPDATE_TEMPLATE_CONTRACT,
    payload: templateContract
  };
};
var updatePreviousContract = function updatePreviousContract(previousContract) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* default */].UPDATE_PREVIOUS_CONTRACT,
    payload: previousContract
  };
};

/***/ }),
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(13);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./sass/style.scss
var style = __webpack_require__(14);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./site-components/images/Favicon.js

var Favicon_Favicon = function Favicon() {
  return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "144x144",
    href: "/static/images/favicon/android-icon-144x144.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/images/favicon/android-icon-192x192.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "36x36",
    href: "/static/images/favicon/android-icon-36x36.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "48x48",
    href: "/static/images/favicon/android-icon-48x48.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "72x72",
    href: "/static/images/favicon/android-icon-72x72.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "96x96",
    href: "/static/images/favicon/android-icon-96x96.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/favicon/apple-icon-114x114.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/favicon/apple-icon-120x120.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/favicon/apple-icon-144x144.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/favicon/apple-icon-152x152.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/favicon/apple-icon-180x180.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/images/favicon/apple-icon-57x57.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/images/favicon/apple-icon-60x60.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/images/favicon/apple-icon-72x72.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/images/favicon/apple-icon-76x76.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "16x16",
    href: "/static/images/favicon/favicon-16x16.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "32x32",
    href: "/static/images/favicon/favicon-32x32.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "96x96",
    href: "/static/images/favicon/favicon-96x96.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "144x144",
    href: "/static/images/favicon/ms-icon-144x144.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "150x150",
    href: "/static/images/favicon/ms-icon-150x150.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "310x310",
    href: "/static/images/favicon/ms-icon-310x310.png"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "70x70",
    href: "/static/images/favicon/ms-icon-70x70.png"
  }));
};
// CONCATENATED MODULE: ./site-components/page/Head.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Head_Head =
/*#__PURE__*/
function (_Component) {
  _inherits(Head, _Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "HPB17 - The newest FOMO game for the HPB blockchain"), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), external__react__default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
        rel: "stylesheet"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      }), external__react__default.a.createElement(Favicon_Favicon, null), this.props.children);
    }
  }]);

  return Head;
}(external__react_["Component"]);

/* harmony default export */ var page_Head = (Head_Head);
// EXTERNAL MODULE: ./services/className.js
var services_className = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(15);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(16);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./site-components/menus/MainMenu.js
function MainMenu__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MainMenu__typeof = function _typeof(obj) { return typeof obj; }; } else { MainMenu__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MainMenu__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MainMenu__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainMenu__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MainMenu__createClass(Constructor, protoProps, staticProps) { if (protoProps) MainMenu__defineProperties(Constructor.prototype, protoProps); if (staticProps) MainMenu__defineProperties(Constructor, staticProps); return Constructor; }

function MainMenu__possibleConstructorReturn(self, call) { if (call && (MainMenu__typeof(call) === "object" || typeof call === "function")) { return call; } return MainMenu__assertThisInitialized(self); }

function MainMenu__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MainMenu__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var MainMenu_MainMenu =
/*#__PURE__*/
function (_Component) {
  MainMenu__inherits(MainMenu, _Component);

  function MainMenu() {
    var _ref;

    var _temp, _this;

    MainMenu__classCallCheck(this, MainMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return MainMenu__possibleConstructorReturn(_this, (_temp = _this = MainMenu__possibleConstructorReturn(this, (_ref = MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call.apply(_ref, [this].concat(args))), Object.defineProperty(MainMenu__assertThisInitialized(_this), "getActiveClass", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(page) {
        return _this.props.router.route === page ? "active" : "";
      }
    }), _temp));
  }

  MainMenu__createClass(MainMenu, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          router = _props.router,
          props = _objectWithoutProperties(_props, ["className", "router"]);

      return external__react__default.a.createElement("nav", _extends({
        className: Object(services_className["b" /* joinClassNames */])("menu", className)
      }, props), external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", {
        className: this.getActiveClass("/")
      }, "Play")), external__react__default.a.createElement(link__default.a, {
        href: "/Details"
      }, external__react__default.a.createElement("a", {
        className: this.getActiveClass("/Details")
      }, "Details & FAQ")), external__react__default.a.createElement(link__default.a, {
        href: "/PreviousGame"
      }, external__react__default.a.createElement("a", {
        className: this.getActiveClass("/PreviousGame")
      }, "Previous game Info")));
    }
  }]);

  return MainMenu;
}(external__react_["Component"]);

Object.defineProperty(MainMenu_MainMenu, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: ""
  }
});
/* harmony default export */ var menus_MainMenu = (Object(router_["withRouter"])(MainMenu_MainMenu));
// CONCATENATED MODULE: ./site-components/images/Logo.js

var Logo_Logo = function Logo() {
  return external__react__default.a.createElement("div", {
    className: "logo"
  }, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://hpb17.com"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/hpb17.png"
  })));
};
// CONCATENATED MODULE: ./site-components/page/Header.js
function Header__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header__typeof = function _typeof(obj) { return typeof obj; }; } else { Header__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header__typeof(obj); }

function Header__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header__createClass(Constructor, protoProps, staticProps) { if (protoProps) Header__defineProperties(Constructor.prototype, protoProps); if (staticProps) Header__defineProperties(Constructor, staticProps); return Constructor; }

function Header__possibleConstructorReturn(self, call) { if (call && (Header__typeof(call) === "object" || typeof call === "function")) { return call; } return Header__assertThisInitialized(self); }

function Header__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header_Header =
/*#__PURE__*/
function (_Component) {
  Header__inherits(Header, _Component);

  function Header() {
    Header__classCallCheck(this, Header);

    return Header__possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  Header__createClass(Header, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = Header__objectWithoutProperties(_props, ["children"]);

      return external__react__default.a.createElement("header", props, external__react__default.a.createElement(Logo_Logo, null), children, external__react__default.a.createElement(menus_MainMenu, null));
    }
  }]);

  return Header;
}(external__react_["Component"]);

/* harmony default export */ var page_Header = (Header_Header);
// CONCATENATED MODULE: ./components/icons.js
function icons__extends() { icons__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return icons__extends.apply(this, arguments); }

function icons__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var icons_Loader = function Loader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      props = icons__objectWithoutProperties(_ref, ["className"]);

  return external__react__default.a.createElement("div", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("loader", className)
  }));
};
var icons_LoaderSmall = function LoaderSmall(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? "" : _ref2$className,
      props = icons__objectWithoutProperties(_ref2, ["className"]);

  return external__react__default.a.createElement("div", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("loader-small", className)
  }));
};
var icons_LoaderTiny = function LoaderTiny(_ref3) {
  var _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? "" : _ref3$className,
      props = icons__objectWithoutProperties(_ref3, ["className"]);

  return external__react__default.a.createElement("div", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("loader-tiny", className)
  }));
};
var icons_Twitter = function Twitter(_ref4) {
  var _ref4$className = _ref4.className,
      className = _ref4$className === void 0 ? "" : _ref4$className,
      props = icons__objectWithoutProperties(_ref4, ["className"]);

  return external__react__default.a.createElement("i", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("fab fa-twitter", className)
  }));
};
var icons_Medium = function Medium(_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === void 0 ? "" : _ref5$className,
      props = icons__objectWithoutProperties(_ref5, ["className"]);

  return external__react__default.a.createElement("i", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("fab fa-medium", className)
  }));
};
var icons_Reddit = function Reddit(_ref6) {
  var _ref6$className = _ref6.className,
      className = _ref6$className === void 0 ? "" : _ref6$className,
      props = icons__objectWithoutProperties(_ref6, ["className"]);

  return external__react__default.a.createElement("i", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("fab fa-reddit", className)
  }));
};
var icons_Telegram = function Telegram(_ref7) {
  var _ref7$className = _ref7.className,
      className = _ref7$className === void 0 ? "" : _ref7$className,
      props = icons__objectWithoutProperties(_ref7, ["className"]);

  return external__react__default.a.createElement("i", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("fab fa-telegram", className)
  }));
};
var icons_Github = function Github(_ref8) {
  var _ref8$className = _ref8.className,
      className = _ref8$className === void 0 ? "" : _ref8$className,
      props = icons__objectWithoutProperties(_ref8, ["className"]);

  return external__react__default.a.createElement("i", icons__extends({}, props, {
    className: Object(services_className["b" /* joinClassNames */])("fab fa-github", className)
  }));
};
// CONCATENATED MODULE: ./site-components/menus/SocialMenu.js
function SocialMenu__extends() { SocialMenu__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SocialMenu__extends.apply(this, arguments); }

function SocialMenu__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var SocialMenu_SocialMenu = function SocialMenu(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = SocialMenu__objectWithoutProperties(_ref, ["className"]);

  return external__react__default.a.createElement("nav", SocialMenu__extends({
    className: Object(services_className["b" /* joinClassNames */])("social-menu round", className)
  }, props), external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://github.com/hpb17"
  }, external__react__default.a.createElement(icons_Github, null)), external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://twitter.com/hpb17"
  }, external__react__default.a.createElement(icons_Twitter, null)), external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://reddit.com/user/hpb17"
  }, external__react__default.a.createElement(icons_Reddit, null)));
};
// CONCATENATED MODULE: ./site-components/page/Footer.js
function Footer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer__typeof = function _typeof(obj) { return typeof obj; }; } else { Footer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer__typeof(obj); }

function Footer__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer__createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer__defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer__defineProperties(Constructor, staticProps); return Constructor; }

function Footer__possibleConstructorReturn(self, call) { if (call && (Footer__typeof(call) === "object" || typeof call === "function")) { return call; } return Footer__assertThisInitialized(self); }

function Footer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  Footer__inherits(Footer, _Component);

  function Footer() {
    Footer__classCallCheck(this, Footer);

    return Footer__possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  Footer__createClass(Footer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = Footer__objectWithoutProperties(_props, ["children"]);

      return external__react__default.a.createElement("footer", props, external__react__default.a.createElement(SocialMenu_SocialMenu, null), children);
    }
  }]);

  return Footer;
}(external__react_["Component"]);

/* harmony default export */ var page_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./site-components/page/Sidebar.js
function Sidebar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sidebar__typeof = function _typeof(obj) { return typeof obj; }; } else { Sidebar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sidebar__typeof(obj); }

function Sidebar__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Sidebar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sidebar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sidebar__createClass(Constructor, protoProps, staticProps) { if (protoProps) Sidebar__defineProperties(Constructor.prototype, protoProps); if (staticProps) Sidebar__defineProperties(Constructor, staticProps); return Constructor; }

function Sidebar__possibleConstructorReturn(self, call) { if (call && (Sidebar__typeof(call) === "object" || typeof call === "function")) { return call; } return Sidebar__assertThisInitialized(self); }

function Sidebar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sidebar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Sidebar_Sidebar =
/*#__PURE__*/
function (_Component) {
  Sidebar__inherits(Sidebar, _Component);

  function Sidebar() {
    Sidebar__classCallCheck(this, Sidebar);

    return Sidebar__possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  Sidebar__createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = Sidebar__objectWithoutProperties(_props, ["children"]);

      return external__react__default.a.createElement("aside", props, children);
    }
  }]);

  return Sidebar;
}(external__react_["Component"]);

/* harmony default export */ var page_Sidebar = (Sidebar_Sidebar);
// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./site-components/page/Page.js
function Page__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page__typeof = function _typeof(obj) { return typeof obj; }; } else { Page__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page__typeof(obj); }

function Page__extends() { Page__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Page__extends.apply(this, arguments); }

function Page__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page__createClass(Constructor, protoProps, staticProps) { if (protoProps) Page__defineProperties(Constructor.prototype, protoProps); if (staticProps) Page__defineProperties(Constructor, staticProps); return Constructor; }

function Page__possibleConstructorReturn(self, call) { if (call && (Page__typeof(call) === "object" || typeof call === "function")) { return call; } return Page__assertThisInitialized(self); }

function Page__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Page_Page =
/*#__PURE__*/
function (_Component) {
  Page__inherits(Page, _Component);

  function Page() {
    Page__classCallCheck(this, Page);

    return Page__possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  Page__createClass(Page, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", Page__extends({
        id: "page"
      }, Object(services_className["c" /* spreadClassName */])(this.props.pageClass)), external__react__default.a.createElement(page_Head, null, this.props.head), external__react__default.a.createElement(page_Header, Page__extends({
        id: "page-header"
      }, Object(services_className["c" /* spreadClassName */])(this.props.headerClass)), this.props.header), external__react__default.a.createElement("section", Page__extends({
        id: "page-content"
      }, Object(services_className["c" /* spreadClassName */])(this.props.contentClass)), this.props.children), external__react__default.a.createElement(page_Sidebar, {
        id: "page-sidebar"
      }, this.props.sidebar), external__react__default.a.createElement(page_Footer, Page__extends({
        id: "page-footer"
      }, Object(services_className["c" /* spreadClassName */])(this.props.footerClass)), this.props.footer));
    }
  }]);

  return Page;
}(external__react_["Component"]);

Object.defineProperty(Page_Page, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    head: null,
    header: null,
    sidebar: null,
    footer: null,
    pageClass: "",
    headerClass: "",
    contentClass: "",
    footerClass: ""
  }
});
/* harmony default export */ var page_Page = __webpack_exports__["a"] = (Page_Page);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Space; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_className__ = __webpack_require__(2);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Space = function Space(_ref) {
  var danger = _ref.danger,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      props = _objectWithoutProperties(_ref, ["danger", "className"]);

  var spaceClass = Object(__WEBPACK_IMPORTED_MODULE_1__services_className__["a" /* classNames */])({
    "danger": danger
  }, className);
  var fogClass = Object(__WEBPACK_IMPORTED_MODULE_1__services_className__["a" /* classNames */])({
    "danger": danger
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    id: "space",
    className: spaceClass
  }, props), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "fog",
    className: fogClass
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "fog-2",
    className: fogClass
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "glow"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "light"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "stars"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "stars-2"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "small-stars"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    id: "small-stars-2"
  }));
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./services/smart-contracts/Contract.js
var Contract = __webpack_require__(19);

// EXTERNAL MODULE: ./settings.json
var settings = __webpack_require__(5);
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// CONCATENATED MODULE: ./services/smart-contracts/factoryAbi.js
var factoryAbi = [{
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "addDevWallet",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "firstSpawn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "newSpawn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "removeDevWallet",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "name": "setAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "setMasterAddress",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "transferEth",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "transferEthSeventeenGuesses",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "contracts",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "devWallets",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "fixDevAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameLengthSeconds",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getContractCount",
  "outputs": [{
    "name": "contractCount",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDevWalletCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getGameCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getLatestSpawnedContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "guessCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "latestSpawnedContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "masterAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "previousContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
// CONCATENATED MODULE: ./services/smart-contracts/factoryContract.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var factoryContract_FactoryContract =
/*#__PURE__*/
function (_Contract) {
  _inherits(FactoryContract, _Contract);

  function FactoryContract() {
    var _this;

    _classCallCheck(this, FactoryContract);

    _this = _possibleConstructorReturn(this, (FactoryContract.__proto__ || Object.getPrototypeOf(FactoryContract)).call(this, factoryAbi, settings["masterContract"]));
    Object.defineProperty(_assertThisInitialized(_this), "fetch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", Promise.all([_this.getAddress(), _this.getBalance(), _this.getCount(), _this.getLatestSpawnedContract(), _this.getPreviousContract(), _this.getAdmin()]).then(_this.arrayToObject));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "getLatestSpawnedContract", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee2() {
          return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _this.methods.getLatestSpawnedContract().call().then(function (latestSpawnedContract) {
                    return {
                      latestSpawnedContract: latestSpawnedContract
                    };
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "getPreviousContract", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee3() {
          return regenerator__default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", _this.methods.previousContract().call().then(function (previousContract) {
                    return {
                      previousContract: previousContract
                    };
                  }).catch(function () {
                    return null;
                  }));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value() {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "getCount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee4() {
          return regenerator__default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", _this.methods.getContractCount().call().then(function (count) {
                    return {
                      count: parseInt(count, 10)
                    };
                  }));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value() {
          return _value4.apply(this, arguments);
        };
      }()
    });
    return _this;
  }

  return FactoryContract;
}(Contract["a" /* default */]);

/* harmony default export */ var factoryContract = __webpack_exports__["a"] = (new factoryContract_FactoryContract());

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Web3__ = __webpack_require__(20);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Contract = function Contract(abi, contract) {
  var _this = this;

  _classCallCheck(this, Contract);

  Object.defineProperty(this, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.all([_this.getAdmin(), _this.getAddress(), _this.getBalance()]).then(_this.arrayToObject));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function value() {
        return _value.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "toMilliseconds", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(unixEpochTime) {
      return parseInt(unixEpochTime, 10) * 1000;
    }
  });
  Object.defineProperty(this, "toEth", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(wei) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
      return parseFloat(parseFloat(_this.web3.utils.fromWei(wei)).toFixed(decimals));
    }
  });
  Object.defineProperty(this, "arrayToObject", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(responses) {
      if (responses.length > 0) {
        return responses.reduce(function (accumulator, currentValue) {
          return Object.assign({}, accumulator, currentValue);
        });
      }

      return {};
    }
  });
  Object.defineProperty(this, "getAdmin", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _this.methods.admin().call().then(function (admin) {
                  return {
                    admin: admin
                  };
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function value() {
        return _value2.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getAddress", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value3 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _this.methods.thisContractAddress().call().then(function (address) {
                  return {
                    address: address
                  };
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function value() {
        return _value3.apply(this, arguments);
      };
    }()
  });
  Object.defineProperty(this, "getBalance", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _this.methods.thisContractBalance().call().then(function (balance) {
                  return {
                    balance: _this.toEth(balance)
                  };
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function value() {
        return _value4.apply(this, arguments);
      };
    }()
  });

  if (contract == "0x0000000000000000000000000000000000000000") {
    contract = "0xC20f8D4030Dae4Bb78Dbf6E620dA82F707F89932";
  }

  this.web3 = __WEBPACK_IMPORTED_MODULE_1__Web3__["a" /* default */].getInstance();
  this.contract = new this.web3.eth.Contract(abi, contract, {
    gasPrice: '18000000000'
  });
  this.methods = this.contract.methods;
};

/* harmony default export */ __webpack_exports__["a"] = (Contract);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__settings_json__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var instance = null;

var getProvider = function getProvider() {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isClient */])() && window.ethereum) {
    return window.ethereum;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isClient */])() && window.web3) {
    return window.web3.currentProvider;
  }

  return new __WEBPACK_IMPORTED_MODULE_0_web3___default.a.providers.HttpProvider(__WEBPACK_IMPORTED_MODULE_2__settings_json___default.a.httpProvider);
};

var CustomWeb3 =
/*#__PURE__*/
function (_web) {
  _inherits(CustomWeb3, _web);

  _createClass(CustomWeb3, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!instance) {
        instance = new CustomWeb3(getProvider());
      }

      return instance;
    }
  }]);

  function CustomWeb3(provider) {
    var _this;

    _classCallCheck(this, CustomWeb3);

    _this = _possibleConstructorReturn(this, (CustomWeb3.__proto__ || Object.getPrototypeOf(CustomWeb3)).call(this, provider));
    Object.defineProperty(_assertThisInitialized(_this), "hasMetaMask", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.currentProvider.isMetaMask !== undefined;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onMetamaskUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(callback) {
        _this.currentProvider.publicConfigStore.on("update", callback);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "unsubscribeToMetmaskUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(callback) {
        _this.currentProvider.publicConfigStore.unsubscribe(callback);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "fetchAccountAddress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.eth.getAccounts().then(function (accounts) {
          return accounts[0];
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "fetchEthBalance", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(accountAddress) {
        return _this.eth.getBalance(accountAddress).then(function (balance) {
          return balance / 1000000000000000000;
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "fetchAccount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var account = {
          address: null,
          balance: null,
          network: null
        };
        return _this.fetchNetworkId().then(function (netId) {
          account.network = CustomWeb3.getNetworkName(netId);
          return _this.fetchAccountAddress();
        }).then(function (accountAddress) {
          account.address = accountAddress;
          return _this.fetchEthBalance(account.address);
        }).then(function (balance) {
          account.balance = balance;
          return account;
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "fetchNetworkId", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.eth.net.getId();
      }
    });
    return _this;
  }

  _createClass(CustomWeb3, null, [{
    key: "getNetworkName",
    value: function getNetworkName(networkId) {
      switch (networkId) {
        case 1:
          return "Mainnet";

        case 2:
          return "Morden";

        case 3:
          return "Ropsten";

        case 4:
          return "Rinkeby";

        case 8:
          return "Ubiq";

        case 42:
          return "Kovan";

        case 77:
          return "Sokol";

        case 99:
          return "Core";

        case 7762959:
          return "Musicoin";

        case 61717561:
          return "Aquachain";

        default:
          return "Unknown";
      }
    }
  }]);

  return CustomWeb3;
}(__WEBPACK_IMPORTED_MODULE_0_web3___default.a);

/* harmony default export */ __webpack_exports__["a"] = (CustomWeb3);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(28);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(29);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/Alert/AlertContent.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var AlertContent_AlertContent =
/*#__PURE__*/
function (_Component) {
  _inherits(AlertContent, _Component);

  function AlertContent(props) {
    var _this;

    _classCallCheck(this, AlertContent);

    _this = _possibleConstructorReturn(this, (AlertContent.__proto__ || Object.getPrototypeOf(AlertContent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "disableAlert", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    _this.setState({
                      disabled: true
                    }, function () {
                      return resolve();
                    });
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      hidden: true,
      disabled: false
    };
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_this));
    _this.removeAlert = _this.removeAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlertContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState(function () {
          return {
            hidden: false
          };
        });
      }, AlertContent.ANIMATION_TIME);
    }
  }, {
    key: "removeAlert",
    value: function removeAlert() {
      var _this3 = this;

      new Promise(function (resolve) {
        _this3.setState(function () {
          return {
            hidden: true
          };
        });

        setTimeout(function () {
          resolve();
        }, AlertContent.ANIMATION_TIME);
      }).then(function () {
        _this3.props.remove();
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this4 = this;

      var revealClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _AlertContent$CLASS_N = AlertContent.CLASS_NAMES,
          MAIN_CONTAINER = _AlertContent$CLASS_N.MAIN_CONTAINER,
          BACKDROP = _AlertContent$CLASS_N.BACKDROP,
          CONTENT_CONTAINER = _AlertContent$CLASS_N.CONTENT_CONTAINER,
          HEADER = _AlertContent$CLASS_N.HEADER,
          TITLE = _AlertContent$CLASS_N.TITLE,
          BUTTON_CONTAINER = _AlertContent$CLASS_N.BUTTON_CONTAINER;
      var _props = this.props,
          closeIcon = _props.closeIcon,
          titleIcon = _props.titleIcon,
          title = _props.title,
          message = _props.message,
          cancelText = _props.cancelText,
          confirmText = _props.confirmText,
          cancelButtonId = _props.cancelButtonId,
          confirmButtonId = _props.confirmButtonId,
          closeButtonId = _props.closeButtonId,
          showCancel = _props.showCancel,
          onCancel = _props.onCancel,
          onConfirm = _props.onConfirm,
          onClose = _props.onClose;
      return external__react__default.a.createElement("div", {
        className: "".concat(BACKDROP, " ").concat(revealClass)
      }, external__react__default.a.createElement("div", {
        className: "".concat(MAIN_CONTAINER, " ").concat(revealClass)
      }, external__react__default.a.createElement("div", {
        className: "".concat(HEADER)
      }, external__react__default.a.createElement("div", null, titleIcon, external__react__default.a.createElement("h3", {
        className: "".concat(TITLE)
      }, title)), !this.state.disabled && external__react__default.a.createElement("div", {
        id: closeButtonId,
        className: "close",
        onClick: function onClick(event) {
          onClose !== undefined ? onClose(event, _this4.removeAlert) : _this4.removeAlert();
        }
      }, closeIcon)), external__react__default.a.createElement("div", {
        className: "".concat(CONTENT_CONTAINER)
      }, message), external__react__default.a.createElement("div", {
        className: "".concat(BUTTON_CONTAINER)
      }, showCancel ? external__react__default.a.createElement("button", {
        id: cancelButtonId,
        className: "button secondary",
        disabled: this.state.disabled,
        onClick: function onClick(event) {
          onCancel !== undefined ? onCancel(event, _this4.removeAlert, _this4.disableAlert) : _this4.removeAlert();
        }
      }, cancelText) : null, external__react__default.a.createElement("button", {
        id: confirmButtonId,
        className: "button secondary",
        autoFocus: true,
        disabled: this.state.disabled,
        onClick: function onClick(event) {
          onConfirm !== undefined ? onConfirm(event, _this4.removeAlert, _this4.disableAlert) : _this4.removeAlert();
        }
      }, this.state.disabled ? external__react__default.a.createElement("div", {
        className: "loader-tiny"
      }) : confirmText))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.hidden ? this.renderContent(AlertContent.CLASS_NAMES.HIDDEN) : this.renderContent(AlertContent.CLASS_NAMES.VISIBLE);
    }
  }]);

  return AlertContent;
}(external__react_["Component"]);

Object.defineProperty(AlertContent_AlertContent, "CLASS_NAMES", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    BACKDROP: "alert-backdrop",
    VISIBLE: "alert-visible",
    HIDDEN: "alert-hidden",
    MAIN_CONTAINER: "alert-main",
    CONTENT_CONTAINER: "alert-content",
    HEADER: "alert-header",
    TITLE: "alert-title",
    BUTTON_CONTAINER: "alert-buttons"
  }
});
Object.defineProperty(AlertContent_AlertContent, "ANIMATION_TIME", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 300
});
AlertContent_AlertContent.defaultProps = {
  closeIcon: null,
  titleIcon: null,
  title: "",
  cancelText: "",
  confirmText: "",
  cancelButtonId: "",
  confirmButtonId: "",
  closeButtonId: "",
  showCancel: false
};
/* harmony default export */ var Alert_AlertContent = (AlertContent_AlertContent);
// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(21);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// CONCATENATED MODULE: ./components/Alert/Alert.js
function Alert__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Alert__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Alert__createClass(Constructor, protoProps, staticProps) { if (protoProps) Alert__defineProperties(Constructor.prototype, protoProps); if (staticProps) Alert__defineProperties(Constructor, staticProps); return Constructor; }







var Alert_Alert =
/*#__PURE__*/
function () {
  function Alert(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? Alert.TYPES.PLAIN : _ref$type,
        _ref$message = _ref.message,
        message = _ref$message === void 0 ? Alert.DEFAULT_TEXT.MESSAGE : _ref$message,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? Alert.DEFAULT_TEXT.TITLE : _ref$title,
        _ref$htmlMessage = _ref.htmlMessage,
        htmlMessage = _ref$htmlMessage === void 0 ? undefined : _ref$htmlMessage,
        _ref$titleIcon = _ref.titleIcon,
        titleIcon = _ref$titleIcon === void 0 ? null : _ref$titleIcon,
        _ref$closeIcon = _ref.closeIcon,
        closeIcon = _ref$closeIcon === void 0 ? external__react__default.a.createElement("i", {
      className: "fas fa-times"
    }) : _ref$closeIcon,
        _ref$confirmText = _ref.confirmText,
        confirmText = _ref$confirmText === void 0 ? Alert.DEFAULT_TEXT.CONFIRM : _ref$confirmText,
        _ref$cancelText = _ref.cancelText,
        cancelText = _ref$cancelText === void 0 ? Alert.DEFAULT_TEXT.CANCEL : _ref$cancelText,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        _ref$callbacks = _ref.callbacks,
        callbacks = _ref$callbacks === void 0 ? {
      onCancel: undefined,
      onConfirm: undefined,
      onClose: undefined
    } : _ref$callbacks;

    Alert__classCallCheck(this, Alert);

    Alert.id += 1;
    this.id = Alert.id;
    this.type = type;
    this.title = title;
    this.message = htmlMessage !== undefined ? htmlMessage : external__react__default.a.createElement("p", null, message);
    this.titleIcon = titleIcon;
    this.closeIcon = closeIcon;
    this.confirmText = confirmText;
    this.onClose = callbacks.onClose;
    this.onConfirm = callbacks.onConfirm;
    this.showCancel = callbacks.onCancel !== undefined;
    this.onCancel = callbacks.onCancel;
    this.className = className;
    this.cancelText = cancelText;
    this.selectors = {
      id: "".concat(this.type, "-alert-").concat(this.id),
      alertType: "".concat(this.type, "-alert"),
      cancelButton: "".concat(this.type, "-cancel-").concat(this.id),
      confirmButton: "".concat(this.type, "-confirm-").concat(this.id),
      closeButton: "".concat(this.type, "-close-").concat(this.id)
    };
    this.show = this.show.bind(this);
    this.remove = this.remove.bind(this);
  }

  Alert__createClass(Alert, [{
    key: "show",
    value: function show() {
      var _selectors = this.selectors,
          id = _selectors.id,
          alertType = _selectors.alertType,
          confirmButton = _selectors.confirmButton,
          cancelButton = _selectors.cancelButton,
          closeButton = _selectors.closeButton;
      var _Alert$CLASS_NAMES = Alert.CLASS_NAMES,
          ROOT_CONTAINER = _Alert$CLASS_NAMES.ROOT_CONTAINER,
          ALERT_RENDERED = _Alert$CLASS_NAMES.ALERT_RENDERED,
          SCROLLBAR_FILLER = _Alert$CLASS_NAMES.SCROLLBAR_FILLER;
      var alertRoot = server__default.a.renderToStaticMarkup(external__react__default.a.createElement("div", {
        id: id,
        className: "".concat(ROOT_CONTAINER, " ").concat(alertType, " ").concat(this.className)
      }));
      var $body = external__jquery__default()("body");
      $body.append(alertRoot);

      if (!$body.hasClass(ALERT_RENDERED)) {
        $body.addClass(ALERT_RENDERED);

        if (external__jquery__default()(document).height() > external__jquery__default()(window).height()) {
          $body.addClass(SCROLLBAR_FILLER);
        }
      }

      external__jquery__default()("html, body").animate({
        scrollTop: 0
      }, 0);
      external__react_dom__default.a.render(external__react__default.a.createElement(Alert_AlertContent, {
        closeIcon: this.closeIcon,
        titleIcon: this.titleIcon,
        title: this.title,
        cancelText: this.cancelText,
        confirmText: this.confirmText,
        cancelButtonId: cancelButton,
        confirmButtonId: confirmButton,
        closeButtonId: closeButton,
        message: this.message,
        showCancel: this.showCancel,
        onCancel: this.onCancel,
        onConfirm: this.onConfirm,
        onClose: this.onClose,
        remove: this.remove
      }), external__jquery__default()("#".concat(id))[0]);
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var $id = external__jquery__default()("#".concat(this.selectors.id));
      external__react_dom__default.a.unmountComponentAtNode($id[0]);
      $id.remove();
      Alert.id -= 1;

      if (Alert.id === 0) {
        var $body = external__jquery__default()("body");
        $body.removeClass(Alert.CLASS_NAMES.ALERT_RENDERED);
        $body.removeClass(Alert.CLASS_NAMES.SCROLLBAR_FILLER);
      }
    }
  }]);

  return Alert;
}();

Object.defineProperty(Alert_Alert, "TYPES", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    PLAIN: "plain",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    SUCCESS: "success"
  }
});
Object.defineProperty(Alert_Alert, "DEFAULT_TEXT", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    TITLE: "",
    CONFIRM: "Ok",
    MESSAGE: "",
    CANCEL: "Cancel"
  }
});
Object.defineProperty(Alert_Alert, "CLASS_NAMES", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    ROOT_CONTAINER: "alert",
    ALERT_RENDERED: "alert-rendered",
    SCROLLBAR_FILLER: "alert-scrollbar-filler"
  }
});
Object.defineProperty(Alert_Alert, "id", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 0
});
/* harmony default export */ var components_Alert_Alert = (Alert_Alert);
// CONCATENATED MODULE: ./components/Alert/AlertOptionPane.js
function AlertOptionPane__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var AlertOptionPane = function AlertOptionPane() {
  AlertOptionPane__classCallCheck(this, AlertOptionPane);
};

Object.defineProperty(AlertOptionPane, "showErrorAlert", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref) {
    var _ref$message = _ref.message,
        message = _ref$message === void 0 ? components_Alert_Alert.DEFAULT_TEXT.MESSAGE : _ref$message,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "Error" : _ref$title,
        _ref$titleIcon = _ref.titleIcon,
        titleIcon = _ref$titleIcon === void 0 ? external__react__default.a.createElement("i", {
      className: "fas fa-exclamation-circle"
    }) : _ref$titleIcon,
        _ref$htmlMessage = _ref.htmlMessage,
        htmlMessage = _ref$htmlMessage === void 0 ? undefined : _ref$htmlMessage,
        _ref$confirmText = _ref.confirmText,
        confirmText = _ref$confirmText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CONFIRM : _ref$confirmText,
        _ref$cancelText = _ref.cancelText,
        cancelText = _ref$cancelText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CANCEL : _ref$cancelText,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? "" : _ref$className,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? undefined : _ref$onClose,
        _ref$onConfirm = _ref.onConfirm,
        onConfirm = _ref$onConfirm === void 0 ? undefined : _ref$onConfirm,
        _ref$onCancel = _ref.onCancel,
        onCancel = _ref$onCancel === void 0 ? undefined : _ref$onCancel;
    return new components_Alert_Alert({
      type: components_Alert_Alert.TYPES.ERROR,
      message: message,
      htmlMessage: htmlMessage,
      title: title,
      titleIcon: titleIcon,
      confirmText: confirmText,
      cancelText: cancelText,
      className: className,
      callbacks: {
        onClose: onClose,
        onConfirm: onConfirm,
        onCancel: onCancel
      }
    }).show();
  }
});
Object.defineProperty(AlertOptionPane, "showWarningAlert", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref2) {
    var _ref2$message = _ref2.message,
        message = _ref2$message === void 0 ? components_Alert_Alert.DEFAULT_TEXT.MESSAGE : _ref2$message,
        _ref2$title = _ref2.title,
        title = _ref2$title === void 0 ? "Warning" : _ref2$title,
        _ref2$titleIcon = _ref2.titleIcon,
        titleIcon = _ref2$titleIcon === void 0 ? external__react__default.a.createElement("i", {
      className: "fas fa-exclamation-circle"
    }) : _ref2$titleIcon,
        _ref2$htmlMessage = _ref2.htmlMessage,
        htmlMessage = _ref2$htmlMessage === void 0 ? undefined : _ref2$htmlMessage,
        _ref2$confirmText = _ref2.confirmText,
        confirmText = _ref2$confirmText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CONFIRM : _ref2$confirmText,
        _ref2$cancelText = _ref2.cancelText,
        cancelText = _ref2$cancelText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CANCEL : _ref2$cancelText,
        _ref2$className = _ref2.className,
        className = _ref2$className === void 0 ? "" : _ref2$className,
        _ref2$onClose = _ref2.onClose,
        onClose = _ref2$onClose === void 0 ? undefined : _ref2$onClose,
        _ref2$onConfirm = _ref2.onConfirm,
        onConfirm = _ref2$onConfirm === void 0 ? undefined : _ref2$onConfirm,
        _ref2$onCancel = _ref2.onCancel,
        onCancel = _ref2$onCancel === void 0 ? undefined : _ref2$onCancel;
    return new components_Alert_Alert({
      type: components_Alert_Alert.TYPES.WARNING,
      message: message,
      htmlMessage: htmlMessage,
      title: title,
      titleIcon: titleIcon,
      confirmText: confirmText,
      cancelText: cancelText,
      className: className,
      callbacks: {
        onClose: onClose,
        onConfirm: onConfirm,
        onCancel: onCancel
      }
    }).show();
  }
});
Object.defineProperty(AlertOptionPane, "showInfoAlert", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref3) {
    var _ref3$message = _ref3.message,
        message = _ref3$message === void 0 ? components_Alert_Alert.DEFAULT_TEXT.MESSAGE : _ref3$message,
        _ref3$title = _ref3.title,
        title = _ref3$title === void 0 ? "Information" : _ref3$title,
        _ref3$titleIcon = _ref3.titleIcon,
        titleIcon = _ref3$titleIcon === void 0 ? external__react__default.a.createElement("i", {
      className: "fas fa-info-circle"
    }) : _ref3$titleIcon,
        _ref3$htmlMessage = _ref3.htmlMessage,
        htmlMessage = _ref3$htmlMessage === void 0 ? undefined : _ref3$htmlMessage,
        _ref3$confirmText = _ref3.confirmText,
        confirmText = _ref3$confirmText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CONFIRM : _ref3$confirmText,
        _ref3$cancelText = _ref3.cancelText,
        cancelText = _ref3$cancelText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CANCEL : _ref3$cancelText,
        _ref3$className = _ref3.className,
        className = _ref3$className === void 0 ? "" : _ref3$className,
        _ref3$onClose = _ref3.onClose,
        onClose = _ref3$onClose === void 0 ? undefined : _ref3$onClose,
        _ref3$onConfirm = _ref3.onConfirm,
        onConfirm = _ref3$onConfirm === void 0 ? undefined : _ref3$onConfirm,
        _ref3$onCancel = _ref3.onCancel,
        onCancel = _ref3$onCancel === void 0 ? undefined : _ref3$onCancel;
    return new components_Alert_Alert({
      type: components_Alert_Alert.TYPES.INFO,
      message: message,
      htmlMessage: htmlMessage,
      title: title,
      titleIcon: titleIcon,
      confirmText: confirmText,
      cancelText: cancelText,
      className: className,
      callbacks: {
        onClose: onClose,
        onConfirm: onConfirm,
        onCancel: onCancel
      }
    }).show();
  }
});
Object.defineProperty(AlertOptionPane, "showSuccessAlert", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref4) {
    var _ref4$message = _ref4.message,
        message = _ref4$message === void 0 ? components_Alert_Alert.DEFAULT_TEXT.MESSAGE : _ref4$message,
        _ref4$title = _ref4.title,
        title = _ref4$title === void 0 ? "Success" : _ref4$title,
        _ref4$titleIcon = _ref4.titleIcon,
        titleIcon = _ref4$titleIcon === void 0 ? external__react__default.a.createElement("i", {
      className: "fas fa-check-circle"
    }) : _ref4$titleIcon,
        _ref4$htmlMessage = _ref4.htmlMessage,
        htmlMessage = _ref4$htmlMessage === void 0 ? undefined : _ref4$htmlMessage,
        _ref4$confirmText = _ref4.confirmText,
        confirmText = _ref4$confirmText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CONFIRM : _ref4$confirmText,
        _ref4$cancelText = _ref4.cancelText,
        cancelText = _ref4$cancelText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CANCEL : _ref4$cancelText,
        _ref4$className = _ref4.className,
        className = _ref4$className === void 0 ? "" : _ref4$className,
        _ref4$onClose = _ref4.onClose,
        onClose = _ref4$onClose === void 0 ? undefined : _ref4$onClose,
        _ref4$onConfirm = _ref4.onConfirm,
        onConfirm = _ref4$onConfirm === void 0 ? undefined : _ref4$onConfirm,
        _ref4$onCancel = _ref4.onCancel,
        onCancel = _ref4$onCancel === void 0 ? undefined : _ref4$onCancel;
    return new components_Alert_Alert({
      type: components_Alert_Alert.TYPES.SUCCESS,
      message: message,
      htmlMessage: htmlMessage,
      title: title,
      titleIcon: titleIcon,
      confirmText: confirmText,
      cancelText: cancelText,
      className: className,
      callbacks: {
        onClose: onClose,
        onConfirm: onConfirm,
        onCancel: onCancel
      }
    }).show();
  }
});
Object.defineProperty(AlertOptionPane, "showPlainAlert", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref5) {
    var _ref5$message = _ref5.message,
        message = _ref5$message === void 0 ? components_Alert_Alert.DEFAULT_TEXT.MESSAGE : _ref5$message,
        _ref5$title = _ref5.title,
        title = _ref5$title === void 0 ? components_Alert_Alert.DEFAULT_TEXT.TITLE : _ref5$title,
        _ref5$htmlMessage = _ref5.htmlMessage,
        htmlMessage = _ref5$htmlMessage === void 0 ? undefined : _ref5$htmlMessage,
        _ref5$titleIcon = _ref5.titleIcon,
        titleIcon = _ref5$titleIcon === void 0 ? null : _ref5$titleIcon,
        _ref5$confirmText = _ref5.confirmText,
        confirmText = _ref5$confirmText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CONFIRM : _ref5$confirmText,
        _ref5$cancelText = _ref5.cancelText,
        cancelText = _ref5$cancelText === void 0 ? components_Alert_Alert.DEFAULT_TEXT.CANCEL : _ref5$cancelText,
        _ref5$className = _ref5.className,
        className = _ref5$className === void 0 ? "" : _ref5$className,
        _ref5$onClose = _ref5.onClose,
        onClose = _ref5$onClose === void 0 ? undefined : _ref5$onClose,
        _ref5$onConfirm = _ref5.onConfirm,
        onConfirm = _ref5$onConfirm === void 0 ? undefined : _ref5$onConfirm,
        _ref5$onCancel = _ref5.onCancel,
        onCancel = _ref5$onCancel === void 0 ? undefined : _ref5$onCancel;
    return new components_Alert_Alert({
      type: components_Alert_Alert.TYPES.PLAIN,
      message: message,
      htmlMessage: htmlMessage,
      title: title,
      titleIcon: titleIcon,
      confirmText: confirmText,
      cancelText: cancelText,
      className: className,
      callbacks: {
        onClose: onClose,
        onConfirm: onConfirm,
        onCancel: onCancel
      }
    }).show();
  }
});
/* harmony default export */ var Alert_AlertOptionPane = __webpack_exports__["a"] = (AlertOptionPane);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./services/smart-contracts/factoryContract.js + 1 modules
var factoryContract = __webpack_require__(18);

// EXTERNAL MODULE: ./redux/actions.js
var actions = __webpack_require__(10);

// EXTERNAL MODULE: ./services/smart-contracts/TemplateContract.js + 1 modules
var TemplateContract = __webpack_require__(8);

// CONCATENATED MODULE: ./services/smart-contracts/PreviousContract.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var PreviousContract =
/*#__PURE__*/
function (_TemplateContract) {
  _inherits(PreviousContract, _TemplateContract);

  function PreviousContract(address) {
    var _this;

    _classCallCheck(this, PreviousContract);

    _this = _possibleConstructorReturn(this, (PreviousContract.__proto__ || Object.getPrototypeOf(PreviousContract)).call(this, address));

    PreviousContract__initialiseProps.call(_assertThisInitialized(_this));

    return _this;
  }

  return PreviousContract;
}(TemplateContract["a" /* default */]);

Object.defineProperty(PreviousContract, "hasContractAddress", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: []
});
Object.defineProperty(PreviousContract, "instance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: null
});
Object.defineProperty(PreviousContract, "getInstance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(address) {
    if (PreviousContract.hasContractAddress[address]) {
      return PreviousContract.instance;
    }

    PreviousContract.instance = new PreviousContract(address);
    PreviousContract.hasContractAddress[address] = true;
    return PreviousContract.instance;
  }
});

var PreviousContract__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "fetch", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function () {
      var _value = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.all([_this2.getAddress(), _this2.getWinningNumber(), _this2.getGameEndTime(), _this2.getLastGuessAddress()]).then(_this2.arrayToObject));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function value() {
        return _value.apply(this, arguments);
      };
    }()
  });
};

/* harmony default export */ var smart_contracts_PreviousContract = (PreviousContract);
// CONCATENATED MODULE: ./services/Dispatcher.js


function Dispatcher__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function Dispatcher__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Dispatcher_Dispatcher =
/*#__PURE__*/
function () {
  function Dispatcher() {
    Dispatcher__classCallCheck(this, Dispatcher);
  }

  _createClass(Dispatcher, null, [{
    key: "updateContracts",
    value: function () {
      var _updateContracts = Dispatcher__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(dispatch) {
        var masterContract, templateContractRequest, templateContract, previousContractRequest, previousContract;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return factoryContract["a" /* default */].fetch();

              case 2:
                masterContract = _context.sent;
                templateContractRequest = TemplateContract["a" /* default */].getInstance(masterContract.latestSpawnedContract);
                _context.next = 6;
                return templateContractRequest.fetch();

              case 6:
                templateContract = _context.sent;
                dispatch(Object(actions["c" /* updateFactoryContract */])(masterContract));
                dispatch(Object(actions["f" /* updateTemplateContract */])(templateContract));

                if (!masterContract.previousContract) {
                  _context.next = 15;
                  break;
                }

                previousContractRequest = smart_contracts_PreviousContract.getInstance(masterContract.previousContract);
                _context.next = 13;
                return previousContractRequest.fetch();

              case 13:
                previousContract = _context.sent;
                dispatch(Object(actions["e" /* updatePreviousContract */])(previousContract));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function updateContracts(_x) {
        return _updateContracts.apply(this, arguments);
      };
    }()
  }]);

  return Dispatcher;
}();

/* harmony default export */ var services_Dispatcher = __webpack_exports__["a"] = (Dispatcher_Dispatcher);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Address = function Address(_ref) {
  var address = _ref.address,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    style: _objectSpread({
      wordBreak: "break-all"
    }, style)
  }, address);
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_smart_contracts_factoryContract__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_smart_contracts_TemplateContract__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_Dispatcher__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__settings__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








/* harmony default export */ __webpack_exports__["a"] = (function (PageComponent) {
  var ContractFetcher =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ContractFetcher, _Component);

    _createClass(ContractFetcher, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(appContext) {
          var reduxStore;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  reduxStore = appContext.reduxStore;
                  _context.next = 3;
                  return __WEBPACK_IMPORTED_MODULE_6__services_Dispatcher__["a" /* default */].updateContracts(reduxStore.dispatch);

                case 3:
                  _context.next = 5;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__services_utils__["a" /* getChildProps */])(PageComponent, appContext);

                case 5:
                  return _context.abrupt("return", _context.sent);

                case 6:
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

    function ContractFetcher(props) {
      var _this;

      _classCallCheck(this, ContractFetcher);

      _this = _possibleConstructorReturn(this, (ContractFetcher.__proto__ || Object.getPrototypeOf(ContractFetcher)).call(this));
      Object.defineProperty(_assertThisInitialized(_this), "addContractUpdateTimer", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          _this.timer = setInterval(function () {
            return __WEBPACK_IMPORTED_MODULE_6__services_Dispatcher__["a" /* default */].updateContracts(_this.props.dispatch);
          }, __WEBPACK_IMPORTED_MODULE_7__settings___default.a.contractUpdateInterval.seconds * 1000);
        }
      });
      _this.templateContractRequest = new __WEBPACK_IMPORTED_MODULE_3__services_smart_contracts_TemplateContract__["a" /* default */](props.factoryContract.latestSpawnedContract);
      return _this;
    }

    _createClass(ContractFetcher, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PageComponent, _extends({
          addContractUpdateTimer: this.addContractUpdateTimer,
          templateContractRequest: this.templateContractRequest,
          factoryContractRequest: __WEBPACK_IMPORTED_MODULE_2__services_smart_contracts_factoryContract__["a" /* default */]
        }, this.props));
      }
    }]);

    return ContractFetcher;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  Object.defineProperty(ContractFetcher, "mapStateToProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref) {
      var factoryContract = _ref.factoryContract,
          templateContract = _ref.templateContract,
          previousContract = _ref.previousContract;
      return {
        factoryContract: factoryContract,
        templateContract: templateContract,
        previousContract: previousContract
      };
    }
  });
  return Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(ContractFetcher.mapStateToProps)(ContractFetcher);
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_smart_contracts_Web3__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_actions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Alert_AlertOptionPane__ = __webpack_require__(22);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







/* harmony default export */ __webpack_exports__["a"] = (function (Component) {
  var MetamaskAccount =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MetamaskAccount, _Component);

    function MetamaskAccount() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, MetamaskAccount);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MetamaskAccount.__proto__ || Object.getPrototypeOf(MetamaskAccount)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "subscribeToAccountUpdate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          _this.handleAccountUpdate = function (data) {
            var address = !data.selectedAddress ? null : data.selectedAddress.toLowerCase();
            var accountAddress = !_this.props.metamaskAccount.address ? null : _this.props.metamaskAccount.address.toLowerCase();

            if (address !== accountAddress) {
              return _this.dispatchUpdateAccount();
            }
          };

          _this.web3.onMetamaskUpdate(_this.handleAccountUpdate);
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "dispatchUpdateAccount", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
          var _value = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", _this.web3.fetchAccount().then(function (account) {
                      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["d" /* updateMetamaskAccount */])(account));
                    }).catch(function (err) {
                      console.error(err);

                      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__redux_actions__["d" /* updateMetamaskAccount */])({}));
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function value() {
            return _value.apply(this, arguments);
          };
        }()
      }), Object.defineProperty(_assertThisInitialized(_this), "unsubscribeToAccountUpdate", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          if (_this.web3.hasMetaMask()) {
            _this.web3.unsubscribeToMetmaskUpdate(_this.handleAccountUpdate);
          }
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "isModernDappBrowser", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          return window.ethereum;
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "isLegacyDappBrowser", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function value() {
          return window.web3;
        }
      }), Object.defineProperty(_assertThisInitialized(_this), "askForPermission", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function () {
          var _value2 = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return ethereum.enable();

                  case 3:
                    _context2.next = 10;
                    break;

                  case 5:
                    _context2.prev = 5;
                    _context2.t0 = _context2["catch"](0);
                    __WEBPACK_IMPORTED_MODULE_6__Alert_AlertOptionPane__["a" /* default */].showInfoAlert({
                      message: "Please note that the site won't work properly without access " + "to your metamask account."
                    });
                    console.error(_context2.t0);
                    return _context2.abrupt("return", false);

                  case 10:
                    return _context2.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 5]]);
          }));

          return function value() {
            return _value2.apply(this, arguments);
          };
        }()
      }), _temp));
    }

    _createClass(MetamaskAccount, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
          var hasPermission;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.web3 = __WEBPACK_IMPORTED_MODULE_2__services_smart_contracts_Web3__["a" /* default */].getInstance();

                  if (!this.isModernDappBrowser()) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.next = 4;
                  return this.askForPermission();

                case 4:
                  hasPermission = _context3.sent;

                  if (!hasPermission) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 8;
                  return this.dispatchUpdateAccount();

                case 8:
                  this.subscribeToAccountUpdate();

                case 9:
                  _context3.next = 15;
                  break;

                case 11:
                  if (!this.isLegacyDappBrowser()) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.next = 14;
                  return this.dispatchUpdateAccount();

                case 14:
                  this.subscribeToAccountUpdate();

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        };
      }()
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unsubscribeToAccountUpdate();
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, {
          metamaskAccount: this.props.metamaskAccount
        });
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(appContext) {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__services_utils__["a" /* getChildProps */])(Component, appContext);

                case 2:
                  return _context4.abrupt("return", _context4.sent);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return MetamaskAccount;
  }(Component);

  Object.defineProperty(MetamaskAccount, "mapStateToProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(_ref2) {
      var metamaskAccount = _ref2.metamaskAccount;
      return {
        metamaskAccount: metamaskAccount
      };
    }
  });
  return Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(MetamaskAccount.mapStateToProps)(MetamaskAccount);
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(9);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(3);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./site-components/page/Page.js + 9 modules
var Page = __webpack_require__(12);

// EXTERNAL MODULE: ./site-components/hocs/withContracts.js
var withContracts = __webpack_require__(25);

// EXTERNAL MODULE: ./components/hocs/withMetamaskAccount.js
var withMetamaskAccount = __webpack_require__(27);

// EXTERNAL MODULE: ./redux/actions.js
var actions = __webpack_require__(10);

// EXTERNAL MODULE: ./services/utils.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Alert/AlertOptionPane.js + 2 modules
var AlertOptionPane = __webpack_require__(22);

// EXTERNAL MODULE: ./settings.json
var settings = __webpack_require__(5);
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// CONCATENATED MODULE: ./site-components/Alerts.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Alerts_TransactionHash = function TransactionHash(_ref) {
  var transaction = _ref.transaction;
  return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("p", {
    className: "mb-0"
  }, "Transaction Hash:"), external__react__default.a.createElement("p", {
    className: "lighter"
  }, external__react__default.a.createElement("a", {
    target: "_blank",
    style: {
      wordBreak: "break-all"
    },
    href: "".concat(settings_default.a.etherscanUrl, "/tx/").concat(transaction.transactionHash)
  }, transaction.transactionHash)));
};

var Alerts_Alerts =
/*#__PURE__*/
function () {
  function Alerts() {
    _classCallCheck(this, Alerts);
  }

  _createClass(Alerts, null, [{
    key: "showOraclizeError",
    value: function showOraclizeError(transaction) {
      return AlertOptionPane["a" /* default */].showErrorAlert({
        title: "Oraclize Error",
        titleIcon: null,
        htmlMessage: external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", null, "Unfortunately, we were unable to retrieve a random number from the HPB HRNG to start a new game."), external__react__default.a.createElement(Alerts_TransactionHash, {
          transaction: transaction
        }))
      });
    }
  }, {
    key: "showNewGameCreated",
    value: function showNewGameCreated(transaction) {
      return AlertOptionPane["a" /* default */].showSuccessAlert({
        title: "You have started a new game!",
        titleIcon: null,
        htmlMessage: external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", null, "A new game has now been started"), external__react__default.a.createElement(Alerts_TransactionHash, {
          transaction: transaction
        }))
      });
    }
  }, {
    key: "showGuessResults",
    value: function showGuessResults(transaction, templateContract) {
      // if(templateContract.correctNumber === guess){
      //     return AlertOptionPane.showSuccessAlert({
      //         title: "You guessed correctly!",
      //         titleIcon: null,
      //         htmlMessage: (
      //             <div>
      //                 <p>
      //                     Congratulations! You guessed correctly! Please click on the "Start New Game" button
      //                     which will initiate the transfer of Eth from the smart contract to your wallet.
      //                 </p>
      //                 <TransactionHash transaction={transaction}/>
      //             </div>
      //         )
      //     });
      // }
      return AlertOptionPane["a" /* default */].showSuccessAlert({
        title: "Transaction Completed",
        titleIcon: null,
        htmlMessage: external__react__default.a.createElement("div", null, templateContract.nextGuess < 18 ? external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("p", null, "If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the timer will reset and the game will be available for another guess, but don\u2019t sweat it... Remember that if the countdown timer reaches 00:00 and nobody else makes a guess, you\u2019ll win all the HPB in the contract anyway!")) : external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("p", null, "If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the game will have ended without a winner. If you would be so kind to click on the \"Start New Game\" button and generate a new HPB17 game contract, we will automatically refund you your HPB! We hope you enjoyed playing, and hope you\u2019ll join us for the next game. Remember the first guess of every game is free!")), external__react__default.a.createElement(Alerts_TransactionHash, {
          transaction: transaction
        }))
      });
    }
  }]);

  return Alerts;
}();

/* harmony default export */ var site_components_Alerts = (Alerts_Alerts);
// EXTERNAL MODULE: ./services/Dispatcher.js + 1 modules
var Dispatcher = __webpack_require__(23);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./services/className.js
var services_className = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PositiveIntegerInput.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PositiveIntegerInput__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PositiveIntegerInput__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PositiveIntegerInput__createClass(Constructor, protoProps, staticProps) { if (protoProps) PositiveIntegerInput__defineProperties(Constructor.prototype, protoProps); if (staticProps) PositiveIntegerInput__defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var filterObject = function filterObject(objectToFilter, objectToFilterOut) {
  var filteredObject = {};
  Object.keys(objectToFilter).filter(function (key) {
    return !Object.keys(objectToFilterOut).includes(key);
  }).forEach(function (key) {
    filteredObject[key] = objectToFilter[key];
  });
  return filteredObject;
};

var PositiveIntegerInput_PositiveIntegerInput =
/*#__PURE__*/
function (_Component) {
  _inherits(PositiveIntegerInput, _Component);

  function PositiveIntegerInput(props) {
    var _this;

    PositiveIntegerInput__classCallCheck(this, PositiveIntegerInput);

    _this = _possibleConstructorReturn(this, (PositiveIntegerInput.__proto__ || Object.getPrototypeOf(PositiveIntegerInput)).call(this, props));
    _this.state = {};
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.getValueToDisplay = _this.getValueToDisplay.bind(_assertThisInitialized(_this));
    return _this;
  }

  PositiveIntegerInput__createClass(PositiveIntegerInput, [{
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.target.value === '') {
        this.props.onCorrectInput(event);
        this.setState({
          value: event.target.value
        });
      } else if (!/^\d+$/.test(event.target.value)) {
        this.props.onIncorrectInput(event);
      } else if (event.target.value.startsWith('00')) {
        this.props.onIncorrectInput(event);
      } else {
        var _props = this.props,
            lowestDigit = _props.lowestDigit,
            highestDigit = _props.highestDigit;
        var keyPressed = parseFloat(event.target.value);

        if (event.target.value.startsWith('0') && event.target.value.length > 1) {
          if (!event.target.value.startsWith("0.")) {
            return this.props.onIncorrectInput(event);
          }
        }

        if (isNaN(keyPressed)) {
          this.props.onIncorrectInput(event);
          return;
        }

        var cannotMatchLowYet = event.target.value.length < lowestDigit.toString().length;
        var isAboveOrEqualToLow = keyPressed >= lowestDigit || cannotMatchLowYet;
        var dontMatchHigh = highestDigit <= 0;
        var isBelowOrEqualToHigh = keyPressed <= highestDigit || dontMatchHigh;
        var numberIsInRange = isAboveOrEqualToLow && isBelowOrEqualToHigh;

        if (!numberIsInRange) {
          this.props.onIncorrectInput(event);
        } else {
          this.props.onCorrectInput(event);
          this.setState({
            value: event.target.value
          });
        }
      }
    }
  }, {
    key: "getValueToDisplay",
    value: function getValueToDisplay() {
      if (this.props.value) {
        return this.props.value;
      } else if (this.state.value) {
        return this.state.value;
      }

      return this.props.defaultValue !== '0' ? this.props.defaultValue : this.props.value;
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("input", _extends({
        type: "text"
      }, filterObject(this.props, PositiveIntegerInput.defaultProps), {
        className: Object(services_className["b" /* joinClassNames */])("input", this.props.className),
        onChange: this.handleKeyDown,
        value: this.getValueToDisplay()
      }));
    }
  }]);

  return PositiveIntegerInput;
}(external__react_["Component"]);

Object.defineProperty(PositiveIntegerInput_PositiveIntegerInput, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    lowestDigit: 0,
    highestDigit: 0,
    value: '',
    defaultValue: '',
    className: '',
    onIncorrectInput: function onIncorrectInput(event) {
      event.preventDefault();
    },
    onCorrectInput: function onCorrectInput() {}
  }
});
/* harmony default export */ var components_PositiveIntegerInput = (PositiveIntegerInput_PositiveIntegerInput);
// CONCATENATED MODULE: ./components/containers/Message.js
function Message__extends() { Message__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Message__extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Message_Message = function Message(_ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      heading = _ref.heading,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? [] : _ref$list,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["show", "heading", "list", "children", "className"]);

  var messageClass = Object(services_className["a" /* classNames */])({
    "message": className,
    "hide": !show
  }, className);
  return external__react__default.a.createElement("div", Message__extends({
    className: messageClass
  }, props), heading && external__react__default.a.createElement("h4", {
    className: "heading"
  }, heading), list.length > 0 && external__react__default.a.createElement("ul", null, list.map(function (listItem, i) {
    return external__react__default.a.createElement("li", {
      key: i
    }, listItem);
  })), children);
};
// CONCATENATED MODULE: ./site-components/messages.js
function messages__extends() { messages__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return messages__extends.apply(this, arguments); }




var messages_LoginMessage = function LoginMessage() {
  return external__react__default.a.createElement(Message_Message, {
    className: "message-secondary",
    heading: "We were unable to detect your Metamask account or similar web3 browser"
  }, external__react__default.a.createElement("p", null, "Please login to Metamask/Cipher/Trust or similar in order to play."));
};
var messages_RandomNumberWaitMessage = function RandomNumberWaitMessage() {
  return external__react__default.a.createElement("div", {
    className: "wrapper-4"
  }, external__react__default.a.createElement(Message_Message, {
    className: "message-info text-left mb-15",
    heading: "Waiting for contract to update.",
    list: ["This could take up to ".concat(settings_default.a.randomNumberWaitTime.seconds, " seconds")]
  }));
};
var messages_OraclizeErrorMessage = function OraclizeErrorMessage() {
  return external__react__default.a.createElement("div", {
    className: "wrapper-4"
  }, external__react__default.a.createElement(Message_Message, {
    className: "message-danger text-left mb-15",
    heading: "HPB Error",
    list: ["Unfortunately, we were unable to retrieve a random number from HPB " + "to start a new game.", "Please click on Start New Game to generate a new game and try again."]
  }));
};
var messages_TransactionMessage = function TransactionMessage(props) {
  return external__react__default.a.createElement("div", {
    className: "wrapper-4"
  }, external__react__default.a.createElement(Message_Message, messages__extends({
    className: "mt-15 message-info text-left",
    heading: "Waiting for transaction confirmation",
    list: ["Please allow up to 60 seconds for the transaction to " + "be processed and written to the HPB blockchain."]
  }, props)));
};
// CONCATENATED MODULE: ./components/Button.js
function Button__extends() { Button__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button__extends.apply(this, arguments); }

function Button__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Button_Button = function Button(_ref) {
  var className = _ref.className,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$outlined = _ref.outlined,
      outlined = _ref$outlined === void 0 ? false : _ref$outlined,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? false : _ref$message,
      _ref$segment = _ref.segment,
      segment = _ref$segment === void 0 ? false : _ref$segment,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      children = _ref.children,
      props = Button__objectWithoutProperties(_ref, ["className", "loading", "outlined", "message", "segment", "disabled", "children"]);

  var buttonClass = Object(services_className["a" /* classNames */])({
    "button": true,
    "message": message,
    "segment": segment,
    "outlined": outlined,
    "loading": loading,
    "disabled": disabled
  }, className);
  return external__react__default.a.createElement("button", Button__extends({
    disabled: disabled,
    className: buttonClass
  }, props), children);
};
// CONCATENATED MODULE: ./site-components/containers/GuessForm.js
function GuessForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GuessForm__typeof = function _typeof(obj) { return typeof obj; }; } else { GuessForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GuessForm__typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GuessForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GuessForm__possibleConstructorReturn(self, call) { if (call && (GuessForm__typeof(call) === "object" || typeof call === "function")) { return call; } return GuessForm__assertThisInitialized(self); }

function GuessForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GuessForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) GuessForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) GuessForm__defineProperties(Constructor, staticProps); return Constructor; }

function GuessForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function GuessForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var GuessForm_GuessForm =
/*#__PURE__*/
function (_Component) {
  GuessForm__inherits(GuessForm, _Component);

  GuessForm__createClass(GuessForm, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.defaultGuess !== state.defaultGuess) {
        return _objectSpread({}, state, {
          guess: props.defaultGuess,
          defaultGuess: props.defaultGuess
        });
      }

      return null;
    }
  }]);

  function GuessForm(props) {
    var _this;

    GuessForm__classCallCheck(this, GuessForm);

    _this = GuessForm__possibleConstructorReturn(this, (GuessForm.__proto__ || Object.getPrototypeOf(GuessForm)).call(this));
    Object.defineProperty(GuessForm__assertThisInitialized(_this), "renderMessage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            lowValue = _this$props.lowValue,
            highValue = _this$props.highValue;
        return _this.state.isHandlingGuess ? external__react__default.a.createElement(messages_TransactionMessage, null) : external__react__default.a.createElement(Message_Message, {
          show: _this.state.formInvalid,
          className: "message-secondary"
        }, external__react__default.a.createElement("p", {
          className: "normal"
        }, "The guess must be between ", lowValue, " and ", highValue));
      }
    });
    Object.defineProperty(GuessForm__assertThisInitialized(_this), "handleGuess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            lowValue = _this$props2.lowValue,
            highValue = _this$props2.highValue;
        var guess = parseFloat(_this.state.guess);

        if (guess < lowValue || guess > highValue || _this.state.guess === "") {
          _this.setState({
            formInvalid: true,
            isHandlingGuess: false
          });
        } else {
          return _this.props.onGuess(_this.state.guess).then(function () {
            return _this.setState({
              isHandlingGuess: false
            });
          });
        }
      }
    });
    _this.state = {
      formInvalid: false,
      isHandlingGuess: false,
      guess: props.defaultGuess,
      defaultGuess: props.defaultGuess
    };
    return _this;
  }

  GuessForm__createClass(GuessForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var highValue = this.props.highValue;
      return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("div", {
        className: "input-with-button divider-2"
      }, external__react__default.a.createElement(components_PositiveIntegerInput, {
        className: this.state.formInvalid ? "invalid" : "",
        highestDigit: highValue,
        disabled: this.state.isHandlingGuess,
        value: this.state.guess,
        onIncorrectInput: function onIncorrectInput() {
          _this2.setState({
            formInvalid: true
          });
        },
        onCorrectInput: function onCorrectInput(event) {
          _this2.setState({
            formInvalid: false,
            guess: event.target.value
          });
        }
      }), external__react__default.a.createElement(Button_Button, {
        className: "secondary",
        loading: this.state.isHandlingGuess,
        disabled: this.state.isHandlingGuess,
        onClick: function onClick() {
          _this2.setState({
            isHandlingGuess: true
          }, function () {
            _this2.handleGuess();
          });
        }
      }, "Guess")), external__react__default.a.createElement("div", {
        className: "wrapper-4"
      }, this.renderMessage()));
    }
  }]);

  return GuessForm;
}(external__react_["Component"]);

/* harmony default export */ var containers_GuessForm = (GuessForm_GuessForm);
// EXTERNAL MODULE: ./site-components/Address.js
var Address = __webpack_require__(24);

// CONCATENATED MODULE: ./components/containers/HideFragment.js
function HideFragment__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HideFragment__typeof = function _typeof(obj) { return typeof obj; }; } else { HideFragment__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HideFragment__typeof(obj); }

function HideFragment__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HideFragment__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HideFragment__createClass(Constructor, protoProps, staticProps) { if (protoProps) HideFragment__defineProperties(Constructor.prototype, protoProps); if (staticProps) HideFragment__defineProperties(Constructor, staticProps); return Constructor; }

function HideFragment__possibleConstructorReturn(self, call) { if (call && (HideFragment__typeof(call) === "object" || typeof call === "function")) { return call; } return HideFragment__assertThisInitialized(self); }

function HideFragment__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function HideFragment__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


/**
 * Hides an element which may change between the initial server and client
 * side rendering.
 */

var HideFragment_HideFragment =
/*#__PURE__*/
function (_Component) {
  HideFragment__inherits(HideFragment, _Component);

  function HideFragment() {
    var _ref;

    var _temp, _this;

    HideFragment__classCallCheck(this, HideFragment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return HideFragment__possibleConstructorReturn(_this, (_temp = _this = HideFragment__possibleConstructorReturn(this, (_ref = HideFragment.__proto__ || Object.getPrototypeOf(HideFragment)).call.apply(_ref, [this].concat(args))), Object.defineProperty(HideFragment__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        hide: true
      }
    }), _temp));
  }

  HideFragment__createClass(HideFragment, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        hide: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return !this.state.hide ? external__react__default.a.createElement(external__react_["Fragment"], null, this.props.children) : null;
    }
  }]);

  return HideFragment;
}(external__react_["Component"]);

/* harmony default export */ var containers_HideFragment = (HideFragment_HideFragment);
// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(7);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./external-components/react-flip-counter/Flipper/schema.js

/* harmony default export */ var schema = ({
  types: {
    reverse: external__prop_types_["bool"],
    now: external__prop_types_["number"],
    min: external__prop_types_["number"],
    max: external__prop_types_["number"]
  },
  defaults: {
    reverse: false,
    now: 0,
    min: 0,
    max: 9
  }
});
// CONCATENATED MODULE: ./external-components/react-flip-counter/Flipper/index.js
function Flipper__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Flipper__typeof = function _typeof(obj) { return typeof obj; }; } else { Flipper__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Flipper__typeof(obj); }

function Flipper__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Flipper__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Flipper__createClass(Constructor, protoProps, staticProps) { if (protoProps) Flipper__defineProperties(Constructor.prototype, protoProps); if (staticProps) Flipper__defineProperties(Constructor, staticProps); return Constructor; }

function Flipper__possibleConstructorReturn(self, call) { if (call && (Flipper__typeof(call) === "object" || typeof call === "function")) { return call; } return Flipper__assertThisInitialized(self); }

function Flipper__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Flipper__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Flipper_Flipper =
/*#__PURE__*/
function (_React$Component) {
  Flipper__inherits(Flipper, _React$Component);

  function Flipper(props) {
    var _this;

    Flipper__classCallCheck(this, Flipper);

    _this = Flipper__possibleConstructorReturn(this, (Flipper.__proto__ || Object.getPrototypeOf(Flipper)).call(this, props));
    /**
     * @type {object}
     * @property {object} toggle - flag for switching index of current digit index
     */

    _this.state = {};
    return _this;
  }
  /**
   * Inverse state.toggle flag
   */


  Flipper__createClass(Flipper, [{
    key: "tick",
    value: function tick() {
      this.setState({
        toggle: !this.state.toggle
      });
    }
    /**
     * Returns next/prev value of digits linked list
     * @param {number} current - currently active value
     * @param {string} direction - list move direction
     * @return {number} linked list value
     */

  }, {
    key: "getCount",
    value: function getCount(current, direction) {
      var isRev = this.props.reverse,
          isNext = direction == "next",
          head = this.props[isRev ? "min" : "max"],
          tail = this.props[isRev ? "max" : "min"];
      return isNext ? current == head ? tail : current + (isRev ? -1 : 1) : current == tail ? head : current + (isRev ? 1 : -1);
    }
    /**
     * Execute flip action in "props.now" value has been changed
     * @param {object} newProps - next props object
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      newProps.now !== this.props.now && this.tick();
    }
    /**
     * Generate semi linked list structure with siblings of active number
     * Index of active number depends of "state.toggle" flag
     * @param {object} newProps - next props object
     * @return {array} linked list slice
     */

  }, {
    key: "getRange",
    value: function getRange(initial) {
      var prev = this.getCount(initial, "prev"),
          arr = [initial, prev, this.getCount(prev, "prev")];
      arr[!this.state.toggle ? "unshift" : "push"](!this.state.toggle ? this.getCount(initial, "next") : this.getCount(prev, "prev"));
      return arr;
    }
    /**
     * Render card sets for number
     * @return {ReactElement} markup
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", {
        className: external__classnames__default()("cards", this.props.className)
      }, this.getRange(this.props.now).map(function (val, i) {
        return external__react__default.a.createElement("div", {
          key: "flip-card".concat(i),
          className: external__classnames__default()("card", _this2.props.cardClassName, {
            "now": val == _this2.props.now
          })
        }, external__react__default.a.createElement("div", {
          className: external__classnames__default()("sides", _this2.props.sidesWrapClassName)
        }, ["front", "back"].map(function (key) {
          return external__react__default.a.createElement("div", {
            key: "side".concat(key),
            className: external__classnames__default()("side", _this2.props.sideClassName, key)
          }, external__react__default.a.createElement("div", {
            className: external__classnames__default()("side-num", _this2.props.numClassName)
          }, key == "front" ? val : _this2.getCount(val, "next")));
        })));
      }));
    }
  }]);

  return Flipper;
}(external__react__default.a.Component);

;
Flipper_Flipper.defaultProps = schema.defaults;
/* harmony default export */ var react_flip_counter_Flipper = (Flipper_Flipper);
// CONCATENATED MODULE: ./external-components/react-flip-counter/schema.js

/* harmony default export */ var react_flip_counter_schema = ({
  types: {
    stop: external__prop_types__default.a.instanceOf(Date),
    onStart: external__prop_types__default.a.func,
    onStop: external__prop_types__default.a.func,
    isStopped: external__prop_types__default.a.bool,
    notifyAt: external__prop_types__default.a.number,
    notify: external__prop_types__default.a.func,
    hasNotified: external__prop_types__default.a.bool
  },
  defaults: {
    stop: new Date("Mon Nov 30 2020 00:00:00 GMT+0300 (MSK)")
  }
});
// CONCATENATED MODULE: ./external-components/react-flip-counter/index.js
function react_flip_counter__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { react_flip_counter__typeof = function _typeof(obj) { return typeof obj; }; } else { react_flip_counter__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return react_flip_counter__typeof(obj); }

function react_flip_counter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function react_flip_counter__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function react_flip_counter__createClass(Constructor, protoProps, staticProps) { if (protoProps) react_flip_counter__defineProperties(Constructor.prototype, protoProps); if (staticProps) react_flip_counter__defineProperties(Constructor, staticProps); return Constructor; }

function react_flip_counter__possibleConstructorReturn(self, call) { if (call && (react_flip_counter__typeof(call) === "object" || typeof call === "function")) { return call; } return react_flip_counter__assertThisInitialized(self); }

function react_flip_counter__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function react_flip_counter__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var react_flip_counter_Countdown =
/*#__PURE__*/
function (_React$Component) {
  react_flip_counter__inherits(Countdown, _React$Component);

  function Countdown(props) {
    var _this;

    react_flip_counter__classCallCheck(this, Countdown);

    _this = react_flip_counter__possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));
    /**
     * @type {object}
     * @property {object} diff - initial diff object
     */

    _this.state = {
      diff: _this.getDiffObject()
    };
    return _this;
  }
  /**
   * Create second interval
   */


  react_flip_counter__createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.setState({
          diff: _this2.getDiffObject()
        });

        _this2.isTimeOver() && _this2.stopCount();

        if (_this2.isTimeToNotify()) {
          _this2.notify();
        }

        _this2.isTimeOver() && _this2.stopCount();
      }, 1000);
    }
  }, {
    key: "notify",
    value: function notify() {
      if (!this.props.hasNotified) {
        this.props.notify();
      }
    }
    /**
     * Clears interval and drop notification
     */

  }, {
    key: "stopCount",
    value: function stopCount() {
      if (!this.props.isStopped) {
        this.props.onStop && this.props.onStop();
      }
    }
    /**
     * Destroy second interval
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
    /**
     * Calculate diff object between stop and current date
     * @return {Object} formatted value
     */

  }, {
    key: "getDiffObject",
    value: function getDiffObject() {
      var ms = Math.abs(this.props.stop.getTime() - new Date().getTime()),
          s = Math.floor(ms / 1000),
          m = Math.floor(s / 60),
          h = Math.floor(m / 60),
          d = Math.floor(h / 24);
      return {
        minutes: m % 60,
        seconds: s % 60
      };
    }
  }, {
    key: "isTimeToNotify",
    value: function isTimeToNotify() {
      if (!this.props.notifyAt) return false;
      return new Date().getTime() + this.props.notifyAt > this.props.stop.getTime();
    }
    /**
     * Return flag stop date reached
     * @return {Boolean}
     */

  }, {
    key: "isTimeOver",
    value: function isTimeOver() {
      return new Date().getTime() > this.props.stop.getTime();
    }
    /**
     * Returns formated to 2 digits string
     * @param {Number} data - raw value
     * @return {String} formatted value
     */

  }, {
    key: "getFormattedVal",
    value: function getFormattedVal(data) {
      return (data < 10 ? "0" + data : data) + "";
    }
    /**
     * Render Flipper component for each digit of diff object vals
     * @return {ReactElement} markup
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var forks = {
        hours: [[0, 2], [0, 4]],
        minutes: [[0, 5], [0, 9]],
        seconds: [[0, 5], [0, 9]]
      },
          isOver = this.isTimeOver();
      return external__react__default.a.createElement("div", {
        className: external__classnames__default()("countdown", this.props.className)
      }, Object.keys(this.state.diff).map(function (key) {
        return external__react__default.a.createElement("div", {
          key: key,
          className: external__classnames__default()("countdown-".concat(key), _this3.props.slotClassName)
        }, Array(2).fill(0).map(function (_, i) {
          return external__react__default.a.createElement(react_flip_counter_Flipper, {
            key: "".concat(key).concat(i),
            reverse: true,
            className: _this3.props.cardsClassName,
            cardClassName: _this3.props.cardClassName,
            sidesWrapClassName: _this3.props.sidesWrapClassName,
            sideClassName: _this3.props.sideClassName,
            numClassName: _this3.props.numClassName,
            now: !isOver ? +_this3.getFormattedVal(_this3.state.diff[key])[i] : 0,
            min: forks[key][i][0],
            max: forks[key][i][1]
          });
        }));
      }));
    }
  }]);

  return Countdown;
}(external__react__default.a.Component);

;
react_flip_counter_Countdown.defaultProps = react_flip_counter_schema.defaults;
/* harmony default export */ var react_flip_counter = (react_flip_counter_Countdown);
// CONCATENATED MODULE: ./site-components/containers/GameDetails.js




var GameDetails_GameDetails = function GameDetails(_ref) {
  var nextGuess = _ref.nextGuess,
      lowValue = _ref.lowValue,
      highValue = _ref.highValue,
      metamaskAddress = _ref.metamaskAddress,
      costOfNextGuess = _ref.costOfNextGuess,
      lastGuessAddress = _ref.lastGuessAddress,
      counterIsStopped = _ref.counterIsStopped,
      _ref$onCounterStop = _ref.onCounterStop,
      onCounterStop = _ref$onCounterStop === void 0 ? function () {} : _ref$onCounterStop,
      gameEndTime = _ref.gameEndTime,
      hasNotified = _ref.hasNotified,
      notify = _ref.notify,
      notifyAt = _ref.notifyAt,
      balance = _ref.balance;
  return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("h3", null, "The correct number is between ", lowValue, " and ", highValue), external__react__default.a.createElement("h3", null, "The next guess will be guess ", nextGuess, " ", external__react__default.a.createElement("p", null, "cost of next guess: ", costOfNextGuess === 0 ? "FREE!" : "".concat(costOfNextGuess, " HPB"))), external__react__default.a.createElement("h3", null, "The last HPB wallet address to make a guess was: ", external__react__default.a.createElement("p", null, lastGuessAddress === "0x0000000000000000000000000000000000000000" ? external__react__default.a.createElement("span", null, "Nobody has made a guess yet!") : metamaskAddress === lastGuessAddress ? external__react__default.a.createElement("span", null, "YOU, my friend!") : external__react__default.a.createElement(Address["a" /* Address */], {
    address: lastGuessAddress
  }))), external__react__default.a.createElement("div", {
    className: "divider-2"
  }, external__react__default.a.createElement(containers_HideFragment, null, external__react__default.a.createElement(react_flip_counter, {
    isStopped: counterIsStopped,
    onStop: onCounterStop,
    stop: new Date(gameEndTime),
    hasNotified: hasNotified,
    notifyAt: notifyAt,
    notify: notify
  }))), external__react__default.a.createElement("h3", null, "Amount of HPB currently stored in this contract: ", balance), external__react__default.a.createElement("h3", null, "Remember, even if you guess incorrectly, you will still win the HPB if the countdown timer reaches zero!"));
};
// CONCATENATED MODULE: ./site-components/containers/AdContainer.js
function AdContainer__extends() { AdContainer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdContainer__extends.apply(this, arguments); }

function AdContainer__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var AdContainer_AdContainer = function AdContainer(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      children = _ref.children,
      props = AdContainer__objectWithoutProperties(_ref, ["className", "children"]);

  return external__react__default.a.createElement("div", AdContainer__extends({
    className: Object(services_className["b" /* joinClassNames */])("ad", className)
  }, props), children);
};
// CONCATENATED MODULE: ./site-components/images/AdSidebar.js


var AdSidebar_AdSidebar = function AdSidebar() {
  return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://t.me/HPBglobal"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/hpbtelegram.png"
  }))), external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://hpbcentral.com"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/HPBcentral.png"
  }))), external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://waxlyrical.medium.com"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/waxlyrical.png"
  }))), external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://www.gate.io/en/coininfo/HPB"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/gateio.png"
  }))), external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://trade.kucoin.com/HPB-BTC"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/kucoin.png"
  }))), external__react__default.a.createElement(AdContainer_AdContainer, null, external__react__default.a.createElement("a", {
    target: "_blank",
    href: "https://mytrade.org/"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/ads/mytrade.png"
  }))));
};
// CONCATENATED MODULE: ./site-components/containers/StartNewGame.js





var StartNewGame_StartNewGame = function StartNewGame(_ref) {
  var isWaitingForRandomNumber = _ref.isWaitingForRandomNumber,
      oraclizeError = _ref.oraclizeError,
      startingGame = _ref.startingGame,
      gameWinner = _ref.gameWinner,
      metamaskAddress = _ref.metamaskAddress,
      onClick = _ref.onClick;

  var startNewGameButton = function startNewGameButton(title) {
    return external__react__default.a.createElement(Button_Button, {
      loading: startingGame || isWaitingForRandomNumber,
      disabled: startingGame,
      className: "primary",
      onClick: onClick
    }, title);
  };

  if (isWaitingForRandomNumber) {
    return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(messages_RandomNumberWaitMessage, null), startNewGameButton("Start New Game"));
  } else if (oraclizeError) {
    return external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(messages_OraclizeErrorMessage, null), startNewGameButton("Start New Game"));
  }

  return gameWinner === metamaskAddress ? external__react__default.a.createElement("div", {
    className: "wrapper-4"
  }, external__react__default.a.createElement(Message_Message, {
    className: "message-success mb-20",
    heading: "Contratulations!"
  }, external__react__default.a.createElement("p", null, "Congratulations! You won the game, click on the Claim Prize button to collect your HPB!")), startNewGameButton("Claim Prize")) : external__react__default.a.createElement("div", null, external__react__default.a.createElement("h3", null, "The game has now completed"), external__react__default.a.createElement("h4", null, "Wallet address ", external__react__default.a.createElement(Address["a" /* Address */], {
    address: gameWinner
  }), " was the winner!"), !metamaskAddress ? external__react__default.a.createElement(messages_LoginMessage, null) : external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement("h4", null, "It looks like the winner hasn't claimed their prize just yet, which means a new game hasn't been generated. If you don't want to wait, you can click the New Game button to generate a new smart contract and start a completely new game. A small fee will apply to generate a new smart contract game."), startNewGameButton("Start New Game")));
};
// EXTERNAL MODULE: ./components/Space.js
var Space = __webpack_require__(17);

// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__extends() { pages__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return pages__extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




















var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(Index, _Component);

  function Index(props) {
    var _this;

    pages__classCallCheck(this, Index);

    _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));
    Object.defineProperty(pages__assertThisInitialized(_this), "timerIsStopped", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return Date.now() > _this.props.templateContract.gameEndTime;
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleGuess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(guess) {
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", _this.props.templateContractRequest.makeGuess({
                    guessedNumber: guess,
                    walletAddress: _this.props.metamaskAccount.address
                  }).then(function (transaction) {
                    return _this.handleTransaction(transaction, parseInt(guess, 10));
                  }).then(function () {
                    return _this.props.dispatch(Object(actions["a" /* turnOffDangerMode */])());
                  }).catch(_this.handleTransactionError));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleTransactionError", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(err) {
        console.error(err);
        AlertOptionPane["a" /* default */].showErrorAlert({
          title: "Transaction Error",
          message: Object(utils["d" /* parseErrorString */])(err)
        });
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleTransaction", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee2(transaction, guess) {
          return regenerator__default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _this.props.templateContractRequest.fetch().then(function (templateContract) {
                    _this.props.dispatch(Object(actions["f" /* updateTemplateContract */])(templateContract));

                    site_components_Alerts.showGuessResults(transaction, _this.props.templateContract, guess);

                    if (_this.gameIsOver()) {
                      return _this.handleGameOver();
                    }
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x2, _x3) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleGameOver", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee3() {
          return regenerator__default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", Dispatcher["a" /* default */].updateContracts(_this.props.dispatch));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value() {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "gameIsOver", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var templateContract = _this.props.templateContract;
        return templateContract.nextGuess > 1 && templateContract.gameEndTime > 0 && Date.now() > templateContract.gameEndTime || templateContract.guessedCorrectly || !templateContract.randomNumberRetrieved || _this.state.isWaitingForRandomNumber;
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "calcDefaultGuess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return (_this.props.templateContract.lowValue + (_this.props.templateContract.highValue - _this.props.templateContract.lowValue - 1) / 2).toFixed(0);
      }
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "waitForRandomNumber", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee4() {
          return regenerator__default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve) {
                    var tries = 0;
                    var maxTries = settings_default.a.randomNumberWaitTime.seconds;
                    _this.timer = setInterval(function () {
                      tries++;
                      Dispatcher["a" /* default */].updateContracts(_this.props.dispatch);

                      if (_this.props.templateContract.randomNumberRetrieved || tries >= maxTries) {
                        _this.setState({
                          isWaitingForRandomNumber: false
                        });

                        resolve(clearInterval(_this.timer));
                      }
                    }, 1000);
                  }));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value() {
          return _value4.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(pages__assertThisInitialized(_this), "handleStartNewGame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.dispatch(Object(actions["a" /* turnOffDangerMode */])());

        _this.setState({
          isHandlingTransaction: true
        }, function () {
          var startNewGameMethod = !_this.props.templateContract.randomNumberRetrieved ? _this.props.templateContractRequest.startNewGameError : _this.props.templateContractRequest.startNewGame;
          return startNewGameMethod(_this.props.metamaskAccount.address).then(function (transaction) {
            _this.setState({
              isWaitingForRandomNumber: true
            });

            return Dispatcher["a" /* default */].updateContracts(_this.props.dispatch).then(function () {
              return transaction;
            });
          }).then(function (transaction) {
            return _this.waitForRandomNumber().then(function () {
              return transaction;
            });
          }).then(function (transaction) {
            return _this.props.templateContract.randomNumberRetrieved ? site_components_Alerts.showNewGameCreated(transaction) : site_components_Alerts.showOraclizeError(transaction);
          }).catch(_this.handleTransactionError).finally(function () {
            return _this.setState({
              isHandlingTransaction: false
            });
          });
        });
      }
    });
    _this.state = {
      isHandlingTransaction: false,
      isWaitingForRandomNumber: false
    };
    _this.defaultGuess = (props.templateContract.lowValue + (props.templateContract.highValue - props.templateContract.lowValue - 1) / 2).toFixed(0);
    _this.dangerModeStartTime = settings_default.a.dangerModeStartTime.minutes * 60000 + settings_default.a.dangerModeStartTime.seconds * 1000;
    return _this;
  }

  pages__createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.addContractUpdateTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          factoryContract = _props.factoryContract,
          templateContract = _props.templateContract,
          metamaskAccount = _props.metamaskAccount;
      var isLoggedIntoMetamask = Object.keys(metamaskAccount).length > 0;
      return external__react__default.a.createElement(Page["a" /* default */], {
        header: external__react__default.a.createElement(Space["a" /* Space */], {
          danger: this.props.dangerMode
        }),
        sidebar: external__react__default.a.createElement(AdSidebar_AdSidebar, null)
      }, external__react__default.a.createElement("div", {
        className: "glass container bg-color-white br-5"
      }, external__react__default.a.createElement("h2", {
        className: "display-6"
      }, external__react__default.a.createElement("a", {
        href: "".concat(settings_default.a.etherscanUrl, "/address/").concat(templateContract.address),
        target: "_blank"
      }, "Game Number ", factoryContract.count)), this.gameIsOver() ? external__react__default.a.createElement(StartNewGame_StartNewGame, {
        isWaitingForRandomNumber: this.state.isWaitingForRandomNumber,
        oraclizeError: !this.props.templateContract.randomNumberRetrieved,
        startingGame: this.state.isHandlingTransaction,
        metamaskAddress: metamaskAccount.address,
        gameWinner: templateContract.lastGuessAddress,
        onClick: this.handleStartNewGame
      }) : external__react__default.a.createElement(external__react_["Fragment"], null, external__react__default.a.createElement(GameDetails_GameDetails, pages__extends({}, templateContract, {
        metamaskAddress: metamaskAccount.address,
        counterIsStopped: this.timerIsStopped(),
        onCounterStop: this.handleGameOver,
        hasNotified: this.props.dangerMode || this.timerIsStopped(),
        notifyAt: this.dangerModeStartTime,
        notify: function notify() {
          return _this2.props.dispatch(Object(actions["b" /* turnOnDangerMode */])());
        }
      })), !isLoggedIntoMetamask ? external__react__default.a.createElement("div", {
        className: "wrapper-4"
      }, external__react__default.a.createElement(messages_LoginMessage, null)) : external__react__default.a.createElement(containers_GuessForm, pages__extends({
        defaultGuess: this.calcDefaultGuess(),
        onGuess: function onGuess(guess) {
          return _this2.handleGuess(guess);
        }
      }, templateContract))), this.state.isHandlingTransaction && !this.state.isWaitingForRandomNumber && external__react__default.a.createElement(messages_TransactionMessage, null)));
    }
  }]);

  return Index;
}(external__react_["Component"]);

Object.defineProperty(pages_Index, "mapStateToProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function value(_ref) {
    var dangerMode = _ref.dangerMode;
    return {
      dangerMode: dangerMode
    };
  }
});
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external__redux_["compose"])(withMetamaskAccount["a" /* default */], withContracts["a" /* default */], Object(external__react_redux_["connect"])(pages_Index.mapStateToProps))(pages_Index));

/***/ })
/******/ ]);