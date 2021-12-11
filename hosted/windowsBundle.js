"use strict";

function AdminWindow(props) {
  //const [list, setList] = useState();
  // const getMessage = (e) => {
  //     e.preventDefault();
  //     //console.log(formData);
  //     sendAjax('GET', '/getAllNotes', null, (data) => {
  //         setList(data);
  //     });
  // }
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Administrators"), /*#__PURE__*/React.createElement("h2", null, "Access and edit all data here."), /*#__PURE__*/React.createElement("h3", null, "**Temporarily Under Construction**"));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HomeWindow = /*#__PURE__*/function (_React$Component) {
  _inherits(HomeWindow, _React$Component);

  var _super = _createSuper(HomeWindow);

  function HomeWindow() {
    _classCallCheck(this, HomeWindow);

    return _super.apply(this, arguments);
  }

  _createClass(HomeWindow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Lofi Messages!"), /*#__PURE__*/React.createElement("h2", null, "Help spread some positivity!"), /*#__PURE__*/React.createElement("p", null, "Here, you are able to read and write positive or inspiring messages to other people. Feel free to check out the other pages while listening to some nice lofi music~"));
    }
  }]);

  return HomeWindow;
}(React.Component);
"use strict";

var loadMessagesFromServer = function loadMessagesFromServer() {// sendAjax('GET', '/getMessages', null, (data) => {
  //     ReactDOM.render(
  //         <DomoList domos={data.domos} />, document.querySelector("#domos")
  //     );
  // });
};

var setup = function setup(csrf) {
  ReactDOM.render( /*#__PURE__*/React.createElement(Nav, {
    csrf: csrf
  }), document.getElementById('nav'));
  ReactDOM.render( /*#__PURE__*/React.createElement(HomeWindow, null), document.getElementById('message'));
  ReactDOM.render( /*#__PURE__*/React.createElement(Music, null), document.getElementById('music')); //loadMessagesFromServer();
};

var getToken = function getToken() {
  sendAjax('GET', '/getToken', null, function (result) {
    setup(result.csrfToken);
  });
};

$(document).ready(function () {
  getToken();
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Music = /*#__PURE__*/function (_React$Component) {
  _inherits(Music, _React$Component);

  var _super = _createSuper(Music);

  function Music(props) {
    _classCallCheck(this, Music);

    return _super.call(this, props);
  }

  _createClass(Music, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("footer", {
        id: "music"
      }, /*#__PURE__*/React.createElement("div", {
        id: "soundtrack"
      }, /*#__PURE__*/React.createElement("audio", {
        controls: true,
        loop: true,
        autoPlay: true
      }, /*#__PURE__*/React.createElement("source", {
        src: "/assets/music/need-a-girl.mp3",
        type: "audio/mpeg"
      }), "Your browser does not support the audio element.")), /*#__PURE__*/React.createElement("p", null, " \xA92021 Brandon Ly "));
    }
  }]);

  return Music;
}(React.Component);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MusicWindow = /*#__PURE__*/function (_React$Component) {
  _inherits(MusicWindow, _React$Component);

  var _super = _createSuper(MusicWindow);

  function MusicWindow() {
    _classCallCheck(this, MusicWindow);

    return _super.apply(this, arguments);
  }

  _createClass(MusicWindow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Music Playlist!"), /*#__PURE__*/React.createElement("h2", null, "Here you can find what songs are on the current playlist for the app!"), /*#__PURE__*/React.createElement("p", null, "These can also all be found on YouTube for your listening delight outside of the website!"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Toge Productions - ", /*#__PURE__*/React.createElement("a", {
        href: "https://youtu.be/_UgIUz2APOw"
      }, "Writer's Block ~ Lofi Chillhop Mix Beats to chill/study/work/relax [Coffee Talk Game OST]")), /*#__PURE__*/React.createElement("li", null, "the bootleg boy - ", /*#__PURE__*/React.createElement("a", {
        href: "https://youtu.be/AzV77KFsLn4"
      }, "lofi songs for slow days")), /*#__PURE__*/React.createElement("li", null, "Lee - ", /*#__PURE__*/React.createElement("a", {
        href: "https://youtu.be/xVf4Zk8CBj0"
      }, "(FREE) Lo-fi Type Beat - I Need a Girl")), /*#__PURE__*/React.createElement("li", null, "Hua Studio - ", /*#__PURE__*/React.createElement("a", {
        href: "https://youtu.be/0BhaDPmEOic"
      }, "spring vibes \u2022 aesthetic music \u2022 lofi mix \u2022 chill beats to relax/study"))));
    }
  }]);

  return MusicWindow;
}(React.Component);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Nav = /*#__PURE__*/function (_React$Component) {
  _inherits(Nav, _React$Component);

  var _super = _createSuper(Nav);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "createHomeWindow", function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(HomeWindow, null), document.querySelector("#message"));

      _this.randomSong();

      document.querySelector("#nav").className = "home";
    });

    _defineProperty(_assertThisInitialized(_this), "createReadWindow", function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(ReadWindow, null), document.querySelector("#message"));

      _this.randomSong();

      document.querySelector("#nav").className = "read";
    });

    _defineProperty(_assertThisInitialized(_this), "createWriteWindow", function () {
      sendAjax('GET', '/getToken', null, function (result) {
        ReactDOM.render( /*#__PURE__*/React.createElement(WriteWindow, {
          csrf: result.csrfToken
        }), document.querySelector("#message"));
      });

      _this.randomSong();

      document.querySelector("#nav").className = "write";
    });

    _defineProperty(_assertThisInitialized(_this), "createMusicWindow", function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(MusicWindow, null), document.querySelector("#message"));

      _this.randomSong();

      document.querySelector("#nav").className = "music";
    });

    _defineProperty(_assertThisInitialized(_this), "createSuggestWindow", function () {
      sendAjax('GET', '/getToken', null, function (result) {
        ReactDOM.render( /*#__PURE__*/React.createElement(SuggestWindow, {
          csrf: result.csrfToken
        }), document.querySelector("#message"));
      });

      _this.randomSong();

      document.querySelector("#nav").className = "suggest";
    });

    _defineProperty(_assertThisInitialized(_this), "createAdminWindow", function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(AdminWindow, null), document.querySelector("#message"));

      _this.randomSong();

      document.querySelector("#nav").className = "admin";
    });

    _defineProperty(_assertThisInitialized(_this), "randomSong", function () {
      // Change this variable if there are more songs added
      var songLength = 4; // Basically, what is happening: reset to a random song upon change 
      // (code is written in React.js so autoPlay and closing tag for 'source', etc.)

      var a = Math.floor(Math.random() * songLength);
      var song = document.querySelector("#soundtrack");

      switch (a) {
        case 0:
          song.innerHTML = "<audio controls loop autoPlay><source src=\"/assets/music/need-a-girl.mp3\" type=\"audio/mpeg\" />Your browser does not support the audio element.</audio>";
          break;

        case 1:
          song.innerHTML = "<audio controls loop autoPlay><source src=\"/assets/music/slow-days.mp3\" type=\"audio/mpeg\" />Your browser does not support the audio element.</audio>";
          break;

        case 2:
          song.innerHTML = "<audio controls loop autoPlay><source src=\"/assets/music/spring-vibes.mp3\" type=\"audio/mpeg\" />Your browser does not support the audio element.</audio>";
          break;

        case 3:
          song.innerHTML = "<audio controls loop autoPlay><source src=\"/assets/music/writers-block.mp3\" type=\"audio/mpeg\" />Your browser does not support the audio element.</audio>";
          break;

        default:
          song.innerHTML = "<audio controls loop autoPlay><source src=\"/assets/music/need-a-girl.mp3\" type=\"audio/mpeg\" />Your browser does not support the audio element.</audio>";
          break;
      }
    });

    _this.createHomeWindow = _this.createHomeWindow.bind(_assertThisInitialized(_this));
    _this.createReadWindow = _this.createReadWindow.bind(_assertThisInitialized(_this));
    _this.createWriteWindow = _this.createWriteWindow.bind(_assertThisInitialized(_this));
    _this.createMusicWindow = _this.createMusicWindow.bind(_assertThisInitialized(_this));
    _this.createSuggestWindow = _this.createSuggestWindow.bind(_assertThisInitialized(_this));
    _this.createAdminWindow = _this.createAdminWindow.bind(_assertThisInitialized(_this));
    _this.randomSong = _this.randomSong.bind(_assertThisInitialized(_this));
    return _this;
  } // ----- HOME -----


  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        id: "nav"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.createHomeWindow
      }, "Home"), /*#__PURE__*/React.createElement("button", {
        onClick: this.createReadWindow
      }, "Read"), /*#__PURE__*/React.createElement("button", {
        onClick: this.createWriteWindow
      }, "Write"), /*#__PURE__*/React.createElement("button", {
        onClick: this.createMusicWindow
      }, "Music"), /*#__PURE__*/React.createElement("button", {
        onClick: this.createSuggestWindow
      }, "Suggest"), /*#__PURE__*/React.createElement("button", {
        onClick: this.createAdminWindow
      }, "Admin"), /*#__PURE__*/React.createElement("a", {
        href: "/logout"
      }, "Log out"));
    }
  }]);

  return Nav;
}(React.Component);
"use strict";

function ReadWindow() {
  var getMessage = function getMessage(e) {
    e.preventDefault(); //console.log(formData);

    sendAjax('GET', '/getRandom', null, function (data) {
      document.querySelector('#randomNote').innerHTML = "\"<b>".concat(data.note[0].note, "\"</b></br> - ").concat(data.note[0].name);
    });
  };

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Read Messages"), /*#__PURE__*/React.createElement("h2", null, "Read a message someone left here!"), /*#__PURE__*/React.createElement("button", {
    onClick: getMessage
  }, "Get Message"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "randomNote"
  })));
}
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SuggestWindow(props) {
  var _React$useState = React.useState({
    name: "",
    song: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      formData = _React$useState2[0],
      setFormData = _React$useState2[1]; //}


  var handleSuggestion = function handleSuggestion(e) {
    e.preventDefault();
    document.querySelector('#successMessage').innerHTML = "Sending..."; //console.log(formData);

    if ($("#name").val() == '' || $("#song").val() == '') {
      document.querySelector('#successMessage').innerHTML = "All fields are required.";
      return false;
    }

    sendAjax('POST', $("#suggestForm").attr("action"), $("#suggestForm").serialize(), function () {
      document.querySelector('#successMessage').innerHTML = "Suggestion has been sent!";
    });
    return false;
  };

  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Suggest a Song!"), /*#__PURE__*/React.createElement("h2", null, "Got a song you wanna listen to while you read and write? Send a suggestion!"), /*#__PURE__*/React.createElement("form", {
    id: "suggestForm",
    onSubmit: handleSuggestion,
    name: "suggestForm",
    action: "/suggest",
    method: "POST"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name: "), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        name: e.target.value
      }));
    },
    value: formData.name,
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Enter name here"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "song"
  }, "Song: "), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        song: e.target.value
      }));
    },
    value: formData.song,
    type: "text",
    name: "suggestion",
    id: "song",
    placeholder: "Write your suggestion here"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    className: "makeSubmit",
    type: "submit",
    value: "Send Suggestion"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "successMessage"
  })));
}
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// class WriteWindow extends React.Component {
function WriteWindow(props) {
  //constructor(props) {
  //super(props);
  // Using an object to hold all the data in the form.
  var _React$useState = React.useState({
    name: "",
    note: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      formData = _React$useState2[0],
      setFormData = _React$useState2[1]; //}


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    document.querySelector('#successMessage').innerHTML = "Sending..."; //console.log(formData);

    if ($("#name").val() == '' || $("#note").val() == '') {
      document.querySelector('#successMessage').innerHTML = "All fields are required.";
      return false;
    }

    sendAjax('POST', $("#writeForm").attr("action"), $("#writeForm").serialize(), function () {
      document.querySelector('#successMessage').innerHTML = "Message has been sent!";
    });
    return false;
  }; //render() {


  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Write a Message"), /*#__PURE__*/React.createElement("h2", null, "Write a message for someone else to read!"), /*#__PURE__*/React.createElement("form", {
    id: "writeForm",
    onSubmit: handleSubmit,
    name: "writeForm",
    action: "/write",
    method: "POST"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name: "), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        name: e.target.value
      }));
    },
    value: formData.name,
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Enter your name here"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "note"
  }, "Message: "), /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        note: e.target.value
      }));
    },
    value: formData.note,
    type: "text",
    name: "note",
    id: "note",
    placeholder: "Write your message here"
  }), /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_csrf",
    value: props.csrf
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    className: "makeSubmit",
    type: "submit",
    value: "Send Message"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    id: "successMessage"
  }))); //}
}
"use strict";

var handleError = function handleError(message) {
  $("#errorMessage").text(message);
};

var redirect = function redirect(response) {
  window.location = response.redirect;
};

var sendAjax = function sendAjax(type, action, data, success) {
  $.ajax({
    cache: false,
    type: type,
    url: action,
    data: data,
    dataType: "json",
    success: success,
    error: function error(xhr, status, _error) {
      var messageObj = JSON.parse(xhr.responseText);
      handleError(messageObj.error);
    }
  });
};
