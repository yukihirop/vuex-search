'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicApi = undefined;

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _getters = require('./getters');

var _getters2 = _interopRequireDefault(_getters);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _actionTypes = require('./action-types');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _getterTypes = require('./getter-types');

var getterTypes = _interopRequireWildcard(_getterTypes);

var _mutationTypes = require('./mutation-types');

var mutationTypes = _interopRequireWildcard(_mutationTypes);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

/**
 * Class that creates submodule in Vuex Store, and manages watched
 * states registration and unregistration, and SearchApi subscriptions.
 */
var VuexSearch = function () {
  /**
   * Constructor.
   *
   * @param {Store} store A vuex store instance.
   * @param {[resourceName: string]: { getter, indexes, searchApi? }} resources
   *    Options of resources and its index fields, getter, and optional searchApi.
   * @param {SearchApi} searchApi Custom SearchApi to be used and shared by resources
   *    with no custom searchApi.
   */
  function VuexSearch(_ref) {
    var store = _ref.store,
        resources = _ref.resources,
        searchApi = _ref.searchApi;
    (0, _classCallCheck3.default)(this, VuexSearch);

    this._base = VuexSearch.base;
    this._store = store;
    this._defaultSearchApi = searchApi;
    this._searchMap = {};
    this._resourceOptions = {};
    this._unwatchResource = {};
    this._customSearch = new _map2.default();
    /* eslint-disable-next-line no-param-reassign */
    store.search = this;

    this._initModule();
    this._initResources(resources);
  }

  /**
   * Share map from resourceName to searchApi with actions
   * and register VuexSearch submodule on Vuex Store.
   */


  (0, _createClass3.default)(VuexSearch, [{
    key: '_initModule',
    value: function _initModule() {
      var actions = (0, _actions2.default)(this._searchMap);

      this._store.registerModule(this._base, {
        namespaced: true,
        root: true,
        mutations: _mutations2.default,
        actions: actions,
        getters: _getters2.default,
        state: {}
      });
    }

    /**
     * Initialize all resources which are statically defined in store.
     *
     * @param {[resourceName: string]: { getter, indexes, watch?, searchApi? }} resources
     *    Options of resources and its index fields, getter, and optional watch and searchApi
     */

  }, {
    key: '_initResources',
    value: function _initResources(resources) {
      var _this = this;

      (0, _entries2.default)(resources).forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            resourceName = _ref3[0],
            config = _ref3[1];

        _this.registerResource(resourceName, config);
      });
    }

    /**
     * - Public API -
     * Dynamically register resource for indexing.
     *
     * @param resourceName Uniquely identifies the resource (eg. "databases").
     *
     * config:
     * @param {(state: Object) => Array|Object} getter Function getter
     *    to access resource and to be watched.
     * @param {string[]} index Fields to be indexed.
     * @param {Boolean|Object} [watch] Options to reindex if resource changes
     * @param {SearchApi} [searchApi] Custom SearchApi for this resource.
     */

  }, {
    key: 'registerResource',
    value: function registerResource(resourceName, config) {
      var _this2 = this;

      var store = this._store;
      var namespace = this._getNamespace(this._base);

      store.commit('' + namespace + mutationTypes.SET_INIT_RESOURCE, { resourceName: resourceName });

      var getter = config.getter,
          index = config.index,
          _config$watch = config.watch,
          watch = _config$watch === undefined ? true : _config$watch,
          _config$searchApi = config.searchApi,
          searchApi = _config$searchApi === undefined ? this._defaultSearchApi : _config$searchApi;


      this._searchMap[resourceName] = searchApi;
      this._resourceOptions[resourceName] = { getter: getter, index: index };

      this._searchSubscribeIfNecessary(searchApi, resourceName, function (payload) {
        _this2._store.dispatch('' + namespace + actionTypes.RECEIVE_RESULT, payload);
      });

      this.reindex(resourceName);

      if (watch) {
        var watchCb = function watchCb() {
          var searchString = _this2._getSearchText(resourceName);

          _this2.reindex(resourceName);
          _this2.search(resourceName, searchString);
        };

        var _watch$delay = watch.delay,
            delay = _watch$delay === undefined ? 0 : _watch$delay;


        this._unwatchResource[resourceName] = store.watch(getter, (0, _utils.debounce)(watchCb, delay), { deep: true });
      }
    }

    /**
     * - Public API -
     * Search wrapper function for dispatching search action.
     *
     * @param {String} resourceName Uniquely identifies the resource (eg. "databases").
     * @param {String} searchString Text to search.
     */

  }, {
    key: 'search',
    value: function search(resourceName, searchString) {
      var store = this._store;
      var namespace = this._getNamespace(this._base);

      store.dispatch('' + namespace + actionTypes.SEARCH, {
        resourceName: resourceName, searchString: searchString
      });
    }

    /**
     * - Public API -
     * Reindex resource wrapper function for dispatching reindex action.
     *
     * This method is useful to avoid passing index fields and getter function
     * of the resource.
     *
     * @param {String} resourceName Uniquely identifies the resource (eg. "databases").
     */

  }, {
    key: 'reindex',
    value: function reindex(resourceName) {
      var store = this._store;
      var namespace = this._getNamespace(this._base);

      var _resourceOptions$reso = this._resourceOptions[resourceName],
          getter = _resourceOptions$reso.getter,
          index = _resourceOptions$reso.index;


      store.dispatch('' + namespace + actionTypes.searchApi.INDEX_RESOURCE, {
        fieldNamesOrIndexFunction: index,
        resourceName: resourceName,
        resources: getter(store.state)
      });

      var searchString = this._getSearchText(resourceName);
      this.search(resourceName, searchString);
    }

    /**
     * - Public API -
     * Unregister resource from indexing.
     * This method will unwatch state changes and unsubscribe from searchApi
     * used by the resource.
     *
     * @param resourceName Resource name to be unregistered.
     */

  }, {
    key: 'unregisterResource',
    value: function unregisterResource(resourceName) {
      var store = this._store;
      var namespace = this._getNamespace(this._base);

      delete this._resourceOptions[resourceName];

      var searchApi = this._searchMap[resourceName];
      this._searchUnsubscribeIfNecessary(searchApi, resourceName);
      searchApi.stopSearch(resourceName);
      delete this._searchMap[resourceName];

      var unwatch = this._unwatchResource[resourceName];
      if (unwatch instanceof Function) unwatch();
      delete this._unwatchResource[resourceName];

      store.commit('' + namespace + mutationTypes.DELETE_RESOURCE, { resourceName: resourceName });
    }

    /**
     * Register resourceName to be kept tracked by customSearch map and check
     * whether need to subscribe if the searchApi is not yet subscribed.
     *
     * customSearch is a map from searchApi instance to list of resources using it
     * and unsubscribe callback.
     *
     * @param {SearchApi} searchApi SearchApi instance to be subscribed.
     *    Will be checked if already been subscribed to prevent duplication.
     * @param resourceName Resource to be kept tracked by the map.
     * @param {({ result: string[], resourceName, text }) => void} fn callback to be subscribed.
     */

  }, {
    key: '_searchSubscribeIfNecessary',
    value: function _searchSubscribeIfNecessary(searchApi, resourceName, fn) {
      var map = this._customSearch.get(searchApi);
      if (!map) {
        this._customSearch.set(searchApi, {
          unsubscribe: searchApi.subscribe(fn),
          resources: [resourceName]
        });
      } else {
        map.resources.push(resourceName);
      }
    }

    /**
     * Remove a resource from searchApi's resources list and
     * unsubscribe searchApi if no resources using it anymore.
     *
     * @param {SearchApi} searchApi SearchApi instance to be unsubscribed.
     * @param resourceName Resource to be removed from customSearch map.
     */

  }, {
    key: '_searchUnsubscribeIfNecessary',
    value: function _searchUnsubscribeIfNecessary(searchApi, resourceName) {
      var map = this._customSearch.get(searchApi);
      if (map.resources.length === 1) {
        map.unsubscribe();
        this._customSearch.delete(searchApi);
      } else {
        map.resources = map.resources.filter(function (name) {
          return name !== resourceName;
        });
      }
    }

    /**
     * Wrapper function for getting resource index search text.
     *
     * @param {String} resourceName
     * @returns {String}
     */

  }, {
    key: '_getSearchText',
    value: function _getSearchText(resourceName) {
      var store = this._store;
      var namespace = this._getNamespace(this._base);

      return store.getters['' + namespace + getterTypes.resourceIndexByName](resourceName).text;
    }

    /**
     * Get namespace from Vuex Store's modules' internal map of
     * module path to namespace.
     * @param {String} path
     * @returns {String}
     */

  }, {
    key: '_getNamespace',
    value: function _getNamespace() {
      for (var _len = arguments.length, modulePath = Array(_len), _key = 0; _key < _len; _key++) {
        modulePath[_key] = arguments[_key];
      }

      return this._store._modules.getNamespace(modulePath);
    }
  }]);
  return VuexSearch;
}();

/**
 * Generate map of actions to be exposed.
 */


function getPublicApi() {
  var publicApi = {};
  (0, _getOwnPropertyNames2.default)(VuexSearch.prototype).filter(function (methodName) {
    return !methodName.startsWith('_');
  }).forEach(function (methodName) {
    publicApi[methodName] = methodName;
  });

  (0, _freeze2.default)(publicApi);

  return publicApi;
}

/**
 * VuexSearch static property 'base'.
 */
var base = 'vuexSearch';
Object.defineProperty(VuexSearch, 'base', {
  get: function get() {
    return base;
  },
  set: function set(newBase) {
    base = newBase;
  }
});

var publicApi = exports.publicApi = getPublicApi();
exports.default = VuexSearch;