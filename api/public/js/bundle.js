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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Controller/StoreController.js":
/*!*******************************************!*\
  !*** ./src/Controller/StoreController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StoreController = function () {\n    function StoreController(storeModel, storesView, errorView) {\n        _classCallCheck(this, StoreController);\n\n        this.storeModel = storeModel;\n        this.storesView = storesView;\n    }\n\n    _createClass(StoreController, [{\n        key: \"listStores\",\n        value: function listStores(url) {\n            var _this = this;\n\n            var promise = this.storeModel.listStores(url);\n            promise.then(function (stores) {\n                _this.storesView.show({ stores: stores });\n            }).catch(function (error) {\n                console.log(error);\n            });\n        }\n    }, {\n        key: \"listStore\",\n        value: function listStore(url, id) {\n            var _this2 = this;\n\n            var promise = this.storeModel.listStore(url, id);\n            promise.then(function (store) {\n                _this2.storesView.show({ stores: store });\n            }).catch(function (error) {\n                return console.log(error);\n            });\n        }\n    }, {\n        key: \"addStore\",\n        value: function addStore(url, name, phone, city, zip) {\n            var promise = this.storeModel.addStore(url, name, phone, city, zip);\n            promise.then(function (store) {\n                //this.storesView.show({store: store});\n            }).catch(function (error) {\n                console.log(error);\n            });\n        }\n    }, {\n        key: \"saveStore\",\n        value: function saveStore(url, id, name, phone, city, zip) {\n            var promise = this.storeModel.updateStore(url, id, name, phone, city, zip);\n            promise.then(function (store) {\n                //this.storesView.show({store: store});\n            }).catch(function (error) {\n                console.log(error);\n            });\n        }\n    }]);\n\n    return StoreController;\n}();\n\nexports.default = StoreController;\n\n//# sourceURL=webpack:///./src/Controller/StoreController.js?");

/***/ }),

/***/ "./src/Model/StoreModel.js":
/*!*********************************!*\
  !*** ./src/Model/StoreModel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar StoreModel = function () {\n    function StoreModel(givenUrl) {\n        _classCallCheck(this, StoreModel);\n\n        this.url = \"192.168.33.22/api/stores/\";\n    }\n\n    _createClass(StoreModel, [{\n        key: \"listStores\",\n        value: function listStores(url) {\n            return fetch(url, {\n                method: \"GET\",\n                headers: {\n                    \"accept\": \"application/json\"\n                }\n            }).then(function (response) {\n                if (response.status >= 200 && response.status < 300) {\n                    return response.json();\n                }\n                throw \"error with status \" + response.status;\n            });\n        }\n    }, {\n        key: \"listStore\",\n        value: function listStore(url, id) {\n            var urlOf = url + id;\n            return fetch(urlOf, {\n                method: \"GET\",\n                headers: {\n                    \"accept\": \"application/json\"\n                }\n            }).then(function (response) {\n                if (response.status >= 200 && response.status < 300) {\n                    return response.json();\n                }\n                throw \"error with status \" + response.status + \"  \" + response.data;\n            });\n        }\n    }, {\n        key: \"addStore\",\n        value: function addStore(url, name, phone, city, zip) {\n            console.log(\"In Addstore\");\n            var store = {\n                store: {\n                    name: name,\n                    phone: phone,\n                    city: city,\n                    zip: zip\n                }\n            };\n            return fetch(url, {\n                method: \"POST\",\n                body: JSON.stringify(store)\n            }).then(function (respons) {\n                if (respons.status !== 201 && respons.status !== 200) {\n                    throw new Error(\"POST: rejected\" + respons.status);\n                }\n            }).catch(function (error) {\n                return console.log(error);\n            });\n        }\n    }, {\n        key: \"updateStore\",\n        value: function updateStore(url, id, name, phone, city, zip) {\n\n            var store = {\n                store: {\n                    id: id,\n                    name: name,\n                    phone: phone,\n                    city: city,\n                    zip: zip\n                }\n            };\n            var putUrl = url + id;\n            return fetch(putUrl, {\n                method: \"PUT\", body: JSON.stringify(store)\n            }).then(function (respons) {\n                if (respons.status !== 201 && respons.status !== 200) {\n                    throw new Error(\"PUT: rejected\" + respons.status);\n                }\n\n                return respons.json();\n            });\n        }\n    }, {\n        key: \"testIsStringValid\",\n        value: function testIsStringValid(data) {\n            if (typeof data === 'undefined') {\n                return false;\n            }\n\n            if (data.length <= 1) {\n                return false;\n            }\n        }\n    }]);\n\n    return StoreModel;\n}();\n\nexports.default = StoreModel;\n\n//# sourceURL=webpack:///./src/Model/StoreModel.js?");

/***/ }),

/***/ "./src/View/ErrorView.js":
/*!*******************************!*\
  !*** ./src/View/ErrorView.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/View/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ErrorView = function (_View) {\n    _inherits(ErrorView, _View);\n\n    function ErrorView() {\n        _classCallCheck(this, ErrorView);\n\n        return _possibleConstructorReturn(this, (ErrorView.__proto__ || Object.getPrototypeOf(ErrorView)).apply(this, arguments));\n    }\n\n    _createClass(ErrorView, [{\n        key: \"show\",\n        value: function show(data) {\n            var error = data.error;\n            _get(ErrorView.prototype.__proto__ || Object.getPrototypeOf(ErrorView.prototype), \"show\", this).call(this, error);\n        }\n    }]);\n\n    return ErrorView;\n}(_View3.default);\n\nexports.default = ErrorView;\n\n//# sourceURL=webpack:///./src/View/ErrorView.js?");

/***/ }),

/***/ "./src/View/StoresView.js":
/*!********************************!*\
  !*** ./src/View/StoresView.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/View/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StoresView = function (_View) {\n    _inherits(StoresView, _View);\n\n    function StoresView() {\n        _classCallCheck(this, StoresView);\n\n        return _possibleConstructorReturn(this, (StoresView.__proto__ || Object.getPrototypeOf(StoresView)).apply(this, arguments));\n    }\n\n    _createClass(StoresView, [{\n        key: 'show',\n        value: function show(data) {\n            while (this.outputElement.hasChildNodes()) {\n                this.outputElement.removeChild(this.outputElement.firstChild);\n            }\n\n            var outputElement = document.getElementById('storeTableBody');\n            var container = document.createElement(\"div\");\n\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = data.stores[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var store = _step.value;\n\n                    var row = document.createElement(\"tr\");\n                    var name = document.createElement('td');\n                    name.innerText = store.name;\n                    var phone = document.createElement('td');\n                    phone.innerText = store.phone;\n                    var city = document.createElement('td');\n                    city.innerText = store.city;\n                    var zip = document.createElement(\"td\");\n                    zip.innerText = store.zip;\n\n                    row.appendChild(name);\n                    row.appendChild(phone);\n                    row.appendChild(city);\n                    row.appendChild(zip);\n                    outputElement.appendChild(row);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n    }]);\n\n    return StoresView;\n}(_View3.default);\n\nexports.default = StoresView;\n\n//# sourceURL=webpack:///./src/View/StoresView.js?");

/***/ }),

/***/ "./src/View/View.js":
/*!**************************!*\
  !*** ./src/View/View.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n    function View() {\n        _classCallCheck(this, View);\n\n        this.outputElement = document.getElementById('storeTableBody');\n    }\n\n    _createClass(View, [{\n        key: \"show\",\n        value: function show(data) {\n            //blaaaaaa\n            while (this.outputElement.hasChildNodes()) {\n                this.outputElement.removeChild(this.outputElement.firstChild);\n            }\n\n            this.outputElement.appendChild(data);\n        }\n    }]);\n\n    return View;\n}();\n\nexports.default = View;\n\n//# sourceURL=webpack:///./src/View/View.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _StoreController = __webpack_require__(/*! ../Controller/StoreController.js */ \"./src/Controller/StoreController.js\");\n\nvar _StoreController2 = _interopRequireDefault(_StoreController);\n\nvar _StoreModel = __webpack_require__(/*! ../Model/StoreModel */ \"./src/Model/StoreModel.js\");\n\nvar _StoreModel2 = _interopRequireDefault(_StoreModel);\n\nvar _StoresView = __webpack_require__(/*! ../View/StoresView */ \"./src/View/StoresView.js\");\n\nvar _StoresView2 = _interopRequireDefault(_StoresView);\n\nvar _ErrorView = __webpack_require__(/*! ../View/ErrorView */ \"./src/View/ErrorView.js\");\n\nvar _ErrorView2 = _interopRequireDefault(_ErrorView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar url = 'http://192.168.33.22/api/stores/';\n\nvar storesView = void 0;\nvar errorView = void 0;\nvar storeModel = void 0;\nvar storeController = void 0;\n\nwindow.addEventListener(\"load\", handleWindowLoad);\n\nfunction handleWindowLoad() {\n    storesView = new _StoresView2.default();\n    errorView = new _ErrorView2.default();\n    storeModel = new _StoreModel2.default(url);\n    storeController = new _StoreController2.default(storeModel, storesView);\n\n    var btnGETStores = document.getElementById(\"button_get_all_stores\");\n    btnGETStores.addEventListener(\"click\", handleGetAllStores);\n\n    var buttonGetStoreGET = document.getElementById('button_get_store');\n    buttonGetStoreGET.addEventListener(\"click\", handleGetStore);\n\n    var buttonPostStore = document.getElementById('btn_post');\n    buttonPostStore.addEventListener(\"click\", handlePostStore);\n\n    var buttonPutStore = document.getElementById(\"btn_save\");\n    buttonPutStore.addEventListener(\"click\", handlePutStore);\n}\n\nfunction handleGetAllStores() {\n    storeController.listStores(url);\n}\n\nfunction handleGetStore() {\n    var id = document.getElementById(\"idGetInput\").value;\n    emptyTable();\n    storeController.listStore(url, id);\n}\n\nfunction handlePutStore() {\n\n    var id = document.getElementById(\"idInputPUT\").value;\n    var newName = document.getElementById(\"inputNamePUT\").value;\n\n    var newPhone = document.getElementById(\"inputPhonePUT\").value;\n    var newCity = document.getElementById(\"inputCityPUT\").value;\n    var newZip = document.getElementById(\"inputZipPUT\").value;\n    storeController.saveStore(url, id, newName, newPhone, newCity, newZip);\n}\n\nfunction handlePostStore() {\n    var name = document.getElementById(\"inputNamePOST\").value;\n    var phone = document.getElementById(\"inputPhonePOST\").value;\n    var city = document.getElementById(\"inputCityPOST\").value;\n    var zip = document.getElementById(\"inputZipPOST\").value;\n\n    storeController.addStore(url, name, phone, city, zip);\n}\n\nfunction emptyTable() {\n    document.getElementById(\"storeTableBody\").innerHTML = \"\";\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });