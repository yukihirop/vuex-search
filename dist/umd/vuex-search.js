!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.VuexSearch = factory() : root.VuexSearch = factory();
}("undefined" != typeof self ? self : this, function() {
    /******/
    return function(modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/
        /******/ // The require function
        /******/        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) 
            /******/ return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/            var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: !1,
                /******/ exports: {}
                /******/            };
            /******/
            /******/ // Execute the module function
            /******/            
            /******/
            /******/ // Return the exports of the module
            /******/ return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            /******/
            /******/ // Flag the module as loaded
            /******/ module.l = !0, module.exports;
            /******/        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/        
        /******/
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__.m = modules, 
        /******/
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules, 
        /******/
        /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ __webpack_require__.o(exports, name) || 
            /******/ Object.defineProperty(exports, name, {
                /******/ configurable: !1,
                /******/ enumerable: !0,
                /******/ get: getter
                /******/            })
            /******/;
        }, 
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? 
            /******/ function() {
                return module.default;
            } : 
            /******/ function() {
                return module;
            };
            /******/            
            /******/ return __webpack_require__.d(getter, "a", getter), getter;
            /******/        }, 
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, 
        /******/
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 15);
        /******/    }
    /************************************************************************/
    /******/ ([ 
    /* 0 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */        
        /**
 * Adds '/'
 *
 * @param {string} namespace
 */
        function normalizeNamespaceName(namespace) {
            return "" === namespace ? "" : "/" === namespace.slice(-1) ? namespace : namespace.concat("/");
        }
        /**
 * With assumption Vuex Search module starts from root.
 *
 * @param {string | [string]} modulePath
 */        __webpack_exports__.d = 
        /**
 * Normalize the map
 * normalizeMap([1, 2]) => [ { key: 1, val: 1 }, { key: 2, val: 2 } ]
 * normalizeMap({a: 1, b: 2}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
        function(map) {
            return Array.isArray(map) ? map.map(key => ({
                key: key,
                val: key
            })) : Object.keys(map).map(key => ({
                key: key,
                val: map[key]
            }));
        }, 
        /* harmony export (immutable) */ __webpack_exports__.e = normalizeNamespaceName, 
        /* unused harmony export modulePathToNamespace */
        /* harmony export (immutable) */ __webpack_exports__.a = 
        /**
 * Basic Promise does not support promise cancellation.
 * This function wraps the basic promise and returns cancellable one.
 *
 * @param {Promise} promise
 */
        function(promise) {
            let rej;
            const wrappedPromise = new Promise(async (resolve, reject) => {
                rej = reject;
                try {
                    const res = await promise;
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            });
            return wrappedPromise.cancel = (() => rej(cancellationSymbol)), wrappedPromise;
        }
        /**
 * Postpone its execution until after wait milliseconds
 * have elapsed since the last time it was invoked.
 *
 * @param {Function} fn Function callback after delay
 * @param {Number} delay Debounce time
 */ , 
        /* harmony export (immutable) */ __webpack_exports__.c = function(fn, delay = 0) {
            let timeoutId;
            return 0 === delay ? fn : (...args) => {
                timeoutId && clearTimeout(timeoutId), timeoutId = setTimeout(() => fn(...args), delay);
            };
        }
        /***/;
        const cancellationSymbol = Symbol("cancel");
        /* harmony export (immutable) */        __webpack_exports__.b = cancellationSymbol;
    }, 
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _AllSubstringsIndexStrategy = __webpack_require__(16);
        Object.defineProperty(exports, "AllSubstringsIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _AllSubstringsIndexStrategy.AllSubstringsIndexStrategy;
            }
        });
        var _ExactWordIndexStrategy = __webpack_require__(17);
        Object.defineProperty(exports, "ExactWordIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _ExactWordIndexStrategy.ExactWordIndexStrategy;
            }
        });
        var _PrefixIndexStrategy = __webpack_require__(18);
        Object.defineProperty(exports, "PrefixIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _PrefixIndexStrategy.PrefixIndexStrategy;
            }
        });
    }, 
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _CaseSensitiveSanitizer = __webpack_require__(19);
        Object.defineProperty(exports, "CaseSensitiveSanitizer", {
            enumerable: !0,
            get: function() {
                return _CaseSensitiveSanitizer.CaseSensitiveSanitizer;
            }
        });
        var _LowerCaseSanitizer = __webpack_require__(20);
        Object.defineProperty(exports, "LowerCaseSanitizer", {
            enumerable: !0,
            get: function() {
                return _LowerCaseSanitizer.LowerCaseSanitizer;
            }
        });
    }, 
    /* 3 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */        var __WEBPACK_IMPORTED_MODULE_0__mutations__ = __webpack_require__(29), __WEBPACK_IMPORTED_MODULE_1__getters__ = __webpack_require__(33), __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(34), __WEBPACK_IMPORTED_MODULE_3__action_types__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_4__getter_types__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_5__mutation_types__ = __webpack_require__(6), __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(0);
        /* harmony import */        
        /* eslint-disable no-underscore-dangle */
        /**
 * Class that creates submodule in Vuex Store, and manages watched
 * states registration and unregistration, and SearchApi subscriptions.
 */
        class VuexSearch {
            /**
   * Constructor.
   *
   * @param {Store} store A vuex store instance.
   * @param {[resourceName: string]: { getter, indexes, searchApi? }} resources
   *    Options of resources and its index fields, getter, and optional searchApi.
   * @param {SearchApi} searchApi Custom SearchApi to be used and shared by resources
   *    with no custom searchApi.
   */
            constructor({store: store, resources: resources, searchApi: searchApi}) {
                this._base = VuexSearch.base, this._store = store, this._defaultSearchApi = searchApi, 
                this._searchMap = {}, this._resourceOptions = {}, this._unwatchResource = {}, this._customSearch = new Map(), 
                /* eslint-disable-next-line no-param-reassign */
                store.search = this, this._initModule(), this._initResources(resources);
            }
            /**
   * Share map from resourceName to searchApi with actions
   * and register VuexSearch submodule on Vuex Store.
   */            _initModule() {
                const actions = Object(__WEBPACK_IMPORTED_MODULE_2__actions__.a)(this._searchMap);
                this._store.registerModule(this._base, {
                    namespaced: !0,
                    root: !0,
                    mutations: __WEBPACK_IMPORTED_MODULE_0__mutations__.a,
                    actions: actions,
                    getters: __WEBPACK_IMPORTED_MODULE_1__getters__.a,
                    state: {}
                });
            }
            /**
   * Initialize all resources which are statically defined in store.
   *
   * @param {[resourceName: string]: { getter, indexes, watch?, searchApi? }} resources
   *    Options of resources and its index fields, getter, and optional watch and searchApi
   */            _initResources(resources) {
                Object.entries(resources).forEach(([resourceName, config]) => {
                    this.registerResource(resourceName, config);
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
   */            registerResource(resourceName, config) {
                const store = this._store, namespace = this._getNamespace(this._base);
                store.commit(`${namespace}${__WEBPACK_IMPORTED_MODULE_5__mutation_types__.b}`, {
                    resourceName: resourceName
                });
                const {getter: getter, index: index, watch: watch = !0, searchApi: searchApi = this._defaultSearchApi} = config;
                if (this._searchMap[resourceName] = searchApi, this._resourceOptions[resourceName] = {
                    getter: getter,
                    index: index
                }, this._searchSubscribeIfNecessary(searchApi, resourceName, payload => {
                    this._store.dispatch(`${namespace}${__WEBPACK_IMPORTED_MODULE_3__action_types__.a}`, payload);
                }), this.reindex(resourceName), watch) {
                    const watchCb = () => {
                        const searchString = this._getSearchText(resourceName);
                        this.reindex(resourceName), this.search(resourceName, searchString);
                    }, {delay: delay = 0} = watch;
                    this._unwatchResource[resourceName] = store.watch(getter, Object(__WEBPACK_IMPORTED_MODULE_6__utils__.c)(watchCb, delay), {
                        deep: !0
                    });
                }
            }
            /**
   * - Public API -
   * Search wrapper function for dispatching search action.
   *
   * @param {String} resourceName Uniquely identifies the resource (eg. "databases").
   * @param {String} searchString Text to search.
   */            search(resourceName, searchString) {
                const store = this._store, namespace = this._getNamespace(this._base);
                store.dispatch(`${namespace}${__WEBPACK_IMPORTED_MODULE_3__action_types__.b}`, {
                    resourceName: resourceName,
                    searchString: searchString
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
   */            reindex(resourceName) {
                const store = this._store, namespace = this._getNamespace(this._base), {getter: getter, index: index} = this._resourceOptions[resourceName];
                store.dispatch(`${namespace}${__WEBPACK_IMPORTED_MODULE_3__action_types__.c.INDEX_RESOURCE}`, {
                    fieldNamesOrIndexFunction: index,
                    resourceName: resourceName,
                    resources: getter(store.state)
                });
                const searchString = this._getSearchText(resourceName);
                this.search(resourceName, searchString);
            }
            /**
   * - Public API -
   * Unregister resource from indexing.
   * This method will unwatch state changes and unsubscribe from searchApi
   * used by the resource.
   *
   * @param resourceName Resource name to be unregistered.
   */            unregisterResource(resourceName) {
                const store = this._store, namespace = this._getNamespace(this._base);
                delete this._resourceOptions[resourceName];
                const searchApi = this._searchMap[resourceName];
                this._searchUnsubscribeIfNecessary(searchApi, resourceName), searchApi.stopSearch(resourceName), 
                delete this._searchMap[resourceName];
                const unwatch = this._unwatchResource[resourceName];
                unwatch instanceof Function && unwatch(), delete this._unwatchResource[resourceName], 
                store.commit(`${namespace}${__WEBPACK_IMPORTED_MODULE_5__mutation_types__.a}`, {
                    resourceName: resourceName
                });
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
   */            _searchSubscribeIfNecessary(searchApi, resourceName, fn) {
                const map = this._customSearch.get(searchApi);
                map ? map.resources.push(resourceName) : this._customSearch.set(searchApi, {
                    unsubscribe: searchApi.subscribe(fn),
                    resources: [ resourceName ]
                });
            }
            /**
   * Remove a resource from searchApi's resources list and
   * unsubscribe searchApi if no resources using it anymore.
   *
   * @param {SearchApi} searchApi SearchApi instance to be unsubscribed.
   * @param resourceName Resource to be removed from customSearch map.
   */            _searchUnsubscribeIfNecessary(searchApi, resourceName) {
                const map = this._customSearch.get(searchApi);
                1 === map.resources.length ? (map.unsubscribe(), this._customSearch.delete(searchApi)) : map.resources = map.resources.filter(name => name !== resourceName);
            }
            /**
   * Wrapper function for getting resource index search text.
   *
   * @param {String} resourceName
   * @returns {String}
   */            _getSearchText(resourceName) {
                const store = this._store, namespace = this._getNamespace(this._base);
                return store.getters[`${namespace}${__WEBPACK_IMPORTED_MODULE_4__getter_types__.c}`](resourceName).text;
            }
            /**
   * Get namespace from Vuex Store's modules' internal map of
   * module path to namespace.
   * @param {String} path
   * @returns {String}
   */            _getNamespace(...modulePath) {
                return this._store._modules.getNamespace(modulePath);
            }
        }
        /**
 * Generate map of actions to be exposed.
 */        
        /**
 * VuexSearch static property 'base'.
 */
        let base = "vuexSearch";
        Object.defineProperty(VuexSearch, "base", {
            get: () => base,
            set(newBase) {
                base = newBase;
            }
        });
        const publicApi = function() {
            const publicApi = {};
            return Object.getOwnPropertyNames(VuexSearch.prototype).filter(methodName => !methodName.startsWith("_")).forEach(methodName => {
                publicApi[methodName] = methodName;
            }), Object.freeze(publicApi), publicApi;
        }();
        /* harmony export (immutable) */        __webpack_exports__.b = publicApi, 
        /* harmony default export */ __webpack_exports__.a = VuexSearch;
    }, 
    /* 4 */
    /***/ function(module, exports) {
        // shim for using process in browser
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
                function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) 
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
            // if setTimeout wasn't available but was latter defined
                        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, function(marker) {
                    if (cachedClearTimeout === clearTimeout) 
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                    // if clearTimeout wasn't available but was latter defined
                                        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                    clearTimeout(marker);
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }(timeout);
            }
        }
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", // empty string to avoid regexp issues
        process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, 
        process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, 
    /* 5 */
    /***/ function(module, exports) {
        var g;
        // This works in non-strict mode
                g = function() {
            return this;
        }();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            "object" == typeof window && (g = window);
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
                module.exports = g;
    }, 
    /* 6 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */ __webpack_exports__.d = "@vuexSearch/mutation/SET_SEARCH_RESULT";
        /* harmony export (immutable) */ __webpack_exports__.b = "@vuexSearch/mutation/SET_INIT_RESOURCE";
        /* harmony export (immutable) */ __webpack_exports__.c = "@vuexSearch/mutation/SET_SEARCH";
        /* harmony export (immutable) */ __webpack_exports__.a = "@vuexSearch/mutation/DELETE_RESOURCE";
    }, 
    /* 7 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */ __webpack_exports__.c = "@@vuexSearch/getter/resourceIndex";
        /* harmony export (immutable) */ __webpack_exports__.b = "@@vuexSearch/getter/isSearching";
        /* harmony export (immutable) */ __webpack_exports__.d = "@@vuexSearch/getter/result";
        const api = {
            resourceIndex: "@@vuexSearch/getter/resourceIndex",
            isSearching: "@@vuexSearch/getter/isSearching",
            result: "@@vuexSearch/getter/result"
        };
        /* harmony export (immutable) */        __webpack_exports__.a = api;
    }, 
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _index = __webpack_require__(1);
        Object.defineProperty(exports, "AllSubstringsIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _index.AllSubstringsIndexStrategy;
            }
        }), Object.defineProperty(exports, "ExactWordIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _index.ExactWordIndexStrategy;
            }
        }), Object.defineProperty(exports, "PrefixIndexStrategy", {
            enumerable: !0,
            get: function() {
                return _index.PrefixIndexStrategy;
            }
        });
        var _index2 = __webpack_require__(2);
        Object.defineProperty(exports, "CaseSensitiveSanitizer", {
            enumerable: !0,
            get: function() {
                return _index2.CaseSensitiveSanitizer;
            }
        }), Object.defineProperty(exports, "LowerCaseSanitizer", {
            enumerable: !0,
            get: function() {
                return _index2.LowerCaseSanitizer;
            }
        });
        var _index3 = __webpack_require__(9);
        Object.defineProperty(exports, "TfIdfSearchIndex", {
            enumerable: !0,
            get: function() {
                return _index3.TfIdfSearchIndex;
            }
        }), Object.defineProperty(exports, "UnorderedSearchIndex", {
            enumerable: !0,
            get: function() {
                return _index3.UnorderedSearchIndex;
            }
        });
        var _index4 = __webpack_require__(11);
        Object.defineProperty(exports, "SimpleTokenizer", {
            enumerable: !0,
            get: function() {
                return _index4.SimpleTokenizer;
            }
        }), Object.defineProperty(exports, "StemmingTokenizer", {
            enumerable: !0,
            get: function() {
                return _index4.StemmingTokenizer;
            }
        }), Object.defineProperty(exports, "StopWordsTokenizer", {
            enumerable: !0,
            get: function() {
                return _index4.StopWordsTokenizer;
            }
        });
        var _Search = __webpack_require__(26);
        Object.defineProperty(exports, "Search", {
            enumerable: !0,
            get: function() {
                return _Search.Search;
            }
        });
        var _StopWordsMap = __webpack_require__(12);
        Object.defineProperty(exports, "StopWordsMap", {
            enumerable: !0,
            get: function() {
                return _StopWordsMap.StopWordsMap;
            }
        });
        var _TokenHighlighter = __webpack_require__(27);
        Object.defineProperty(exports, "TokenHighlighter", {
            enumerable: !0,
            get: function() {
                return _TokenHighlighter.TokenHighlighter;
            }
        });
    }, 
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _TfIdfSearchIndex = __webpack_require__(21);
        Object.defineProperty(exports, "TfIdfSearchIndex", {
            enumerable: !0,
            get: function() {
                return _TfIdfSearchIndex.TfIdfSearchIndex;
            }
        });
        var _UnorderedSearchIndex = __webpack_require__(22);
        Object.defineProperty(exports, "UnorderedSearchIndex", {
            enumerable: !0,
            get: function() {
                return _UnorderedSearchIndex.UnorderedSearchIndex;
            }
        });
    }, 
    /* 10 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = 
        /**
 * Find and return a nested object value.
 *
 * @param object to crawl
 * @param path Property path
 * @returns {any}
 */
        function(object, path) {
            path = path || [];
            // walk down the property path
            for (var value = object = object || {}, i = 0; i < path.length; i++) if (null == (value = value[path[i]])) return null;
            return value;
        }
        //# sourceMappingURL=getNestedFieldValue.js.map
        /***/;
    }, 
    /* 11 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _SimpleTokenizer = __webpack_require__(23);
        Object.defineProperty(exports, "SimpleTokenizer", {
            enumerable: !0,
            get: function() {
                return _SimpleTokenizer.SimpleTokenizer;
            }
        });
        var _StemmingTokenizer = __webpack_require__(24);
        Object.defineProperty(exports, "StemmingTokenizer", {
            enumerable: !0,
            get: function() {
                return _StemmingTokenizer.StemmingTokenizer;
            }
        });
        var _StopWordsTokenizer = __webpack_require__(25);
        Object.defineProperty(exports, "StopWordsTokenizer", {
            enumerable: !0,
            get: function() {
                return _StopWordsTokenizer.StopWordsTokenizer;
            }
        });
    }, 
    /* 12 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var StopWordsMap = exports.StopWordsMap = {
            a: !0,
            able: !0,
            about: !0,
            across: !0,
            after: !0,
            all: !0,
            almost: !0,
            also: !0,
            am: !0,
            among: !0,
            an: !0,
            and: !0,
            any: !0,
            are: !0,
            as: !0,
            at: !0,
            be: !0,
            because: !0,
            been: !0,
            but: !0,
            by: !0,
            can: !0,
            cannot: !0,
            could: !0,
            dear: !0,
            did: !0,
            do: !0,
            does: !0,
            either: !0,
            else: !0,
            ever: !0,
            every: !0,
            for: !0,
            from: !0,
            get: !0,
            got: !0,
            had: !0,
            has: !0,
            have: !0,
            he: !0,
            her: !0,
            hers: !0,
            him: !0,
            his: !0,
            how: !0,
            however: !0,
            i: !0,
            if: !0,
            in: !0,
            into: !0,
            is: !0,
            it: !0,
            its: !0,
            just: !0,
            least: !0,
            let: !0,
            like: !0,
            likely: !0,
            may: !0,
            me: !0,
            might: !0,
            most: !0,
            must: !0,
            my: !0,
            neither: !0,
            no: !0,
            nor: !0,
            not: !0,
            of: !0,
            off: !0,
            often: !0,
            on: !0,
            only: !0,
            or: !0,
            other: !0,
            our: !0,
            own: !0,
            rather: !0,
            said: !0,
            say: !0,
            says: !0,
            she: !0,
            should: !0,
            since: !0,
            so: !0,
            some: !0,
            than: !0,
            that: !0,
            the: !0,
            their: !0,
            them: !0,
            then: !0,
            there: !0,
            these: !0,
            they: !0,
            this: !0,
            tis: !0,
            to: !0,
            too: !0,
            twas: !0,
            us: !0,
            wants: !0,
            was: !0,
            we: !0,
            were: !0,
            what: !0,
            when: !0,
            where: !0,
            which: !0,
            while: !0,
            who: !0,
            whom: !0,
            why: !0,
            will: !0,
            with: !0,
            would: !0,
            yet: !0,
            you: !0,
            your: !0
        };
        // Prevent false positives for inherited properties
                StopWordsMap.constructor = !1, StopWordsMap.hasOwnProperty = !1, StopWordsMap.isPrototypeOf = !1, 
        StopWordsMap.propertyIsEnumerable = !1, StopWordsMap.toLocaleString = !1, StopWordsMap.toString = !1, 
        StopWordsMap.valueOf = !1;
    }, 
    /* 13 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */ __webpack_exports__.a = "@@vuexSearch/action/RECEIVE_RESULT";
        /* harmony export (immutable) */ __webpack_exports__.b = "@@vuexSearch/action/SEARCH";
        /* harmony export (immutable) */ __webpack_exports__.c = {
            INDEX_RESOURCE: "@@vuexSearch/action/API/INDEX_RESOURCE",
            DEFINE_INDEX: "@@vuexSearch/action/API/DEFINE_INDEX",
            PERFORM_SEARCH: "@@vuexSearch/action/API/PERFORM_SEARCH"
        };
    }, 
    /* 14 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */        var __WEBPACK_IMPORTED_MODULE_0_js_search__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_0_js_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_search__), __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
        /* harmony import */        
        /* harmony export (immutable) */ __webpack_exports__.a = 
        /* eslint-disable no-underscore-dangle */
        /**
 * Observable that manages communication between vuex-search plugin and the Search utility.
 * This class maps resource names to search indicies and manages subscribers.
 */
        class {
            /**
   * Constructor.
   */
            constructor({indexMode: indexMode, tokenizePattern: tokenizePattern, caseSensitive: caseSensitive} = {}) {
                this._indexMode = indexMode, this._tokenizePattern = tokenizePattern, this._caseSensitive = caseSensitive, 
                this._resourceToSearchMap = {}, this._currentSearchPromiseMap = {}, 
                // Subscribers
                this._onErrorSubscribers = [], this._onNextSubscribers = [];
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
   */            subscribe(onNext, onError) {
                // Return dispose function
                return onNext && this._onNextSubscribers.push(onNext), onError && this._onErrorSubscribers.push(onError), 
                () => {
                    this._onNextSubscribers = this._onNextSubscribers.filter(subscriber => subscriber !== onNext), 
                    this._onErrorSubscribers = this._onErrorSubscribers.filter(subscriber => subscriber !== onError);
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
   */            indexResource({fieldNamesOrIndexFunction: fieldNamesOrIndexFunction, resourceName: resourceName, resources: resources}) {
                const search = new __WEBPACK_IMPORTED_MODULE_0_js_search___default.a({
                    indexMode: this._indexMode,
                    tokenizePattern: this._tokenizePattern,
                    caseSensitive: this._caseSensitive
                });
                if (Array.isArray(fieldNamesOrIndexFunction)) resources.forEach instanceof Function ? resources.forEach(resource => {
                    fieldNamesOrIndexFunction.forEach(field => {
                        search.indexDocument(resource.id, resource[field] || "");
                    });
                }) : Object.keys(resources).forEach(key => {
                    const resource = resources[key];
                    fieldNamesOrIndexFunction.forEach(field => {
                        search.indexDocument(resource.id, resource[field] || "");
                    });
                }); else {
                    if (!(fieldNamesOrIndexFunction instanceof Function)) throw Error("Expected resource index to be either an Array of fields or an index function");
                    fieldNamesOrIndexFunction({
                        indexDocument: search.indexDocument,
                        resources: resources
                    });
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
   */            async performSearch(resourceName, text) {
                try {
                    const search = this._resourceToSearchMap[resourceName], searchPromise = Object(__WEBPACK_IMPORTED_MODULE_1__utils__.a)(search.search(text));
                    this._currentSearchPromiseMap[resourceName] = searchPromise;
                    const result = await searchPromise;
                    return delete this._currentSearchPromiseMap[resourceName], this._notifyNext({
                        result: result,
                        text: text,
                        resourceName: resourceName
                    }), result;
                } catch (error) {
                    if (error === __WEBPACK_IMPORTED_MODULE_1__utils__.b) return [];
                    throw this._notifyError(error), error;
                }
            }
            /**
   * Stop search by resourceName if running.
   * Promise of search will be cancelled (rejected with CancellationError)
   */            stopSearch(resourceName) {
                const currentSearch = this._currentSearchPromiseMap[resourceName];
                currentSearch && currentSearch.cancel();
            }
            /** Notify all subscribes of :onError */            _notifyError(error) {
                this._onErrorSubscribers.forEach(subscriber => subscriber(error));
            }
            /** Notify all subscribes of :onNext */            _notifyNext(data) {
                this._onNextSubscribers.forEach(subscriber => subscriber(data));
            }
        };
    }, 
    /* 15 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_search__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_1__plugin__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_search__), 
        __webpack_require__(28)), __WEBPACK_IMPORTED_MODULE_2__SearchApi__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_3__getter_types__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_4__mapActions__ = __webpack_require__(35), __WEBPACK_IMPORTED_MODULE_5__mapGetters__ = __webpack_require__(36), __WEBPACK_IMPORTED_MODULE_6__VuexSearch__ = __webpack_require__(3);
        /* harmony import */        
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SearchApi", function() {
            return __WEBPACK_IMPORTED_MODULE_2__SearchApi__.a;
        }), 
        /* harmony reexport (binding) */ __webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_js_search__, "INDEX_MODES") && __webpack_require__.d(__webpack_exports__, "INDEX_MODES", function() {
            return __WEBPACK_IMPORTED_MODULE_0_js_search__.INDEX_MODES;
        })
        /* harmony reexport (binding) */ , __webpack_require__.d(__webpack_exports__, "actionTypes", function() {
            return __WEBPACK_IMPORTED_MODULE_6__VuexSearch__.b;
        }), 
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getterTypes", function() {
            return __WEBPACK_IMPORTED_MODULE_3__getter_types__.a;
        }), 
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() {
            return __WEBPACK_IMPORTED_MODULE_4__mapActions__.a;
        }), 
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() {
            return __WEBPACK_IMPORTED_MODULE_5__mapGetters__.a;
        }), 
        /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VuexSearch", function() {
            return __WEBPACK_IMPORTED_MODULE_6__VuexSearch__.a;
        }), 
        /* harmony default export */ __webpack_exports__.default = __WEBPACK_IMPORTED_MODULE_1__plugin__.a;
    }, 
    /* 16 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Indexes for all substring searches (e.g. the term "cat" is indexed as "c", "ca", "cat", "a", "at", and "t").
 */
        exports.AllSubstringsIndexStrategy = function() {
            function AllSubstringsIndexStrategy() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, AllSubstringsIndexStrategy);
            }
            return _createClass(AllSubstringsIndexStrategy, [ {
                key: "expandToken",
                /**
     * @inheritDocs
     */
                value: function(token) {
                    for (var string, expandedTokens = [], i = 0, length = token.length; i < length; ++i) {
                        string = "";
                        for (var j = i; j < length; ++j) string += token.charAt(j), expandedTokens.push(string);
                    }
                    return expandedTokens;
                }
            } ]), AllSubstringsIndexStrategy;
        }();
    }, 
    /* 17 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Indexes for exact word matches.
 */
        exports.ExactWordIndexStrategy = function() {
            function ExactWordIndexStrategy() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, ExactWordIndexStrategy);
            }
            return _createClass(ExactWordIndexStrategy, [ {
                key: "expandToken",
                /**
     * @inheritDocs
     */
                value: function(token) {
                    return token ? [ token ] : [];
                }
            } ]), ExactWordIndexStrategy;
        }();
    }, 
    /* 18 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Indexes for prefix searches (e.g. the term "cat" is indexed as "c", "ca", and "cat" allowing prefix search lookups).
 */
        exports.PrefixIndexStrategy = function() {
            function PrefixIndexStrategy() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, PrefixIndexStrategy);
            }
            return _createClass(PrefixIndexStrategy, [ {
                key: "expandToken",
                /**
     * @inheritDocs
     */
                value: function(token) {
                    for (var expandedTokens = [], string = "", i = 0, length = token.length; i < length; ++i) string += token.charAt(i), 
                    expandedTokens.push(string);
                    return expandedTokens;
                }
            } ]), PrefixIndexStrategy;
        }();
    }, 
    /* 19 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Enforces case-sensitive text matches.
 */
        exports.CaseSensitiveSanitizer = function() {
            function CaseSensitiveSanitizer() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, CaseSensitiveSanitizer);
            }
            return _createClass(CaseSensitiveSanitizer, [ {
                key: "sanitize",
                /**
     * @inheritDocs
     */
                value: function(text) {
                    return text ? text.trim() : "";
                }
            } ]), CaseSensitiveSanitizer;
        }();
    }, 
    /* 20 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Sanitizes text by converting to a locale-friendly lower-case version and triming leading and trailing whitespace.
 */
        exports.LowerCaseSanitizer = function() {
            function LowerCaseSanitizer() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, LowerCaseSanitizer);
            }
            return _createClass(LowerCaseSanitizer, [ {
                key: "sanitize",
                /**
     * @inheritDocs
     */
                value: function(text) {
                    return text ? text.toLocaleLowerCase().trim() : "";
                }
            } ]), LowerCaseSanitizer;
        }();
    }, 
    /* 21 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.TfIdfSearchIndex = void 0;
        var obj, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _getNestedFieldValue = __webpack_require__(10), _getNestedFieldValue2 = (obj = _getNestedFieldValue) && obj.__esModule ? obj : {
            default: obj
        };
        /**
 * Search index capable of returning results matching a set of tokens and ranked according to TF-IDF.
 */
        exports.TfIdfSearchIndex = function() {
            function TfIdfSearchIndex(uidFieldName) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, TfIdfSearchIndex), this._uidFieldName = uidFieldName, this._tokenToIdfCache = {}, 
                this._tokenMap = {};
            }
            /**
   * @inheritDocs
   */            return _createClass(TfIdfSearchIndex, [ {
                key: "indexDocument",
                value: function(token, uid, doc) {
                    this._tokenToIdfCache = {};
                    // New index invalidates previous IDF caches
                    var tokenDatum, tokenMap = this._tokenMap;
                    "object" !== _typeof(tokenMap[token]) ? tokenMap[token] = tokenDatum = {
                        $numDocumentOccurrences: 0,
                        $totalNumOccurrences: 1,
                        $uidMap: {}
                    } : (tokenDatum = tokenMap[token]).$totalNumOccurrences++;
                    var uidMap = tokenDatum.$uidMap;
                    "object" !== _typeof(uidMap[uid]) ? (tokenDatum.$numDocumentOccurrences++, uidMap[uid] = {
                        $document: doc,
                        $numTokenOccurrences: 1
                    }) : uidMap[uid].$numTokenOccurrences++;
                }
                /**
     * @inheritDocs
     */            }, {
                key: "search",
                value: function(tokens, corpus) {
                    for (var uidToDocumentMap = {}, i = 0, numTokens = tokens.length; i < numTokens; i++) {
                        var token = tokens[i], tokenMetadata = this._tokenMap[token];
                        // Short circuit if no matches were found for any given token.
                        if (!tokenMetadata) return [];
                        if (0 === i) for (var j = 0, numKeys = (keys = Object.keys(tokenMetadata.$uidMap)).length; j < numKeys; j++) {
                            uidToDocumentMap[uid = keys[j]] = tokenMetadata.$uidMap[uid].$document;
                        } else {
                            var keys;
                            for (j = 0, numKeys = (keys = Object.keys(uidToDocumentMap)).length; j < numKeys; j++) {
                                var uid = keys[j];
                                "object" !== _typeof(tokenMetadata.$uidMap[uid]) && delete uidToDocumentMap[uid];
                            }
                        }
                    }
                    var documents = [];
                    for (var uid in uidToDocumentMap) documents.push(uidToDocumentMap[uid]);
                    var calculateTfIdf = this._createCalculateTfIdf();
                    // Return documents sorted by TF-IDF
                                        return documents.sort(function(documentA, documentB) {
                        return calculateTfIdf(tokens, documentB, corpus) - calculateTfIdf(tokens, documentA, corpus);
                    });
                }
            }, {
                key: "_createCalculateIdf",
                value: function() {
                    var tokenMap = this._tokenMap, tokenToIdfCache = this._tokenToIdfCache;
                    return function(token, documents) {
                        if (!tokenToIdfCache[token]) {
                            var numDocumentsWithToken = void 0 !== tokenMap[token] ? tokenMap[token].$numDocumentOccurrences : 0;
                            tokenToIdfCache[token] = 1 + Math.log(documents.length / (1 + numDocumentsWithToken));
                        }
                        return tokenToIdfCache[token];
                    };
                }
            }, {
                key: "_createCalculateTfIdf",
                value: function() {
                    var tokenMap = this._tokenMap, uidFieldName = this._uidFieldName, calculateIdf = this._createCalculateIdf();
                    return function(tokens, document, documents) {
                        for (var score = 0, i = 0, numTokens = tokens.length; i < numTokens; ++i) {
                            var uid, token = tokens[i], inverseDocumentFrequency = calculateIdf(token, documents);
                            inverseDocumentFrequency === 1 / 0 && (inverseDocumentFrequency = 0), uid = uidFieldName instanceof Array ? document && (0, 
                            _getNestedFieldValue2.default)(document, uidFieldName) : document && document[uidFieldName], 
                            score += (void 0 !== tokenMap[token] && void 0 !== tokenMap[token].$uidMap[uid] ? tokenMap[token].$uidMap[uid].$numTokenOccurrences : 0) * inverseDocumentFrequency;
                        }
                        return score;
                    };
                }
            } ]), TfIdfSearchIndex;
        }();
    }, 
    /* 22 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Search index capable of returning results matching a set of tokens but without any meaningful rank or order.
 */
        exports.UnorderedSearchIndex = function() {
            function UnorderedSearchIndex() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, UnorderedSearchIndex), this._tokenToUidToDocumentMap = {};
            }
            /**
   * @inheritDocs
   */            return _createClass(UnorderedSearchIndex, [ {
                key: "indexDocument",
                value: function(token, uid, doc) {
                    "object" !== _typeof(this._tokenToUidToDocumentMap[token]) && (this._tokenToUidToDocumentMap[token] = {}), 
                    this._tokenToUidToDocumentMap[token][uid] = doc;
                }
                /**
     * @inheritDocs
     */            }, {
                key: "search",
                value: function(tokens, corpus) {
                    for (var intersectingDocumentMap = {}, tokenToUidToDocumentMap = this._tokenToUidToDocumentMap, i = 0, numTokens = tokens.length; i < numTokens; i++) {
                        var documentMap = tokenToUidToDocumentMap[tokens[i]];
                        // Short circuit if no matches were found for any given token.
                        if (!documentMap) return [];
                        if (0 === i) for (var j = 0, numKeys = (keys = Object.keys(documentMap)).length; j < numKeys; j++) {
                            intersectingDocumentMap[uid = keys[j]] = documentMap[uid];
                        } else for (j = 0, numKeys = (keys = Object.keys(intersectingDocumentMap)).length; j < numKeys; j++) {
                            var uid = keys[j];
                            "object" !== _typeof(documentMap[uid]) && delete intersectingDocumentMap[uid];
                        }
                    }
                    var keys, documents = [];
                    for (i = 0, numKeys = (keys = Object.keys(intersectingDocumentMap)).length; i < numKeys; i++) {
                        uid = keys[i];
                        documents.push(intersectingDocumentMap[uid]);
                    }
                    return documents;
                }
            } ]), UnorderedSearchIndex;
        }();
    }, 
    /* 23 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        var REGEX = /[^a-zа-яё0-9\-']+/i;
        /**
 * Simple tokenizer that splits strings on whitespace characters and returns an array of all non-empty substrings.
 */        exports.SimpleTokenizer = function() {
            function SimpleTokenizer() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, SimpleTokenizer);
            }
            return _createClass(SimpleTokenizer, [ {
                key: "tokenize",
                /**
     * @inheritDocs
     */
                value: function(text) {
                    return text.split(REGEX).filter(function(text) {
                        return text;
                    } // Filter empty tokens
                    );
                }
            } ]), SimpleTokenizer;
        }();
    }, 
    /* 24 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
        /**
 * Stemming is the process of reducing search tokens to their root (or stem) so that searches for different forms of a
 * word will match. For example "search", "searching" and "searched" are all reduced to the stem "search".
 *
 * <p>This stemming tokenizer converts tokens (words) to their stem forms before returning them. It requires an
 * external stemming function to be provided; for this purpose I recommend the NPM 'porter-stemmer' library.
 *
 * <p>For more information see http : //tartarus.org/~martin/PorterStemmer/
 */
        exports.StemmingTokenizer = function() {
            /**
   * Constructor.
   *
   * @param stemmingFunction Function capable of accepting a word and returning its stem.
   * @param decoratedIndexStrategy Index strategy to be run after all stop words have been removed.
   */
            function StemmingTokenizer(stemmingFunction, decoratedTokenizer) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, StemmingTokenizer), this._stemmingFunction = stemmingFunction, this._tokenizer = decoratedTokenizer;
            }
            /**
   * @inheritDocs
   */            return _createClass(StemmingTokenizer, [ {
                key: "tokenize",
                value: function(text) {
                    return this._tokenizer.tokenize(text).map(this._stemmingFunction);
                }
            } ]), StemmingTokenizer;
        }();
    }, 
    /* 25 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.StopWordsTokenizer = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _StopWordsMap = __webpack_require__(12);
        /**
 * Stop words are very common (e.g. "a", "and", "the") and are often not semantically meaningful in the context of a
 * search. This tokenizer removes stop words from a set of tokens before passing the remaining tokens along for
 * indexing or searching purposes.
 */
        exports.StopWordsTokenizer = function() {
            /**
   * Constructor.
   *
   * @param decoratedIndexStrategy Index strategy to be run after all stop words have been removed.
   */
            function StopWordsTokenizer(decoratedTokenizer) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, StopWordsTokenizer), this._tokenizer = decoratedTokenizer;
            }
            /**
   * @inheritDocs
   */            return _createClass(StopWordsTokenizer, [ {
                key: "tokenize",
                value: function(text) {
                    return this._tokenizer.tokenize(text).filter(function(token) {
                        return !_StopWordsMap.StopWordsMap[token];
                    });
                }
            } ]), StopWordsTokenizer;
        }();
    }, 
    /* 26 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Search = void 0;
        var obj, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _getNestedFieldValue = __webpack_require__(10), _getNestedFieldValue2 = (obj = _getNestedFieldValue) && obj.__esModule ? obj : {
            default: obj
        }, _index = __webpack_require__(1), _index2 = __webpack_require__(2), _index3 = __webpack_require__(9), _index4 = __webpack_require__(11);
        /**
 * Simple client-side searching within a set of documents.
 *
 * <p>Documents can be searched by any number of fields. Indexing and search strategies are highly customizable.
 */
        exports.Search = function() {
            /**
   * Constructor.
   * @param uidFieldName Field containing values that uniquely identify search documents; this field's values are used
   *                     to ensure that a search result set does not contain duplicate objects.
   */
            /**
   * Array containing either a property name or a path (list of property names) to a nested value
   */
            function Search(uidFieldName) {
                if (function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, Search), !uidFieldName) throw Error("js-search requires a uid field name constructor parameter");
                this._uidFieldName = uidFieldName, 
                // Set default/recommended strategies
                this._indexStrategy = new _index.PrefixIndexStrategy(), this._searchIndex = new _index3.TfIdfSearchIndex(uidFieldName), 
                this._sanitizer = new _index2.LowerCaseSanitizer(), this._tokenizer = new _index4.SimpleTokenizer(), 
                this._documents = [], this._searchableFields = [];
            }
            /**
   * Override the default index strategy.
   * @param value Custom index strategy
   * @throws Error if documents have already been indexed by this search instance
   */            return _createClass(Search, [ {
                key: "addDocument",
                /**
     * Add a searchable document to the index. Document will automatically be indexed for search.
     * @param document
     */
                value: function(document) {
                    this.addDocuments([ document ]);
                }
                /**
     * Adds searchable documents to the index. Documents will automatically be indexed for search.
     * @param document
     */            }, {
                key: "addDocuments",
                value: function(documents) {
                    this._documents = this._documents.concat(documents), this.indexDocuments_(documents, this._searchableFields);
                }
                /**
     * Add a new searchable field to the index. Existing documents will automatically be indexed using this new field.
     *
     * @param field Searchable field or field path. Pass a string to index a top-level field and an array of strings for nested fields.
     */            }, {
                key: "addIndex",
                value: function(field) {
                    this._searchableFields.push(field), this.indexDocuments_(this._documents, [ field ]);
                }
                /**
     * Search all documents for ones matching the specified query text.
     * @param query
     * @returns {Array<Object>}
     */            }, {
                key: "search",
                value: function(query) {
                    var tokens = this._tokenizer.tokenize(this._sanitizer.sanitize(query));
                    return this._searchIndex.search(tokens, this._documents);
                }
                /**
     * @param documents
     * @param _searchableFields Array containing property names and paths (lists of property names) to nested values
     * @private
     */            }, {
                key: "indexDocuments_",
                value: function(documents, _searchableFields) {
                    this._initialized = !0;
                    for (var indexStrategy = this._indexStrategy, sanitizer = this._sanitizer, searchIndex = this._searchIndex, tokenizer = this._tokenizer, uidFieldName = this._uidFieldName, di = 0, numDocuments = documents.length; di < numDocuments; di++) {
                        var uid, doc = documents[di];
                        uid = uidFieldName instanceof Array ? (0, _getNestedFieldValue2.default)(doc, uidFieldName) : doc[uidFieldName];
                        for (var sfi = 0, numSearchableFields = _searchableFields.length; sfi < numSearchableFields; sfi++) {
                            var fieldValue, searchableField = _searchableFields[sfi];
                            if (null != (fieldValue = searchableField instanceof Array ? (0, _getNestedFieldValue2.default)(doc, searchableField) : doc[searchableField]) && "string" != typeof fieldValue && fieldValue.toString && (fieldValue = fieldValue.toString()), 
                            "string" == typeof fieldValue) for (var fieldTokens = tokenizer.tokenize(sanitizer.sanitize(fieldValue)), fti = 0, numFieldValues = fieldTokens.length; fti < numFieldValues; fti++) for (var fieldToken = fieldTokens[fti], expandedTokens = indexStrategy.expandToken(fieldToken), eti = 0, nummExpandedTokens = expandedTokens.length; eti < nummExpandedTokens; eti++) {
                                var expandedToken = expandedTokens[eti];
                                searchIndex.indexDocument(expandedToken, uid, doc);
                            }
                        }
                    }
                }
            }, {
                key: "indexStrategy",
                set: function(value) {
                    if (this._initialized) throw Error("IIndexStrategy cannot be set after initialization");
                    this._indexStrategy = value;
                },
                get: function() {
                    return this._indexStrategy;
                }
                /**
     * Override the default text sanitizing strategy.
     * @param value Custom text sanitizing strategy
     * @throws Error if documents have already been indexed by this search instance
     */            }, {
                key: "sanitizer",
                set: function(value) {
                    if (this._initialized) throw Error("ISanitizer cannot be set after initialization");
                    this._sanitizer = value;
                },
                get: function() {
                    return this._sanitizer;
                }
                /**
     * Override the default search index strategy.
     * @param value Custom search index strategy
     * @throws Error if documents have already been indexed
     */            }, {
                key: "searchIndex",
                set: function(value) {
                    if (this._initialized) throw Error("ISearchIndex cannot be set after initialization");
                    this._searchIndex = value;
                },
                get: function() {
                    return this._searchIndex;
                }
                /**
     * Override the default text tokenizing strategy.
     * @param value Custom text tokenizing strategy
     * @throws Error if documents have already been indexed by this search instance
     */            }, {
                key: "tokenizer",
                set: function(value) {
                    if (this._initialized) throw Error("ITokenizer cannot be set after initialization");
                    this._tokenizer = value;
                },
                get: function() {
                    return this._tokenizer;
                }
            } ]), Search;
        }();
        //# sourceMappingURL=Search.js.map
        /***/    }, 
    /* 27 */
    /***/ function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.TokenHighlighter = void 0;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _index = __webpack_require__(1), _index2 = __webpack_require__(2);
        /**
 * This utility highlights the occurrences of tokens within a string of text. It can be used to give visual indicators
 * of match criteria within searchable fields.
 *
 * <p>For performance purposes this highlighter only works with full-word or prefix token indexes.
 */
        exports.TokenHighlighter = function() {
            /**
   * Constructor.
   *
   * @param opt_indexStrategy Index strategy used by Search
   * @param opt_sanitizer Sanitizer used by Search
   * @param opt_wrapperTagName Optional wrapper tag name; defaults to 'mark' (e.g. <mark>)
   */
            function TokenHighlighter(opt_indexStrategy, opt_sanitizer, opt_wrapperTagName) {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, TokenHighlighter), this._indexStrategy = opt_indexStrategy || new _index.PrefixIndexStrategy(), 
                this._sanitizer = opt_sanitizer || new _index2.LowerCaseSanitizer(), this._wrapperTagName = opt_wrapperTagName || "mark";
            }
            /**
   * Highlights token occurrences within a string by wrapping them with a DOM element.
   *
   * @param text e.g. "john wayne"
   * @param tokens e.g. ["wa"]
   * @returns {string} e.g. "john <mark>wa</mark>yne"
   */            return _createClass(TokenHighlighter, [ {
                key: "highlight",
                value: function(text, tokens) {
                    // Create a token map for easier lookup below.
                    for (var tagsLength = this._wrapText("").length, tokenDictionary = {}, i = 0, numTokens = tokens.length; i < numTokens; i++) for (var token = this._sanitizer.sanitize(tokens[i]), expandedTokens = this._indexStrategy.expandToken(token), j = 0, numExpandedTokens = expandedTokens.length; j < numExpandedTokens; j++) {
                        var expandedToken = expandedTokens[j];
                        tokenDictionary[expandedToken] ? tokenDictionary[expandedToken].push(token) : tokenDictionary[expandedToken] = [ token ];
                    }
                    // Track actualCurrentWord and sanitizedCurrentWord separately in case we encounter nested tags.
                                        // Note this assumes either prefix or full word matching.
                    for (var actualCurrentWord = "", sanitizedCurrentWord = "", currentWordStartIndex = 0, textLength = (i = 0, 
                    text.length); i < textLength; i++) {
                        var character = text.charAt(i);
                        " " === character ? (actualCurrentWord = "", sanitizedCurrentWord = "", currentWordStartIndex = i + 1) : (actualCurrentWord += character, 
                        sanitizedCurrentWord += this._sanitizer.sanitize(character)), tokenDictionary[sanitizedCurrentWord] && tokenDictionary[sanitizedCurrentWord].indexOf(sanitizedCurrentWord) >= 0 && (actualCurrentWord = this._wrapText(actualCurrentWord), 
                        text = text.substring(0, currentWordStartIndex) + actualCurrentWord + text.substring(i + 1), 
                        i += tagsLength, textLength += tagsLength);
                    }
                    return text;
                }
                /**
     * @param text to wrap
     * @returns Text wrapped by wrapper tag (e.g. "foo" becomes "<mark>foo</mark>")
     * @private
     */            }, {
                key: "_wrapText",
                value: function(text) {
                    var tagName = this._wrapperTagName;
                    return "<" + tagName + ">" + text + "</" + tagName + ">";
                }
            } ]), TokenHighlighter;
        }();
    }, 
    /* 28 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */        __webpack_exports__.a = 
        /**
 * Vuex binding for client-side search with indexer and Web Workers
 *
 * @param {[resourceName: string]: { getter, indexes, searchApi? }} resources
 *    Resource to watch and index
 * @param {SearchApi} searchApi Optional, can also use custom SearchApi instances
 */
        function({resources: resources = {}, searchApi: searchApi = new __WEBPACK_IMPORTED_MODULE_1__SearchApi__.a()} = {}) {
            return store => {
                /* eslint-disable no-new */
                new __WEBPACK_IMPORTED_MODULE_0__VuexSearch__.a({
                    store: store,
                    resources: resources,
                    searchApi: searchApi
                });
            };
        }
        /***/;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VuexSearch__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__SearchApi__ = __webpack_require__(14);
        /* harmony import */    }, 
    /* 29 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */        var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(30), __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(6);
        /* harmony import */        
        /* harmony default export */ __webpack_exports__.a = {
            [__WEBPACK_IMPORTED_MODULE_1__mutation_types__.b]: (state, {resourceName: resourceName}) => {
                __WEBPACK_IMPORTED_MODULE_0_vue__.a.set(state, resourceName, {
                    isSearching: !1,
                    text: "",
                    result: []
                });
            },
            [__WEBPACK_IMPORTED_MODULE_1__mutation_types__.d]: (state, {resourceName: resourceName, result: result, text: text}) => {
                __WEBPACK_IMPORTED_MODULE_0_vue__.a.set(state, resourceName, {
                    isSearching: !1,
                    text: text,
                    result: result
                });
            },
            [__WEBPACK_IMPORTED_MODULE_1__mutation_types__.c]: (state, {resourceName: resourceName, searchString: searchString}) => {
                __WEBPACK_IMPORTED_MODULE_0_vue__.a.set(state[resourceName], "text", searchString), 
                __WEBPACK_IMPORTED_MODULE_0_vue__.a.set(state[resourceName], "isSearching", !0);
            },
            [__WEBPACK_IMPORTED_MODULE_1__mutation_types__.a]: (state, {resourceName: resourceName}) => {
                __WEBPACK_IMPORTED_MODULE_0_vue__.a.delete(state, resourceName);
            }
        };
    }, 
    /* 30 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */        
        /* WEBPACK VAR INJECTION */ (function(process, global, setImmediate) {
            /*!
 * Vue.js v2.5.22
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
            /*  */
            var emptyObject = Object.freeze({});
            // These helpers produce better VM code in JS engines due to their
            // explicitness and function inlining.
                        function isUndef(v) {
                return void 0 === v || null === v;
            }
            function isDef(v) {
                return void 0 !== v && null !== v;
            }
            function isTrue(v) {
                return !0 === v;
            }
            /**
 * Check if value is primitive.
 */
            function isPrimitive(value) {
                return "string" == typeof value || "number" == typeof value || 
                // $flow-disable-line
                "symbol" == typeof value || "boolean" == typeof value;
            }
            /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */            function isObject(obj) {
                return null !== obj && "object" == typeof obj;
            }
            /**
 * Get the raw type string of a value, e.g., [object Object].
 */            var _toString = Object.prototype.toString;
            function toRawType(value) {
                return _toString.call(value).slice(8, -1);
            }
            /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */            function isPlainObject(obj) {
                return "[object Object]" === _toString.call(obj);
            }
            function isRegExp(v) {
                return "[object RegExp]" === _toString.call(v);
            }
            /**
 * Check if val is a valid array index.
 */            function isValidArrayIndex(val) {
                var n = parseFloat(String(val));
                return n >= 0 && Math.floor(n) === n && isFinite(val);
            }
            /**
 * Convert a value to a string that is actually rendered.
 */            function toString(val) {
                return null == val ? "" : "object" == typeof val ? JSON.stringify(val, null, 2) : String(val);
            }
            /**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */            function toNumber(val) {
                var n = parseFloat(val);
                return isNaN(n) ? val : n;
            }
            /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */            function makeMap(str, expectsLowerCase) {
                for (var map = Object.create(null), list = str.split(","), i = 0; i < list.length; i++) map[list[i]] = !0;
                return expectsLowerCase ? function(val) {
                    return map[val.toLowerCase()];
                } : function(val) {
                    return map[val];
                };
            }
            /**
 * Check if a tag is a built-in tag.
 */            var isBuiltInTag = makeMap("slot,component", !0), isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
            /**
 * Check if an attribute is a reserved attribute.
 */            
            /**
 * Remove an item from an array.
 */
            function remove(arr, item) {
                if (arr.length) {
                    var index = arr.indexOf(item);
                    if (index > -1) return arr.splice(index, 1);
                }
            }
            /**
 * Check whether an object has the property.
 */            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key);
            }
            /**
 * Create a cached version of a pure function.
 */            function cached(fn) {
                var cache = Object.create(null);
                return function(str) {
                    return cache[str] || (cache[str] = fn(str));
                };
            }
            /**
 * Camelize a hyphen-delimited string.
 */            var camelizeRE = /-(\w)/g, camelize = cached(function(str) {
                return str.replace(camelizeRE, function(_, c) {
                    return c ? c.toUpperCase() : "";
                });
            }), capitalize = cached(function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }), hyphenateRE = /\B([A-Z])/g, hyphenate = cached(function(str) {
                return str.replace(hyphenateRE, "-$1").toLowerCase();
            });
            var bind = Function.prototype.bind ? function(fn, ctx) {
                return fn.bind(ctx);
            } : 
            /**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
            /* istanbul ignore next */
            function(fn, ctx) {
                function boundFn(a) {
                    var l = arguments.length;
                    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
                }
                return boundFn._length = fn.length, boundFn;
            };
            /**
 * Convert an Array-like object to a real Array.
 */            function toArray(list, start) {
                start = start || 0;
                for (var i = list.length - start, ret = new Array(i); i--; ) ret[i] = list[i + start];
                return ret;
            }
            /**
 * Mix properties into target object.
 */            function extend(to, _from) {
                for (var key in _from) to[key] = _from[key];
                return to;
            }
            /**
 * Merge an Array of Objects into a single Object.
 */            function toObject(arr) {
                for (var res = {}, i = 0; i < arr.length; i++) arr[i] && extend(res, arr[i]);
                return res;
            }
            /* eslint-disable no-unused-vars */
            /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */            function noop(a, b, c) {}
            /**
 * Always return false.
 */            var no = function(a, b, c) {
                return !1;
            }, identity = function(_) {
                return _;
            };
            /* eslint-enable no-unused-vars */
            /**
 * Return the same value.
 */            
            /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
            function looseEqual(a, b) {
                if (a === b) return !0;
                var isObjectA = isObject(a), isObjectB = isObject(b);
                if (!isObjectA || !isObjectB) return !isObjectA && !isObjectB && String(a) === String(b);
                try {
                    var isArrayA = Array.isArray(a), isArrayB = Array.isArray(b);
                    if (isArrayA && isArrayB) return a.length === b.length && a.every(function(e, i) {
                        return looseEqual(e, b[i]);
                    });
                    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
                    if (isArrayA || isArrayB) 
                    /* istanbul ignore next */
                    return !1;
                    var keysA = Object.keys(a), keysB = Object.keys(b);
                    return keysA.length === keysB.length && keysA.every(function(key) {
                        return looseEqual(a[key], b[key]);
                    });
                } catch (e) {
                    /* istanbul ignore next */
                    return !1;
                }
            }
            /**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */            function looseIndexOf(arr, val) {
                for (var i = 0; i < arr.length; i++) if (looseEqual(arr[i], val)) return i;
                return -1;
            }
            /**
 * Ensure a function is called only once.
 */            function once(fn) {
                var called = !1;
                return function() {
                    called || (called = !0, fn.apply(this, arguments));
                };
            }
            var SSR_ATTR = "data-server-rendered", ASSET_TYPES = [ "component", "directive", "filter" ], LIFECYCLE_HOOKS = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], config = {
                /**
   * Option merge strategies (used in core/util/options)
   */
                // $flow-disable-line
                optionMergeStrategies: Object.create(null),
                /**
   * Whether to suppress warnings.
   */
                silent: !1,
                /**
   * Show production mode tip message on boot?
   */
                productionTip: "production" !== process.env.NODE_ENV,
                /**
   * Whether to enable devtools
   */
                devtools: "production" !== process.env.NODE_ENV,
                /**
   * Whether to record perf
   */
                performance: !1,
                /**
   * Error handler for watcher errors
   */
                errorHandler: null,
                /**
   * Warn handler for watcher warns
   */
                warnHandler: null,
                /**
   * Ignore certain custom elements
   */
                ignoredElements: [],
                /**
   * Custom user key aliases for v-on
   */
                // $flow-disable-line
                keyCodes: Object.create(null),
                /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
                isReservedTag: no,
                /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
                isReservedAttr: no,
                /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
                isUnknownElement: no,
                /**
   * Get the namespace of an element
   */
                getTagNamespace: noop,
                /**
   * Parse the real tag name for the specific platform.
   */
                parsePlatformTagName: identity,
                /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
                mustUseProp: no,
                /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
                async: !0,
                /**
   * Exposed for legacy reasons
   */
                _lifecycleHooks: LIFECYCLE_HOOKS
            };
            /*  */
            /**
 * Check if a string starts with $ or _
 */
            function isReserved(str) {
                var c = (str + "").charCodeAt(0);
                return 36 === c || 95 === c;
            }
            /**
 * Define a property.
 */            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: !0,
                    configurable: !0
                });
            }
            /**
 * Parse simple path.
 */            var bailRE = /[^\w.$]/;
            /*  */
            // can we use __proto__?
            var _isServer, hasProto = "__proto__" in {}, inBrowser = "undefined" != typeof window, inWeex = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, weexPlatform = inWeex && WXEnvironment.platform.toLowerCase(), UA = inBrowser && window.navigator.userAgent.toLowerCase(), isIE = UA && /msie|trident/.test(UA), isIE9 = UA && UA.indexOf("msie 9.0") > 0, isEdge = UA && UA.indexOf("edge/") > 0, isIOS = (UA && UA.indexOf("android"), 
            UA && /iphone|ipad|ipod|ios/.test(UA) || "ios" === weexPlatform), isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge, nativeWatch = {}.watch, supportsPassive = !1;
            // Browser environment sniffing
                        if (inBrowser) try {
                var opts = {};
                Object.defineProperty(opts, "passive", {
                    get: function() {
                        /* istanbul ignore next */
                        supportsPassive = !0;
                    }
                }), // https://github.com/facebook/flow/issues/285
                window.addEventListener("test-passive", null, opts);
            } catch (e) {}
            // this needs to be lazy-evaled because vue may be required before
            // vue-server-renderer can set VUE_ENV
                        var isServerRendering = function() {
                return void 0 === _isServer && (
                /* istanbul ignore if */
                _isServer = !inBrowser && !inWeex && void 0 !== global && (global.process && "server" === global.process.env.VUE_ENV)), 
                _isServer;
            }, devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            // detect devtools
                        /* istanbul ignore next */
            function isNative(Ctor) {
                return "function" == typeof Ctor && /native code/.test(Ctor.toString());
            }
            var _Set, hasSymbol = "undefined" != typeof Symbol && isNative(Symbol) && "undefined" != typeof Reflect && isNative(Reflect.ownKeys);
            /* istanbul ignore if */ // $flow-disable-line
            // use native Set when available.
            _Set = "undefined" != typeof Set && isNative(Set) ? Set : /* */ function() {
                function Set() {
                    this.set = Object.create(null);
                }
                return Set.prototype.has = function(key) {
                    return !0 === this.set[key];
                }, Set.prototype.add = function(key) {
                    this.set[key] = !0;
                }, Set.prototype.clear = function() {
                    this.set = Object.create(null);
                }, Set;
            }()
            /*  */;
            var warn = noop, tip = noop, generateComponentTrace = noop, formatComponentName = noop;
            if ("production" !== process.env.NODE_ENV) {
                var hasConsole = "undefined" != typeof console, classifyRE = /(?:^|[-_])(\w)/g;
                warn = function(msg, vm) {
                    var trace = vm ? generateComponentTrace(vm) : "";
                    config.warnHandler ? config.warnHandler.call(null, msg, vm, trace) : hasConsole && !config.silent && console.error("[Vue warn]: " + msg + trace);
                }, tip = function(msg, vm) {
                    hasConsole && !config.silent && console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
                }, formatComponentName = function(vm, includeFile) {
                    if (vm.$root === vm) return "<Root>";
                    var options = "function" == typeof vm && null != vm.cid ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm, name = options.name || options._componentTag, file = options.__file;
                    if (!name && file) {
                        var match = file.match(/([^/\\]+)\.vue$/);
                        name = match && match[1];
                    }
                    return (name ? "<" + name.replace(classifyRE, function(c) {
                        return c.toUpperCase();
                    }).replace(/[-_]/g, "") + ">" : "<Anonymous>") + (file && !1 !== includeFile ? " at " + file : "");
                };
                generateComponentTrace = function(vm) {
                    if (vm._isVue && vm.$parent) {
                        for (var tree = [], currentRecursiveSequence = 0; vm; ) {
                            if (tree.length > 0) {
                                var last = tree[tree.length - 1];
                                if (last.constructor === vm.constructor) {
                                    currentRecursiveSequence++, vm = vm.$parent;
                                    continue;
                                }
                                currentRecursiveSequence > 0 && (tree[tree.length - 1] = [ last, currentRecursiveSequence ], 
                                currentRecursiveSequence = 0);
                            }
                            tree.push(vm), vm = vm.$parent;
                        }
                        return "\n\nfound in\n\n" + tree.map(function(vm, i) {
                            return "" + (0 === i ? "---\x3e " : function(str, n) {
                                for (var res = ""; n; ) n % 2 == 1 && (res += str), n > 1 && (str += str), n >>= 1;
                                return res;
                            }(" ", 5 + 2 * i)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
                        }).join("\n");
                    }
                    return "\n\n(found in " + formatComponentName(vm) + ")";
                };
            }
            /*  */            var uid = 0, Dep = function() {
                this.id = uid++, this.subs = [];
            };
            /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */            Dep.prototype.addSub = function(sub) {
                this.subs.push(sub);
            }, Dep.prototype.removeSub = function(sub) {
                remove(this.subs, sub);
            }, Dep.prototype.depend = function() {
                Dep.target && Dep.target.addDep(this);
            }, Dep.prototype.notify = function() {
                // stabilize the subscriber list first
                var subs = this.subs.slice();
                "production" === process.env.NODE_ENV || config.async || 
                // subs aren't sorted in scheduler if not running async
                // we need to sort them now to make sure they fire in correct
                // order
                subs.sort(function(a, b) {
                    return a.id - b.id;
                });
                for (var i = 0, l = subs.length; i < l; i++) subs[i].update();
            }, 
            // The current target watcher being evaluated.
            // This is globally unique because only one watcher
            // can be evaluated at a time.
            Dep.target = null;
            var targetStack = [];
            function pushTarget(target) {
                targetStack.push(target), Dep.target = target;
            }
            function popTarget() {
                targetStack.pop(), Dep.target = targetStack[targetStack.length - 1];
            }
            /*  */            var VNode = function(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
                this.tag = tag, this.data = data, this.children = children, this.text = text, this.elm = elm, 
                this.ns = void 0, this.context = context, this.fnContext = void 0, this.fnOptions = void 0, 
                this.fnScopeId = void 0, this.key = data && data.key, this.componentOptions = componentOptions, 
                this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, 
                this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, 
                this.asyncFactory = asyncFactory, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, prototypeAccessors = {
                child: {
                    configurable: !0
                }
            };
            // DEPRECATED: alias for componentInstance for backwards compat.
            /* istanbul ignore next */
            prototypeAccessors.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(VNode.prototype, prototypeAccessors);
            var createEmptyVNode = function(text) {
                void 0 === text && (text = "");
                var node = new VNode();
                return node.text = text, node.isComment = !0, node;
            };
            function createTextVNode(val) {
                return new VNode(void 0, void 0, void 0, String(val));
            }
            // optimized shallow clone
            // used for static nodes and slot nodes because they may be reused across
            // multiple renders, cloning them avoids errors when DOM manipulations rely
            // on their elm reference.
                        function cloneVNode(vnode) {
                var cloned = new VNode(vnode.tag, vnode.data, 
                // #7975
                // clone children array to avoid mutating original in case of cloning
                // a child.
                vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
                return cloned.ns = vnode.ns, cloned.isStatic = vnode.isStatic, cloned.key = vnode.key, 
                cloned.isComment = vnode.isComment, cloned.fnContext = vnode.fnContext, cloned.fnOptions = vnode.fnOptions, 
                cloned.fnScopeId = vnode.fnScopeId, cloned.asyncMeta = vnode.asyncMeta, cloned.isCloned = !0, 
                cloned;
            }
            /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */            var arrayProto = Array.prototype, arrayMethods = Object.create(arrayProto);
            /**
 * Intercept mutating methods and emit events
 */
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(method) {
                // cache original method
                var original = arrayProto[method];
                def(arrayMethods, method, function() {
                    for (var args = [], len = arguments.length; len--; ) args[len] = arguments[len];
                    var inserted, result = original.apply(this, args), ob = this.__ob__;
                    switch (method) {
                      case "push":
                      case "unshift":
                        inserted = args;
                        break;

                      case "splice":
                        inserted = args.slice(2);
                    }
                    return inserted && ob.observeArray(inserted), 
                    // notify change
                    ob.dep.notify(), result;
                });
            });
            /*  */
            var arrayKeys = Object.getOwnPropertyNames(arrayMethods), shouldObserve = !0;
            /**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */            function toggleObserving(value) {
                shouldObserve = value;
            }
            /**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */            var Observer = function(value) {
                // helpers
                /**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
                var src;
                /**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
                /* istanbul ignore next */                this.value = value, this.dep = new Dep(), 
                this.vmCount = 0, def(value, "__ob__", this), Array.isArray(value) ? (hasProto ? (src = arrayMethods, 
                /* eslint-disable no-proto */
                value.__proto__ = src) : function(target, src, keys) {
                    for (var i = 0, l = keys.length; i < l; i++) {
                        var key = keys[i];
                        def(target, key, src[key]);
                    }
                }
                /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */ (value, arrayMethods, arrayKeys), this.observeArray(value)) : this.walk(value);
            };
            /**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */            function observe(value, asRootData) {
                var ob;
                if (isObject(value) && !(value instanceof VNode)) return hasOwn(value, "__ob__") && value.__ob__ instanceof Observer ? ob = value.__ob__ : shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue && (ob = new Observer(value)), 
                asRootData && ob && ob.vmCount++, ob;
            }
            /**
 * Define a reactive property on an Object.
 */            function defineReactive$$1(obj, key, val, customSetter, shallow) {
                var dep = new Dep(), property = Object.getOwnPropertyDescriptor(obj, key);
                if (!property || !1 !== property.configurable) {
                    // cater for pre-defined getter/setters
                    var getter = property && property.get, setter = property && property.set;
                    getter && !setter || 2 !== arguments.length || (val = obj[key]);
                    var childOb = !shallow && observe(val);
                    Object.defineProperty(obj, key, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var value = getter ? getter.call(obj) : val;
                            return Dep.target && (dep.depend(), childOb && (childOb.dep.depend(), Array.isArray(value) && 
                            /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
                            function dependArray(value) {
                                for (var e = void 0, i = 0, l = value.length; i < l; i++) (e = value[i]) && e.__ob__ && e.__ob__.dep.depend(), 
                                Array.isArray(e) && dependArray(e);
                            }
                            /*  */
                            /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */ (value))), value;
                        },
                        set: function(newVal) {
                            var value = getter ? getter.call(obj) : val;
                            /* eslint-disable no-self-compare */                            newVal === value || newVal != newVal && value != value || (
                            /* eslint-enable no-self-compare */
                            "production" !== process.env.NODE_ENV && customSetter && customSetter(), 
                            // #7981: for accessor properties without setter
                            getter && !setter || (setter ? setter.call(obj, newVal) : val = newVal, childOb = !shallow && observe(newVal), 
                            dep.notify()));
                        }
                    });
                }
            }
            /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */            function set(target, key, val) {
                if ("production" !== process.env.NODE_ENV && (isUndef(target) || isPrimitive(target)) && warn("Cannot set reactive property on undefined, null, or primitive value: " + target), 
                Array.isArray(target) && isValidArrayIndex(key)) return target.length = Math.max(target.length, key), 
                target.splice(key, 1, val), val;
                if (key in target && !(key in Object.prototype)) return target[key] = val, val;
                var ob = target.__ob__;
                return target._isVue || ob && ob.vmCount ? ("production" !== process.env.NODE_ENV && warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), 
                val) : ob ? (defineReactive$$1(ob.value, key, val), ob.dep.notify(), val) : (target[key] = val, 
                val);
            }
            /**
 * Delete a property and trigger change if necessary.
 */            function del(target, key) {
                if ("production" !== process.env.NODE_ENV && (isUndef(target) || isPrimitive(target)) && warn("Cannot delete reactive property on undefined, null, or primitive value: " + target), 
                Array.isArray(target) && isValidArrayIndex(key)) target.splice(key, 1); else {
                    var ob = target.__ob__;
                    target._isVue || ob && ob.vmCount ? "production" !== process.env.NODE_ENV && warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : hasOwn(target, key) && (delete target[key], 
                    ob && ob.dep.notify());
                }
            }
            Observer.prototype.walk = function(obj) {
                for (var keys = Object.keys(obj), i = 0; i < keys.length; i++) defineReactive$$1(obj, keys[i]);
            }, 
            /**
 * Observe a list of Array items.
 */
            Observer.prototype.observeArray = function(items) {
                for (var i = 0, l = items.length; i < l; i++) observe(items[i]);
            };
            var strats = config.optionMergeStrategies;
            /**
 * Options with restrictions
 */            
            /**
 * Helper that recursively merges two data objects together.
 */
            function mergeData(to, from) {
                if (!from) return to;
                for (var key, toVal, fromVal, keys = Object.keys(from), i = 0; i < keys.length; i++) toVal = to[key = keys[i]], 
                fromVal = from[key], hasOwn(to, key) ? toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal) && mergeData(toVal, fromVal) : set(to, key, fromVal);
                return to;
            }
            /**
 * Data
 */            function mergeDataOrFn(parentVal, childVal, vm) {
                return vm ? function() {
                    // instance merge
                    var instanceData = "function" == typeof childVal ? childVal.call(vm, vm) : childVal, defaultData = "function" == typeof parentVal ? parentVal.call(vm, vm) : parentVal;
                    return instanceData ? mergeData(instanceData, defaultData) : defaultData;
                } : 
                // in a Vue.extend merge, both should be functions
                childVal ? parentVal ? function() {
                    return mergeData("function" == typeof childVal ? childVal.call(this, this) : childVal, "function" == typeof parentVal ? parentVal.call(this, this) : parentVal);
                } : childVal : parentVal;
            }
            /**
 * Hooks and props are merged as arrays.
 */
            function mergeHook(parentVal, childVal) {
                var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
                return res ? function(hooks) {
                    for (var res = [], i = 0; i < hooks.length; i++) -1 === res.indexOf(hooks[i]) && res.push(hooks[i]);
                    return res;
                }(res) : res;
            }
            /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
            function mergeAssets(parentVal, childVal, vm, key) {
                var res = Object.create(parentVal || null);
                return childVal ? ("production" !== process.env.NODE_ENV && assertObjectType(key, childVal, vm), 
                extend(res, childVal)) : res;
            }
            "production" !== process.env.NODE_ENV && (strats.el = strats.propsData = function(parent, child, vm, key) {
                return vm || warn('option "' + key + '" can only be used during instance creation with the `new` keyword.'), 
                defaultStrat(parent, child);
            }), strats.data = function(parentVal, childVal, vm) {
                return vm ? mergeDataOrFn(parentVal, childVal, vm) : childVal && "function" != typeof childVal ? ("production" !== process.env.NODE_ENV && warn('The "data" option should be a function that returns a per-instance value in component definitions.', vm), 
                parentVal) : mergeDataOrFn(parentVal, childVal);
            }, LIFECYCLE_HOOKS.forEach(function(hook) {
                strats[hook] = mergeHook;
            }), ASSET_TYPES.forEach(function(type) {
                strats[type + "s"] = mergeAssets;
            }), 
            /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
            strats.watch = function(parentVal, childVal, vm, key) {
                /* istanbul ignore if */
                if (
                // work around Firefox's Object.prototype.watch...
                parentVal === nativeWatch && (parentVal = void 0), childVal === nativeWatch && (childVal = void 0), 
                !childVal) return Object.create(parentVal || null);
                if ("production" !== process.env.NODE_ENV && assertObjectType(key, childVal, vm), 
                !parentVal) return childVal;
                var ret = {};
                for (var key$1 in extend(ret, parentVal), childVal) {
                    var parent = ret[key$1], child = childVal[key$1];
                    parent && !Array.isArray(parent) && (parent = [ parent ]), ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [ child ];
                }
                return ret;
            }, 
            /**
 * Other object hashes.
 */
            strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
                if (childVal && "production" !== process.env.NODE_ENV && assertObjectType(key, childVal, vm), 
                !parentVal) return childVal;
                var ret = Object.create(null);
                return extend(ret, parentVal), childVal && extend(ret, childVal), ret;
            }, strats.provide = mergeDataOrFn;
            /**
 * Default strategy.
 */
            var defaultStrat = function(parentVal, childVal) {
                return void 0 === childVal ? parentVal : childVal;
            };
            /**
 * Validate component names
 */            function validateComponentName(name) {
                /^[a-zA-Z][\w-]*$/.test(name) || warn('Invalid component name: "' + name + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'), 
                (isBuiltInTag(name) || config.isReservedTag(name)) && warn("Do not use built-in or reserved HTML elements as component id: " + name);
            }
            /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */            function assertObjectType(name, value, vm) {
                isPlainObject(value) || warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".", vm);
            }
            /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */            function mergeOptions(parent, child, vm) {
                // Apply extends and mixins on the child options,
                // but only if it is a raw options object that isn't
                // the result of another mergeOptions call.
                // Only merged options has the _base property.
                if ("production" !== process.env.NODE_ENV && function(options) {
                    for (var key in options.components) validateComponentName(key);
                }(child), "function" == typeof child && (child = child.options), function(options, vm) {
                    var props = options.props;
                    if (props) {
                        var i, val, res = {};
                        if (Array.isArray(props)) for (i = props.length; i--; ) "string" == typeof (val = props[i]) ? res[camelize(val)] = {
                            type: null
                        } : "production" !== process.env.NODE_ENV && warn("props must be strings when using array syntax."); else if (isPlainObject(props)) for (var key in props) val = props[key], 
                        res[camelize(key)] = isPlainObject(val) ? val : {
                            type: val
                        }; else "production" !== process.env.NODE_ENV && warn('Invalid value for option "props": expected an Array or an Object, but got ' + toRawType(props) + ".", vm);
                        options.props = res;
                    }
                }
                /**
 * Normalize all injections into Object-based format
 */ (child, vm), function(options, vm) {
                    var inject = options.inject;
                    if (inject) {
                        var normalized = options.inject = {};
                        if (Array.isArray(inject)) for (var i = 0; i < inject.length; i++) normalized[inject[i]] = {
                            from: inject[i]
                        }; else if (isPlainObject(inject)) for (var key in inject) {
                            var val = inject[key];
                            normalized[key] = isPlainObject(val) ? extend({
                                from: key
                            }, val) : {
                                from: val
                            };
                        } else "production" !== process.env.NODE_ENV && warn('Invalid value for option "inject": expected an Array or an Object, but got ' + toRawType(inject) + ".", vm);
                    }
                }
                /**
 * Normalize raw function directives into object format.
 */ (child, vm), function(options) {
                    var dirs = options.directives;
                    if (dirs) for (var key in dirs) {
                        var def = dirs[key];
                        "function" == typeof def && (dirs[key] = {
                            bind: def,
                            update: def
                        });
                    }
                }(child), !child._base && (child.extends && (parent = mergeOptions(parent, child.extends, vm)), 
                child.mixins)) for (var i = 0, l = child.mixins.length; i < l; i++) parent = mergeOptions(parent, child.mixins[i], vm);
                var key, options = {};
                for (key in parent) mergeField(key);
                for (key in child) hasOwn(parent, key) || mergeField(key);
                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }
                return options;
            }
            /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */            function resolveAsset(options, type, id, warnMissing) {
                /* istanbul ignore if */
                if ("string" == typeof id) {
                    var assets = options[type];
                    // check local registration variations first
                                        if (hasOwn(assets, id)) return assets[id];
                    var camelizedId = camelize(id);
                    if (hasOwn(assets, camelizedId)) return assets[camelizedId];
                    var PascalCaseId = capitalize(camelizedId);
                    if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId];
                    // fallback to prototype chain
                                        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
                    return "production" !== process.env.NODE_ENV && warnMissing && !res && warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options), 
                    res;
                }
            }
            /*  */            function validateProp(key, propOptions, propsData, vm) {
                var prop = propOptions[key], absent = !hasOwn(propsData, key), value = propsData[key], booleanIndex = getTypeIndex(Boolean, prop.type);
                if (booleanIndex > -1) if (absent && !hasOwn(prop, "default")) value = !1; else if ("" === value || value === hyphenate(key)) {
                    // only cast empty string / same name to boolean if
                    // boolean has higher priority
                    var stringIndex = getTypeIndex(String, prop.type);
                    (stringIndex < 0 || booleanIndex < stringIndex) && (value = !0);
                }
                // check default value
                                if (void 0 === value) {
                    value = 
                    /**
 * Get the default value of a prop.
 */
                    function(vm, prop, key) {
                        // no default, return undefined
                        if (!hasOwn(prop, "default")) return;
                        var def = prop.default;
                        // warn against non-factory defaults for Object & Array
                                                "production" !== process.env.NODE_ENV && isObject(def) && warn('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
                        // the raw prop value was also undefined from previous render,
                        // return previous default value to avoid unnecessary watcher trigger
                                                if (vm && vm.$options.propsData && void 0 === vm.$options.propsData[key] && void 0 !== vm._props[key]) return vm._props[key];
                        // call factory function for non-Function types
                        // a value is Function if its prototype is function even across different execution context
                                                return "function" == typeof def && "Function" !== getType(prop.type) ? def.call(vm) : def;
                    }
                    /**
 * Assert whether a prop is valid.
 */ (vm, prop, key);
                    // since the default value is a fresh copy,
                    // make sure to observe it.
                    var prevShouldObserve = shouldObserve;
                    toggleObserving(!0), observe(value), toggleObserving(prevShouldObserve);
                }
                return "production" !== process.env.NODE_ENV && function(prop, name, value, vm, absent) {
                    if (prop.required && absent) return void warn('Missing required prop: "' + name + '"', vm);
                    if (null == value && !prop.required) return;
                    var type = prop.type, valid = !type || !0 === type, expectedTypes = [];
                    if (type) {
                        Array.isArray(type) || (type = [ type ]);
                        for (var i = 0; i < type.length && !valid; i++) {
                            var assertedType = assertType(value, type[i]);
                            expectedTypes.push(assertedType.expectedType || ""), valid = assertedType.valid;
                        }
                    }
                    if (!valid) return void warn(function(name, value, expectedTypes) {
                        var message = 'Invalid prop: type check failed for prop "' + name + '". Expected ' + expectedTypes.map(capitalize).join(", "), expectedType = expectedTypes[0], receivedType = toRawType(value), expectedValue = styleValue(value, expectedType), receivedValue = styleValue(value, receivedType);
                        // check if we need to specify expected value
                        1 === expectedTypes.length && isExplicable(expectedType) && !function() {
                            var args = [], len = arguments.length;
                            for (;len--; ) args[len] = arguments[len];
                            return args.some(function(elem) {
                                return "boolean" === elem.toLowerCase();
                            });
                        }
                        /*  */ (expectedType, receivedType) && (message += " with value " + expectedValue);
                        // check if we need to specify received value
                        message += ", got " + receivedType + " ", isExplicable(receivedType) && (message += "with value " + receivedValue + ".");
                        return message;
                    }(name, value, expectedTypes), vm);
                    var validator = prop.validator;
                    validator && (validator(value) || warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm));
                }(prop, key, value, vm, absent), value;
            }
            var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
            function assertType(value, type) {
                var valid, expectedType = getType(type);
                if (simpleCheckRE.test(expectedType)) {
                    var t = typeof value;
                    // for primitive wrapper objects
                    (valid = t === expectedType.toLowerCase()) || "object" !== t || (valid = value instanceof type);
                } else valid = "Object" === expectedType ? isPlainObject(value) : "Array" === expectedType ? Array.isArray(value) : value instanceof type;
                return {
                    valid: valid,
                    expectedType: expectedType
                };
            }
            /**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */            function getType(fn) {
                var match = fn && fn.toString().match(/^\s*function (\w+)/);
                return match ? match[1] : "";
            }
            function isSameType(a, b) {
                return getType(a) === getType(b);
            }
            function getTypeIndex(type, expectedTypes) {
                if (!Array.isArray(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
                for (var i = 0, len = expectedTypes.length; i < len; i++) if (isSameType(expectedTypes[i], type)) return i;
                return -1;
            }
            function styleValue(value, type) {
                return "String" === type ? '"' + value + '"' : "Number" === type ? "" + Number(value) : "" + value;
            }
            function isExplicable(value) {
                return [ "string", "number", "boolean" ].some(function(elem) {
                    return value.toLowerCase() === elem;
                });
            }
            function handleError(err, vm, info) {
                if (vm) for (var cur = vm; cur = cur.$parent; ) {
                    var hooks = cur.$options.errorCaptured;
                    if (hooks) for (var i = 0; i < hooks.length; i++) try {
                        if (!1 === hooks[i].call(cur, err, vm, info)) return;
                    } catch (e) {
                        globalHandleError(e, cur, "errorCaptured hook");
                    }
                }
                globalHandleError(err, vm, info);
            }
            function globalHandleError(err, vm, info) {
                if (config.errorHandler) try {
                    return config.errorHandler.call(null, err, vm, info);
                } catch (e) {
                    logError(e, null, "config.errorHandler");
                }
                logError(err, vm, info);
            }
            function logError(err, vm, info) {
                /* istanbul ignore else */
                if ("production" !== process.env.NODE_ENV && warn("Error in " + info + ': "' + err.toString() + '"', vm), 
                !inBrowser && !inWeex || "undefined" == typeof console) throw err;
                console.error(err);
            }
            /*  */            var microTimerFunc, macroTimerFunc, callbacks = [], pending = !1;
            function flushCallbacks() {
                pending = !1;
                var copies = callbacks.slice(0);
                callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) copies[i]();
            }
            // Here we have async deferring wrappers using both microtasks and (macro) tasks.
            // In < 2.4 we used microtasks everywhere, but there are some scenarios where
            // microtasks have too high a priority and fire in between supposedly
            // sequential events (e.g. #4521, #6690) or even between bubbling of the same
            // event (#6566). However, using (macro) tasks everywhere also has subtle problems
            // when state is changed right before repaint (e.g. #6813, out-in transitions).
            // Here we use microtask by default, but expose a way to force (macro) task when
            // needed (e.g. in event handlers attached by v-on).
                        var initProxy, useMacroTask = !1;
            // Determine (macro) task defer implementation.
            // Technically setImmediate should be the ideal choice, but it's only available
            // in IE. The only polyfill that consistently queues the callback after all DOM
            // events triggered in the same loop is by using MessageChannel.
            /* istanbul ignore if */            if (void 0 !== setImmediate && isNative(setImmediate)) macroTimerFunc = function() {
                setImmediate(flushCallbacks);
            }; else if ("undefined" == typeof MessageChannel || !isNative(MessageChannel) && 
            // PhantomJS
            "[object MessageChannelConstructor]" !== MessageChannel.toString()) 
            /* istanbul ignore next */
            macroTimerFunc = function() {
                setTimeout(flushCallbacks, 0);
            }; else {
                var channel = new MessageChannel(), port = channel.port2;
                channel.port1.onmessage = flushCallbacks, macroTimerFunc = function() {
                    port.postMessage(1);
                };
            }
            // Determine microtask defer implementation.
            /* istanbul ignore next, $flow-disable-line */            if ("undefined" != typeof Promise && isNative(Promise)) {
                var p = Promise.resolve();
                microTimerFunc = function() {
                    p.then(flushCallbacks), 
                    // in problematic UIWebViews, Promise.then doesn't completely break, but
                    // it can get stuck in a weird state where callbacks are pushed into the
                    // microtask queue but the queue isn't being flushed, until the browser
                    // needs to do some other work, e.g. handle a timer. Therefore we can
                    // "force" the microtask queue to be flushed by adding an empty timer.
                    isIOS && setTimeout(noop);
                };
            } else 
            // fallback to macro
            microTimerFunc = macroTimerFunc;
            /**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */            function nextTick(cb, ctx) {
                var _resolve;
                // $flow-disable-line
                if (callbacks.push(function() {
                    if (cb) try {
                        cb.call(ctx);
                    } catch (e) {
                        handleError(e, ctx, "nextTick");
                    } else _resolve && _resolve(ctx);
                }), pending || (pending = !0, useMacroTask ? macroTimerFunc() : microTimerFunc()), 
                !cb && "undefined" != typeof Promise) return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
            /*  */
            /* not type checking this file because flow doesn't play well with Proxy */            if ("production" !== process.env.NODE_ENV) {
                var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"), warnNonPresent = function(target, key) {
                    warn('Property or method "' + key + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
                }, warnReservedPrefix = function(target, key) {
                    warn('Property "' + key + '" must be accessed with "$data.' + key + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internalsSee: https://vuejs.org/v2/api/#data', target);
                }, hasProxy = "undefined" != typeof Proxy && isNative(Proxy);
                if (hasProxy) {
                    var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
                    config.keyCodes = new Proxy(config.keyCodes, {
                        set: function(target, key, value) {
                            return isBuiltInModifier(key) ? (warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key), 
                            !1) : (target[key] = value, !0);
                        }
                    });
                }
                var hasHandler = {
                    has: function(target, key) {
                        var has = key in target, isAllowed = allowedGlobals(key) || "string" == typeof key && "_" === key.charAt(0) && !(key in target.$data);
                        return has || isAllowed || (key in target.$data ? warnReservedPrefix(target, key) : warnNonPresent(target, key)), 
                        has || !isAllowed;
                    }
                }, getHandler = {
                    get: function(target, key) {
                        return "string" != typeof key || key in target || (key in target.$data ? warnReservedPrefix(target, key) : warnNonPresent(target, key)), 
                        target[key];
                    }
                };
                initProxy = function(vm) {
                    if (hasProxy) {
                        // determine which proxy handler to use
                        var options = vm.$options, handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
                        vm._renderProxy = new Proxy(vm, handlers);
                    } else vm._renderProxy = vm;
                };
            }
            /*  */            var mark, measure, seenObjects = new _Set();
            /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */            function traverse(val) {
                !function _traverse(val, seen) {
                    var i, keys;
                    var isA = Array.isArray(val);
                    if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) return;
                    if (val.__ob__) {
                        var depId = val.__ob__.dep.id;
                        if (seen.has(depId)) return;
                        seen.add(depId);
                    }
                    if (isA) for (i = val.length; i--; ) _traverse(val[i], seen); else for (keys = Object.keys(val), 
                    i = keys.length; i--; ) _traverse(val[keys[i]], seen);
                }(val, seenObjects), seenObjects.clear();
            }
            if ("production" !== process.env.NODE_ENV) {
                var perf = inBrowser && window.performance;
                /* istanbul ignore if */                perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures && (mark = function(tag) {
                    return perf.mark(tag);
                }, measure = function(name, startTag, endTag) {
                    perf.measure(name, startTag, endTag), perf.clearMarks(startTag), perf.clearMarks(endTag), 
                    perf.clearMeasures(name);
                });
            }
            /*  */            var target, normalizeEvent = cached(function(name) {
                var passive = "&" === name.charAt(0), once$$1 = "~" === (name = passive ? name.slice(1) : name).charAt(0), capture = "!" === (// Prefixed last, checked first
                name = once$$1 ? name.slice(1) : name).charAt(0);
                return {
                    name: name = capture ? name.slice(1) : name,
                    once: once$$1,
                    capture: capture,
                    passive: passive
                };
            });
            function createFnInvoker(fns) {
                function invoker() {
                    var arguments$1 = arguments, fns = invoker.fns;
                    if (!Array.isArray(fns)) 
                    // return handler return value for single handlers
                    return fns.apply(null, arguments);
                    for (var cloned = fns.slice(), i = 0; i < cloned.length; i++) cloned[i].apply(null, arguments$1);
                }
                return invoker.fns = fns, invoker;
            }
            function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
                var name, cur, old, event;
                for (name in on) cur = on[name], old = oldOn[name], event = normalizeEvent(name), 
                isUndef(cur) ? "production" !== process.env.NODE_ENV && warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm) : isUndef(old) ? (isUndef(cur.fns) && (cur = on[name] = createFnInvoker(cur)), 
                isTrue(event.once) && (cur = on[name] = createOnceHandler(event.name, cur, event.capture)), 
                add(event.name, cur, event.capture, event.passive, event.params)) : cur !== old && (old.fns = cur, 
                on[name] = old);
                for (name in oldOn) isUndef(on[name]) && remove$$1((event = normalizeEvent(name)).name, oldOn[name], event.capture);
            }
            /*  */            function mergeVNodeHook(def, hookKey, hook) {
                var invoker;
                def instanceof VNode && (def = def.data.hook || (def.data.hook = {}));
                var oldHook = def[hookKey];
                function wrappedHook() {
                    hook.apply(this, arguments), 
                    // important: remove merged hook to ensure it's called only once
                    // and prevent memory leak
                    remove(invoker.fns, wrappedHook);
                }
                isUndef(oldHook) ? 
                // no existing hook
                invoker = createFnInvoker([ wrappedHook ]) : 
                /* istanbul ignore if */
                isDef(oldHook.fns) && isTrue(oldHook.merged) ? (
                // already a merged invoker
                invoker = oldHook).fns.push(wrappedHook) : 
                // existing plain hook
                invoker = createFnInvoker([ oldHook, wrappedHook ]), invoker.merged = !0, def[hookKey] = invoker;
            }
            /*  */            function checkProp(res, hash, key, altKey, preserve) {
                if (isDef(hash)) {
                    if (hasOwn(hash, key)) return res[key] = hash[key], preserve || delete hash[key], 
                    !0;
                    if (hasOwn(hash, altKey)) return res[key] = hash[altKey], preserve || delete hash[altKey], 
                    !0;
                }
                return !1;
            }
            /*  */
            // The template compiler attempts to minimize the need for normalization by
            // statically analyzing the template at compile time.
            //
            // For plain HTML markup, normalization can be completely skipped because the
            // generated render function is guaranteed to return Array<VNode>. There are
            // two cases where extra normalization is needed:
            // 1. When the children contains components - because a functional component
            // may return an Array instead of a single root. In this case, just a simple
            // normalization is needed - if any child is an Array, we flatten the whole
            // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
            // because functional components already normalize their own children.
                        // 2. When the children contains constructs that always generated nested Arrays,
            // e.g. <template>, <slot>, v-for, or when the children is provided by user
            // with hand-written render functions / JSX. In such cases a full normalization
            // is needed to cater to all possible types of children values.
            function normalizeChildren(children) {
                return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? function normalizeArrayChildren(children, nestedIndex) {
                    var res = [];
                    var i, c, lastIndex, last;
                    for (i = 0; i < children.length; i++) isUndef(c = children[i]) || "boolean" == typeof c || (lastIndex = res.length - 1, 
                    last = res[lastIndex], 
                    //  nested
                    Array.isArray(c) ? c.length > 0 && (
                    // merge adjacent text nodes
                    isTextNode((c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i))[0]) && isTextNode(last) && (res[lastIndex] = createTextVNode(last.text + c[0].text), 
                    c.shift()), res.push.apply(res, c)) : isPrimitive(c) ? isTextNode(last) ? 
                    // merge adjacent text nodes
                    // this is necessary for SSR hydration because text nodes are
                    // essentially merged when rendered to HTML strings
                    res[lastIndex] = createTextVNode(last.text + c) : "" !== c && 
                    // convert primitive to vnode
                    res.push(createTextVNode(c)) : isTextNode(c) && isTextNode(last) ? 
                    // merge adjacent text nodes
                    res[lastIndex] = createTextVNode(last.text + c.text) : (
                    // default key for nested array children (likely generated by v-for)
                    isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex) && (c.key = "__vlist" + nestedIndex + "_" + i + "__"), 
                    res.push(c)));
                    return res;
                }
                /*  */ (children) : void 0;
            }
            function isTextNode(node) {
                return isDef(node) && isDef(node.text) && !1 === node.isComment;
            }
            function ensureCtor(comp, base) {
                return (comp.__esModule || hasSymbol && "Module" === comp[Symbol.toStringTag]) && (comp = comp.default), 
                isObject(comp) ? base.extend(comp) : comp;
            }
            /*  */
            function isAsyncPlaceholder(node) {
                return node.isComment && node.asyncFactory;
            }
            /*  */            function getFirstComponentChild(children) {
                if (Array.isArray(children)) for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) return c;
                }
            }
            /*  */
            /*  */            function add(event, fn) {
                target.$on(event, fn);
            }
            function remove$1(event, fn) {
                target.$off(event, fn);
            }
            function createOnceHandler(event, fn) {
                var _target = target;
                return function onceHandler() {
                    null !== fn.apply(null, arguments) && _target.$off(event, onceHandler);
                };
            }
            function updateComponentListeners(vm, listeners, oldListeners) {
                target = vm, updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm), 
                target = void 0;
            }
            /*  */
            /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
            function resolveSlots(children, context) {
                var slots = {};
                if (!children) return slots;
                for (var i = 0, l = children.length; i < l; i++) {
                    var child = children[i], data = child.data;
                    // named slots should only be respected if the vnode was rendered in the
                    // same context.
                    if (
                    // remove slot attribute if the node is resolved as a Vue slot node
                    data && data.attrs && data.attrs.slot && delete data.attrs.slot, child.context !== context && child.fnContext !== context || !data || null == data.slot) (slots.default || (slots.default = [])).push(child); else {
                        var name = data.slot, slot = slots[name] || (slots[name] = []);
                        "template" === child.tag ? slot.push.apply(slot, child.children || []) : slot.push(child);
                    }
                }
                // ignore slots that contains only whitespace
                                for (var name$1 in slots) slots[name$1].every(isWhitespace) && delete slots[name$1];
                return slots;
            }
            function isWhitespace(node) {
                return node.isComment && !node.asyncFactory || " " === node.text;
            }
            function resolveScopedSlots(fns, // see flow/vnode
            res) {
                res = res || {};
                for (var i = 0; i < fns.length; i++) Array.isArray(fns[i]) ? resolveScopedSlots(fns[i], res) : res[fns[i].key] = fns[i].fn;
                return res;
            }
            /*  */            var activeInstance = null, isUpdatingChildComponent = !1;
            function setActiveInstance(vm) {
                var prevActiveInstance = activeInstance;
                return activeInstance = vm, function() {
                    activeInstance = prevActiveInstance;
                };
            }
            function isInInactiveTree(vm) {
                for (;vm && (vm = vm.$parent); ) if (vm._inactive) return !0;
                return !1;
            }
            function activateChildComponent(vm, direct) {
                if (direct) {
                    if (vm._directInactive = !1, isInInactiveTree(vm)) return;
                } else if (vm._directInactive) return;
                if (vm._inactive || null === vm._inactive) {
                    vm._inactive = !1;
                    for (var i = 0; i < vm.$children.length; i++) activateChildComponent(vm.$children[i]);
                    callHook(vm, "activated");
                }
            }
            function callHook(vm, hook) {
                // #7573 disable dep collection when invoking lifecycle hooks
                pushTarget();
                var handlers = vm.$options[hook];
                if (handlers) for (var i = 0, j = handlers.length; i < j; i++) try {
                    handlers[i].call(vm);
                } catch (e) {
                    handleError(e, vm, hook + " hook");
                }
                vm._hasHookEvent && vm.$emit("hook:" + hook), popTarget();
            }
            /*  */            var MAX_UPDATE_COUNT = 100, queue = [], activatedChildren = [], has = {}, circular = {}, waiting = !1, flushing = !1, index = 0;
            /**
 * Flush both queues and run the watchers.
 */
            function flushSchedulerQueue() {
                var watcher, id;
                // Sort queue before flush.
                // This ensures that:
                // 1. Components are updated from parent to child. (because parent is always
                //    created before the child)
                // 2. A component's user watchers are run before its render watcher (because
                //    user watchers are created before the render watcher)
                // 3. If a component is destroyed during a parent component's watcher run,
                //    its watchers can be skipped.
                                // do not cache length because more watchers might be pushed
                // as we run existing watchers
                for (flushing = !0, queue.sort(function(a, b) {
                    return a.id - b.id;
                }), index = 0; index < queue.length; index++) 
                // in dev build, check and stop circular updates.
                if ((watcher = queue[index]).before && watcher.before(), id = watcher.id, has[id] = null, 
                watcher.run(), "production" !== process.env.NODE_ENV && null != has[id] && (circular[id] = (circular[id] || 0) + 1, 
                circular[id] > MAX_UPDATE_COUNT)) {
                    warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                    break;
                }
                // keep copies of post queues before resetting state
                                var activatedQueue = activatedChildren.slice(), updatedQueue = queue.slice();
                index = queue.length = activatedChildren.length = 0, has = {}, "production" !== process.env.NODE_ENV && (circular = {}), 
                waiting = flushing = !1, 
                // call component updated and activated hooks
                function(queue) {
                    for (var i = 0; i < queue.length; i++) queue[i]._inactive = !0, activateChildComponent(queue[i], !0 /* true */);
                }
                /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */ (activatedQueue), function(queue) {
                    var i = queue.length;
                    for (;i--; ) {
                        var watcher = queue[i], vm = watcher.vm;
                        vm._watcher === watcher && vm._isMounted && !vm._isDestroyed && callHook(vm, "updated");
                    }
                }
                /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */ (updatedQueue), 
                // devtool hook
                /* istanbul ignore if */
                devtools && config.devtools && devtools.emit("flush");
            }
            /*  */
            var uid$1 = 0, Watcher = function(vm, expOrFn, cb, options, isRenderWatcher) {
                this.vm = vm, isRenderWatcher && (vm._watcher = this), vm._watchers.push(this), 
                // options
                options ? (this.deep = !!options.deep, this.user = !!options.user, this.lazy = !!options.lazy, 
                this.sync = !!options.sync, this.before = options.before) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = cb, this.id = ++uid$1, // uid for batching
                this.active = !0, this.dirty = this.lazy, // for lazy watchers
                this.deps = [], this.newDeps = [], this.depIds = new _Set(), this.newDepIds = new _Set(), 
                this.expression = "production" !== process.env.NODE_ENV ? expOrFn.toString() : "", 
                // parse expression for getter
                "function" == typeof expOrFn ? this.getter = expOrFn : (this.getter = function(path) {
                    if (!bailRE.test(path)) {
                        var segments = path.split(".");
                        return function(obj) {
                            for (var i = 0; i < segments.length; i++) {
                                if (!obj) return;
                                obj = obj[segments[i]];
                            }
                            return obj;
                        };
                    }
                }(expOrFn), this.getter || (this.getter = noop, "production" !== process.env.NODE_ENV && warn('Failed watching path: "' + expOrFn + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', vm))), 
                this.value = this.lazy ? void 0 : this.get();
            };
            /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */            
            /**
 * Evaluate the getter, and re-collect dependencies.
 */
            Watcher.prototype.get = function() {
                var value;
                pushTarget(this);
                var vm = this.vm;
                try {
                    value = this.getter.call(vm, vm);
                } catch (e) {
                    if (!this.user) throw e;
                    handleError(e, vm, 'getter for watcher "' + this.expression + '"');
                } finally {
                    // "touch" every property so they are all tracked as
                    // dependencies for deep watching
                    this.deep && traverse(value), popTarget(), this.cleanupDeps();
                }
                return value;
            }, 
            /**
 * Add a dependency to this directive.
 */
            Watcher.prototype.addDep = function(dep) {
                var id = dep.id;
                this.newDepIds.has(id) || (this.newDepIds.add(id), this.newDeps.push(dep), this.depIds.has(id) || dep.addSub(this));
            }, 
            /**
 * Clean up for dependency collection.
 */
            Watcher.prototype.cleanupDeps = function() {
                for (var i = this.deps.length; i--; ) {
                    var dep = this.deps[i];
                    this.newDepIds.has(dep.id) || dep.removeSub(this);
                }
                var tmp = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = tmp, this.newDepIds.clear(), tmp = this.deps, 
                this.deps = this.newDeps, this.newDeps = tmp, this.newDeps.length = 0;
            }, 
            /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
            Watcher.prototype.update = function() {
                /* istanbul ignore else */
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(watcher) {
                    var id = watcher.id;
                    if (null == has[id]) {
                        if (has[id] = !0, flushing) {
                            for (
                            // if already flushing, splice the watcher based on its id
                            // if already past its id, it will be run next immediately.
                            var i = queue.length - 1; i > index && queue[i].id > watcher.id; ) i--;
                            queue.splice(i + 1, 0, watcher);
                        }
                        // queue the flush
                         else queue.push(watcher);
                        if (!waiting) {
                            if (waiting = !0, "production" !== process.env.NODE_ENV && !config.async) return void flushSchedulerQueue();
                            nextTick(flushSchedulerQueue);
                        }
                    }
                }(this);
            }, 
            /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
            Watcher.prototype.run = function() {
                if (this.active) {
                    var value = this.get();
                    if (value !== this.value || 
                    // Deep watchers and watchers on Object/Arrays should fire even
                    // when the value is the same, because the value may
                    // have mutated.
                    isObject(value) || this.deep) {
                        // set new value
                        var oldValue = this.value;
                        if (this.value = value, this.user) try {
                            this.cb.call(this.vm, value, oldValue);
                        } catch (e) {
                            handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, value, oldValue);
                    }
                }
            }, 
            /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
            Watcher.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, 
            /**
 * Depend on all deps collected by this watcher.
 */
            Watcher.prototype.depend = function() {
                for (var i = this.deps.length; i--; ) this.deps[i].depend();
            }, 
            /**
 * Remove self from all dependencies' subscriber list.
 */
            Watcher.prototype.teardown = function() {
                if (this.active) {
                    // remove self from vm's watcher list
                    // this is a somewhat expensive operation so we skip it
                    // if the vm is being destroyed.
                    this.vm._isBeingDestroyed || remove(this.vm._watchers, this);
                    for (var i = this.deps.length; i--; ) this.deps[i].removeSub(this);
                    this.active = !1;
                }
            };
            /*  */
            var sharedPropertyDefinition = {
                enumerable: !0,
                configurable: !0,
                get: noop,
                set: noop
            };
            function proxy(target, sourceKey, key) {
                sharedPropertyDefinition.get = function() {
                    return this[sourceKey][key];
                }, sharedPropertyDefinition.set = function(val) {
                    this[sourceKey][key] = val;
                }, Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function initState(vm) {
                vm._watchers = [];
                var opts = vm.$options;
                opts.props && function(vm, propsOptions) {
                    var propsData = vm.$options.propsData || {}, props = vm._props = {}, keys = vm.$options._propKeys = [], isRoot = !vm.$parent;
                    // root instance props should be converted
                    isRoot || toggleObserving(!1);
                    var loop = function(key) {
                        keys.push(key);
                        var value = validateProp(key, propsOptions, propsData, vm);
                        /* istanbul ignore else */                        if ("production" !== process.env.NODE_ENV) {
                            var hyphenatedKey = hyphenate(key);
                            (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) && warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm), 
                            defineReactive$$1(props, key, value, function() {
                                isRoot || isUpdatingChildComponent || warn("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + key + '"', vm);
                            });
                        } else defineReactive$$1(props, key, value);
                        // static props are already proxied on the component's prototype
                        // during Vue.extend(). We only need to proxy props defined at
                        // instantiation here.
                                                key in vm || proxy(vm, "_props", key);
                    };
                    for (var key in propsOptions) loop(key);
                    toggleObserving(!0);
                }(vm, opts.props), opts.methods && function(vm, methods) {
                    var props = vm.$options.props;
                    for (var key in methods) "production" !== process.env.NODE_ENV && ("function" != typeof methods[key] && warn('Method "' + key + '" has type "' + typeof methods[key] + '" in the component definition. Did you reference the function correctly?', vm), 
                    props && hasOwn(props, key) && warn('Method "' + key + '" has already been defined as a prop.', vm), 
                    key in vm && isReserved(key) && warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.')), 
                    vm[key] = "function" != typeof methods[key] ? noop : bind(methods[key], vm);
                }(vm, opts.methods), opts.data ? function(vm) {
                    var data = vm.$options.data;
                    isPlainObject(data = vm._data = "function" == typeof data ? function(data, vm) {
                        // #7573 disable dep collection when invoking data getters
                        pushTarget();
                        try {
                            return data.call(vm, vm);
                        } catch (e) {
                            return handleError(e, vm, "data()"), {};
                        } finally {
                            popTarget();
                        }
                    }(data, vm) : data || {}) || (data = {}, "production" !== process.env.NODE_ENV && warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm));
                    // proxy data on instance
                                        var keys = Object.keys(data), props = vm.$options.props, methods = vm.$options.methods, i = keys.length;
                    for (;i--; ) {
                        var key = keys[i];
                        "production" !== process.env.NODE_ENV && methods && hasOwn(methods, key) && warn('Method "' + key + '" has already been defined as a data property.', vm), 
                        props && hasOwn(props, key) ? "production" !== process.env.NODE_ENV && warn('The data property "' + key + '" is already declared as a prop. Use prop default value instead.', vm) : isReserved(key) || proxy(vm, "_data", key);
                    }
                    // observe data
                                        observe(data, !0 /* asRootData */);
                }(vm) : observe(vm._data = {}, !0 /* asRootData */), opts.computed && function(vm, computed) {
                    // $flow-disable-line
                    var watchers = vm._computedWatchers = Object.create(null), isSSR = isServerRendering();
                    // computed properties are just getters during SSR
                                        for (var key in computed) {
                        var userDef = computed[key], getter = "function" == typeof userDef ? userDef : userDef.get;
                        "production" !== process.env.NODE_ENV && null == getter && warn('Getter is missing for computed property "' + key + '".', vm), 
                        isSSR || (
                        // create internal watcher for the computed property.
                        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions)), 
                        // component-defined computed properties are already defined on the
                        // component prototype. We only need to define computed properties defined
                        // at instantiation here.
                        key in vm ? "production" !== process.env.NODE_ENV && (key in vm.$data ? warn('The computed property "' + key + '" is already defined in data.', vm) : vm.$options.props && key in vm.$options.props && warn('The computed property "' + key + '" is already defined as a prop.', vm)) : defineComputed(vm, key, userDef);
                    }
                }(vm, opts.computed), opts.watch && opts.watch !== nativeWatch && function(vm, watch) {
                    for (var key in watch) {
                        var handler = watch[key];
                        if (Array.isArray(handler)) for (var i = 0; i < handler.length; i++) createWatcher(vm, key, handler[i]); else createWatcher(vm, key, handler);
                    }
                }(vm, opts.watch);
            }
            var computedWatcherOptions = {
                lazy: !0
            };
            function defineComputed(target, key, userDef) {
                var shouldCache = !isServerRendering();
                "function" == typeof userDef ? (sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef), 
                sharedPropertyDefinition.set = noop) : (sharedPropertyDefinition.get = userDef.get ? shouldCache && !1 !== userDef.cache ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop, 
                sharedPropertyDefinition.set = userDef.set || noop), "production" !== process.env.NODE_ENV && sharedPropertyDefinition.set === noop && (sharedPropertyDefinition.set = function() {
                    warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
                }), Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function createComputedGetter(key) {
                return function() {
                    var watcher = this._computedWatchers && this._computedWatchers[key];
                    if (watcher) return watcher.dirty && watcher.evaluate(), Dep.target && watcher.depend(), 
                    watcher.value;
                };
            }
            function createGetterInvoker(fn) {
                return function() {
                    return fn.call(this, this);
                };
            }
            function createWatcher(vm, expOrFn, handler, options) {
                return isPlainObject(handler) && (options = handler, handler = handler.handler), 
                "string" == typeof handler && (handler = vm[handler]), vm.$watch(expOrFn, handler, options);
            }
            function resolveInject(inject, vm) {
                if (inject) {
                    for (
                    // inject is :any because flow is not smart enough to figure out cached
                    var result = Object.create(null), keys = hasSymbol ? Reflect.ownKeys(inject).filter(function(key) {
                        /* istanbul ignore next */
                        return Object.getOwnPropertyDescriptor(inject, key).enumerable;
                    }) : Object.keys(inject), i = 0; i < keys.length; i++) {
                        for (var key = keys[i], provideKey = inject[key].from, source = vm; source; ) {
                            if (source._provided && hasOwn(source._provided, provideKey)) {
                                result[key] = source._provided[provideKey];
                                break;
                            }
                            source = source.$parent;
                        }
                        if (!source) if ("default" in inject[key]) {
                            var provideDefault = inject[key].default;
                            result[key] = "function" == typeof provideDefault ? provideDefault.call(vm) : provideDefault;
                        } else "production" !== process.env.NODE_ENV && warn('Injection "' + key + '" not found', vm);
                    }
                    return result;
                }
            }
            /*  */
            /**
 * Runtime helper for rendering v-for lists.
 */            function renderList(val, render) {
                var ret, i, l, keys, key;
                if (Array.isArray(val) || "string" == typeof val) for (ret = new Array(val.length), 
                i = 0, l = val.length; i < l; i++) ret[i] = render(val[i], i); else if ("number" == typeof val) for (ret = new Array(val), 
                i = 0; i < val; i++) ret[i] = render(i + 1, i); else if (isObject(val)) for (keys = Object.keys(val), 
                ret = new Array(keys.length), i = 0, l = keys.length; i < l; i++) key = keys[i], 
                ret[i] = render(val[key], key, i);
                return isDef(ret) || (ret = []), ret._isVList = !0, ret;
            }
            /*  */
            /**
 * Runtime helper for rendering <slot>
 */            function renderSlot(name, fallback, props, bindObject) {
                var nodes, scopedSlotFn = this.$scopedSlots[name];
                scopedSlotFn ? (// scoped slot
                props = props || {}, bindObject && ("production" === process.env.NODE_ENV || isObject(bindObject) || warn("slot v-bind without argument expects an Object", this), 
                props = extend(extend({}, bindObject), props)), nodes = scopedSlotFn(props) || fallback) : nodes = this.$slots[name] || fallback;
                var target = props && props.slot;
                return target ? this.$createElement("template", {
                    slot: target
                }, nodes) : nodes;
            }
            /*  */
            /**
 * Runtime helper for resolving filters
 */            function resolveFilter(id) {
                return resolveAsset(this.$options, "filters", id, !0) || identity;
            }
            /*  */            function isKeyNotMatch(expect, actual) {
                return Array.isArray(expect) ? -1 === expect.indexOf(actual) : expect !== actual;
            }
            /**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */            function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
                var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
                return builtInKeyName && eventKeyName && !config.keyCodes[key] ? isKeyNotMatch(builtInKeyName, eventKeyName) : mappedKeyCode ? isKeyNotMatch(mappedKeyCode, eventKeyCode) : eventKeyName ? hyphenate(eventKeyName) !== key : void 0;
            }
            /*  */
            /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */            function bindObjectProps(data, tag, value, asProp, isSync) {
                if (value) if (isObject(value)) {
                    var hash;
                    Array.isArray(value) && (value = toObject(value));
                    var loop = function(key) {
                        if ("class" === key || "style" === key || isReservedAttribute(key)) hash = data; else {
                            var type = data.attrs && data.attrs.type;
                            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                        }
                        var camelizedKey = camelize(key);
                        key in hash || camelizedKey in hash || (hash[key] = value[key], isSync && ((data.on || (data.on = {}))["update:" + camelizedKey] = function($event) {
                            value[key] = $event;
                        }));
                    };
                    for (var key in value) loop(key);
                } else "production" !== process.env.NODE_ENV && warn("v-bind without argument expects an Object or Array value", this);
                return data;
            }
            /*  */
            /**
 * Runtime helper for rendering static trees.
 */            function renderStatic(index, isInFor) {
                var cached = this._staticTrees || (this._staticTrees = []), tree = cached[index];
                // if has already-rendered static tree and not inside v-for,
                // we can reuse the same tree.
                return tree && !isInFor ? tree : (
                // otherwise, render a fresh tree.
                markStatic(tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this), "__static__" + index, !1), 
                tree);
            }
            /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */            function markOnce(tree, index, key) {
                return markStatic(tree, "__once__" + index + (key ? "_" + key : ""), !0), tree;
            }
            function markStatic(tree, key, isOnce) {
                if (Array.isArray(tree)) for (var i = 0; i < tree.length; i++) tree[i] && "string" != typeof tree[i] && markStaticNode(tree[i], key + "_" + i, isOnce); else markStaticNode(tree, key, isOnce);
            }
            function markStaticNode(node, key, isOnce) {
                node.isStatic = !0, node.key = key, node.isOnce = isOnce;
            }
            /*  */            function bindObjectListeners(data, value) {
                if (value) if (isPlainObject(value)) {
                    var on = data.on = data.on ? extend({}, data.on) : {};
                    for (var key in value) {
                        var existing = on[key], ours = value[key];
                        on[key] = existing ? [].concat(existing, ours) : ours;
                    }
                } else "production" !== process.env.NODE_ENV && warn("v-on without argument expects an Object value", this);
                return data;
            }
            /*  */            function installRenderHelpers(target) {
                target._o = markOnce, target._n = toNumber, target._s = toString, target._l = renderList, 
                target._t = renderSlot, target._q = looseEqual, target._i = looseIndexOf, target._m = renderStatic, 
                target._f = resolveFilter, target._k = checkKeyCodes, target._b = bindObjectProps, 
                target._v = createTextVNode, target._e = createEmptyVNode, target._u = resolveScopedSlots, 
                target._g = bindObjectListeners;
            }
            /*  */            function FunctionalRenderContext(data, props, children, parent, Ctor) {
                var contextVm, options = Ctor.options;
                // ensure the createElement function in functional components
                // gets a unique context - this is necessary for correct named slot check
                                hasOwn(parent, "_uid") ? 
                // $flow-disable-line
                (contextVm = Object.create(parent))._original = parent : (
                // the context vm passed in is a functional context as well.
                // in this case we want to make sure we are able to get a hold to the
                // real context instance.
                contextVm = parent, 
                // $flow-disable-line
                parent = parent._original);
                var isCompiled = isTrue(options._compiled), needNormalization = !isCompiled;
                this.data = data, this.props = props, this.children = children, this.parent = parent, 
                this.listeners = data.on || emptyObject, this.injections = resolveInject(options.inject, parent), 
                this.slots = function() {
                    return resolveSlots(children, parent);
                }, 
                // support for compiled functional template
                isCompiled && (
                // exposing $options for renderStatic()
                this.$options = options, 
                // pre-resolve slots for renderSlot()
                this.$slots = this.slots(), this.$scopedSlots = data.scopedSlots || emptyObject), 
                options._scopeId ? this._c = function(a, b, c, d) {
                    var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                    return vnode && !Array.isArray(vnode) && (vnode.fnScopeId = options._scopeId, vnode.fnContext = parent), 
                    vnode;
                } : this._c = function(a, b, c, d) {
                    return createElement(contextVm, a, b, c, d, needNormalization);
                };
            }
            function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
                // #7817 clone node before setting fnContext, otherwise if the node is reused
                // (e.g. it was from a cached normal slot) the fnContext causes named slots
                // that should not be matched to match.
                var clone = cloneVNode(vnode);
                return clone.fnContext = contextVm, clone.fnOptions = options, "production" !== process.env.NODE_ENV && ((clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext), 
                data.slot && ((clone.data || (clone.data = {})).slot = data.slot), clone;
            }
            function mergeProps(to, from) {
                for (var key in from) to[camelize(key)] = from[key];
            }
            /*  */
            /*  */
            /*  */
            /*  */
            // inline hooks to be invoked on component VNodes during patch
                        installRenderHelpers(FunctionalRenderContext.prototype);
            var componentVNodeHooks = {
                init: function(vnode, hydrating) {
                    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                        // kept-alive components, treat as a patch
                        var mountedNode = vnode;
 // work around flow
                                                componentVNodeHooks.prepatch(mountedNode, mountedNode);
                    } else {
                        (vnode.componentInstance = function(vnode, // we know it's MountedComponentVNode but flow doesn't
                        parent) {
                            var options = {
                                _isComponent: !0,
                                _parentVnode: vnode,
                                parent: parent
                            }, inlineTemplate = vnode.data.inlineTemplate;
                            // check inline-template render functions
                                                        isDef(inlineTemplate) && (options.render = inlineTemplate.render, 
                            options.staticRenderFns = inlineTemplate.staticRenderFns);
                            return new vnode.componentOptions.Ctor(options);
                        }(vnode, activeInstance)).$mount(hydrating ? vnode.elm : void 0, hydrating);
                    }
                },
                prepatch: function(oldVnode, vnode) {
                    var options = vnode.componentOptions;
                    !function(vm, propsData, listeners, parentVnode, renderChildren) {
                        "production" !== process.env.NODE_ENV && (isUpdatingChildComponent = !0);
                        // determine whether component has slot children
                        // we need to do this before overwriting $options._renderChildren
                                                var hasChildren = !!(renderChildren || // has new static slots
                        vm.$options._renderChildren || // has old static slots
                        parentVnode.data.scopedSlots || // has new scoped slots
                        vm.$scopedSlots !== emptyObject);
                        // update props
                        if (vm.$options._parentVnode = parentVnode, vm.$vnode = parentVnode, // update vm's placeholder node without re-render
                        vm._vnode && (// update child tree's parent
                        vm._vnode.parent = parentVnode), vm.$options._renderChildren = renderChildren, 
                        // update $attrs and $listeners hash
                        // these are also reactive so they may trigger child update if the child
                        // used them during render
                        vm.$attrs = parentVnode.data.attrs || emptyObject, vm.$listeners = listeners || emptyObject, 
                        propsData && vm.$options.props) {
                            toggleObserving(!1);
                            for (var props = vm._props, propKeys = vm.$options._propKeys || [], i = 0; i < propKeys.length; i++) {
                                var key = propKeys[i], propOptions = vm.$options.props;
                                // wtf flow?
                                props[key] = validateProp(key, propOptions, propsData, vm);
                            }
                            toggleObserving(!0), 
                            // keep a copy of raw propsData
                            vm.$options.propsData = propsData;
                        }
                        // update listeners
                                                listeners = listeners || emptyObject;
                        var oldListeners = vm.$options._parentListeners;
                        vm.$options._parentListeners = listeners, updateComponentListeners(vm, listeners, oldListeners), 
                        // resolve slots + force update if has children
                        hasChildren && (vm.$slots = resolveSlots(renderChildren, parentVnode.context), vm.$forceUpdate()), 
                        "production" !== process.env.NODE_ENV && (isUpdatingChildComponent = !1);
                    }(vnode.componentInstance = oldVnode.componentInstance, options.propsData, // updated props
                    options.listeners, // updated listeners
                    vnode, // new parent vnode
                    options.children);
                },
                insert: function(vnode) {
                    var vm, context = vnode.context, componentInstance = vnode.componentInstance;
                    componentInstance._isMounted || (componentInstance._isMounted = !0, callHook(componentInstance, "mounted")), 
                    vnode.data.keepAlive && (context._isMounted ? (
                    // vue-router#1212
                    // During updates, a kept-alive component's child components may
                    // change, so directly walking the tree here may call activated hooks
                    // on incorrect children. Instead we push them into a queue which will
                    // be processed after the whole patch process ended.
                    // setting _inactive to false here so that a render function can
                    // rely on checking whether it's in an inactive tree (e.g. router-view)
                    (vm = componentInstance)._inactive = !1, activatedChildren.push(vm)) : activateChildComponent(componentInstance, !0 /* direct */));
                },
                destroy: function(vnode) {
                    var componentInstance = vnode.componentInstance;
                    componentInstance._isDestroyed || (vnode.data.keepAlive ? function deactivateChildComponent(vm, direct) {
                        if (!(direct && (vm._directInactive = !0, isInInactiveTree(vm)) || vm._inactive)) {
                            vm._inactive = !0;
                            for (var i = 0; i < vm.$children.length; i++) deactivateChildComponent(vm.$children[i]);
                            callHook(vm, "deactivated");
                        }
                    }(componentInstance, !0 /* direct */) : componentInstance.$destroy());
                }
            }, hooksToMerge = Object.keys(componentVNodeHooks);
            function createComponent(Ctor, data, context, children, tag) {
                if (!isUndef(Ctor)) {
                    var baseCtor = context.$options._base;
                    // plain options object: turn it into a constructor
                                        // if at this stage it's not a constructor or an async component factory,
                    // reject.
                    if (isObject(Ctor) && (Ctor = baseCtor.extend(Ctor)), "function" == typeof Ctor) {
                        // async component
                        var asyncFactory;
                        if (isUndef(Ctor.cid) && void 0 === (Ctor = function(factory, baseCtor, context) {
                            if (isTrue(factory.error) && isDef(factory.errorComp)) return factory.errorComp;
                            if (isDef(factory.resolved)) return factory.resolved;
                            if (isTrue(factory.loading) && isDef(factory.loadingComp)) return factory.loadingComp;
                            if (!isDef(factory.contexts)) {
                                var contexts = factory.contexts = [ context ], sync = !0, forceRender = function(renderCompleted) {
                                    for (var i = 0, l = contexts.length; i < l; i++) contexts[i].$forceUpdate();
                                    renderCompleted && (contexts.length = 0);
                                }, resolve = once(function(res) {
                                    // cache resolved
                                    factory.resolved = ensureCtor(res, baseCtor), 
                                    // invoke callbacks only if this is not a synchronous resolve
                                    // (async resolves are shimmed as synchronous during SSR)
                                    sync ? contexts.length = 0 : forceRender(!0);
                                }), reject = once(function(reason) {
                                    "production" !== process.env.NODE_ENV && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : "")), 
                                    isDef(factory.errorComp) && (factory.error = !0, forceRender(!0));
                                }), res = factory(resolve, reject);
                                // return in case resolved synchronously
                                return isObject(res) && ("function" == typeof res.then ? 
                                // () => Promise
                                isUndef(factory.resolved) && res.then(resolve, reject) : isDef(res.component) && "function" == typeof res.component.then && (res.component.then(resolve, reject), 
                                isDef(res.error) && (factory.errorComp = ensureCtor(res.error, baseCtor)), isDef(res.loading) && (factory.loadingComp = ensureCtor(res.loading, baseCtor), 
                                0 === res.delay ? factory.loading = !0 : setTimeout(function() {
                                    isUndef(factory.resolved) && isUndef(factory.error) && (factory.loading = !0, forceRender(!1));
                                }, res.delay || 200)), isDef(res.timeout) && setTimeout(function() {
                                    isUndef(factory.resolved) && reject("production" !== process.env.NODE_ENV ? "timeout (" + res.timeout + "ms)" : null);
                                }, res.timeout))), sync = !1, factory.loading ? factory.loadingComp : factory.resolved;
                            }
                            // already pending
                            factory.contexts.push(context);
                        }(asyncFactory = Ctor, baseCtor, context))) 
                        // return a placeholder node for async component, which is rendered
                        // as a comment node but preserves all the raw information for the node.
                        // the information will be used for async server-rendering and hydration.
                        return function(factory, data, context, children, tag) {
                            var node = createEmptyVNode();
                            return node.asyncFactory = factory, node.asyncMeta = {
                                data: data,
                                context: context,
                                children: children,
                                tag: tag
                            }, node;
                        }(asyncFactory, data, context, children, tag);
                        data = data || {}, 
                        // resolve constructor options in case global mixins are applied after
                        // component constructor creation
                        resolveConstructorOptions(Ctor), 
                        // transform component v-model data into props & events
                        isDef(data.model) && 
                        // transform component v-model info (value and callback) into
                        // prop and event handler respectively.
                        function(options, data) {
                            var prop = options.model && options.model.prop || "value", event = options.model && options.model.event || "input";
                            (data.props || (data.props = {}))[prop] = data.model.value;
                            var on = data.on || (data.on = {}), existing = on[event], callback = data.model.callback;
                            isDef(existing) ? (Array.isArray(existing) ? -1 === existing.indexOf(callback) : existing !== callback) && (on[event] = [ callback ].concat(existing)) : on[event] = callback;
                        }
                        /*  */ (Ctor.options, data);
                        // extract props
                        var propsData = function(data, Ctor, tag) {
                            // we are only extracting raw values here.
                            // validation and default values are handled in the child
                            // component itself.
                            var propOptions = Ctor.options.props;
                            if (!isUndef(propOptions)) {
                                var res = {}, attrs = data.attrs, props = data.props;
                                if (isDef(attrs) || isDef(props)) for (var key in propOptions) {
                                    var altKey = hyphenate(key);
                                    if ("production" !== process.env.NODE_ENV) {
                                        var keyInLowerCase = key.toLowerCase();
                                        key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase) && tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ', but the declared prop name is "' + key + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                                    }
                                    checkProp(res, props, key, altKey, !0) || checkProp(res, attrs, key, altKey, !1);
                                }
                                return res;
                            }
                        }(data, Ctor, tag);
                        // functional component
                                                if (isTrue(Ctor.options.functional)) return function(Ctor, propsData, data, contextVm, children) {
                            var options = Ctor.options, props = {}, propOptions = options.props;
                            if (isDef(propOptions)) for (var key in propOptions) props[key] = validateProp(key, propOptions, propsData || emptyObject); else isDef(data.attrs) && mergeProps(props, data.attrs), 
                            isDef(data.props) && mergeProps(props, data.props);
                            var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor), vnode = options.render.call(null, renderContext._c, renderContext);
                            if (vnode instanceof VNode) return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
                            if (Array.isArray(vnode)) {
                                for (var vnodes = normalizeChildren(vnode) || [], res = new Array(vnodes.length), i = 0; i < vnodes.length; i++) res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
                                return res;
                            }
                        }(Ctor, propsData, data, context, children);
                        // extract listeners, since these needs to be treated as
                        // child component listeners instead of DOM listeners
                                                var listeners = data.on;
                        // replace with listeners with .native modifier
                        // so it gets processed during parent component patch.
                                                if (data.on = data.nativeOn, isTrue(Ctor.options.abstract)) {
                            // abstract components do not keep anything
                            // other than props & listeners & slot
                            // work around flow
                            var slot = data.slot;
                            data = {}, slot && (data.slot = slot);
                        }
                        // install component management hooks onto the placeholder node
                                                !function(data) {
                            for (var hooks = data.hook || (data.hook = {}), i = 0; i < hooksToMerge.length; i++) {
                                var key = hooksToMerge[i], existing = hooks[key], toMerge = componentVNodeHooks[key];
                                existing === toMerge || existing && existing._merged || (hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge);
                            }
                        }(data);
                        // return a placeholder vnode
                        var name = Ctor.options.name || tag;
                        return new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
                            Ctor: Ctor,
                            propsData: propsData,
                            listeners: listeners,
                            tag: tag,
                            children: children
                        }, asyncFactory);
                    }
                    "production" !== process.env.NODE_ENV && warn("Invalid Component definition: " + String(Ctor), context);
                }
            }
            function mergeHook$1(f1, f2) {
                var merged = function(a, b) {
                    // flow complains about extra args which is why we use any
                    f1(a, b), f2(a, b);
                };
                return merged._merged = !0, merged;
            }
            var SIMPLE_NORMALIZE = 1, ALWAYS_NORMALIZE = 2;
            // wrapper function for providing a more flexible interface
            // without getting yelled at by flow
            function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
                return (Array.isArray(data) || isPrimitive(data)) && (normalizationType = children, 
                children = data, data = void 0), isTrue(alwaysNormalize) && (normalizationType = ALWAYS_NORMALIZE), 
                function(context, tag, data, children, normalizationType) {
                    if (isDef(data) && isDef(data.__ob__)) return "production" !== process.env.NODE_ENV && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\nAlways create fresh vnode data objects in each render!", context), 
                    createEmptyVNode();
                    // object syntax in v-bind
                                        isDef(data) && isDef(data.is) && (tag = data.is);
                    if (!tag) 
                    // in case of component :is set to falsy value
                    return createEmptyVNode();
                    // warn against non-primitive key
                                        "production" !== process.env.NODE_ENV && isDef(data) && isDef(data.key) && !isPrimitive(data.key) && warn("Avoid using non-primitive value as key, use string/number value instead.", context);
                    // support single function children as default scoped slot
                                        Array.isArray(children) && "function" == typeof children[0] && ((data = data || {}).scopedSlots = {
                        default: children[0]
                    }, children.length = 0);
                    normalizationType === ALWAYS_NORMALIZE ? children = normalizeChildren(children) : normalizationType === SIMPLE_NORMALIZE && (children = function(children) {
                        for (var i = 0; i < children.length; i++) if (Array.isArray(children[i])) return Array.prototype.concat.apply([], children);
                        return children;
                    }(children));
                    var vnode, ns;
                    if ("string" == typeof tag) {
                        var Ctor;
                        ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag), 
                        // platform built-in elements
                        vnode = config.isReservedTag(tag) ? new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context) : data && data.pre || !isDef(Ctor = resolveAsset(context.$options, "components", tag)) ? new VNode(tag, data, children, void 0, void 0, context) : createComponent(Ctor, data, context, children, tag);
                    } else 
                    // direct component options / constructor
                    vnode = createComponent(tag, data, context, children);
                    return Array.isArray(vnode) ? vnode : isDef(vnode) ? (isDef(ns) && function applyNS(vnode, ns, force) {
                        vnode.ns = ns;
                        "foreignObject" === vnode.tag && (
                        // use default namespace inside foreignObject
                        ns = void 0, force = !0);
                        if (isDef(vnode.children)) for (var i = 0, l = vnode.children.length; i < l; i++) {
                            var child = vnode.children[i];
                            isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && "svg" !== child.tag) && applyNS(child, ns, force);
                        }
                    }
                    // ref #5318
                    // necessary to ensure parent re-render when deep bindings like :style and
                    // :class are used on slot nodes
                    (vnode, ns), isDef(data) && function(data) {
                        isObject(data.style) && traverse(data.style);
                        isObject(data.class) && traverse(data.class);
                    }
                    /*  */ (data), vnode) : createEmptyVNode();
                }(context, tag, data, children, normalizationType);
            }
            /*  */
            var uid$3 = 0;
            function resolveConstructorOptions(Ctor) {
                var options = Ctor.options;
                if (Ctor.super) {
                    var superOptions = resolveConstructorOptions(Ctor.super);
                    if (superOptions !== Ctor.superOptions) {
                        // super option changed,
                        // need to resolve new options.
                        Ctor.superOptions = superOptions;
                        // check if there are any late-modified/attached options (#4976)
                        var modifiedOptions = function(Ctor) {
                            var modified, latest = Ctor.options, sealed = Ctor.sealedOptions;
                            for (var key in latest) latest[key] !== sealed[key] && (modified || (modified = {}), 
                            modified[key] = latest[key]);
                            return modified;
                        }(Ctor);
                        // update base extend options
                                                modifiedOptions && extend(Ctor.extendOptions, modifiedOptions), 
                        (options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)).name && (options.components[options.name] = Ctor);
                    }
                }
                return options;
            }
            function Vue(options) {
                "production" === process.env.NODE_ENV || this instanceof Vue || warn("Vue is a constructor and should be called with the `new` keyword"), 
                this._init(options);
            }
            /*  */
            function initExtend(Vue) {
                /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
                Vue.cid = 0;
                var cid = 1;
                /**
   * Class inheritance
   */                Vue.extend = function(extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this, SuperId = Super.cid, cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                    if (cachedCtors[SuperId]) return cachedCtors[SuperId];
                    var name = extendOptions.name || Super.options.name;
                    "production" !== process.env.NODE_ENV && name && validateComponentName(name);
                    var Sub = function(options) {
                        this._init(options);
                    };
                    return (Sub.prototype = Object.create(Super.prototype)).constructor = Sub, Sub.cid = cid++, 
                    Sub.options = mergeOptions(Super.options, extendOptions), Sub.super = Super, 
                    // For props and computed properties, we define the proxy getters on
                    // the Vue instances at extension time, on the extended prototype. This
                    // avoids Object.defineProperty calls for each instance created.
                    Sub.options.props && function(Comp) {
                        var props = Comp.options.props;
                        for (var key in props) proxy(Comp.prototype, "_props", key);
                    }(Sub), Sub.options.computed && function(Comp) {
                        var computed = Comp.options.computed;
                        for (var key in computed) defineComputed(Comp.prototype, key, computed[key]);
                    }
                    /*  */ (Sub), 
                    // allow further extension/mixin/plugin usage
                    Sub.extend = Super.extend, Sub.mixin = Super.mixin, Sub.use = Super.use, 
                    // create asset registers, so extended classes
                    // can have their private assets too.
                    ASSET_TYPES.forEach(function(type) {
                        Sub[type] = Super[type];
                    }), 
                    // enable recursive self-lookup
                    name && (Sub.options.components[name] = Sub), 
                    // keep a reference to the super options at extension time.
                    // later at instantiation we can check if Super's options have
                    // been updated.
                    Sub.superOptions = Super.options, Sub.extendOptions = extendOptions, Sub.sealedOptions = extend({}, Sub.options), 
                    // cache constructor
                    cachedCtors[SuperId] = Sub, Sub;
                };
            }
            /*  */
            function getComponentName(opts) {
                return opts && (opts.Ctor.options.name || opts.tag);
            }
            function matches(pattern, name) {
                return Array.isArray(pattern) ? pattern.indexOf(name) > -1 : "string" == typeof pattern ? pattern.split(",").indexOf(name) > -1 : !!isRegExp(pattern) && pattern.test(name)
                /* istanbul ignore next */;
            }
            function pruneCache(keepAliveInstance, filter) {
                var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
                for (var key in cache) {
                    var cachedNode = cache[key];
                    if (cachedNode) {
                        var name = getComponentName(cachedNode.componentOptions);
                        name && !filter(name) && pruneCacheEntry(cache, key, keys, _vnode);
                    }
                }
            }
            function pruneCacheEntry(cache, key, keys, current) {
                var cached$$1 = cache[key];
                !cached$$1 || current && cached$$1.tag === current.tag || cached$$1.componentInstance.$destroy(), 
                cache[key] = null, remove(keys, key);
            }
            !function(Vue) {
                Vue.prototype._init = function(options) {
                    var startTag, endTag, vm = this;
                    // a uid
                                        vm._uid = uid$3++, 
                    /* istanbul ignore if */
                    "production" !== process.env.NODE_ENV && config.performance && mark && (startTag = "vue-perf-start:" + vm._uid, 
                    endTag = "vue-perf-end:" + vm._uid, mark(startTag)), 
                    // a flag to avoid this being observed
                    vm._isVue = !0, 
                    // merge options
                    options && options._isComponent ? 
                    // optimize internal component instantiation
                    // since dynamic options merging is pretty slow, and none of the
                    // internal component options needs special treatment.
                    function(vm, options) {
                        var opts = vm.$options = Object.create(vm.constructor.options), parentVnode = options._parentVnode;
                        // doing this because it's faster than dynamic enumeration.
                                                opts.parent = options.parent, opts._parentVnode = parentVnode;
                        var vnodeComponentOptions = parentVnode.componentOptions;
                        opts.propsData = vnodeComponentOptions.propsData, opts._parentListeners = vnodeComponentOptions.listeners, 
                        opts._renderChildren = vnodeComponentOptions.children, opts._componentTag = vnodeComponentOptions.tag, 
                        options.render && (opts.render = options.render, opts.staticRenderFns = options.staticRenderFns);
                    }(vm, options) : vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm)
                    /* istanbul ignore else */ , "production" !== process.env.NODE_ENV ? initProxy(vm) : vm._renderProxy = vm, 
                    // expose real self
                    vm._self = vm, function(vm) {
                        var options = vm.$options, parent = options.parent;
                        // locate first non-abstract parent
                                                if (parent && !options.abstract) {
                            for (;parent.$options.abstract && parent.$parent; ) parent = parent.$parent;
                            parent.$children.push(vm);
                        }
                        vm.$parent = parent, vm.$root = parent ? parent.$root : vm, vm.$children = [], vm.$refs = {}, 
                        vm._watcher = null, vm._inactive = null, vm._directInactive = !1, vm._isMounted = !1, 
                        vm._isDestroyed = !1, vm._isBeingDestroyed = !1;
                    }(vm), function(vm) {
                        vm._events = Object.create(null), vm._hasHookEvent = !1;
                        // init parent attached events
                        var listeners = vm.$options._parentListeners;
                        listeners && updateComponentListeners(vm, listeners);
                    }(vm), function(vm) {
                        vm._vnode = null, // the root of the child tree
                        vm._staticTrees = null;
                        // v-once cached trees
                        var options = vm.$options, parentVnode = vm.$vnode = options._parentVnode, renderContext = parentVnode && parentVnode.context;
                        vm.$slots = resolveSlots(options._renderChildren, renderContext), vm.$scopedSlots = emptyObject, 
                        // bind the createElement fn to this instance
                        // so that we get proper render context inside it.
                        // args order: tag, data, children, normalizationType, alwaysNormalize
                        // internal version is used by render functions compiled from templates
                        vm._c = function(a, b, c, d) {
                            return createElement(vm, a, b, c, d, !1);
                        }, 
                        // normalization is always applied for the public version, used in
                        // user-written render functions.
                        vm.$createElement = function(a, b, c, d) {
                            return createElement(vm, a, b, c, d, !0);
                        };
                        // $attrs & $listeners are exposed for easier HOC creation.
                        // they need to be reactive so that HOCs using them are always updated
                        var parentData = parentVnode && parentVnode.data;
                        /* istanbul ignore else */                        "production" !== process.env.NODE_ENV ? (defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
                            !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
                        }, !0), defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
                            !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
                        }, !0)) : (defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, !0), 
                        defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, null, !0));
                    }(vm), callHook(vm, "beforeCreate"), function(vm) {
                        var result = resolveInject(vm.$options.inject, vm);
                        result && (toggleObserving(!1), Object.keys(result).forEach(function(key) {
                            /* istanbul ignore else */
                            "production" !== process.env.NODE_ENV ? defineReactive$$1(vm, key, result[key], function() {
                                warn('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + key + '"', vm);
                            }) : defineReactive$$1(vm, key, result[key]);
                        }), toggleObserving(!0));
                    }(vm), // resolve injections before data/props
                    initState(vm), 
                    /*  */
                    function(vm) {
                        var provide = vm.$options.provide;
                        provide && (vm._provided = "function" == typeof provide ? provide.call(vm) : provide);
                    }(vm), // resolve provide after data/props
                    callHook(vm, "created"), 
                    /* istanbul ignore if */
                    "production" !== process.env.NODE_ENV && config.performance && mark && (vm._name = formatComponentName(vm, !1), 
                    mark(endTag), measure("vue " + vm._name + " init", startTag, endTag)), vm.$options.el && vm.$mount(vm.$options.el);
                };
            }(Vue), function(Vue) {
                // flow somehow has problems with directly declared definition object
                // when using Object.defineProperty, so we have to procedurally build up
                // the object here.
                var dataDef = {
                    get: function() {
                        return this._data;
                    }
                }, propsDef = {
                    get: function() {
                        return this._props;
                    }
                };
                "production" !== process.env.NODE_ENV && (dataDef.set = function() {
                    warn("Avoid replacing instance root $data. Use nested data properties instead.", this);
                }, propsDef.set = function() {
                    warn("$props is readonly.", this);
                }), Object.defineProperty(Vue.prototype, "$data", dataDef), Object.defineProperty(Vue.prototype, "$props", propsDef), 
                Vue.prototype.$set = set, Vue.prototype.$delete = del, Vue.prototype.$watch = function(expOrFn, cb, options) {
                    if (isPlainObject(cb)) return createWatcher(this, expOrFn, cb, options);
                    (options = options || {}).user = !0;
                    var watcher = new Watcher(this, expOrFn, cb, options);
                    if (options.immediate) try {
                        cb.call(this, watcher.value);
                    } catch (error) {
                        handleError(error, this, 'callback for immediate watcher "' + watcher.expression + '"');
                    }
                    return function() {
                        watcher.teardown();
                    };
                };
            }(Vue), function(Vue) {
                var hookRE = /^hook:/;
                Vue.prototype.$on = function(event, fn) {
                    var vm = this;
                    if (Array.isArray(event)) for (var i = 0, l = event.length; i < l; i++) vm.$on(event[i], fn); else (vm._events[event] || (vm._events[event] = [])).push(fn), 
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                    hookRE.test(event) && (vm._hasHookEvent = !0);
                    return vm;
                }, Vue.prototype.$once = function(event, fn) {
                    var vm = this;
                    function on() {
                        vm.$off(event, on), fn.apply(vm, arguments);
                    }
                    return on.fn = fn, vm.$on(event, on), vm;
                }, Vue.prototype.$off = function(event, fn) {
                    var vm = this;
                    // all
                                        if (!arguments.length) return vm._events = Object.create(null), 
                    vm;
                    // array of events
                                        if (Array.isArray(event)) {
                        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) vm.$off(event[i$1], fn);
                        return vm;
                    }
                    // specific event
                                        var cb, cbs = vm._events[event];
                    if (!cbs) return vm;
                    if (!fn) return vm._events[event] = null, vm;
                    // specific handler
                                        for (var i = cbs.length; i--; ) if ((cb = cbs[i]) === fn || cb.fn === fn) {
                        cbs.splice(i, 1);
                        break;
                    }
                    return vm;
                }, Vue.prototype.$emit = function(event) {
                    var vm = this;
                    if ("production" !== process.env.NODE_ENV) {
                        var lowerCaseEvent = event.toLowerCase();
                        lowerCaseEvent !== event && vm._events[lowerCaseEvent] && tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
                    }
                    var cbs = vm._events[event];
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        for (var args = toArray(arguments, 1), i = 0, l = cbs.length; i < l; i++) try {
                            cbs[i].apply(vm, args);
                        } catch (e) {
                            handleError(e, vm, 'event handler for "' + event + '"');
                        }
                    }
                    return vm;
                };
            }(Vue), function(Vue) {
                Vue.prototype._update = function(vnode, hydrating) {
                    var vm = this, prevEl = vm.$el, prevVnode = vm._vnode, restoreActiveInstance = setActiveInstance(vm);
                    vm._vnode = vnode, 
                    // Vue.prototype.__patch__ is injected in entry points
                    // based on the rendering backend used.
                    // updates
                    vm.$el = prevVnode ? vm.__patch__(prevVnode, vnode) : vm.__patch__(vm.$el, vnode, hydrating, !1 /* removeOnly */), 
                    restoreActiveInstance(), 
                    // update __vue__ reference
                    prevEl && (prevEl.__vue__ = null), vm.$el && (vm.$el.__vue__ = vm), 
                    // if parent is an HOC, update its $el as well
                    vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode && (vm.$parent.$el = vm.$el);
                }, Vue.prototype.$forceUpdate = function() {
                    this._watcher && this._watcher.update();
                }, Vue.prototype.$destroy = function() {
                    var vm = this;
                    if (!vm._isBeingDestroyed) {
                        callHook(vm, "beforeDestroy"), vm._isBeingDestroyed = !0;
                        // remove self from parent
                        var parent = vm.$parent;
                        !parent || parent._isBeingDestroyed || vm.$options.abstract || remove(parent.$children, vm), 
                        // teardown watchers
                        vm._watcher && vm._watcher.teardown();
                        for (var i = vm._watchers.length; i--; ) vm._watchers[i].teardown();
                        // remove reference from data ob
                        // frozen object may not have observer.
                                                vm._data.__ob__ && vm._data.__ob__.vmCount--, 
                        // call the last hook...
                        vm._isDestroyed = !0, 
                        // invoke destroy hooks on current rendered tree
                        vm.__patch__(vm._vnode, null), 
                        // fire destroyed hook
                        callHook(vm, "destroyed"), 
                        // turn off all instance listeners.
                        vm.$off(), 
                        // remove __vue__ reference
                        vm.$el && (vm.$el.__vue__ = null), 
                        // release circular reference (#6759)
                        vm.$vnode && (vm.$vnode.parent = null);
                    }
                };
            }(Vue), function(Vue) {
                // install runtime convenience helpers
                installRenderHelpers(Vue.prototype), Vue.prototype.$nextTick = function(fn) {
                    return nextTick(fn, this);
                }, Vue.prototype._render = function() {
                    var vnode, vm = this, ref = vm.$options, render = ref.render, _parentVnode = ref._parentVnode;
                    _parentVnode && (vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject), 
                    // set parent vnode. this allows render functions to have access
                    // to the data on the placeholder node.
                    vm.$vnode = _parentVnode;
                    try {
                        vnode = render.call(vm._renderProxy, vm.$createElement);
                    } catch (e) {
                        // return error render result,
                        // or previous vnode to prevent render error causing blank component
                        /* istanbul ignore else */
                        if (handleError(e, vm, "render"), "production" !== process.env.NODE_ENV && vm.$options.renderError) try {
                            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                        } catch (e) {
                            handleError(e, vm, "renderError"), vnode = vm._vnode;
                        } else vnode = vm._vnode;
                    }
                    // return empty vnode in case the render function errored out
                                        return vnode instanceof VNode || ("production" !== process.env.NODE_ENV && Array.isArray(vnode) && warn("Multiple root nodes returned from render function. Render function should return a single root node.", vm), 
                    vnode = createEmptyVNode()), 
                    // set parent
                    vnode.parent = _parentVnode, vnode;
                };
            }(Vue);
            var patternTypes = [ String, RegExp, Array ], builtInComponents = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: patternTypes,
                        exclude: patternTypes,
                        max: [ String, Number ]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = [];
                    },
                    destroyed: function() {
                        for (var key in this.cache) pruneCacheEntry(this.cache, key, this.keys);
                    },
                    mounted: function() {
                        var this$1 = this;
                        this.$watch("include", function(val) {
                            pruneCache(this$1, function(name) {
                                return matches(val, name);
                            });
                        }), this.$watch("exclude", function(val) {
                            pruneCache(this$1, function(name) {
                                return !matches(val, name);
                            });
                        });
                    },
                    render: function() {
                        var slot = this.$slots.default, vnode = getFirstComponentChild(slot), componentOptions = vnode && vnode.componentOptions;
                        if (componentOptions) {
                            // check pattern
                            var name = getComponentName(componentOptions), include = this.include, exclude = this.exclude;
                            if (
                            // not included
                            include && (!name || !matches(include, name)) || 
                            // excluded
                            exclude && name && matches(exclude, name)) return vnode;
                            var cache = this.cache, keys = this.keys, key = null == vnode.key ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                            cache[key] ? (vnode.componentInstance = cache[key].componentInstance, 
                            // make current key freshest
                            remove(keys, key), keys.push(key)) : (cache[key] = vnode, keys.push(key), 
                            // prune oldest entry
                            this.max && keys.length > parseInt(this.max) && pruneCacheEntry(cache, keys[0], keys, this._vnode)), 
                            vnode.data.keepAlive = !0;
                        }
                        return vnode || slot && slot[0];
                    }
                }
            };
            !
            /*  */
            function(Vue) {
                // config
                var configDef = {
                    get: function() {
                        return config;
                    }
                };
                "production" !== process.env.NODE_ENV && (configDef.set = function() {
                    warn("Do not replace the Vue.config object, set individual fields instead.");
                }), Object.defineProperty(Vue, "config", configDef), 
                // exposed util methods.
                // NOTE: these are not considered part of the public API - avoid relying on
                // them unless you are aware of the risk.
                Vue.util = {
                    warn: warn,
                    extend: extend,
                    mergeOptions: mergeOptions,
                    defineReactive: defineReactive$$1
                }, Vue.set = set, Vue.delete = del, Vue.nextTick = nextTick, Vue.options = Object.create(null), 
                ASSET_TYPES.forEach(function(type) {
                    Vue.options[type + "s"] = Object.create(null);
                }), 
                // this is used to identify the "base" constructor to extend all plain-object
                // components with in Weex's multi-instance scenarios.
                Vue.options._base = Vue, extend(Vue.options.components, builtInComponents), 
                /*  */
                function(Vue) {
                    Vue.use = function(plugin) {
                        var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
                        if (installedPlugins.indexOf(plugin) > -1) return this;
                        // additional parameters
                                                var args = toArray(arguments, 1);
                        return args.unshift(this), "function" == typeof plugin.install ? plugin.install.apply(plugin, args) : "function" == typeof plugin && plugin.apply(null, args), 
                        installedPlugins.push(plugin), this;
                    };
                }
                /*  */ (Vue), function(Vue) {
                    Vue.mixin = function(mixin) {
                        return this.options = mergeOptions(this.options, mixin), this;
                    };
                }(Vue), initExtend(Vue), function(Vue) {
                    /**
   * Create asset registration methods.
   */
                    ASSET_TYPES.forEach(function(type) {
                        Vue[type] = function(id, definition) {
                            return definition ? (
                            /* istanbul ignore if */
                            "production" !== process.env.NODE_ENV && "component" === type && validateComponentName(id), 
                            "component" === type && isPlainObject(definition) && (definition.name = definition.name || id, 
                            definition = this.options._base.extend(definition)), "directive" === type && "function" == typeof definition && (definition = {
                                bind: definition,
                                update: definition
                            }), this.options[type + "s"][id] = definition, definition) : this.options[type + "s"][id];
                        };
                    });
                }(Vue);
            }(Vue), Object.defineProperty(Vue.prototype, "$isServer", {
                get: isServerRendering
            }), Object.defineProperty(Vue.prototype, "$ssrContext", {
                get: function() {
                    /* istanbul ignore next */
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), 
            // expose FunctionalRenderContext for ssr runtime helper installation
            Object.defineProperty(Vue, "FunctionalRenderContext", {
                value: FunctionalRenderContext
            }), Vue.version = "2.5.22";
            /*  */
            // these are reserved for web because they are directly compiled away
            // during template compilation
            var isReservedAttr = makeMap("style,class"), acceptValue = makeMap("input,textarea,option,select,progress"), isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck"), isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), xlinkNS = "http://www.w3.org/1999/xlink", isXlink = function(name) {
                return ":" === name.charAt(5) && "xlink" === name.slice(0, 5);
            }, getXlinkProp = function(name) {
                return isXlink(name) ? name.slice(6, name.length) : "";
            }, isFalsyAttrValue = function(val) {
                return null == val || !1 === val;
            };
            // attributes that should be using props for binding
                        /*  */
            function genClassForVnode(vnode) {
                for (var data = vnode.data, parentNode = vnode, childNode = vnode; isDef(childNode.componentInstance); ) (childNode = childNode.componentInstance._vnode) && childNode.data && (data = mergeClassData(childNode.data, data));
                for (;isDef(parentNode = parentNode.parent); ) parentNode && parentNode.data && (data = mergeClassData(data, parentNode.data));
                return function(staticClass, dynamicClass) {
                    if (isDef(staticClass) || isDef(dynamicClass)) return concat(staticClass, stringifyClass(dynamicClass));
                    /* istanbul ignore next */                    return "";
                }(data.staticClass, data.class);
            }
            function mergeClassData(child, parent) {
                return {
                    staticClass: concat(child.staticClass, parent.staticClass),
                    class: isDef(child.class) ? [ child.class, parent.class ] : parent.class
                };
            }
            function concat(a, b) {
                return a ? b ? a + " " + b : a : b || "";
            }
            function stringifyClass(value) {
                return Array.isArray(value) ? function(value) {
                    for (var stringified, res = "", i = 0, l = value.length; i < l; i++) isDef(stringified = stringifyClass(value[i])) && "" !== stringified && (res && (res += " "), 
                    res += stringified);
                    return res;
                }(value) : isObject(value) ? function(value) {
                    var res = "";
                    for (var key in value) value[key] && (res && (res += " "), res += key);
                    return res;
                }
                /*  */ (value) : "string" == typeof value ? value : ""
                /* istanbul ignore next */;
            }
            var namespaceMap = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            }, isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), isReservedTag = function(tag) {
                return isHTMLTag(tag) || isSVG(tag);
            };
            var unknownElementCache = Object.create(null);
            var isTextInputType = makeMap("text,number,password,search,email,tel,url");
            /*  */
            /**
 * Query an element selector if it's not an element already.
 */            var nodeOps = /* */ Object.freeze({
                createElement: 
                /*  */
                function(tagName, vnode) {
                    var elm = document.createElement(tagName);
                    return "select" !== tagName ? elm : (
                    // false or null will remove the attribute but undefined will not
                    vnode.data && vnode.data.attrs && void 0 !== vnode.data.attrs.multiple && elm.setAttribute("multiple", "multiple"), 
                    elm);
                },
                createElementNS: function(namespace, tagName) {
                    return document.createElementNS(namespaceMap[namespace], tagName);
                },
                createTextNode: function(text) {
                    return document.createTextNode(text);
                },
                createComment: function(text) {
                    return document.createComment(text);
                },
                insertBefore: function(parentNode, newNode, referenceNode) {
                    parentNode.insertBefore(newNode, referenceNode);
                },
                removeChild: function(node, child) {
                    node.removeChild(child);
                },
                appendChild: function(node, child) {
                    node.appendChild(child);
                },
                parentNode: function(node) {
                    return node.parentNode;
                },
                nextSibling: function(node) {
                    return node.nextSibling;
                },
                tagName: function(node) {
                    return node.tagName;
                },
                setTextContent: function(node, text) {
                    node.textContent = text;
                },
                setStyleScope: function(node, scopeId) {
                    node.setAttribute(scopeId, "");
                }
            }), ref = {
                create: function(_, vnode) {
                    registerRef(vnode);
                },
                update: function(oldVnode, vnode) {
                    oldVnode.data.ref !== vnode.data.ref && (registerRef(oldVnode, !0), registerRef(vnode));
                },
                destroy: function(vnode) {
                    registerRef(vnode, !0);
                }
            };
            /*  */            function registerRef(vnode, isRemoval) {
                var key = vnode.data.ref;
                if (isDef(key)) {
                    var vm = vnode.context, ref = vnode.componentInstance || vnode.elm, refs = vm.$refs;
                    isRemoval ? Array.isArray(refs[key]) ? remove(refs[key], ref) : refs[key] === ref && (refs[key] = void 0) : vnode.data.refInFor ? Array.isArray(refs[key]) ? refs[key].indexOf(ref) < 0 && 
                    // $flow-disable-line
                    refs[key].push(ref) : refs[key] = [ ref ] : refs[key] = ref;
                }
            }
            /**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */            var emptyNode = new VNode("", {}, []), hooks = [ "create", "activate", "update", "remove", "destroy" ];
            function sameVnode(a, b) {
                return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && function(a, b) {
                    if ("input" !== a.tag) return !0;
                    var i, typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type, typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
                }(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
            }
            function createKeyToOldIdx(children, beginIdx, endIdx) {
                var i, key, map = {};
                for (i = beginIdx; i <= endIdx; ++i) isDef(key = children[i].key) && (map[key] = i);
                return map;
            }
            /*  */
            var directives = {
                create: updateDirectives,
                update: updateDirectives,
                destroy: function(vnode) {
                    updateDirectives(vnode, emptyNode);
                }
            };
            function updateDirectives(oldVnode, vnode) {
                (oldVnode.data.directives || vnode.data.directives) && function(oldVnode, vnode) {
                    var key, oldDir, dir, isCreate = oldVnode === emptyNode, isDestroy = vnode === emptyNode, oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context), newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context), dirsWithInsert = [], dirsWithPostpatch = [];
                    for (key in newDirs) oldDir = oldDirs[key], dir = newDirs[key], oldDir ? (
                    // existing directive, update
                    dir.oldValue = oldDir.value, callHook$1(dir, "update", vnode, oldVnode), dir.def && dir.def.componentUpdated && dirsWithPostpatch.push(dir)) : (
                    // new directive, bind
                    callHook$1(dir, "bind", vnode, oldVnode), dir.def && dir.def.inserted && dirsWithInsert.push(dir));
                    if (dirsWithInsert.length) {
                        var callInsert = function() {
                            for (var i = 0; i < dirsWithInsert.length; i++) callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
                        };
                        isCreate ? mergeVNodeHook(vnode, "insert", callInsert) : callInsert();
                    }
                    dirsWithPostpatch.length && mergeVNodeHook(vnode, "postpatch", function() {
                        for (var i = 0; i < dirsWithPostpatch.length; i++) callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
                    });
                    if (!isCreate) for (key in oldDirs) newDirs[key] || 
                    // no longer present, unbind
                    callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
                }(oldVnode, vnode);
            }
            var emptyModifiers = Object.create(null);
            function normalizeDirectives$1(dirs, vm) {
                var i, dir, res = Object.create(null);
                if (!dirs) 
                // $flow-disable-line
                return res;
                for (i = 0; i < dirs.length; i++) (dir = dirs[i]).modifiers || (
                // $flow-disable-line
                dir.modifiers = emptyModifiers), res[getRawDirName(dir)] = dir, dir.def = resolveAsset(vm.$options, "directives", dir.name, !0);
                // $flow-disable-line
                                return res;
            }
            function getRawDirName(dir) {
                return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
            }
            function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
                var fn = dir.def && dir.def[hook];
                if (fn) try {
                    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
                } catch (e) {
                    handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
                }
            }
            var baseModules = [ ref, directives ];
            /*  */            function updateAttrs(oldVnode, vnode) {
                var opts = vnode.componentOptions;
                if (!(isDef(opts) && !1 === opts.Ctor.options.inheritAttrs || isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs))) {
                    var key, cur, elm = vnode.elm, oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
                    for (key in 
                    // clone observed objects, as the user probably wants to mutate it
                    isDef(attrs.__ob__) && (attrs = vnode.data.attrs = extend({}, attrs)), attrs) cur = attrs[key], 
                    oldAttrs[key] !== cur && setAttr(elm, key, cur);
                    // #4391: in IE9, setting type can reset value for input[type=radio]
                    // #6666: IE/Edge forces progress value down to 1 before setting a max
                    /* istanbul ignore if */                    for (key in (isIE || isEdge) && attrs.value !== oldAttrs.value && setAttr(elm, "value", attrs.value), 
                    oldAttrs) isUndef(attrs[key]) && (isXlink(key) ? elm.removeAttributeNS(xlinkNS, getXlinkProp(key)) : isEnumeratedAttr(key) || elm.removeAttribute(key));
                }
            }
            function setAttr(el, key, value) {
                el.tagName.indexOf("-") > -1 ? baseSetAttr(el, key, value) : isBooleanAttr(key) ? 
                // set attribute for blank value
                // e.g. <option disabled>Select one</option>
                isFalsyAttrValue(value) ? el.removeAttribute(key) : (
                // technically allowfullscreen is a boolean attribute for <iframe>,
                // but Flash expects a value of "true" when used on <embed> tag
                value = "allowfullscreen" === key && "EMBED" === el.tagName ? "true" : key, el.setAttribute(key, value)) : isEnumeratedAttr(key) ? el.setAttribute(key, isFalsyAttrValue(value) || "false" === value ? "false" : "true") : isXlink(key) ? isFalsyAttrValue(value) ? el.removeAttributeNS(xlinkNS, getXlinkProp(key)) : el.setAttributeNS(xlinkNS, key, value) : baseSetAttr(el, key, value);
            }
            function baseSetAttr(el, key, value) {
                if (isFalsyAttrValue(value)) el.removeAttribute(key); else {
                    // #7138: IE10 & 11 fires input event when setting placeholder on
                    // <textarea>... block the first input event and remove the blocker
                    // immediately.
                    /* istanbul ignore if */
                    if (isIE && !isIE9 && ("TEXTAREA" === el.tagName || "INPUT" === el.tagName) && "placeholder" === key && !el.__ieph) {
                        var blocker = function(e) {
                            e.stopImmediatePropagation(), el.removeEventListener("input", blocker);
                        };
                        el.addEventListener("input", blocker), 
                        // $flow-disable-line
                        el.__ieph = !0;
                    }
                    el.setAttribute(key, value);
                }
            }
            var attrs = {
                create: updateAttrs,
                update: updateAttrs
            };
            /*  */            function updateClass(oldVnode, vnode) {
                var el = vnode.elm, data = vnode.data, oldData = oldVnode.data;
                if (!(isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
                    var cls = genClassForVnode(vnode), transitionClass = el._transitionClasses;
                    // handle transition classes
                                        isDef(transitionClass) && (cls = concat(cls, stringifyClass(transitionClass))), 
                    // set the class
                    cls !== el._prevClass && (el.setAttribute("class", cls), el._prevClass = cls);
                }
            }
            var target$1, klass = {
                create: updateClass,
                update: updateClass
            }, RANGE_TOKEN = "__r", CHECKBOX_RADIO_TOKEN = "__c";
            /*  */
            /*  */
            /*  */
            /*  */
            // in some cases, the event used has to be determined at runtime
            // so we used some reserved tokens during compile.
                        function createOnceHandler$1(event, handler, capture) {
                var _target = target$1;
 // save current target element in closure
                                return function onceHandler() {
                    null !== handler.apply(null, arguments) && remove$2(event, onceHandler, capture, _target);
                };
            }
            function add$1(event, handler, capture, passive) {
                var fn;
                handler = (fn = handler)._withTask || (fn._withTask = function() {
                    useMacroTask = !0;
                    try {
                        return fn.apply(null, arguments);
                    } finally {
                        useMacroTask = !1;
                    }
                }), target$1.addEventListener(event, handler, supportsPassive ? {
                    capture: capture,
                    passive: passive
                } : capture);
            }
            function remove$2(event, handler, capture, _target) {
                (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
            }
            function updateDOMListeners(oldVnode, vnode) {
                if (!isUndef(oldVnode.data.on) || !isUndef(vnode.data.on)) {
                    var on = vnode.data.on || {}, oldOn = oldVnode.data.on || {};
                    target$1 = vnode.elm, 
                    /*  */
                    // normalize v-model event tokens that can only be determined at runtime.
                    // it's important to place the event as the first in the array because
                    // the whole point is ensuring the v-model callback gets called before
                    // user-attached handlers.
                    function(on) {
                        /* istanbul ignore if */
                        if (isDef(on[RANGE_TOKEN])) {
                            // IE input[type=range] only supports `change` event
                            var event = isIE ? "change" : "input";
                            on[event] = [].concat(on[RANGE_TOKEN], on[event] || []), delete on[RANGE_TOKEN];
                        }
                        // This was originally intended to fix #4521 but no longer necessary
                        // after 2.5. Keeping it for backwards compat with generated code from < 2.4
                        /* istanbul ignore if */                        isDef(on[CHECKBOX_RADIO_TOKEN]) && (on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []), 
                        delete on[CHECKBOX_RADIO_TOKEN]);
                    }(on), updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context), 
                    target$1 = void 0;
                }
            }
            var events = {
                create: updateDOMListeners,
                update: updateDOMListeners
            };
            /*  */            function updateDOMProps(oldVnode, vnode) {
                if (!isUndef(oldVnode.data.domProps) || !isUndef(vnode.data.domProps)) {
                    var key, cur, elm = vnode.elm, oldProps = oldVnode.data.domProps || {}, props = vnode.data.domProps || {};
                    for (key in 
                    // clone observed objects, as the user probably wants to mutate it
                    isDef(props.__ob__) && (props = vnode.data.domProps = extend({}, props)), oldProps) isUndef(props[key]) && (elm[key] = "");
                    for (key in props) {
                        // ignore children if the node has textContent or innerHTML,
                        // as these will throw away existing DOM nodes and cause removal errors
                        // on subsequent patches (#3360)
                        if (cur = props[key], "textContent" === key || "innerHTML" === key) {
                            if (vnode.children && (vnode.children.length = 0), cur === oldProps[key]) continue;
                            // #6601 work around Chrome version <= 55 bug where single textNode
                            // replaced by innerHTML/textContent retains its parentNode property
                                                        1 === elm.childNodes.length && elm.removeChild(elm.childNodes[0]);
                        }
                        if ("value" === key) {
                            // store value as _value as well since
                            // non-string values will be stringified
                            elm._value = cur;
                            // avoid resetting cursor position when value is the same
                            var strCur = isUndef(cur) ? "" : String(cur);
                            shouldUpdateValue(elm, strCur) && (elm.value = strCur);
                        } else elm[key] = cur;
                    }
                }
            }
            // check platforms/web/util/attrs.js acceptValue
                        function shouldUpdateValue(elm, checkVal) {
                return !elm.composing && ("OPTION" === elm.tagName || function(elm, checkVal) {
                    // return true when textbox (.number and .trim) loses focus and its value is
                    // not equal to the updated value
                    var notInFocus = !0;
                    // #6157
                    // work around IE bug when accessing document.activeElement in an iframe
                                        try {
                        notInFocus = document.activeElement !== elm;
                    } catch (e) {}
                    return notInFocus && elm.value !== checkVal;
                }(elm, checkVal) || function(elm, newVal) {
                    var value = elm.value, modifiers = elm._vModifiers;
                    // injected by v-model runtime
                    if (isDef(modifiers)) {
                        if (modifiers.lazy) 
                        // inputs with lazy should only be updated when not in focus
                        return !1;
                        if (modifiers.number) return toNumber(value) !== toNumber(newVal);
                        if (modifiers.trim) return value.trim() !== newVal.trim();
                    }
                    return value !== newVal;
                }(elm, checkVal));
            }
            var domProps = {
                create: updateDOMProps,
                update: updateDOMProps
            }, parseStyleText = cached(function(cssText) {
                var res = {}, propertyDelimiter = /:(.+)/;
                return cssText.split(/;(?![^(]*\))/g).forEach(function(item) {
                    if (item) {
                        var tmp = item.split(propertyDelimiter);
                        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                    }
                }), res;
            });
            /*  */            
            // merge static and dynamic style data on the same vnode
            function normalizeStyleData(data) {
                var style = normalizeStyleBinding(data.style);
                // static style is pre-processed into an object during compilation
                // and is always a fresh object, so it's safe to merge into it
                                return data.staticStyle ? extend(data.staticStyle, style) : style;
            }
            // normalize possible array / string values into Object
                        function normalizeStyleBinding(bindingStyle) {
                return Array.isArray(bindingStyle) ? toObject(bindingStyle) : "string" == typeof bindingStyle ? parseStyleText(bindingStyle) : bindingStyle;
            }
            /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */            
            /*  */
            var emptyStyle, cssVarRE = /^--/, importantRE = /\s*!important$/, setProp = function(el, name, val) {
                /* istanbul ignore if */
                if (cssVarRE.test(name)) el.style.setProperty(name, val); else if (importantRE.test(val)) el.style.setProperty(name, val.replace(importantRE, ""), "important"); else {
                    var normalizedName = normalize(name);
                    if (Array.isArray(val)) 
                    // Support values array created by autoprefixer, e.g.
                    // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                    // Set them one by one, and the browser will only set those it can recognize
                    for (var i = 0, len = val.length; i < len; i++) el.style[normalizedName] = val[i]; else el.style[normalizedName] = val;
                }
            }, vendorNames = [ "Webkit", "Moz", "ms" ], normalize = cached(function(prop) {
                if (emptyStyle = emptyStyle || document.createElement("div").style, "filter" !== (prop = camelize(prop)) && prop in emptyStyle) return prop;
                for (var capName = prop.charAt(0).toUpperCase() + prop.slice(1), i = 0; i < vendorNames.length; i++) {
                    var name = vendorNames[i] + capName;
                    if (name in emptyStyle) return name;
                }
            });
            function updateStyle(oldVnode, vnode) {
                var data = vnode.data, oldData = oldVnode.data;
                if (!(isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style))) {
                    var cur, name, el = vnode.elm, oldStaticStyle = oldData.staticStyle, oldStyleBinding = oldData.normalizedStyle || oldData.style || {}, oldStyle = oldStaticStyle || oldStyleBinding, style = normalizeStyleBinding(vnode.data.style) || {};
                    // store normalized style under a different key for next diff
                    // make sure to clone it if it's reactive, since the user likely wants
                    // to mutate it.
                    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
                    var newStyle = function(vnode, checkChild) {
                        var styleData, res = {};
                        if (checkChild) for (var childNode = vnode; childNode.componentInstance; ) (childNode = childNode.componentInstance._vnode) && childNode.data && (styleData = normalizeStyleData(childNode.data)) && extend(res, styleData);
                        (styleData = normalizeStyleData(vnode.data)) && extend(res, styleData);
                        for (var parentNode = vnode; parentNode = parentNode.parent; ) parentNode.data && (styleData = normalizeStyleData(parentNode.data)) && extend(res, styleData);
                        return res;
                    }(vnode, !0);
                    for (name in oldStyle) isUndef(newStyle[name]) && setProp(el, name, "");
                    for (name in newStyle) (cur = newStyle[name]) !== oldStyle[name] && 
                    // ie9 setting to null has no effect, must use empty string
                    setProp(el, name, null == cur ? "" : cur);
                }
            }
            var style = {
                create: updateStyle,
                update: updateStyle
            }, whitespaceRE = /\s+/;
            /*  */            
            /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
            function addClass(el, cls) {
                /* istanbul ignore if */
                if (cls && (cls = cls.trim())) 
                /* istanbul ignore else */
                if (el.classList) cls.indexOf(" ") > -1 ? cls.split(whitespaceRE).forEach(function(c) {
                    return el.classList.add(c);
                }) : el.classList.add(cls); else {
                    var cur = " " + (el.getAttribute("class") || "") + " ";
                    cur.indexOf(" " + cls + " ") < 0 && el.setAttribute("class", (cur + cls).trim());
                }
            }
            /**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */            function removeClass(el, cls) {
                /* istanbul ignore if */
                if (cls && (cls = cls.trim())) 
                /* istanbul ignore else */
                if (el.classList) cls.indexOf(" ") > -1 ? cls.split(whitespaceRE).forEach(function(c) {
                    return el.classList.remove(c);
                }) : el.classList.remove(cls), el.classList.length || el.removeAttribute("class"); else {
                    for (var cur = " " + (el.getAttribute("class") || "") + " ", tar = " " + cls + " "; cur.indexOf(tar) >= 0; ) cur = cur.replace(tar, " ");
                    (cur = cur.trim()) ? el.setAttribute("class", cur) : el.removeAttribute("class");
                }
            }
            /*  */            function resolveTransition(def$$1) {
                if (def$$1) {
                    /* istanbul ignore else */
                    if ("object" == typeof def$$1) {
                        var res = {};
                        return !1 !== def$$1.css && extend(res, autoCssTransition(def$$1.name || "v")), 
                        extend(res, def$$1), res;
                    }
                    return "string" == typeof def$$1 ? autoCssTransition(def$$1) : void 0;
                }
            }
            var autoCssTransition = cached(function(name) {
                return {
                    enterClass: name + "-enter",
                    enterToClass: name + "-enter-to",
                    enterActiveClass: name + "-enter-active",
                    leaveClass: name + "-leave",
                    leaveToClass: name + "-leave-to",
                    leaveActiveClass: name + "-leave-active"
                };
            }), hasTransition = inBrowser && !isIE9, TRANSITION = "transition", ANIMATION = "animation", transitionProp = "transition", transitionEndEvent = "transitionend", animationProp = "animation", animationEndEvent = "animationend";
            hasTransition && (
            /* istanbul ignore if */
            void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (transitionProp = "WebkitTransition", 
            transitionEndEvent = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (animationProp = "WebkitAnimation", 
            animationEndEvent = "webkitAnimationEnd"));
            // binding to window is necessary to make hot reload work in IE in strict mode
                        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */ function(fn) {
                return fn();
            };
            function nextFrame(fn) {
                raf(function() {
                    raf(fn);
                });
            }
            function addTransitionClass(el, cls) {
                var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
                transitionClasses.indexOf(cls) < 0 && (transitionClasses.push(cls), addClass(el, cls));
            }
            function removeTransitionClass(el, cls) {
                el._transitionClasses && remove(el._transitionClasses, cls), removeClass(el, cls);
            }
            function whenTransitionEnds(el, expectedType, cb) {
                var ref = getTransitionInfo(el, expectedType), type = ref.type, timeout = ref.timeout, propCount = ref.propCount;
                if (!type) return cb();
                var event = type === TRANSITION ? transitionEndEvent : animationEndEvent, ended = 0, end = function() {
                    el.removeEventListener(event, onEnd), cb();
                }, onEnd = function(e) {
                    e.target === el && ++ended >= propCount && end();
                };
                setTimeout(function() {
                    ended < propCount && end();
                }, timeout + 1), el.addEventListener(event, onEnd);
            }
            var transformRE = /\b(transform|all)(,|$)/;
            function getTransitionInfo(el, expectedType) {
                var type, styles = window.getComputedStyle(el), transitionDelays = (styles[transitionProp + "Delay"] || "").split(", "), transitionDurations = (styles[transitionProp + "Duration"] || "").split(", "), transitionTimeout = getTimeout(transitionDelays, transitionDurations), animationDelays = (styles[animationProp + "Delay"] || "").split(", "), animationDurations = (styles[animationProp + "Duration"] || "").split(", "), animationTimeout = getTimeout(animationDelays, animationDurations), timeout = 0, propCount = 0;
                // JSDOM may return undefined for transition properties
                                /* istanbul ignore if */
                return expectedType === TRANSITION ? transitionTimeout > 0 && (type = TRANSITION, 
                timeout = transitionTimeout, propCount = transitionDurations.length) : expectedType === ANIMATION ? animationTimeout > 0 && (type = ANIMATION, 
                timeout = animationTimeout, propCount = animationDurations.length) : propCount = (type = (timeout = Math.max(transitionTimeout, animationTimeout)) > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null) ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0, 
                {
                    type: type,
                    timeout: timeout,
                    propCount: propCount,
                    hasTransform: type === TRANSITION && transformRE.test(styles[transitionProp + "Property"])
                };
            }
            function getTimeout(delays, durations) {
                /* istanbul ignore next */
                for (;delays.length < durations.length; ) delays = delays.concat(delays);
                return Math.max.apply(null, durations.map(function(d, i) {
                    return toMs(d) + toMs(delays[i]);
                }));
            }
            // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
            // in a locale-dependent way, using a comma instead of a dot.
            // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
            // as a floor function) causing unexpected behaviors
                        function toMs(s) {
                return 1e3 * Number(s.slice(0, -1).replace(",", "."));
            }
            /*  */            function enter(vnode, toggleDisplay) {
                var el = vnode.elm;
                // call leave callback now
                                isDef(el._leaveCb) && (el._leaveCb.cancelled = !0, el._leaveCb());
                var data = resolveTransition(vnode.data.transition);
                if (!isUndef(data) && !isDef(el._enterCb) && 1 === el.nodeType) 
                /* istanbul ignore if */
                {
                    for (var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration, context = activeInstance, transitionNode = activeInstance.$vnode; transitionNode && transitionNode.parent; ) context = (transitionNode = transitionNode.parent).context;
                    var isAppear = !context._isMounted || !vnode.isRootInsert;
                    if (!isAppear || appear || "" === appear) {
                        var startClass = isAppear && appearClass ? appearClass : enterClass, activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass, toClass = isAppear && appearToClass ? appearToClass : enterToClass, beforeEnterHook = isAppear && beforeAppear || beforeEnter, enterHook = isAppear && "function" == typeof appear ? appear : enter, afterEnterHook = isAppear && afterAppear || afterEnter, enterCancelledHook = isAppear && appearCancelled || enterCancelled, explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
                        "production" !== process.env.NODE_ENV && null != explicitEnterDuration && checkDuration(explicitEnterDuration, "enter", vnode);
                        var expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(enterHook), cb = el._enterCb = once(function() {
                            expectsCSS && (removeTransitionClass(el, toClass), removeTransitionClass(el, activeClass)), 
                            cb.cancelled ? (expectsCSS && removeTransitionClass(el, startClass), enterCancelledHook && enterCancelledHook(el)) : afterEnterHook && afterEnterHook(el), 
                            el._enterCb = null;
                        });
                        vnode.data.show || 
                        // remove pending leave element on enter by injecting an insert hook
                        mergeVNodeHook(vnode, "insert", function() {
                            var parent = el.parentNode, pendingNode = parent && parent._pending && parent._pending[vnode.key];
                            pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb && pendingNode.elm._leaveCb(), 
                            enterHook && enterHook(el, cb);
                        }), 
                        // start enter transition
                        beforeEnterHook && beforeEnterHook(el), expectsCSS && (addTransitionClass(el, startClass), 
                        addTransitionClass(el, activeClass), nextFrame(function() {
                            removeTransitionClass(el, startClass), cb.cancelled || (addTransitionClass(el, toClass), 
                            userWantsControl || (isValidDuration(explicitEnterDuration) ? setTimeout(cb, explicitEnterDuration) : whenTransitionEnds(el, type, cb)));
                        })), vnode.data.show && (toggleDisplay && toggleDisplay(), enterHook && enterHook(el, cb)), 
                        expectsCSS || userWantsControl || cb();
                    }
                }
            }
            function leave(vnode, rm) {
                var el = vnode.elm;
                // call enter callback now
                                isDef(el._enterCb) && (el._enterCb.cancelled = !0, el._enterCb());
                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data) || 1 !== el.nodeType) return rm();
                /* istanbul ignore if */                if (!isDef(el._leaveCb)) {
                    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration, expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(leave), explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
                    "production" !== process.env.NODE_ENV && isDef(explicitLeaveDuration) && checkDuration(explicitLeaveDuration, "leave", vnode);
                    var cb = el._leaveCb = once(function() {
                        el.parentNode && el.parentNode._pending && (el.parentNode._pending[vnode.key] = null), 
                        expectsCSS && (removeTransitionClass(el, leaveToClass), removeTransitionClass(el, leaveActiveClass)), 
                        cb.cancelled ? (expectsCSS && removeTransitionClass(el, leaveClass), leaveCancelled && leaveCancelled(el)) : (rm(), 
                        afterLeave && afterLeave(el)), el._leaveCb = null;
                    });
                    delayLeave ? delayLeave(performLeave) : performLeave();
                }
                function performLeave() {
                    // the delayed leave may have already been cancelled
                    cb.cancelled || (
                    // record leaving element
                    !vnode.data.show && el.parentNode && ((el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode), 
                    beforeLeave && beforeLeave(el), expectsCSS && (addTransitionClass(el, leaveClass), 
                    addTransitionClass(el, leaveActiveClass), nextFrame(function() {
                        removeTransitionClass(el, leaveClass), cb.cancelled || (addTransitionClass(el, leaveToClass), 
                        userWantsControl || (isValidDuration(explicitLeaveDuration) ? setTimeout(cb, explicitLeaveDuration) : whenTransitionEnds(el, type, cb)));
                    })), leave && leave(el, cb), expectsCSS || userWantsControl || cb());
                }
            }
            // only used in dev mode
                        function checkDuration(val, name, vnode) {
                "number" != typeof val ? warn("<transition> explicit " + name + " duration is not a valid number - got " + JSON.stringify(val) + ".", vnode.context) : isNaN(val) && warn("<transition> explicit " + name + " duration is NaN - the duration expression might be incorrect.", vnode.context);
            }
            function isValidDuration(val) {
                return "number" == typeof val && !isNaN(val);
            }
            /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */            function getHookArgumentsLength(fn) {
                if (isUndef(fn)) return !1;
                var invokerFns = fn.fns;
                return isDef(invokerFns) ? getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns) : (fn._length || fn.length) > 1;
            }
            function _enter(_, vnode) {
                !0 !== vnode.data.show && enter(vnode);
            }
            var patch = function(backend) {
                var i, j, cbs = {}, modules = backend.modules, nodeOps = backend.nodeOps;
                for (i = 0; i < hooks.length; ++i) for (cbs[hooks[i]] = [], j = 0; j < modules.length; ++j) isDef(modules[j][hooks[i]]) && cbs[hooks[i]].push(modules[j][hooks[i]]);
                function removeNode(el) {
                    var parent = nodeOps.parentNode(el);
                    // element may have already been removed due to v-html / v-text
                                        isDef(parent) && nodeOps.removeChild(parent, el);
                }
                function isUnknownElement$$1(vnode, inVPre) {
                    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
                        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
                    })) && config.isUnknownElement(vnode.tag);
                }
                var creatingElmInVPre = 0;
                function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
                    // for transition enter check
                    if (isDef(vnode.elm) && isDef(ownerArray) && (
                    // This vnode was used in a previous render!
                    // now it's used as a new node, overwriting its elm would cause
                    // potential patch errors down the road when it's used as an insertion
                    // reference node. Instead, we clone the node on-demand before creating
                    // associated DOM element for it.
                    vnode = ownerArray[index] = cloneVNode(vnode)), vnode.isRootInsert = !nested, !function(vnode, insertedVnodeQueue, parentElm, refElm) {
                        var i = vnode.data;
                        if (isDef(i)) {
                            var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                            // after calling the init hook, if the vnode is a child component
                            // it should've created a child instance and mounted it. the child
                            // component also has set the placeholder vnode's elm.
                            // in that case we can just return the element and be done.
                            if (isDef(i = i.hook) && isDef(i = i.init) && i(vnode, !1 /* hydrating */), isDef(vnode.componentInstance)) return initComponent(vnode, insertedVnodeQueue), 
                            insert(parentElm, vnode.elm, refElm), isTrue(isReactivated) && function(vnode, insertedVnodeQueue, parentElm, refElm) {
                                for (var i, innerNode = vnode
                                // hack for #4339: a reactivated component with inner transition
                                // does not trigger because the inner node's created hooks are not called
                                // again. It's not ideal to involve module-specific logic in here but
                                // there doesn't seem to be a better way to do it.
                                ; innerNode.componentInstance; ) if (innerNode = innerNode.componentInstance._vnode, 
                                isDef(i = innerNode.data) && isDef(i = i.transition)) {
                                    for (i = 0; i < cbs.activate.length; ++i) cbs.activate[i](emptyNode, innerNode);
                                    insertedVnodeQueue.push(innerNode);
                                    break;
                                }
                                // unlike a newly created component,
                                // a reactivated keep-alive component doesn't insert itself
                                                                insert(parentElm, vnode.elm, refElm);
                            }(vnode, insertedVnodeQueue, parentElm, refElm), !0;
                        }
                    }(vnode, insertedVnodeQueue, parentElm, refElm)) {
                        var data = vnode.data, children = vnode.children, tag = vnode.tag;
                        isDef(tag) ? ("production" !== process.env.NODE_ENV && (data && data.pre && creatingElmInVPre++, 
                        isUnknownElement$$1(vnode, creatingElmInVPre) && warn("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context)), 
                        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode), 
                        setScope(vnode), createChildren(vnode, children, insertedVnodeQueue), isDef(data) && invokeCreateHooks(vnode, insertedVnodeQueue), 
                        insert(parentElm, vnode.elm, refElm), "production" !== process.env.NODE_ENV && data && data.pre && creatingElmInVPre--) : isTrue(vnode.isComment) ? (vnode.elm = nodeOps.createComment(vnode.text), 
                        insert(parentElm, vnode.elm, refElm)) : (vnode.elm = nodeOps.createTextNode(vnode.text), 
                        insert(parentElm, vnode.elm, refElm));
                    }
                }
                function initComponent(vnode, insertedVnodeQueue) {
                    isDef(vnode.data.pendingInsert) && (insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert), 
                    vnode.data.pendingInsert = null), vnode.elm = vnode.componentInstance.$el, isPatchable(vnode) ? (invokeCreateHooks(vnode, insertedVnodeQueue), 
                    setScope(vnode)) : (
                    // empty component root.
                    // skip all element-related modules except for ref (#3455)
                    registerRef(vnode), 
                    // make sure to invoke the insert hook
                    insertedVnodeQueue.push(vnode));
                }
                function insert(parent, elm, ref$$1) {
                    isDef(parent) && (isDef(ref$$1) ? nodeOps.parentNode(ref$$1) === parent && nodeOps.insertBefore(parent, elm, ref$$1) : nodeOps.appendChild(parent, elm));
                }
                function createChildren(vnode, children, insertedVnodeQueue) {
                    if (Array.isArray(children)) {
                        "production" !== process.env.NODE_ENV && checkDuplicateKeys(children);
                        for (var i = 0; i < children.length; ++i) createElm(children[i], insertedVnodeQueue, vnode.elm, null, !0, children, i);
                    } else isPrimitive(vnode.text) && nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
                }
                function isPatchable(vnode) {
                    for (;vnode.componentInstance; ) vnode = vnode.componentInstance._vnode;
                    return isDef(vnode.tag);
                }
                function invokeCreateHooks(vnode, insertedVnodeQueue) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, vnode);
                    // Reuse variable
                    isDef(i = vnode.data.hook) && (isDef(i.create) && i.create(emptyNode, vnode), isDef(i.insert) && insertedVnodeQueue.push(vnode));
                }
                // set scope id attribute for scoped CSS.
                // this is implemented as a special case to avoid the overhead
                // of going through the normal attribute patching process.
                                function setScope(vnode) {
                    var i;
                    if (isDef(i = vnode.fnScopeId)) nodeOps.setStyleScope(vnode.elm, i); else for (var ancestor = vnode; ancestor; ) isDef(i = ancestor.context) && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i), 
                    ancestor = ancestor.parent;
                    // for slot content they should also get the scopeId from the host instance.
                                        isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i);
                }
                function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                    for (;startIdx <= endIdx; ++startIdx) createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, !1, vnodes, startIdx);
                }
                function invokeDestroyHook(vnode) {
                    var i, j, data = vnode.data;
                    if (isDef(data)) for (isDef(i = data.hook) && isDef(i = i.destroy) && i(vnode), 
                    i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
                    if (isDef(i = vnode.children)) for (j = 0; j < vnode.children.length; ++j) invokeDestroyHook(vnode.children[j]);
                }
                function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
                    for (;startIdx <= endIdx; ++startIdx) {
                        var ch = vnodes[startIdx];
                        isDef(ch) && (isDef(ch.tag) ? (removeAndInvokeRemoveHook(ch), invokeDestroyHook(ch)) : // Text node
                        removeNode(ch.elm));
                    }
                }
                function removeAndInvokeRemoveHook(vnode, rm) {
                    if (isDef(rm) || isDef(vnode.data)) {
                        var i, listeners = cbs.remove.length + 1;
                        for (isDef(rm) ? 
                        // we have a recursively passed down rm callback
                        // increase the listeners count
                        rm.listeners += listeners : 
                        // directly removing
                        rm = function(childElm, listeners) {
                            function remove$$1() {
                                0 == --remove$$1.listeners && removeNode(childElm);
                            }
                            return remove$$1.listeners = listeners, remove$$1;
                        }(vnode.elm, listeners), 
                        // recursively invoke hooks on child component root node
                        isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data) && removeAndInvokeRemoveHook(i, rm), 
                        i = 0; i < cbs.remove.length; ++i) cbs.remove[i](vnode, rm);
                        isDef(i = vnode.data.hook) && isDef(i = i.remove) ? i(vnode, rm) : rm();
                    } else removeNode(vnode.elm);
                }
                function checkDuplicateKeys(children) {
                    for (var seenKeys = {}, i = 0; i < children.length; i++) {
                        var vnode = children[i], key = vnode.key;
                        isDef(key) && (seenKeys[key] ? warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context) : seenKeys[key] = !0);
                    }
                }
                function findIdxInOld(node, oldCh, start, end) {
                    for (var i = start; i < end; i++) {
                        var c = oldCh[i];
                        if (isDef(c) && sameVnode(node, c)) return i;
                    }
                }
                function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
                    if (oldVnode !== vnode) {
                        isDef(vnode.elm) && isDef(ownerArray) && (
                        // clone reused vnode
                        vnode = ownerArray[index] = cloneVNode(vnode));
                        var elm = vnode.elm = oldVnode.elm;
                        if (isTrue(oldVnode.isAsyncPlaceholder)) isDef(vnode.asyncFactory.resolved) ? hydrate(oldVnode.elm, vnode, insertedVnodeQueue) : vnode.isAsyncPlaceholder = !0; else 
                        // reuse element for static trees.
                        // note we only do this if the vnode is cloned -
                        // if the new node is not cloned it means the render functions have been
                        // reset by the hot-reload-api and we need to do a proper re-render.
                        if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) vnode.componentInstance = oldVnode.componentInstance; else {
                            var i, data = vnode.data;
                            isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch) && i(oldVnode, vnode);
                            var oldCh = oldVnode.children, ch = vnode.children;
                            if (isDef(data) && isPatchable(vnode)) {
                                for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
                                isDef(i = data.hook) && isDef(i = i.update) && i(oldVnode, vnode);
                            }
                            isUndef(vnode.text) ? isDef(oldCh) && isDef(ch) ? oldCh !== ch && function(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                                var oldKeyToIdx, idxInOld, vnodeToMove, oldStartIdx = 0, newStartIdx = 0, oldEndIdx = oldCh.length - 1, oldStartVnode = oldCh[0], oldEndVnode = oldCh[oldEndIdx], newEndIdx = newCh.length - 1, newStartVnode = newCh[0], newEndVnode = newCh[newEndIdx], canMove = !removeOnly;
                                for ("production" !== process.env.NODE_ENV && checkDuplicateKeys(newCh); oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx; ) isUndef(oldStartVnode) ? oldStartVnode = oldCh[++oldStartIdx] : isUndef(oldEndVnode) ? oldEndVnode = oldCh[--oldEndIdx] : sameVnode(oldStartVnode, newStartVnode) ? (patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                                oldStartVnode = oldCh[++oldStartIdx], newStartVnode = newCh[++newStartIdx]) : sameVnode(oldEndVnode, newEndVnode) ? (patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx), 
                                oldEndVnode = oldCh[--oldEndIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldStartVnode, newEndVnode) ? (// Vnode moved right
                                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx), canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm)), 
                                oldStartVnode = oldCh[++oldStartIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldEndVnode, newStartVnode) ? (// Vnode moved left
                                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                                canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm), 
                                oldEndVnode = oldCh[--oldEndIdx], newStartVnode = newCh[++newStartIdx]) : (isUndef(oldKeyToIdx) && (oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)), 
                                isUndef(idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)) ? // New element
                                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx) : sameVnode(vnodeToMove = oldCh[idxInOld], newStartVnode) ? (patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx), 
                                oldCh[idxInOld] = void 0, canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)) : 
                                // same key but different element. treat as new element
                                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx), 
                                newStartVnode = newCh[++newStartIdx]);
                                oldStartIdx > oldEndIdx ? addVnodes(parentElm, isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue) : newStartIdx > newEndIdx && removeVnodes(0, oldCh, oldStartIdx, oldEndIdx);
                            }(elm, oldCh, ch, insertedVnodeQueue, removeOnly) : isDef(ch) ? ("production" !== process.env.NODE_ENV && checkDuplicateKeys(ch), 
                            isDef(oldVnode.text) && nodeOps.setTextContent(elm, ""), addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)) : isDef(oldCh) ? removeVnodes(0, oldCh, 0, oldCh.length - 1) : isDef(oldVnode.text) && nodeOps.setTextContent(elm, "") : oldVnode.text !== vnode.text && nodeOps.setTextContent(elm, vnode.text), 
                            isDef(data) && isDef(i = data.hook) && isDef(i = i.postpatch) && i(oldVnode, vnode);
                        }
                    }
                }
                function invokeInsertHook(vnode, queue, initial) {
                    // delay insert hooks for component root nodes, invoke them after the
                    // element is really inserted
                    if (isTrue(initial) && isDef(vnode.parent)) vnode.parent.data.pendingInsert = queue; else for (var i = 0; i < queue.length; ++i) queue[i].data.hook.insert(queue[i]);
                }
                var hydrationBailed = !1, isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
                // list of modules that can skip create hook during hydration because they
                // are already rendered on the client or has no need for initialization
                // Note: style is excluded because it relies on initial clone for future
                // deep updates (#7063).
                                // Note: this is a browser-only function so we can assume elms are DOM nodes.
                function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
                    var i, tag = vnode.tag, data = vnode.data, children = vnode.children;
                    if (inVPre = inVPre || data && data.pre, vnode.elm = elm, isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) return vnode.isAsyncPlaceholder = !0, 
                    !0;
                    // assert node match
                                        if ("production" !== process.env.NODE_ENV && !function(node, vnode, inVPre) {
                        return isDef(vnode.tag) ? 0 === vnode.tag.indexOf("vue-component") || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase()) : node.nodeType === (vnode.isComment ? 8 : 3);
                    }(elm, vnode, inVPre)) return !1;
                    if (isDef(data) && (isDef(i = data.hook) && isDef(i = i.init) && i(vnode, !0 /* hydrating */), 
                    isDef(i = vnode.componentInstance))) 
                    // child component. it should have hydrated its own tree.
                    return initComponent(vnode, insertedVnodeQueue), !0;
                    if (isDef(tag)) {
                        if (isDef(children)) 
                        // empty element, allow client to pick up and populate children
                        if (elm.hasChildNodes()) 
                        // v-html and domProps: innerHTML
                        if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                            if (i !== elm.innerHTML) 
                            /* istanbul ignore if */
                            return "production" === process.env.NODE_ENV || "undefined" == typeof console || hydrationBailed || (hydrationBailed = !0, 
                            console.warn("Parent: ", elm), console.warn("server innerHTML: ", i), console.warn("client innerHTML: ", elm.innerHTML)), 
                            !1;
                        } else {
                            for (
                            // iterate and compare children lists
                            var childrenMatch = !0, childNode = elm.firstChild, i$1 = 0; i$1 < children.length; i$1++) {
                                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                                    childrenMatch = !1;
                                    break;
                                }
                                childNode = childNode.nextSibling;
                            }
                            // if childNode is not null, it means the actual childNodes list is
                            // longer than the virtual children list.
                                                        if (!childrenMatch || childNode) 
                            /* istanbul ignore if */
                            return "production" === process.env.NODE_ENV || "undefined" == typeof console || hydrationBailed || (hydrationBailed = !0, 
                            console.warn("Parent: ", elm), console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children)), 
                            !1;
                        } else createChildren(vnode, children, insertedVnodeQueue);
                        if (isDef(data)) {
                            var fullInvoke = !1;
                            for (var key in data) if (!isRenderedModule(key)) {
                                fullInvoke = !0, invokeCreateHooks(vnode, insertedVnodeQueue);
                                break;
                            }
                            !fullInvoke && data.class && 
                            // ensure collecting deps for deep class bindings for future updates
                            traverse(data.class);
                        }
                    } else elm.data !== vnode.text && (elm.data = vnode.text);
                    return !0;
                }
                return function(oldVnode, vnode, hydrating, removeOnly) {
                    if (!isUndef(vnode)) {
                        var elm, isInitialPatch = !1, insertedVnodeQueue = [];
                        if (isUndef(oldVnode)) 
                        // empty mount (likely as component), create new root element
                        isInitialPatch = !0, createElm(vnode, insertedVnodeQueue); else {
                            var isRealElement = isDef(oldVnode.nodeType);
                            if (!isRealElement && sameVnode(oldVnode, vnode)) 
                            // patch existing root node
                            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly); else {
                                if (isRealElement) {
                                    if (
                                    // mounting to a real element
                                    // check if this is server-rendered content and if we can perform
                                    // a successful hydration.
                                    1 === oldVnode.nodeType && oldVnode.hasAttribute(SSR_ATTR) && (oldVnode.removeAttribute(SSR_ATTR), 
                                    hydrating = !0), isTrue(hydrating)) {
                                        if (hydrate(oldVnode, vnode, insertedVnodeQueue)) return invokeInsertHook(vnode, insertedVnodeQueue, !0), 
                                        oldVnode;
                                        "production" !== process.env.NODE_ENV && warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                                    }
                                    // either not server-rendered, or hydration failed.
                                    // create an empty node and replace it
                                                                        elm = oldVnode, oldVnode = new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], void 0, elm);
                                }
                                // replacing existing element
                                                                var oldElm = oldVnode.elm, parentElm = nodeOps.parentNode(oldElm);
                                // update parent placeholder node element, recursively
                                if (
                                // create new node
                                createElm(vnode, insertedVnodeQueue, 
                                // extremely rare edge case: do not insert if old element is in a
                                // leaving transition. Only happens when combining transition +
                                // keep-alive + HOCs. (#4590)
                                oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)), isDef(vnode.parent)) for (var ancestor = vnode.parent, patchable = isPatchable(vnode); ancestor; ) {
                                    for (var i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](ancestor);
                                    if (ancestor.elm = vnode.elm, patchable) {
                                        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, ancestor);
                                        // #6513
                                        // invoke insert hooks that may have been merged by create hooks.
                                        // e.g. for directives that uses the "inserted" hook.
                                                                                var insert = ancestor.data.hook.insert;
                                        if (insert.merged) 
                                        // start at index 1 to avoid re-invoking component mounted hook
                                        for (var i$2 = 1; i$2 < insert.fns.length; i$2++) insert.fns[i$2]();
                                    } else registerRef(ancestor);
                                    ancestor = ancestor.parent;
                                }
                                // destroy old node
                                                                isDef(parentElm) ? removeVnodes(0, [ oldVnode ], 0, 0) : isDef(oldVnode.tag) && invokeDestroyHook(oldVnode);
                            }
                        }
                        return invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch), vnode.elm;
                    }
                    isDef(oldVnode) && invokeDestroyHook(oldVnode);
                };
            }({
                nodeOps: nodeOps,
                modules: [ attrs, klass, events, domProps, style, inBrowser ? {
                    create: _enter,
                    activate: _enter,
                    remove: function(vnode, rm) {
                        /* istanbul ignore else */
                        !0 !== vnode.data.show ? leave(vnode, rm) : rm();
                    }
                } : {} ].concat(baseModules)
            });
            /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
            /* istanbul ignore if */
            isIE9 && 
            // http://www.matts411.com/post/internet-explorer-9-oninput/
            document.addEventListener("selectionchange", function() {
                var el = document.activeElement;
                el && el.vmodel && trigger(el, "input");
            });
            var directive = {
                inserted: function(el, binding, vnode, oldVnode) {
                    "select" === vnode.tag ? (
                    // #6903
                    oldVnode.elm && !oldVnode.elm._vOptions ? mergeVNodeHook(vnode, "postpatch", function() {
                        directive.componentUpdated(el, binding, vnode);
                    }) : setSelected(el, binding, vnode.context), el._vOptions = [].map.call(el.options, getValue)) : ("textarea" === vnode.tag || isTextInputType(el.type)) && (el._vModifiers = binding.modifiers, 
                    binding.modifiers.lazy || (el.addEventListener("compositionstart", onCompositionStart), 
                    el.addEventListener("compositionend", onCompositionEnd), 
                    // Safari < 10.2 & UIWebView doesn't fire compositionend when
                    // switching focus before confirming composition choice
                    // this also fixes the issue where some browsers e.g. iOS Chrome
                    // fires "change" instead of "input" on autocomplete.
                    el.addEventListener("change", onCompositionEnd), 
                    /* istanbul ignore if */
                    isIE9 && (el.vmodel = !0)));
                },
                componentUpdated: function(el, binding, vnode) {
                    if ("select" === vnode.tag) {
                        setSelected(el, binding, vnode.context);
                        // in case the options rendered by v-for have changed,
                        // it's possible that the value is out-of-sync with the rendered options.
                        // detect such cases and filter out values that no longer has a matching
                        // option in the DOM.
                        var prevOptions = el._vOptions, curOptions = el._vOptions = [].map.call(el.options, getValue);
                        if (curOptions.some(function(o, i) {
                            return !looseEqual(o, prevOptions[i]);
                        })) (el.multiple ? binding.value.some(function(v) {
                            return hasNoMatchingOption(v, curOptions);
                        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)) && trigger(el, "change");
                    }
                }
            };
            function setSelected(el, binding, vm) {
                actuallySetSelected(el, binding, vm), 
                /* istanbul ignore if */
                (isIE || isEdge) && setTimeout(function() {
                    actuallySetSelected(el, binding, vm);
                }, 0);
            }
            function actuallySetSelected(el, binding, vm) {
                var value = binding.value, isMultiple = el.multiple;
                if (!isMultiple || Array.isArray(value)) {
                    for (var selected, option, i = 0, l = el.options.length; i < l; i++) if (option = el.options[i], 
                    isMultiple) selected = looseIndexOf(value, getValue(option)) > -1, option.selected !== selected && (option.selected = selected); else if (looseEqual(getValue(option), value)) return void (el.selectedIndex !== i && (el.selectedIndex = i));
                    isMultiple || (el.selectedIndex = -1);
                } else "production" !== process.env.NODE_ENV && warn('<select multiple v-model="' + binding.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1), vm);
            }
            function hasNoMatchingOption(value, options) {
                return options.every(function(o) {
                    return !looseEqual(o, value);
                });
            }
            function getValue(option) {
                return "_value" in option ? option._value : option.value;
            }
            function onCompositionStart(e) {
                e.target.composing = !0;
            }
            function onCompositionEnd(e) {
                // prevent triggering an input event for no reason
                e.target.composing && (e.target.composing = !1, trigger(e.target, "input"));
            }
            function trigger(el, type) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent(type, !0, !0), el.dispatchEvent(e);
            }
            /*  */
            // recursively search for possible transition defined inside the component root
                        function locateNode(vnode) {
                return !vnode.componentInstance || vnode.data && vnode.data.transition ? vnode : locateNode(vnode.componentInstance._vnode);
            }
            var platformDirectives = {
                model: directive,
                show: {
                    bind: function(el, ref, vnode) {
                        var value = ref.value, transition$$1 = (vnode = locateNode(vnode)).data && vnode.data.transition, originalDisplay = el.__vOriginalDisplay = "none" === el.style.display ? "" : el.style.display;
                        value && transition$$1 ? (vnode.data.show = !0, enter(vnode, function() {
                            el.style.display = originalDisplay;
                        })) : el.style.display = value ? originalDisplay : "none";
                    },
                    update: function(el, ref, vnode) {
                        var value = ref.value;
                        /* istanbul ignore if */
                        !value != !ref.oldValue && ((vnode = locateNode(vnode)).data && vnode.data.transition ? (vnode.data.show = !0, 
                        value ? enter(vnode, function() {
                            el.style.display = el.__vOriginalDisplay;
                        }) : leave(vnode, function() {
                            el.style.display = "none";
                        })) : el.style.display = value ? el.__vOriginalDisplay : "none");
                    },
                    unbind: function(el, binding, vnode, oldVnode, isDestroy) {
                        isDestroy || (el.style.display = el.__vOriginalDisplay);
                    }
                }
            }, transitionProps = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [ Number, String, Object ]
            };
            // in case the child is also an abstract component, e.g. <keep-alive>
            // we want to recursively retrieve the real component to be rendered
            function getRealChild(vnode) {
                var compOptions = vnode && vnode.componentOptions;
                return compOptions && compOptions.Ctor.options.abstract ? getRealChild(getFirstComponentChild(compOptions.children)) : vnode;
            }
            function extractTransitionData(comp) {
                var data = {}, options = comp.$options;
                // props
                for (var key in options.propsData) data[key] = comp[key];
                // events.
                // extract listeners and pass them directly to the transition methods
                                var listeners = options._parentListeners;
                for (var key$1 in listeners) data[camelize(key$1)] = listeners[key$1];
                return data;
            }
            function placeholder(h, rawChild) {
                if (/\d-keep-alive$/.test(rawChild.tag)) return h("keep-alive", {
                    props: rawChild.componentOptions.propsData
                });
            }
            var isNotTextNode = function(c) {
                return c.tag || isAsyncPlaceholder(c);
            }, isVShowDirective = function(d) {
                return "show" === d.name;
            }, Transition = {
                name: "transition",
                props: transitionProps,
                abstract: !0,
                render: function(h) {
                    var this$1 = this, children = this.$slots.default;
                    if (children && (
                    // filter out text nodes (possible whitespaces)
                    children = children.filter(isNotTextNode)).length) 
                    /* istanbul ignore if */
                    {
                        // warn multiple elements
                        "production" !== process.env.NODE_ENV && children.length > 1 && warn("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                        var mode = this.mode;
                        // warn invalid mode
                                                "production" !== process.env.NODE_ENV && mode && "in-out" !== mode && "out-in" !== mode && warn("invalid <transition> mode: " + mode, this.$parent);
                        var rawChild = children[0];
                        // if this is a component root node and the component's
                        // parent container node also has transition, skip.
                                                if (function(vnode) {
                            for (;vnode = vnode.parent; ) if (vnode.data.transition) return !0;
                        }(this.$vnode)) return rawChild;
                        // apply transition data to child
                        // use getRealChild() to ignore abstract components e.g. keep-alive
                                                var child = getRealChild(rawChild);
                        /* istanbul ignore if */                        if (!child) return rawChild;
                        if (this._leaving) return placeholder(h, rawChild);
                        // ensure a key that is unique to the vnode type and to this transition
                        // component instance. This key will be used to remove pending leaving nodes
                        // during entering.
                                                var id = "__transition-" + this._uid + "-";
                        child.key = null == child.key ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? 0 === String(child.key).indexOf(id) ? child.key : id + child.key : child.key;
                        var data = (child.data || (child.data = {})).transition = extractTransitionData(this), oldRawChild = this._vnode, oldChild = getRealChild(oldRawChild);
                        if (
                        // mark v-show
                        // so that the transition module can hand over the control to the directive
                        child.data.directives && child.data.directives.some(isVShowDirective) && (child.data.show = !0), 
                        oldChild && oldChild.data && !function(child, oldChild) {
                            return oldChild.key === child.key && oldChild.tag === child.tag;
                        }(child, oldChild) && !isAsyncPlaceholder(oldChild) && (!oldChild.componentInstance || !oldChild.componentInstance._vnode.isComment)) {
                            // replace old child transition data with fresh one
                            // important for dynamic transitions!
                            var oldData = oldChild.data.transition = extend({}, data);
                            // handle transition mode
                                                        if ("out-in" === mode) 
                            // return placeholder node and queue update when leave finishes
                            return this._leaving = !0, mergeVNodeHook(oldData, "afterLeave", function() {
                                this$1._leaving = !1, this$1.$forceUpdate();
                            }), placeholder(h, rawChild);
                            if ("in-out" === mode) {
                                if (isAsyncPlaceholder(child)) return oldRawChild;
                                var delayedLeave, performLeave = function() {
                                    delayedLeave();
                                };
                                mergeVNodeHook(data, "afterEnter", performLeave), mergeVNodeHook(data, "enterCancelled", performLeave), 
                                mergeVNodeHook(oldData, "delayLeave", function(leave) {
                                    delayedLeave = leave;
                                });
                            }
                        }
                        return rawChild;
                    }
                }
            }, props = extend({
                tag: String,
                moveClass: String
            }, transitionProps);
            function callPendingCbs(c) {
                /* istanbul ignore if */
                c.elm._moveCb && c.elm._moveCb()
                /* istanbul ignore if */ , c.elm._enterCb && c.elm._enterCb();
            }
            function recordPosition(c) {
                c.data.newPos = c.elm.getBoundingClientRect();
            }
            function applyTranslation(c) {
                var oldPos = c.data.pos, newPos = c.data.newPos, dx = oldPos.left - newPos.left, dy = oldPos.top - newPos.top;
                if (dx || dy) {
                    c.data.moved = !0;
                    var s = c.elm.style;
                    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)", s.transitionDuration = "0s";
                }
            }
            delete props.mode;
            var platformComponents = {
                Transition: Transition,
                TransitionGroup: {
                    props: props,
                    beforeMount: function() {
                        var this$1 = this, update = this._update;
                        this._update = function(vnode, hydrating) {
                            var restoreActiveInstance = setActiveInstance(this$1);
                            // force removing pass
                                                        this$1.__patch__(this$1._vnode, this$1.kept, !1, // hydrating
                            !0), this$1._vnode = this$1.kept, restoreActiveInstance(), update.call(this$1, vnode, hydrating);
                        };
                    },
                    render: function(h) {
                        for (var tag = this.tag || this.$vnode.data.tag || "span", map = Object.create(null), prevChildren = this.prevChildren = this.children, rawChildren = this.$slots.default || [], children = this.children = [], transitionData = extractTransitionData(this), i = 0; i < rawChildren.length; i++) {
                            var c = rawChildren[i];
                            if (c.tag) if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) children.push(c), 
                            map[c.key] = c, (c.data || (c.data = {})).transition = transitionData; else if ("production" !== process.env.NODE_ENV) {
                                var opts = c.componentOptions, name = opts ? opts.Ctor.options.name || opts.tag || "" : c.tag;
                                warn("<transition-group> children must be keyed: <" + name + ">");
                            }
                        }
                        if (prevChildren) {
                            for (var kept = [], removed = [], i$1 = 0; i$1 < prevChildren.length; i$1++) {
                                var c$1 = prevChildren[i$1];
                                c$1.data.transition = transitionData, c$1.data.pos = c$1.elm.getBoundingClientRect(), 
                                map[c$1.key] ? kept.push(c$1) : removed.push(c$1);
                            }
                            this.kept = h(tag, null, kept), this.removed = removed;
                        }
                        return h(tag, null, children);
                    },
                    updated: function() {
                        var children = this.prevChildren, moveClass = this.moveClass || (this.name || "v") + "-move";
                        children.length && this.hasMove(children[0].elm, moveClass) && (
                        // we divide the work into three loops to avoid mixing DOM reads and writes
                        // in each iteration - which helps prevent layout thrashing.
                        children.forEach(callPendingCbs), children.forEach(recordPosition), children.forEach(applyTranslation), 
                        // force reflow to put everything in position
                        // assign to this to avoid being removed in tree-shaking
                        // $flow-disable-line
                        this._reflow = document.body.offsetHeight, children.forEach(function(c) {
                            if (c.data.moved) {
                                var el = c.elm, s = el.style;
                                addTransitionClass(el, moveClass), s.transform = s.WebkitTransform = s.transitionDuration = "", 
                                el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                                    e && e.target !== el || e && !/transform$/.test(e.propertyName) || (el.removeEventListener(transitionEndEvent, cb), 
                                    el._moveCb = null, removeTransitionClass(el, moveClass));
                                });
                            }
                        }));
                    },
                    methods: {
                        hasMove: function(el, moveClass) {
                            /* istanbul ignore if */
                            if (!hasTransition) return !1;
                            /* istanbul ignore if */                            if (this._hasMove) return this._hasMove;
                            // Detect whether an element with the move class applied has
                            // CSS transitions. Since the element may be inside an entering
                            // transition at this very moment, we make a clone of it and remove
                            // all other transition classes applied to ensure only the move class
                            // is applied.
                                                        var clone = el.cloneNode();
                            el._transitionClasses && el._transitionClasses.forEach(function(cls) {
                                removeClass(clone, cls);
                            }), addClass(clone, moveClass), clone.style.display = "none", this.$el.appendChild(clone);
                            var info = getTransitionInfo(clone);
                            return this.$el.removeChild(clone), this._hasMove = info.hasTransform;
                        }
                    }
                }
            };
            /*  */
            // install platform specific utils
                        Vue.config.mustUseProp = function(tag, type, attr) {
                return "value" === attr && acceptValue(tag) && "button" !== type || "selected" === attr && "option" === tag || "checked" === attr && "input" === tag || "muted" === attr && "video" === tag;
            }, Vue.config.isReservedTag = isReservedTag, Vue.config.isReservedAttr = isReservedAttr, 
            Vue.config.getTagNamespace = function(tag) {
                return isSVG(tag) ? "svg" : 
                // basic support for MathML
                // note it doesn't support other MathML elements being component roots
                "math" === tag ? "math" : void 0;
            }, Vue.config.isUnknownElement = function(tag) {
                /* istanbul ignore if */
                if (!inBrowser) return !0;
                if (isReservedTag(tag)) return !1;
                /* istanbul ignore if */
                if (tag = tag.toLowerCase(), null != unknownElementCache[tag]) return unknownElementCache[tag];
                var el = document.createElement(tag);
                return tag.indexOf("-") > -1 ? unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement : unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
            }, 
            // install platform runtime directives & components
            extend(Vue.options.directives, platformDirectives), extend(Vue.options.components, platformComponents), 
            // install platform patch function
            Vue.prototype.__patch__ = inBrowser ? patch : noop, 
            // public mount method
            Vue.prototype.$mount = function(el, hydrating) {
                return function(vm, el, hydrating) {
                    var updateComponent;
                    /* istanbul ignore if */                    return vm.$el = el, vm.$options.render || (vm.$options.render = createEmptyVNode, 
                    "production" !== process.env.NODE_ENV && (
                    /* istanbul ignore if */
                    vm.$options.template && "#" !== vm.$options.template.charAt(0) || vm.$options.el || el ? warn("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm) : warn("Failed to mount component: template or render function not defined.", vm))), 
                    callHook(vm, "beforeMount"), updateComponent = "production" !== process.env.NODE_ENV && config.performance && mark ? function() {
                        var name = vm._name, id = vm._uid, startTag = "vue-perf-start:" + id, endTag = "vue-perf-end:" + id;
                        mark(startTag);
                        var vnode = vm._render();
                        mark(endTag), measure("vue " + name + " render", startTag, endTag), mark(startTag), 
                        vm._update(vnode, hydrating), mark(endTag), measure("vue " + name + " patch", startTag, endTag);
                    } : function() {
                        vm._update(vm._render(), hydrating);
                    }, 
                    // we set this to vm._watcher inside the watcher's constructor
                    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
                    // component's mounted hook), which relies on vm._watcher being already defined
                    new Watcher(vm, updateComponent, noop, {
                        before: function() {
                            vm._isMounted && !vm._isDestroyed && callHook(vm, "beforeUpdate");
                        }
                    }, !0 /* isRenderWatcher */), hydrating = !1, 
                    // manually mounted instance, call mounted on self
                    // mounted is called for render-created child components in its inserted hook
                    null == vm.$vnode && (vm._isMounted = !0, callHook(vm, "mounted")), vm;
                }(this, el = el && inBrowser ? function(el) {
                    if ("string" == typeof el) {
                        var selected = document.querySelector(el);
                        return selected || ("production" !== process.env.NODE_ENV && warn("Cannot find element: " + el), 
                        document.createElement("div"));
                    }
                    return el;
                }(el) : void 0, hydrating);
            }, 
            // devtools global hook
            /* istanbul ignore next */
            inBrowser && setTimeout(function() {
                config.devtools && (devtools ? devtools.emit("init", Vue) : "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && isChrome && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), 
                "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && !1 !== config.productionTip && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
            }, 0)
            /*  */
            /* harmony default export */ , __webpack_exports__.a = Vue;
        }).call(__webpack_exports__, __webpack_require__(4), __webpack_require__(5), __webpack_require__(31).setImmediate)
        /***/;
    }, 
    /* 31 */
    /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
            var scope = void 0 !== global && global || "undefined" != typeof self && self || window, apply = Function.prototype.apply;
            function Timeout(id, clearFn) {
                this._id = id, this._clearFn = clearFn;
            }
            // DOM APIs, for completeness
            exports.setTimeout = function() {
                return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
            }, exports.setInterval = function() {
                return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
            }, exports.clearTimeout = exports.clearInterval = function(timeout) {
                timeout && timeout.close();
            }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
                this._clearFn.call(scope, this._id);
            }, 
            // Does not start the time, just sets up the members needed.
            exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs;
            }, exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = -1;
            }, exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);
                var msecs = item._idleTimeout;
                msecs >= 0 && (item._idleTimeoutId = setTimeout(function() {
                    item._onTimeout && item._onTimeout();
                }, msecs));
            }, 
            // setimmediate attaches itself to the global object
            __webpack_require__(32), 
            // On some exotic environments, it's not clear which object `setimmediate` was
            // able to install onto.  Search each possibility in the same order as the
            // `setimmediate` library.
            exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== global && global.setImmediate || this && this.setImmediate, 
            exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== global && global.clearImmediate || this && this.clearImmediate;
        }).call(exports, __webpack_require__(5))
        /***/;
    }, 
    /* 32 */
    /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global, process) {
            !function(global, undefined) {
                "use strict";
                if (!global.setImmediate) {
                    var registerImmediate, html, channel, messagePrefix, onGlobalMessage, nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1, doc = global.document, attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
 // Spec says greater than zero
                                        attachTo = attachTo && attachTo.setTimeout ? attachTo : global, 
                    // Don't get fooled by e.g. browserify environments.
                    "[object process]" === {}.toString.call(global.process) ? registerImmediate = function(handle) {
                        process.nextTick(function() {
                            runIfPresent(handle);
                        });
                    } : !function() {
                        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                        // where `global.postMessage` means something completely different and can't be used for this purpose.
                        if (global.postMessage && !global.importScripts) {
                            var postMessageIsAsynchronous = !0, oldOnMessage = global.onmessage;
                            return global.onmessage = function() {
                                postMessageIsAsynchronous = !1;
                            }, global.postMessage("", "*"), global.onmessage = oldOnMessage, postMessageIsAsynchronous;
                        }
                    }() ? global.MessageChannel ? (
                    // For web workers, where supported
                    (channel = new MessageChannel()).port1.onmessage = function(event) {
                        runIfPresent(event.data);
                    }, registerImmediate = function(handle) {
                        channel.port2.postMessage(handle);
                    }) : doc && "onreadystatechange" in doc.createElement("script") ? (
                    // For IE 6–8
                    html = doc.documentElement, registerImmediate = function(handle) {
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var script = doc.createElement("script");
                        script.onreadystatechange = function() {
                            runIfPresent(handle), script.onreadystatechange = null, html.removeChild(script), 
                            script = null;
                        }, html.appendChild(script);
                    }) : registerImmediate = function(handle) {
                        setTimeout(runIfPresent, 0, handle);
                    } : (
                    // For non-IE10 modern browsers
                    messagePrefix = "setImmediate$" + Math.random() + "$", onGlobalMessage = function(event) {
                        event.source === global && "string" == typeof event.data && 0 === event.data.indexOf(messagePrefix) && runIfPresent(+event.data.slice(messagePrefix.length));
                    }, global.addEventListener ? global.addEventListener("message", onGlobalMessage, !1) : global.attachEvent("onmessage", onGlobalMessage), 
                    registerImmediate = function(handle) {
                        global.postMessage(messagePrefix + handle, "*");
                    }), attachTo.setImmediate = function(callback) {
                        // Callback can either be a function or a string
                        "function" != typeof callback && (callback = new Function("" + callback));
                        // Copy function arguments
                                                for (var args = new Array(arguments.length - 1), i = 0; i < args.length; i++) args[i] = arguments[i + 1];
                        // Store and register the task
                                                var task = {
                            callback: callback,
                            args: args
                        };
                        return tasksByHandle[nextHandle] = task, registerImmediate(nextHandle), nextHandle++;
                    }, attachTo.clearImmediate = clearImmediate;
                }
                function clearImmediate(handle) {
                    delete tasksByHandle[handle];
                }
                function runIfPresent(handle) {
                    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                    // So if we're currently running a task, we'll need to delay this invocation.
                    if (currentlyRunningATask) 
                    // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                    // "too much recursion" error.
                    setTimeout(runIfPresent, 0, handle); else {
                        var task = tasksByHandle[handle];
                        if (task) {
                            currentlyRunningATask = !0;
                            try {
                                !function(task) {
                                    var callback = task.callback, args = task.args;
                                    switch (args.length) {
                                      case 0:
                                        callback();
                                        break;

                                      case 1:
                                        callback(args[0]);
                                        break;

                                      case 2:
                                        callback(args[0], args[1]);
                                        break;

                                      case 3:
                                        callback(args[0], args[1], args[2]);
                                        break;

                                      default:
                                        callback.apply(undefined, args);
                                    }
                                }(task);
                            } finally {
                                clearImmediate(handle), currentlyRunningATask = !1;
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === global ? this : global : self);
            /* WEBPACK VAR INJECTION */        }).call(exports, __webpack_require__(5), __webpack_require__(4))
        /***/;
    }, 
    /* 33 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */        var __WEBPACK_IMPORTED_MODULE_0__getter_types__ = __webpack_require__(7);
        /* harmony default export */        __webpack_exports__.a = {
            [__WEBPACK_IMPORTED_MODULE_0__getter_types__.c]: state => resourceName => state[resourceName],
            [__WEBPACK_IMPORTED_MODULE_0__getter_types__.b]: state => resourceName => state[resourceName].isSearching,
            [__WEBPACK_IMPORTED_MODULE_0__getter_types__.d]: state => resourceName => state[resourceName].result
        };
    }, 
    /* 34 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony export (immutable) */        __webpack_exports__.a = 
        /**
 * Actions with injected search API mapper.
 *
 * @param {{ [resourceName: string]: Search }} searchMap mapper of each resources searchApi
 */
        function(searchMap) {
            return {
                [__WEBPACK_IMPORTED_MODULE_1__action_types__.a]({commit: commit}, {resourceName: resourceName, result: result, text: text}) {
                    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__.d, {
                        resourceName: resourceName,
                        result: result,
                        text: text
                    });
                },
                [__WEBPACK_IMPORTED_MODULE_1__action_types__.c.INDEX_RESOURCE](_, params) {
                    const {resourceName: resourceName} = params;
                    searchMap[resourceName].indexResource(params);
                },
                [__WEBPACK_IMPORTED_MODULE_1__action_types__.c.PERFORM_SEARCH](_, {resourceName: resourceName, searchString: searchString}) {
                    searchMap[resourceName].stopSearch(resourceName), searchMap[resourceName].performSearch(resourceName, searchString);
                },
                [__WEBPACK_IMPORTED_MODULE_1__action_types__.b]({commit: commit, dispatch: dispatch}, {resourceName: resourceName, searchString: searchString}) {
                    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__.c, {
                        resourceName: resourceName,
                        searchString: searchString
                    }), dispatch(__WEBPACK_IMPORTED_MODULE_1__action_types__.c.PERFORM_SEARCH, {
                        resourceName: resourceName,
                        searchString: searchString
                    });
                }
            };
        }
        /***/;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(6), __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__(13);
        /* harmony import */    }, 
    /* 35 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */        
        /* WEBPACK VAR INJECTION */ (function(process) {
            /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__VuexSearch__ = __webpack_require__(3);
            /* harmony import */            
            /**
 * Generate actions with transformed payload for simpler api.
 *
 * @param {String} resourceName Unique resource identifier defined in the plugin.
 * @param {Object|Array} actions Object mapping from intented method name to actionType;
 *    or an array of actionTypes.
 * @return {Object}
 */
            /* harmony default export */ __webpack_exports__.a = ((resourceName, actions) => {
                const res = {}, publicApiTypes = Object.values(__WEBPACK_IMPORTED_MODULE_1__VuexSearch__.b);
                return Object(__WEBPACK_IMPORTED_MODULE_0__utils__.d)(actions).forEach(({key: key, val: val}) => {
                    if (!publicApiTypes.includes(val) && "production" !== process.env.NODE_ENV) throw new Error(`unknown actionType '${val}' is passed to mapActions`);
                    res[key] = function(...args) {
                        return this.$store.search[val](resourceName, ...args);
                    };
                }), res;
            });
        }).call(__webpack_exports__, __webpack_require__(4))
        /***/;
    }, 
    /* 36 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */        var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
        /**
 * Generate getters with injected resourceName for simpler api.
 *
 * @param {String} [resourceName] Unique resource identifier defined in the plugin.
 * @param {Object|Array} actions Object mapping from intented method name to getterType;
 *    or an array of getterTypes.
 * @return {Object}
 */
        /* harmony default export */        __webpack_exports__.a = ((resourceName, getters) => {
            const res = {};
            return Object(__WEBPACK_IMPORTED_MODULE_0__utils__.d)(getters).forEach(({key: key, val: val}) => {
                res[key] = function() {
                    const namespace = Object(__WEBPACK_IMPORTED_MODULE_0__utils__.e)(this.$store.search._base);
                    return this.$store.getters[`${namespace}${val}`](resourceName);
                };
            }), res;
        });
    }
    /******/ ]);
});
//# sourceMappingURL=vuex-search.js.map