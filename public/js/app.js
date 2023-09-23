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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin/Product-card.js":
/*!********************************************!*\
  !*** ./resources/js/admin/Product-card.js ***!
  \********************************************/
/*! exports provided: ProductCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ProductCard = /*#__PURE__*/function () {
  function ProductCard() {
    _classCallCheck(this, ProductCard);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.id = null;
    this.urlUpdate = '/product-card/update';
    this.urlUploadImage = '/product-card/change-image'; // TODO: не правильное название роута
    this.selectors = {
      upload: '#upload-image',
      remove: '#remove-image',
      change: '[data-change-image]'
    };
  }
  _createClass(ProductCard, [{
    key: "init",
    value: function init() {
      document.addEventListener('click', this.handleClick);
      document.addEventListener('change', this.handleChange);
    }
  }, {
    key: "checkEventAndGetID",
    value: function checkEventAndGetID(event) {
      var target = event.target;
      var id = this.getIdFromParent(target);
      if (!id) return false;
      this.id = id;
      return true;
    }

    /**
     * Change for input
     * @param event
     */
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      if (!this.checkEventAndGetID(event)) return;
      var upload = target.closest(this.selectors.upload);
      if (upload) this.uploadImage(upload);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var target = event.target;
      if (!this.checkEventAndGetID(event)) return;
      var remove = target.closest(this.selectors.remove);
      if (remove) this.removeImage();
      var change = target.closest(this.selectors.change);
      if (change) {
        this.changeImage(change);
      }
    }
  }, {
    key: "changeImage",
    value: function changeImage(element) {
      var imgPath = element === null || element === void 0 ? void 0 : element.dataset.changeImage;
      if (imgPath) {
        var check = confirm('Вы точно хотите изменить изображение?');
        if (!check) return;
        this.sendData(this.urlUpdate, {
          id: this.id,
          type: 'change-image',
          value: imgPath
        });
        this.closeBlickElements();
      }
    }
  }, {
    key: "uploadImage",
    value: function uploadImage(inputElement) {
      var file = inputElement.files[0];
      var type = file === null || file === void 0 ? void 0 : file.type;
      if (type !== 'image/jpeg' && type !== 'image/png') {
        console.log('Only jpeg or png files!');
        alert('Only .jpeg or .png files');
        return;
      }
      var check = confirm('Вы точно хотите загрузить изображение?');
      if (!check) return;
      var formData = new FormData();
      formData.append('id', this.id);
      formData.append('file', file);
      formData.append('type', 'upload-image');
      this.sendData(this.urlUploadImage, formData, false).then(function () {
        location.reload();
      });
    }
  }, {
    key: "removeImage",
    value: function removeImage() {
      var check = confirm('Вы точно хотите удалить изображение?');
      if (!check) return;
      this.sendData(this.urlUpdate, {
        id: this.id,
        type: 'remove-image'
      });
    }
  }, {
    key: "sendData",
    value: function () {
      var _sendData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
        var toJson,
          csrf,
          token,
          response,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              toJson = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
              csrf = document.querySelector('meta[name="csrf-token"]');
              token = csrf.getAttribute('content');
              if (token) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              if (toJson) {
                data = JSON.stringify(data);
              }
              _context.next = 8;
              return fetch(url, {
                method: "POST",
                headers: {
                  'X-CSRF-TOKEN': token
                },
                body: data
              }).then(function (res) {
                return res.json();
              });
            case 8:
              response = _context.sent;
              this.updateProduct(response);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendData(_x, _x2) {
        return _sendData.apply(this, arguments);
      }
      return sendData;
    }()
  }, {
    key: "updateProduct",
    value: function updateProduct(data) {
      if (!data.id) return;
      var product = document.querySelector("[data-product-id=\"".concat(data.id, "\"]"));
      if (!product) return;
      var image = product.querySelector('.product-card__img > img');
      if (data.img) {
        image.src = 'img/' + data.img;
      } else {
        image.src = 'img/default-product.jpg';
      }
    }
  }, {
    key: "getIdFromParent",
    value: function getIdFromParent(target) {
      var parent = target === null || target === void 0 ? void 0 : target.closest('[data-product-id]');
      var id = Number(parent === null || parent === void 0 ? void 0 : parent.dataset.productId);
      if (id) return id;else return false;
    }
  }, {
    key: "closeBlickElements",
    value: function closeBlickElements() {
      var elements = document.querySelectorAll('[data-blink-element].active');
      elements === null || elements === void 0 || elements.forEach(function (el) {
        return el.classList.remove('active');
      });
    }
  }]);
  return ProductCard;
}();

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_Product_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/Product-card */ "./resources/js/admin/Product-card.js");
/* harmony import */ var _lib_Blink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/Blink */ "./resources/js/lib/Blink.js");
/* harmony import */ var _lib_MyModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/MyModal */ "./resources/js/lib/MyModal.js");
// require('./bootstrap');



var blink = new _lib_Blink__WEBPACK_IMPORTED_MODULE_1__["Blink"]();
blink.init();
var productCard = new _admin_Product_card__WEBPACK_IMPORTED_MODULE_0__["ProductCard"]();
productCard.init();
var modalInit = new _lib_MyModal__WEBPACK_IMPORTED_MODULE_3__["default"]();
modalInit.init();

/***/ }),

/***/ "./resources/js/lib/Blink.js":
/*!***********************************!*\
  !*** ./resources/js/lib/Blink.js ***!
  \***********************************/
/*! exports provided: Blink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blink", function() { return Blink; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Blink = /*#__PURE__*/function () {
  function Blink() {
    _classCallCheck(this, Blink);
    this.handleClick = this.handleClick.bind(this);
    this.selectors = {
      btn: 'data-blink-btn-link',
      element: 'data-blink-element'
    };
  }
  _createClass(Blink, [{
    key: "init",
    value: function init() {
      document.addEventListener('click', this.handleClick);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var target = event.target;
      var btnLink = target.closest("[".concat(this.selectors.btn, "]"));
      if (btnLink) {
        var btnLinkValue = btnLink.dataset.blinkBtnLink;
        this.displayChangeElement(btnLinkValue);
      }
      var element = target.closest("[".concat(this.selectors.element, "]"));
      if (!btnLink && !element) {
        this.hideOneElement();
      }
    }
  }, {
    key: "displayChangeElement",
    value: function displayChangeElement(btnLinkValue) {
      var element = document.querySelector("[".concat(this.selectors.element, "=\"").concat(btnLinkValue, "\"]"));
      if (element && element.classList.contains('active')) {
        element.classList.remove('active');
      } else if (element && !element.classList.contains('active')) {
        this.hideOneElement();
        element.classList.add('active');
      }
    }
  }, {
    key: "hideOneElement",
    value: function hideOneElement() {
      var activeElement = document.querySelector('[data-blink-element].active');
      if (activeElement) activeElement.classList.remove('active');
    }
  }]);
  return Blink;
}();

/***/ }),

/***/ "./resources/js/lib/MyModal.js":
/*!*************************************!*\
  !*** ./resources/js/lib/MyModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyModal; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./resources/js/lib/Utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// TODO Возможно хуки надо сделать асинхронными и bind(this)
var MyModal = /*#__PURE__*/function () {
  function MyModal(target) {
    var _document$body;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, MyModal);
    // Config
    var defaultConfig = {
      openSelector: 'data-my-modal',
      // Селектор открытия - data атрибут
      closeSelector: 'data-my-modal-close',
      // Селектор кнопки закрытия - data атрибут
      teleportToBody: false,
      // Перенести модалку перед закрытием body
      afterOpen: function afterOpen() {},
      beforeClose: function beforeClose() {
        return true;
      },
      // Для закрытия нужно вернуть true
      submitHandler: function submitHandler() {
        return true;
      },
      // Для закрытия нужно вернуть true
      resetHandler: function resetHandler() {
        return true;
      } // Для закрытия нужно вернуть true
    };

    this.config = _objectSpread(_objectSpread({}, defaultConfig), config);

    // Bind
    this.clickHandler = this.clickHandler.bind(this);

    // Events
    this.eventBeforeOpen = new Event('modal:beforeOpen', {
      bubbles: true
    });
    this.eventAfterOpen = new Event('modal:afterOpen', {
      bubbles: true
    });
    this.eventBeforeClose = new Event('modal:beforeClose', {
      bubbles: true
    });
    this.eventAfterClose = new Event('modal:afterClose', {
      bubbles: true
    });
    this.eventSubmit = new Event('modal:submit', {
      bubbles: true
    });
    this.eventReset = new Event('modal:reset', {
      bubbles: true
    });

    // shadow
    this.shadow = document.querySelector('.my-modal-shadow') || document.createElement('div');
    this.shadow.classList.add('my-modal-shadow');
    (_document$body = document.body) === null || _document$body === void 0 || _document$body.append(this.shadow);
  }
  _createClass(MyModal, [{
    key: "init",
    value: function init() {
      var _this = this;
      document.addEventListener('click', this.clickHandler); // , { capture: true }
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          _this.clickHandler(e);
        }
      });
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(e) {
      var _this2 = this;
      // Открытие модалки
      var modalOpener = e.target.closest("[".concat(this.config.openSelector, "]"));
      console.log(modalOpener);
      var modalActive = e.target.closest('.my-modal.active');
      var activeModalMenu = document.querySelector('.my-modal_menu.active');
      if (!(activeModalMenu !== null && activeModalMenu !== void 0 && activeModalMenu.contains(e.target))) this.close(activeModalMenu);
      if (modalOpener) {
        e.preventDefault();
        var targetAttr = modalOpener.getAttribute(this.config.openSelector);
        var targetModal = document.querySelector(targetAttr);
        var openerInDrawerBody = modalOpener.closest('.my-modal_drawer.active .my-modal__body');
        if (!openerInDrawerBody) {
          this.close(modalActive, false).then(function () {
            return _this2.open(targetModal);
          });
        } else {
          this.open(targetModal);
        }
      }
      if (modalActive) {
        // Submit
        if (e.target.hasAttribute('data-my-modal-submit')) {
          modalActive.dispatchEvent(this.eventSubmit);
          if (this.config.submitHandler()) this.close(modalActive);
          return;
        }

        // Reset
        if (e.target.hasAttribute('data-my-modal-reset')) {
          modalActive.dispatchEvent(this.eventReset);
          if (this.config.resetHandler()) this.close(modalActive);
          return;
        }
      }

      // Close
      var clickOnCloseSelector = e.target.closest("[".concat(this.config.closeSelector, "]"));
      var clickNotInModal = !(modalActive !== null && modalActive !== void 0 && modalActive.contains(e.target));
      var activeModals = _toConsumableArray(document.querySelectorAll('.my-modal.active'));
      var clickOutsideActiveModal = clickNotInModal && activeModals.length;
      if (!activeModals.length) return;
      if (clickOnCloseSelector || clickOutsideActiveModal) this.closeAllActive(activeModals);
    }
  }, {
    key: "open",
    value: function open(modal) {
      if (!modal) {
        console.warn('modal not found');
        return this;
      }
      modal.dispatchEvent(this.eventBeforeOpen);
      if (MyModal.getMode(modal) === 'notification' && this.shadow.classList.contains('active')) this.hideShadow();
      if (this.config.teleportToBody && modal.parentNode.tagName !== 'BODY' && MyModal.getMode(modal) !== 'menu' || MyModal.getMode(modal) === 'notification') document.body.append(modal);
      modal.classList.add('active');
      this.intersectionObserver(modal);
      this.config.afterOpen();
      modal.dispatchEvent(this.eventAfterOpen);
      if (['modal', 'drawer'].includes(MyModal.getMode(modal))) {
        document.querySelector('body').classList.add('overflow-class');
      }
      if (MyModal.getMode(modal) === 'drawer' && Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) return this;
      this.showShadow(modal);
      return this;
    }

    // TODO сделать чтоб если модалка menu не влазит во вьюпорт то сменить отображение
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "intersectionObserver",
    value: function intersectionObserver(modal) {
      if (Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["isMobile"])() || MyModal.getMode(modal) !== 'menu') return;
      var rect = modal.getBoundingClientRect();
      var right = rect.x + rect.width;
      if (right > window.innerWidth) modal.classList.add('my-modal_left');else modal.classList.remove('my-modal_left');
    }
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(modal) {
        var hideShadow,
          mode,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              hideShadow = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
              if (!(!modal || !(modal !== null && modal !== void 0 && modal.classList.contains('active')))) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", this);
            case 3:
              if (this.config.beforeClose()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", this);
            case 5:
              modal.dispatchEvent(this.eventBeforeClose);
              mode = MyModal.getMode(modal);
              if (!(mode === 'drawer')) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["animateCSS"])(modal, 'closeDrawer');
            case 10:
              if (!(mode === 'modal')) {
                _context.next = 13;
                break;
              }
              _context.next = 13;
              return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["animateCSS"])(modal, 'closeModal');
            case 13:
              if (!(mode === 'notification')) {
                _context.next = 16;
                break;
              }
              _context.next = 16;
              return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["animateCSS"])(modal, 'closeNotification');
            case 16:
              document.querySelector('body').classList.remove('overflow-class');
              modal.classList.remove('active', 'my-modal_left');
              modal.dispatchEvent(this.eventAfterClose);

              // TODO Проверить если открыто несколько модалок не не убирать тень при закрытии одной
              if (hideShadow) this.hideShadow(modal);
              return _context.abrupt("return", this);
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function close(_x) {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }, {
    key: "closeAllActive",
    value: function closeAllActive(activeModals) {
      var _this3 = this;
      activeModals.forEach( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(modal) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.close(modal, true);
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return this;
    }
  }, {
    key: "showShadow",
    value: function showShadow(modal) {
      if (MyModal.getMode(modal) === 'menu' && !Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["isMobile"])()) return this;
      if (MyModal.getMode(modal) === 'notification') return this;
      this.shadow.classList.add('active');
      return this;
    }
  }, {
    key: "hideShadow",
    value: function () {
      var _hideShadow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.shadow.classList.contains('active')) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", this);
            case 2:
              this.shadow.classList.remove('active');
              _context3.next = 5;
              return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["animateCSS"])(this.shadow, 'disabling');
            case 5:
              document.querySelector('body').classList.remove('overflow-class');
              return _context3.abrupt("return", this);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function hideShadow() {
        return _hideShadow.apply(this, arguments);
      }
      return hideShadow;
    }()
  }], [{
    key: "getMode",
    value: function getMode(modal) {
      if (!modal) return null;
      if (modal.classList.contains('my-modal_menu')) return 'menu';
      if (modal.classList.contains('my-modal_drawer')) return 'drawer';
      if (modal.classList.contains('my-modal_notification')) return 'notification';
      return 'modal';
    }
  }]);
  return MyModal;
}();


/***/ }),

/***/ "./resources/js/lib/Utils.js":
/*!***********************************!*\
  !*** ./resources/js/lib/Utils.js ***!
  \***********************************/
/*! exports provided: isMobile, animateCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateCSS", function() { return animateCSS; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var isMobile = function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
};
function animateCSS(element, animation) {
  return new Promise(function (resolve) {
    var _node$classList;
    var animationName = animation;
    var node = element.nodeType === 1 ? element : document.querySelector(element);
    (_node$classList = node.classList).add.apply(_node$classList, _toConsumableArray(animationName.split(' ')));
    function handleAnimationEnd() {
      var _node$classList2;
      (_node$classList2 = node.classList).remove.apply(_node$classList2, _toConsumableArray(animationName.split(' ')));
      resolve('End');
    }
    node.addEventListener('animationend', handleAnimationEnd, {
      once: true
    });
  });
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\OSPanel\domains\projects\forestry-laravel\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! E:\OSPanel\domains\projects\forestry-laravel\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });