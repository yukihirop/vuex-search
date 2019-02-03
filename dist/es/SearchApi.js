'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsSearch = require('js-search');

var _jsSearch2 = _interopRequireDefault(_jsSearch);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

/**
 * Observable that manages communication between vuex-search plugin and the Search utility.
 * This class maps resource names to search indicies and manages subscribers.
 */
var SubscribableSearchApi = function () {
  /**
   * Constructor.
   */
  function SubscribableSearchApi() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        indexMode = _ref.indexMode,
        tokenizePattern = _ref.tokenizePattern,
        caseSensitive = _ref.caseSensitive;

    (0, _classCallCheck3.default)(this, SubscribableSearchApi);

    this._indexMode = indexMode;
    this._tokenizePattern = tokenizePattern;
    this._caseSensitive = caseSensitive;
    this._resourceToSearchMap = {};
    this._currentSearchPromiseMap = {};

    // Subscribers
    this._onErrorSubscribers = [];
    this._onNextSubscribers = [];
  }

  /**
   * Subscribe to Search events.
   * Subscribers will be notified each time a Search is performed.
   *
   * Successful searches will call :onNext with the following parameters:
   * >result: An array of uids matching the search
   * >text: Search string
   * >resourceName: Identifies the resource that was searched
   *
   * Failed searches (searches that result in an Error) will call :onError with an Error parameter.
   *
   * This method returns a callback that can be used to unsubscribe from Search events.
   * Just invoke the function without any parameters to unsubscribe.
   */


  (0, _createClass3.default)(SubscribableSearchApi, [{
    key: 'subscribe',
    value: function subscribe(onNext, onError) {
      var _this = this;

      if (onNext) this._onNextSubscribers.push(onNext);
      if (onError) this._onErrorSubscribers.push(onError);

      // Return dispose function
      return function () {
        _this._onNextSubscribers = _this._onNextSubscribers.filter(function (subscriber) {
          return subscriber !== onNext;
        });
        _this._onErrorSubscribers = _this._onErrorSubscribers.filter(function (subscriber) {
          return subscriber !== onError;
        });
      };
    }

    /**
     * Builds a searchable index of a set of resources.
     *
     * @param fieldNamesOrIndexFunction This value is passed to
     *   vuexSearchPlugin() factory during initialization
     *   It is either an Array of searchable fields (to be auto-indexed)
     *   Or a custom index function to be called with a :resources object
     *   and an :indexDocument callback
     * @param resourceName Uniquely identifies the resource (eg. "databases")
     * @param resources Map of resource uid to resource (Object)
     */

  }, {
    key: 'indexResource',
    value: function indexResource(_ref2) {
      var fieldNamesOrIndexFunction = _ref2.fieldNamesOrIndexFunction,
          resourceName = _ref2.resourceName,
          resources = _ref2.resources;

      var search = new _jsSearch2.default({
        indexMode: this._indexMode,
        tokenizePattern: this._tokenizePattern,
        caseSensitive: this._caseSensitive
      });

      if (Array.isArray(fieldNamesOrIndexFunction)) {
        if (resources.forEach instanceof Function) {
          resources.forEach(function (resource) {
            fieldNamesOrIndexFunction.forEach(function (field) {
              search.indexDocument(resource.id, resource[field] || '');
            });
          });
        } else {
          (0, _keys2.default)(resources).forEach(function (key) {
            var resource = resources[key];
            fieldNamesOrIndexFunction.forEach(function (field) {
              search.indexDocument(resource.id, resource[field] || '');
            });
          });
        }
      } else if (fieldNamesOrIndexFunction instanceof Function) {
        fieldNamesOrIndexFunction({
          indexDocument: search.indexDocument,
          resources: resources
        });
      } else {
        throw Error('Expected resource index to be either an Array of fields or an index function');
      }

      this._resourceToSearchMap[resourceName] = search;
    }

    /**
     * Searches a resource and returns a Promise to be resolved with
     * an array of uids that match the search string.
     * Upon completion (or failure) this method also notifies all current subscribers.
     *
     * @param resourceName Uniquely identifies the resource (eg. "databases")
     * @param text Search string
     */

  }, {
    key: 'performSearch',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resourceName, text) {
        var search, searchPromise, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                search = this._resourceToSearchMap[resourceName];
                searchPromise = (0, _utils.cancellablePromiseWrapper)(search.search(text));

                this._currentSearchPromiseMap[resourceName] = searchPromise;

                _context.next = 6;
                return searchPromise;

              case 6:
                result = _context.sent;

                delete this._currentSearchPromiseMap[resourceName];

                this._notifyNext({
                  result: result,
                  text: text,
                  resourceName: resourceName
                });

                return _context.abrupt('return', result);

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                if (!(_context.t0 === _utils.cancellationSymbol)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt('return', []);

              case 16:
                this._notifyError(_context.t0);

                throw _context.t0;

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function performSearch(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return performSearch;
    }()

    /**
     * Stop search by resourceName if running.
     * Promise of search will be cancelled (rejected with CancellationError)
     */

  }, {
    key: 'stopSearch',
    value: function stopSearch(resourceName) {
      var currentSearch = this._currentSearchPromiseMap[resourceName];
      if (currentSearch) currentSearch.cancel();
    }

    /** Notify all subscribes of :onError */

  }, {
    key: '_notifyError',
    value: function _notifyError(error) {
      this._onErrorSubscribers.forEach(function (subscriber) {
        return subscriber(error);
      });
    }

    /** Notify all subscribes of :onNext */

  }, {
    key: '_notifyNext',
    value: function _notifyNext(data) {
      this._onNextSubscribers.forEach(function (subscriber) {
        return subscriber(data);
      });
    }
  }]);
  return SubscribableSearchApi;
}();

exports.default = SubscribableSearchApi;