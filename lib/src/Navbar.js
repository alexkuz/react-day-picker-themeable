'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStylingFromTheme = require('./createStylingFromTheme');

var _createStylingFromTheme2 = _interopRequireDefault(_createStylingFromTheme);

var _keys = require('./keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      prevHover: false,
      nextHover: false
    }, _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir,
          styling = _props.styling,
          theme = _props.theme;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var navBarStyling = styling || (0, _createStylingFromTheme2.default)(theme);

      var previousButton = _react2.default.createElement('span', _extends({
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous'
      }, navBarStyling('dayPickerNavButton', 'prev', shouldShowPrevious, this.state.prevHover), {
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ prevHover: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ prevHover: false });
        }
      }));

      var nextButton = _react2.default.createElement('span', _extends({
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right'
      }, navBarStyling('dayPickerNavButton', 'next', shouldShowNext, this.state.nextHover), {
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ nextHover: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ nextHover: false });
        }
      }));

      return _react2.default.createElement(
        'div',
        navBarStyling('dayPickerNavBar', dir),
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.defaultProps = {
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;
Navbar.propTypes = process.env.NODE_ENV !== "production" ? {
  showPreviousButton: _propTypes2.default.bool,
  showNextButton: _propTypes2.default.bool,
  onPreviousClick: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  dir: _propTypes2.default.string,
  labels: _propTypes2.default.shape({
    previousMonth: _propTypes2.default.string.isRequired,
    nextMonth: _propTypes2.default.string.isRequired
  }),
  styling: _propTypes2.default.func,
  theme: _propTypes2.default.any
} : {};
//# sourceMappingURL=Navbar.js.map