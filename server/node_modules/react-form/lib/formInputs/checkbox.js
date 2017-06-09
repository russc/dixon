'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormInputCheckbox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _formInput = require('../formInput');

var _formInput2 = _interopRequireDefault(_formInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


function FormInputCheckbox(_ref) {
  var field = _ref.field,
      showErrors = _ref.showErrors,
      errorBefore = _ref.errorBefore,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      isForm = _ref.isForm,
      noTouch = _ref.noTouch,
      rest = _objectWithoutProperties(_ref, ['field', 'showErrors', 'errorBefore', 'onChange', 'onBlur', 'isForm', 'noTouch']);

  return _react2.default.createElement(
    _formInput2.default,
    { field: field, showErrors: showErrors, errorBefore: errorBefore, isForm: isForm },
    function (_ref2) {
      var setValue = _ref2.setValue,
          getValue = _ref2.getValue,
          setTouched = _ref2.setTouched;

      return _react2.default.createElement('input', _extends({}, rest, {
        type: 'checkbox',
        checked: getValue(false),
        onChange: (0, _util.buildHandler)(onChange, function (e) {
          return setValue(e.target.checked, noTouch);
        }),
        onBlur: (0, _util.buildHandler)(onBlur, function () {
          return setTouched();
        })
      }));
    }
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtSW5wdXRzL2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkZvcm1JbnB1dENoZWNrYm94IiwiZmllbGQiLCJzaG93RXJyb3JzIiwiZXJyb3JCZWZvcmUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImlzRm9ybSIsIm5vVG91Y2giLCJyZXN0Iiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsInNldFRvdWNoZWQiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBS3dCQSxpQjs7QUFMeEI7Ozs7QUFFQTs7QUFDQTs7Ozs7OztBQUZBOzs7QUFJZSxTQUFTQSxpQkFBVCxPQVNaO0FBQUEsTUFSREMsS0FRQyxRQVJEQSxLQVFDO0FBQUEsTUFQREMsVUFPQyxRQVBEQSxVQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsTUFHQyxRQUhEQSxNQUdDO0FBQUEsTUFGREMsT0FFQyxRQUZEQSxPQUVDO0FBQUEsTUFERUMsSUFDRjs7QUFDRCxTQUNFO0FBQUE7QUFBQSxNQUFXLE9BQU9QLEtBQWxCLEVBQXlCLFlBQVlDLFVBQXJDLEVBQWlELGFBQWFDLFdBQTlELEVBQTJFLFFBQVFHLE1BQW5GO0FBQ0cscUJBQXNDO0FBQUEsVUFBcENHLFFBQW9DLFNBQXBDQSxRQUFvQztBQUFBLFVBQTFCQyxRQUEwQixTQUExQkEsUUFBMEI7QUFBQSxVQUFoQkMsVUFBZ0IsU0FBaEJBLFVBQWdCOztBQUNyQyxhQUNFLG9EQUNNSCxJQUROO0FBRUUsY0FBSyxVQUZQO0FBR0UsaUJBQVNFLFNBQVMsS0FBVCxDQUhYO0FBSUUsa0JBQVUsd0JBQWFOLFFBQWIsRUFBdUI7QUFBQSxpQkFBS0ssU0FBU0csRUFBRUMsTUFBRixDQUFTQyxPQUFsQixFQUEyQlAsT0FBM0IsQ0FBTDtBQUFBLFNBQXZCLENBSlo7QUFLRSxnQkFBUSx3QkFBYUYsTUFBYixFQUFxQjtBQUFBLGlCQUFNTSxZQUFOO0FBQUEsU0FBckI7QUFMVixTQURGO0FBU0Q7QUFYSCxHQURGO0FBZUQiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vL1xuaW1wb3J0IHsgYnVpbGRIYW5kbGVyIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi9mb3JtSW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1JbnB1dENoZWNrYm94ICh7XG4gIGZpZWxkLFxuICBzaG93RXJyb3JzLFxuICBlcnJvckJlZm9yZSxcbiAgb25DaGFuZ2UsXG4gIG9uQmx1cixcbiAgaXNGb3JtLFxuICBub1RvdWNoLFxuICAuLi5yZXN0XG59KSB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1JbnB1dCBmaWVsZD17ZmllbGR9IHNob3dFcnJvcnM9e3Nob3dFcnJvcnN9IGVycm9yQmVmb3JlPXtlcnJvckJlZm9yZX0gaXNGb3JtPXtpc0Zvcm19PlxuICAgICAgeyh7c2V0VmFsdWUsIGdldFZhbHVlLCBzZXRUb3VjaGVkfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgIGNoZWNrZWQ9e2dldFZhbHVlKGZhbHNlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtidWlsZEhhbmRsZXIob25DaGFuZ2UsIGUgPT4gc2V0VmFsdWUoZS50YXJnZXQuY2hlY2tlZCwgbm9Ub3VjaCkpfVxuICAgICAgICAgICAgb25CbHVyPXtidWlsZEhhbmRsZXIob25CbHVyLCAoKSA9PiBzZXRUb3VjaGVkKCkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9Gb3JtSW5wdXQ+XG4gIClcbn1cbiJdfQ==