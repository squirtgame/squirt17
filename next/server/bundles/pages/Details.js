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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
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
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_components_page_Page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Space__ = __webpack_require__(17);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Details =
/*#__PURE__*/
function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__site_components_page_Page__["a" /* default */], {
        header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Space__["a" /* Space */], {
          danger: this.props.dangerMode
        }),
        contentClass: "full-width"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "HPB17 Smart Contract can be verified here: (URL to be updated for final release) ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://hpbscan.org/tx/0x4aac7dbd444a84c485a531e0f30742791c832cd343bd7bbb45a6bc7d05dab910",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "0x9accc0b9a45cd25d0c40559e60a8b6d410e07f1c"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        align: "left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Ok we know, guessing a number in such a wide range may seem impossible, but don't worry, the first guess of every game is FREE, and better still, if you guess incorrectly, then providing nobody else makes a guess after you, then you will win all the HPB stored in the contract anyway!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Yep, you heard us right. Get it wrong, and you can still win all the HPB!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "So what actually happens? Well as soon as you make a guess, a countdown timer starts. It begins counting down from 59m 59s, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins all the HPB in the contract!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "But what happens if someone else makes a guess? Well that person immediately becomes the \"last player to guess\" and the countdown timer resets to 59m 59s - Once again, if the timer reaches zero then that \"last player to guess\" wins all the HPB!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the \"guessing range\" shrinks after each subsequent guess."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 1 - FREE! ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 2 - 0.25 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 3 - 0.50 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 4 - 0.60 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 5 - 0.70 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 6 - 0.80 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 7 - 0.90 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 8 - 1.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 9 - 2.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 10 - 3.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 11 - 4.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 12 - 5.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 13 - 6.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 14 - 7.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 15 - 8.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 16 - 9.00 HPB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "                ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Guess 17 - 10.00 HPB - This final guess is automatically refunded if you don't win!"), "  ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "FAQ"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dl", {
        "class": "faq"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq1_desc"
      }, "How is the number to guess generated?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq1_desc",
        "class": "desc"
      }, "We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game. - Please see ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.hpb.io/post-423",
        target: "_blank"
      }, "HPB RNG Q&A")), " for more information.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq2_desc"
      }, "What do I need to be able to play?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq2_desc",
        "class": "desc"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "All that is required is a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.hpb.io/wallet",
        target: "_blank"
      }, "HPB Wallet")), ", some ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.gate.io/trade/HPB_USDT",
        target: "_blank"
      }, "HPB Coin")), "and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://metamask.io/",
        target: "_blank"
      }, "Metamask"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq3_desc"
      }, "What if I make a guess at the same time as someone else?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq3_desc",
        "class": "desc"
      }, "All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other guess will be rejected. Please check your transaction hash or click on the game number header on the home page, which will show you the game transactions. If you were unsuccessful, you will see the transaction will have been reverted.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq4_desc"
      }, "You said the first guess is free?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "The first guess of every new game is free, however this involves sending your guess to the smart contract on the blockchain, which costs a very small amount of gas (0.02). This is less than $0.01 in value.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq5_desc"
      }, "How do I setup Metamask to work with the HPB blockchain?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "When you open Metamask, you'll need to switch from the default \"Ethereum Main-net\" option, to the \"Custom RPC\" option. At this point, you'll need to supply the following information: \"Network Name\" = HPB Network | \"New RPC URL\" = https://node.hpb.io | \"Chain ID\" = 0x10D | \"Currency Symbol\" = HPB | \"Block Explorer URL\" = https://explorer.myhpbwallet.com/"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/images/ads/metamask.png",
        alt: "Metamask",
        width: "1200",
        height: "900"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq6_desc"
      }, "I'm receiving a Metamask error?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend completely cancelling/rejecting the transaction in Metamask, and try guessing again.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq7_desc"
      }, "Can I alter the gas to make a saving?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "Of course! We have injected a default fee of 0.02, however you can increase or decrease this value to your choosing. Increasing the value will cost more, however it will usually speed up the time taken to write your guess to the smart contract.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq8_desc"
      }, "Can I interact with the smart contract game directly?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "YES! And that is the beauty of HPB and the decentralized blockchain! So for example, you could launch", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://remix.hpb.io.io/",
        target: "_blank"
      }, "REMIX")), " and then copying the source code of the contract into the code window, then switch to the \"Run\" tab, and pasting in the current game contract address into the \"At Address\" field, then clicking on the blue button, which will launch all of the public function calls for the contract. You can retrieve the source code from our gitHub repository, and the current game contract can be retrieved from HPBScan, by clicking on the \"current\" game heading on the main game page.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq9_desc"
      }, "Can I play the game from my mobile phone?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "Sure! Simply install the Metamask app, then setup your network in settings to point to the HPB network using the following information - following information: \"Network Name\" = HPB Network | \"New RPC URL\" = https://node.hpb.io | \"Chain ID\" = 0x10D | \"Currency Symbol\" = HPB | \"Block Explorer URL\" = https://explorer.myhpbwallet.com/ Once you have done this you can switch to browser mode in the app and navigate to the website.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq10_desc"
      }, "Can I use the Edge Browser on my PC?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "Yes, althought you will still need to setup Metamask. You can install it by going into \"Extensions\" and then allowing other third party extensions.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dt", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        "aria-expanded": "false",
        "aria-controls": "faq11_desc"
      }, "Do you have real-time support?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("dd", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        id: "faq4_desc",
        "class": "desc"
      }, "Visit the community on the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: " https://t.me/HPBglobal",
        target: "_blank"
      }, "HPB Global Telegram Chat")), " and stay in touch with a great community!"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "FAQ"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "How is the number to guess generated?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game.  - Please see ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.hpb.io/post-423",
        target: "_blank"
      }, "HPB RNG Q&A")), " for more information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "What do I need to be able to play?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "All that is required is a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.hpb.io/wallet",
        target: "_blank"
      }, "HPB Wallet")), ", some ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.gate.io/trade/HPB_USDT",
        target: "_blank"
      }, "HPB Coin")), "and ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://metamask.io/",
        target: "_blank"
      }, "Metamask"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "What if I make a guess at the same time as someone else?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other guess will be rejected. Please check your transaction hash or click on the game number header on the home page, which will show you the game transactions. If you were unsuccessful, the will see the transaction will have been reverted."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "You said the first guess is free?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "The first guess of every new game is free, however this involves sending your guess to the smart contract on the blockchain, which costs a very small amount of gas (0.02). This is less than $0.01 in value."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "How do I setup Metamask to work with the HPB blockchain?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "When you open Metamask, you'll need to switch from the default \"Ethereum Main-net\" option, to the \"Custom RPC\" option. At this point, you'll need to supply the following information: \"Network Name\" = HPB Network | \"New RPC URL\" = https://node.hpb.io | \"Chain ID\" = 0x10D | \"Currency Symbol\" = HPB | \"Block Explorer URL\" = https://explorer.myhpbwallet.com/"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "I'm receiving a Metamask error?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend completely cancelling/rejecting the transaction in Metamask, and try guessing again."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "Can I alter the gas to make a saving?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Of course! We have injected a default fee of 0.02, however you can increase or decrease this value to your choosing. Increasing the value will cost more, however it will usually speed up the time taken to write your guess to the smart contract."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "Can I interact with the smart contract game directly?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "YES! And that is the beauty of HPB and the decentralized blockchain!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, "Do you have real-time support?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Visit the community on the ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: " https://t.me/HPBglobal",
        target: "_blank"
      }, "HPB Global Telegram Chat")), " and stay in touch with a great community!")));
    }
  }]);

  return Details;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(Details, "mapStateToProps", {
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
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(Details.mapStateToProps)(Details));

/***/ })
/******/ ]);