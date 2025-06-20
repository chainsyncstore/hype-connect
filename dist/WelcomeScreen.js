Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactNative = require('react-native');
var _native = require('@react-navigation/native');
var _this = this,
  _jsxFileName =
    'C:\\Users\\USER\\Downloads\\Hype Connect\\hype-connect\\HypeConnect\\src\\WelcomeScreen.jsx';
function _interopRequireWildcard(e, t) {
  if (typeof WeakMap === 'function') {
    var r = new WeakMap(),
      n = new WeakMap();
  }
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) {
      return e;
    }
    var o,
      i,
      f = { __proto__: null, default: e };
    if (e === null || (typeof e !== 'object' && typeof e !== 'function')) {
      return f;
    }
    if ((o = t ? n : r)) {
      if (o.has(e)) {
        return o.get(e);
      }
      o.set(e, f);
    }
    for (var _t in e) {
      _t !== 'default' &&
        {}.hasOwnProperty.call(e, _t) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) &&
        (i.get || i.set)
          ? o(f, _t, i)
          : (f[_t] = e[_t]));
    }
    return f;
  })(e, t);
}
var WelcomeScreen = function WelcomeScreen() {
  var navigation = (0, _native.useNavigation)();
  (0, _react.useEffect)(function () {
    var handleTouchStart = function handleTouchStart(event) {
      var _event$touches$, _event$touches$2, _event$touches$3;
      console.log('Touch start detected:', {
        identifier:
          (_event$touches$ = event.touches[0]) == null ? void 0 : _event$touches$.identifier,
        pageX: (_event$touches$2 = event.touches[0]) == null ? void 0 : _event$touches$2.pageX,
        pageY: (_event$touches$3 = event.touches[0]) == null ? void 0 : _event$touches$3.pageY,
        timestamp: event.timeStamp,
      });
    };
    var handleTouchEnd = function handleTouchEnd(event) {
      var _event$changedTouches, _event$changedTouches2, _event$changedTouches3;
      console.log('Touch end detected:', {
        identifier:
          (_event$changedTouches = event.changedTouches[0]) == null
            ? void 0
            : _event$changedTouches.identifier,
        pageX:
          (_event$changedTouches2 = event.changedTouches[0]) == null
            ? void 0
            : _event$changedTouches2.pageX,
        pageY:
          (_event$changedTouches3 = event.changedTouches[0]) == null
            ? void 0
            : _event$changedTouches3.pageY,
        timestamp: event.timeStamp,
      });
      console.log('Current Touch Bank:', event.targetTouches);
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return function () {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  var handleJoinToConnect = function handleJoinToConnect() {
    console.log('Join to Connect button pressed');
    navigation.navigate('SignUp');
  };
  var handleLogin = function handleLogin() {
    console.log('Log In button pressed');
    navigation.navigate('Login');
  };
  return _react.default.createElement(
    _reactNative.View,
    {
      style: styles.container,
      __self: _this,
      __source: { fileName: _jsxFileName, lineNumber: 54, columnNumber: 5 },
    },
    _react.default.createElement(
      _reactNative.View,
      {
        style: styles.logoContainer,
        pointerEvents: 'auto',
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 55, columnNumber: 7 },
      },
      _react.default.createElement(_reactNative.Image, {
        style: styles.logo,
        source: {
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxwEzOQeClCnHKX4TnKD5D7LuAGw3woEpIuKyGk3CeC1RWKwm-SqhrW_YWYAuhug84fk0em05kQah2e6k4c4uMPMLyCUwE7MU4iMngYYHqChG0LPqDgd21BPsyRVt84Ma7BtnOQjbHM6IoT-_ysWhTHrqjC_Qe93sYKL8KvpEtQiB9Xi2HAeXVgdFb-L223HIxI1MYK4RLGc9x9TFuQKAbM2qNUFNIQcNWstbd1Ezd7HZYiFCrLP--b7USN4Hz1l2-ykRJGBQK-BM',
        },
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 9 },
      })
    ),
    _react.default.createElement(
      _reactNative.Text,
      {
        style: styles.headline,
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 63, columnNumber: 7 },
      },
      'Connect. ',
      _react.default.createElement(
        _reactNative.Text,
        {
          style: styles.accentColor,
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 64, columnNumber: 18 },
        },
        'Create.'
      ),
      ' Cash Out.'
    ),
    _react.default.createElement(
      _reactNative.Text,
      {
        style: styles.tagline,
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 66, columnNumber: 7 },
      },
      'For creators'
    ),
    _react.default.createElement(
      _reactNative.View,
      {
        style: styles.buttonContainer,
        pointerEvents: 'auto',
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 67, columnNumber: 7 },
      },
      _react.default.createElement(
        _reactNative.TouchableOpacity,
        {
          style: styles.primaryButton,
          onPress: handleJoinToConnect,
          onPressIn: function onPressIn() {
            return console.log('Join to Connect button press in');
          },
          onPressOut: function onPressOut() {
            return console.log('Join to Connect button press out');
          },
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 68, columnNumber: 9 },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            style: styles.primaryButtonText,
            __self: _this,
            __source: { fileName: _jsxFileName, lineNumber: 74, columnNumber: 11 },
          },
          'Join to Connect'
        )
      ),
      _react.default.createElement(
        _reactNative.TouchableOpacity,
        {
          style: styles.secondaryButton,
          onPress: handleLogin,
          onPressIn: function onPressIn() {
            return console.log('Log In button press in');
          },
          onPressOut: function onPressOut() {
            return console.log('Log In button press out');
          },
          __self: _this,
          __source: { fileName: _jsxFileName, lineNumber: 76, columnNumber: 9 },
        },
        _react.default.createElement(
          _reactNative.Text,
          {
            style: styles.secondaryButtonText,
            __self: _this,
            __source: { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 },
          },
          'Log In'
        )
      )
    )
  );
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: { marginBottom: 40 },
  logo: { width: 100, height: 100 },
  headline: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
    color: '#FFFFFF',
  },
  accentColor: { color: '#F5A623' },
  tagline: { fontSize: 16, textAlign: 'center', color: '#A0A0A0', marginBottom: 48 },
  buttonContainer: { width: '100%', maxWidth: 320 },
  primaryButton: {
    backgroundColor: '#F5A623',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  primaryButtonText: { color: '#1B1B1E', fontWeight: '600', textAlign: 'center', fontSize: 18 },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#F5A623',
  },
  secondaryButtonText: { color: '#F5A623', fontWeight: '600', textAlign: 'center', fontSize: 18 },
});
var _default = (exports.default = WelcomeScreen);
