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

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
  }

  _createClass(RadioGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        formRadioGroup: this
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          field = _props.field,
          showErrors = _props.showErrors,
          _props$errorBefore = _props.errorBefore,
          errorBefore = _props$errorBefore === undefined ? true : _props$errorBefore,
          isForm = _props.isForm,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['field', 'showErrors', 'errorBefore', 'isForm', 'children']);

      return _react2.default.createElement(
        _formInput2.default,
        { field: field, showErrors: showErrors, errorBefore: errorBefore, isForm: isForm },
        function (api) {
          _extends(_this2, api);
          return _react2.default.createElement(
            'radiogroup',
            rest,
            children
          );
        }
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

RadioGroup.childContextTypes = {
  formRadioGroup: _propTypes2.default.object
};
exports.default = RadioGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL3JhZGlvR3JvdXAuanMiXSwibmFtZXMiOlsiUmFkaW9Hcm91cCIsImZvcm1SYWRpb0dyb3VwIiwicHJvcHMiLCJmaWVsZCIsInNob3dFcnJvcnMiLCJlcnJvckJlZm9yZSIsImlzRm9ybSIsImNoaWxkcmVuIiwicmVzdCIsImFwaSIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsVTs7Ozs7Ozs7Ozs7c0NBSUE7QUFDakIsYUFBTztBQUNMQyx3QkFBZ0I7QUFEWCxPQUFQO0FBR0Q7Ozs2QkFDUztBQUFBOztBQUFBLG1CQUNxRSxLQUFLQyxLQUQxRTtBQUFBLFVBQ0FDLEtBREEsVUFDQUEsS0FEQTtBQUFBLFVBQ09DLFVBRFAsVUFDT0EsVUFEUDtBQUFBLHNDQUNtQkMsV0FEbkI7QUFBQSxVQUNtQkEsV0FEbkIsc0NBQ2lDLElBRGpDO0FBQUEsVUFDdUNDLE1BRHZDLFVBQ3VDQSxNQUR2QztBQUFBLFVBQytDQyxRQUQvQyxVQUMrQ0EsUUFEL0M7QUFBQSxVQUM0REMsSUFENUQ7O0FBRVIsYUFDRTtBQUFBO0FBQUEsVUFBVyxPQUFPTCxLQUFsQixFQUF5QixZQUFZQyxVQUFyQyxFQUFpRCxhQUFhQyxXQUE5RCxFQUEyRSxRQUFRQyxNQUFuRjtBQUNHLGtCQUFDRyxHQUFELEVBQVM7QUFDUiwyQkFBb0JBLEdBQXBCO0FBQ0EsaUJBQ0U7QUFBQTtBQUFnQkQsZ0JBQWhCO0FBQ0dEO0FBREgsV0FERjtBQUtEO0FBUkgsT0FERjtBQVlEOzs7O0VBdkJxQyxnQkFBTUcsUzs7QUFBekJWLFUsQ0FDWlcsaUIsR0FBb0I7QUFDekJWLGtCQUFnQixvQkFBVVc7QUFERCxDO2tCQURSWixVIiwiZmlsZSI6InJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vL1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgZm9ybVJhZGlvR3JvdXA6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuICBnZXRDaGlsZENvbnRleHQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtUmFkaW9Hcm91cDogdGhpc1xuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZmllbGQsIHNob3dFcnJvcnMsIGVycm9yQmVmb3JlID0gdHJ1ZSwgaXNGb3JtLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUlucHV0IGZpZWxkPXtmaWVsZH0gc2hvd0Vycm9ycz17c2hvd0Vycm9yc30gZXJyb3JCZWZvcmU9e2Vycm9yQmVmb3JlfSBpc0Zvcm09e2lzRm9ybX0+XG4gICAgICAgIHsoYXBpKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBhcGkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxyYWRpb2dyb3VwIHsuLi5yZXN0fT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9yYWRpb2dyb3VwPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybUlucHV0PlxuICAgIClcbiAgfVxufVxuIl19