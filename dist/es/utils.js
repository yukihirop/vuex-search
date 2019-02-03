'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancellationSymbol = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.normalizeMap = normalizeMap;
exports.normalizeNamespaceName = normalizeNamespaceName;
exports.modulePathToNamespace = modulePathToNamespace;
exports.cancellablePromiseWrapper = cancellablePromiseWrapper;
exports.debounce = debounce;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Normalize the map
 * normalizeMap([1, 2]) => [ { key: 1, val: 1 }, { key: 2, val: 2 } ]
 * normalizeMap({a: 1, b: 2}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return { key: key, val: key };
  }) : (0, _keys2.default)(map).map(function (key) {
    return { key: key, val: map[key] };
  });
}

/**
 * Adds '/'
 *
 * @param {string} namespace
 */
function normalizeNamespaceName(namespace) {
  if (namespace === '') return '';
  return namespace.slice(-1) === '/' ? namespace : namespace.concat('/');
}

/**
 * With assumption Vuex Search module starts from root.
 *
 * @param {string | [string]} modulePath
 */
function modulePathToNamespace(modulePath) {
  if (Array.isArray(modulePath)) {
    return modulePath.reduce(function (ns, path) {
      return path ? '' + ns + path + '/' : ns;
    }, '');
  } else if (typeof modulePath === 'string') {
    return normalizeNamespaceName(modulePath);
  }
  return normalizeNamespaceName((0, _stringify2.default)(modulePath));
}

var cancellationSymbol = exports.cancellationSymbol = (0, _symbol2.default)('cancel');

/**
 * Basic Promise does not support promise cancellation.
 * This function wraps the basic promise and returns cancellable one.
 *
 * @param {Promise} promise
 */
function cancellablePromiseWrapper(promise) {
  var _this = this;

  var rej = void 0;

  var wrappedPromise = new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rej = reject;

              _context.prev = 1;
              _context.next = 4;
              return promise;

            case 4:
              res = _context.sent;

              resolve(res);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              reject(_context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  wrappedPromise.cancel = function () {
    return rej(cancellationSymbol);
  };

  return wrappedPromise;
}

/**
 * Postpone its execution until after wait milliseconds
 * have elapsed since the last time it was invoked.
 *
 * @param {Function} fn Function callback after delay
 * @param {Number} delay Debounce time
 */
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timeoutId = void 0;

  if (delay === 0) return fn;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      return fn.apply(undefined, args);
    }, delay);
  };
}