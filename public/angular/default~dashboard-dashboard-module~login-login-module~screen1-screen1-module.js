(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~login-login-module~screen1-screen1-module"],{

/***/ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js ***!
  \*************************************************************************/
/*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function() { return MatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function() { return MockMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function() { return MockMatchMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return removeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return BROWSER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return MediaChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return StylesheetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return LAYOUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return SERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAlias", function() { return mergeAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirective2", function() { return BaseDirective2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return DEFAULT_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return ORIENTATION_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return BreakPointRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObserver", function() { return MediaObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaTrigger", function() { return MediaTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function() { return sortDescendingPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function() { return sortAscendingPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return StyleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleBuilder", function() { return StyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return validateBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function() { return MediaMarshaller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function() { return BREAKPOINT_PRINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintHook", function() { return PrintHook; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * Generated from: core/browser-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */

function removeStyles(_document, platformId) {
    return (/**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            var elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.
            /** @type {?} */
            var classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            }));
        }
    });
}
/**
 *  Provider to remove SSR styles on the browser
 * @type {?}
 */
var BROWSER_PROVIDER = {
    provide: (/** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"])),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
    multi: true
};
/** @type {?} */
var CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * Generated from: core/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for common Angular Layout utilities
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [BROWSER_PROVIDER] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [BROWSER_PROVIDER]
            }]
    }], function () { return []; }, null); })();
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-change.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    /**
     * @param matches whether the mediaQuery is currently activated
     * @param mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
     * @param mqAlias e.g. gt-sm, md, gt-lg
     * @param suffix e.g. GtSM, Md, GtLg
     * @param priority the priority of activation for the given breakpoint
     */
    function MediaChange(matches, mediaQuery, mqAlias, suffix, priority) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        if (priority === void 0) { priority = 0; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.priority = priority;
        this.property = '';
    }
    /** Create an exact copy of the MediaChange */
    /**
     * Create an exact copy of the MediaChange
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * Create an exact copy of the MediaChange
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/stylesheet-map/stylesheet-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        /** @type {?} */
        var styles = this.stylesheet.get(el);
        /** @type {?} */
        var value = '';
        if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    /** @nocollapse */ StylesheetMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });
StylesheetMap.ɵfac = function StylesheetMap_Factory(t) { return new (t || StylesheetMap)(); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StylesheetMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/stylesheet-map/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/library-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
    printWithBreakpoints: [],
    mediaTriggerAutoRestore: true,
    ssrObserveBreakpoints: [],
};
/** @type {?} */
var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return DEFAULT_CONFIG; })
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/server-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 * @type {?}
 */
var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return false; })
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/breakpoint-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return null; })
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/add-alias.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    dest = dest ? dest.clone() : new MediaChange();
    if (source) {
        dest.mqAlias = source.alias;
        dest.mediaQuery = source.mediaQuery;
        dest.suffix = (/** @type {?} */ (source.suffix));
        dest.priority = (/** @type {?} */ (source.priority));
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: utils/layout-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find((/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x === direction; }))) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/base/base2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BaseDirective2 = /** @class */ (function () {
    function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
        this.elementRef = elementRef;
        this.styleBuilder = styleBuilder;
        this.styler = styler;
        this.marshal = marshal;
        this.DIRECTIVE_KEY = '';
        this.inputs = [];
        /**
         * The most recently used styles for the builder
         */
        this.mru = {};
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Cache map for style computation
         */
        this.styleCache = new Map();
    }
    Object.defineProperty(BaseDirective2.prototype, "parentElement", {
        /** Access to host element's parent DOM node */
        get: /**
         * Access to host element's parent DOM node
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.parentElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective2.prototype, "nativeElement", {
        /** Access to the HTMLElement for the directive */
        get: /**
         * Access to the HTMLElement for the directive
         * @protected
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective2.prototype, "activatedValue", {
        /** Access to the activated value for the directive */
        get: /**
         * Access to the activated value for the directive
         * @return {?}
         */
        function () {
            return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
        },
        enumerable: true,
        configurable: true
    });
    /** For @Input changes */
    /**
     * For \@Input changes
     * @param {?} changes
     * @return {?}
     */
    BaseDirective2.prototype.ngOnChanges = /**
     * For \@Input changes
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        Object.keys(changes).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (_this.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var bp = key.split('.').slice(1).join('.');
                /** @type {?} */
                var val = changes[key].currentValue;
                _this.setValue(val, bp);
            }
        }));
    };
    /**
     * @return {?}
     */
    BaseDirective2.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroySubject.next();
        this.destroySubject.complete();
        this.marshal.releaseElement(this.nativeElement);
    };
    /** Register with central marshaller service */
    /**
     * Register with central marshaller service
     * @protected
     * @param {?=} extraTriggers
     * @return {?}
     */
    BaseDirective2.prototype.init = /**
     * Register with central marshaller service
     * @protected
     * @param {?=} extraTriggers
     * @return {?}
     */
    function (extraTriggers) {
        if (extraTriggers === void 0) { extraTriggers = []; }
        this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
    };
    /** Add styles to the element using predefined style builder */
    /**
     * Add styles to the element using predefined style builder
     * @protected
     * @param {?} input
     * @param {?=} parent
     * @return {?}
     */
    BaseDirective2.prototype.addStyles = /**
     * Add styles to the element using predefined style builder
     * @protected
     * @param {?} input
     * @param {?=} parent
     * @return {?}
     */
    function (input, parent) {
        /** @type {?} */
        var builder = this.styleBuilder;
        /** @type {?} */
        var useCache = builder.shouldCache;
        /** @type {?} */
        var genStyles = this.styleCache.get(input);
        if (!genStyles || !useCache) {
            genStyles = builder.buildStyles(input, parent);
            if (useCache) {
                this.styleCache.set(input, genStyles);
            }
        }
        this.mru = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, genStyles);
        this.applyStyleToElement(genStyles);
        builder.sideEffect(input, genStyles, parent);
    };
    /** Remove generated styles from an element using predefined style builder */
    /**
     * Remove generated styles from an element using predefined style builder
     * @protected
     * @return {?}
     */
    BaseDirective2.prototype.clearStyles = /**
     * Remove generated styles from an element using predefined style builder
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.mru).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            _this.mru[k] = '';
        }));
        this.applyStyleToElement(this.mru);
        this.mru = {};
    };
    /** Force trigger style updates on DOM element */
    /**
     * Force trigger style updates on DOM element
     * @protected
     * @return {?}
     */
    BaseDirective2.prototype.triggerUpdate = /**
     * Force trigger style updates on DOM element
     * @protected
     * @return {?}
     */
    function () {
        this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @protected
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseDirective2.prototype.getFlexFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @protected
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        if (target) {
            var _a = this.styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this.styler.applyStyleToElements(style, elements);
            }
            return value.trim();
        }
        return 'row';
    };
    /** Applies styles given via string pair or object map to the directive element */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @protected
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseDirective2.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @protected
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this.styler.applyStyleToElement(element, style, value);
    };
    /**
     * @protected
     * @param {?} val
     * @param {?} bp
     * @return {?}
     */
    BaseDirective2.prototype.setValue = /**
     * @protected
     * @param {?} val
     * @param {?} bp
     * @return {?}
     */
    function (val, bp) {
        this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
    };
    /**
     * @protected
     * @param {?} input
     * @return {?}
     */
    BaseDirective2.prototype.updateWithValue = /**
     * @protected
     * @param {?} input
     * @return {?}
     */
    function (input) {
        this.addStyles(input);
    };
BaseDirective2.ɵfac = function BaseDirective2_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
BaseDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseDirective2, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });

    return BaseDirective2;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/base/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/data/break-points.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NOTE: Smaller ranges have HIGHER priority since the match is more specific
 * @type {?}
 */
var DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.9px)',
        priority: 1000,
    },
    {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.9px)',
        priority: 900,
    },
    {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.9px)',
        priority: 800,
    },
    {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.9px)',
        priority: 700,
    },
    {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.9px)',
        priority: 600,
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599.9px)',
        priority: 950,
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959.9px)',
        priority: 850,
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279.9px)',
        priority: 750,
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        priority: 650,
        mediaQuery: 'screen and (max-width: 1919.9px)',
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)',
        priority: -950,
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)',
        priority: -850,
    }, {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)',
        priority: -750,
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)',
        priority: -650,
    }
];

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/data/orientation-break-points.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/* tslint:disable */
/** @type {?} */
var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.9px)';
/** @type {?} */
var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.9px)';
/** @type {?} */
var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)';
/** @type {?} */
var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)';
/** @type {?} */
var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
var ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 * @type {?}
 */
var ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', priority: 2100, 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', priority: 2100, 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', priority: 2100, 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', priority: 2200, 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', priority: 2200, 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', priority: 2200, 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: utils/object-extend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/breakpoint-tools.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    var first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    var remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    }));
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    /** @type {?} */
    var dict = {};
    defaults.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        dict[bp.alias] = bp;
    }));
    // Merge custom breakpoints
    custom.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    }));
    return validateSuffixes(Object.keys(dict).map((/**
     * @param {?} k
     * @return {?}
     */
    function (k) { return dict[k]; })));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-points-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 * @type {?}
 */
var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */
        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */
        var bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return Array.isArray(v) ? v : [v]; })));
        /** @type {?} */
        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    })
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * HOF to sort the breakpoints by descending priority
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortDescendingPriority(a, b) {
    /** @type {?} */
    var priorityA = a ? a.priority || 0 : 0;
    /** @type {?} */
    var priorityB = b ? b.priority || 0 : 0;
    return priorityB - priorityA;
}
/**
 * HOF to sort the breakpoints by ascending priority
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortAscendingPriority(a, b) {
    /** @type {?} */
    var pA = a.priority || 0;
    /** @type {?} */
    var pB = b.priority || 0;
    return pA - pB;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-point-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(list) {
        /**
         * Memoized BreakPoint Lookups
         */
        this.findByMap = new Map();
        this.items = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(list).sort(sortAscendingPriority);
    }
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return !alias ? null : this.findWithPredicate(alias, (/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return bp.alias == alias; }));
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.findWithPredicate(query, (/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return bp.mediaQuery == query; }));
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this.items.filter((/**
             * @param {?} it
             * @return {?}
             */
            function (it) { return it.overlapping == true; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this.items.map((/**
             * @param {?} it
             * @return {?}
             */
            function (it) { return it.alias; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this.items.map((/**
             * @param {?} it
             * @return {?}
             */
            function (it) { return !!it.suffix ? it.suffix : ''; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Memoized lookup using custom predicate function
     */
    /**
     * Memoized lookup using custom predicate function
     * @private
     * @param {?} key
     * @param {?} searchFn
     * @return {?}
     */
    BreakPointRegistry.prototype.findWithPredicate = /**
     * Memoized lookup using custom predicate function
     * @private
     * @param {?} key
     * @param {?} searchFn
     * @return {?}
     */
    function (key, searchFn) {
        /** @type {?} */
        var response = this.findByMap.get(key);
        if (!response) {
            response = this.items.find(searchFn) || null;
            this.findByMap.set(key, response);
        }
        return response || null;
    };
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [BREAKPOINTS,] }] }
    ]; };
    /** @nocollapse */ BreakPointRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });
BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) { return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREAKPOINTS)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakPointRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [BREAKPOINTS]
            }] }]; }, null); })();
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/match-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        /**
         * Initialize source with 'all' so all non-responsive APIs trigger style updates
         */
        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new MediaChange(true));
        this.registry = new Map();
        this._observable$ = this.source.asObservable();
    }
    Object.defineProperty(MatchMedia.prototype, "activations", {
        /**
         * Publish list of all current activations
         */
        get: /**
         * Publish list of all current activations
         * @return {?}
         */
        function () {
            /** @type {?} */
            var results = [];
            this.registry.forEach((/**
             * @param {?} mql
             * @param {?} key
             * @return {?}
             */
            function (mql, key) {
                if (mql.matches) {
                    results.push(key);
                }
            }));
            return results;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = this.registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * Use deferred registration process to register breakpoints only on subscription
     * This logic also enforces logic to register all mediaQueries BEFORE notify
     * subscribers of notifications.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * Use deferred registration process to register breakpoints only on subscription
     * This logic also enforces logic to register all mediaQueries BEFORE notify
     * subscribers of notifications.
     * @param {?=} mqList
     * @param {?=} filterOthers
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * Use deferred registration process to register breakpoints only on subscription
     * This logic also enforces logic to register all mediaQueries BEFORE notify
     * subscribers of notifications.
     * @param {?=} mqList
     * @param {?=} filterOthers
     * @return {?}
     */
    function (mqList, filterOthers) {
        var _this = this;
        if (filterOthers === void 0) { filterOthers = false; }
        if (mqList && mqList.length) {
            /** @type {?} */
            var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                return !filterOthers ? true : (mqList.indexOf(change.mediaQuery) > -1);
            })));
            /** @type {?} */
            var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                // tslint:disable-line:max-line-length
                /** @type {?} */
                var matches = _this.registerQuery(mqList);
                if (matches.length) {
                    /** @type {?} */
                    var lastChange = (/** @type {?} */ (matches.pop()));
                    matches.forEach((/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) {
                        observer.next(e);
                    }));
                    _this.source.next(lastChange); // last match is cached
                }
                observer.complete();
            }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(registration$, matchMedia$);
        }
        return this._observable$;
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        /** @type {?} */
        var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
        /** @type {?} */
        var matches = [];
        buildQueryCss(list, this._document);
        list.forEach((/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            /** @type {?} */
            var onMQLEvent = (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this._zone.run((/**
                 * @return {?}
                 */
                function () { return _this.source.next(new MediaChange(e.matches, query)); }));
            });
            /** @type {?} */
            var mql = _this.registry.get(query);
            if (!mql) {
                mql = _this.buildMQL(query);
                mql.addListener(onMQLEvent);
                _this.registry.set(query, mql);
            }
            if (mql.matches) {
                matches.push(new MediaChange(true, query));
            }
        }));
        return matches;
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype.buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
    };
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatchMedia.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MatchMedia, providedIn: "root" });
MatchMedia.ɵfac = function MatchMedia_Factory(t) { return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
    return MatchMedia;
}());
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 * @type {?}
 */
var ALL_STYLES = {};
/**
 * For Webkit engines that only trigger the MediaQueryList Listener
 * when there is at least one CSS selector for the respective media query.
 *
 * @param {?} mediaQueries
 * @param {?} _document
 * @return {?}
 */
function buildQueryCss(mediaQueries, _document) {
    /** @type {?} */
    var list = mediaQueries.filter((/**
     * @param {?} it
     * @return {?}
     */
    function (it) { return !ALL_STYLES[it]; }));
    if (list.length > 0) {
        /** @type {?} */
        var query = list.join(', ');
        try {
            /** @type {?} */
            var styleEl_1 = _document.createElement('style');
            styleEl_1.setAttribute('type', 'text/css');
            if (!((/** @type {?} */ (styleEl_1))).styleSheet) {
                /** @type {?} */
                var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                styleEl_1.appendChild(_document.createTextNode(cssText));
            }
            (/** @type {?} */ (_document.head)).appendChild(styleEl_1);
            // Store in private global registry
            list.forEach((/**
             * @param {?} mq
             * @return {?}
             */
            function (mq) { return ALL_STYLES[mq] = styleEl_1; }));
        }
        catch (e) {
            console.error(e);
        }
    }
}
/**
 * @param {?} query
 * @param {?} isBrowser
 * @return {?}
 */
function constructMql(query, isBrowser) {
    /** @type {?} */
    var canListen = isBrowser && !!((/** @type {?} */ (window))).matchMedia('all').addListener;
    return canListen ? ((/** @type {?} */ (window))).matchMedia(query) : (/** @type {?} */ ((/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        function () {
        }),
        removeListener: (/**
         * @return {?}
         */
        function () {
        })
    }))));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/mock/mock-match-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        _this.autoRegisterQueries = true; // Used for testing BreakPoint registrations
        // Used for testing BreakPoint registrations
        _this.useOverlaps = false; // Allow fallback to overlapping mediaQueries
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this.registry.forEach((/**
         * @param {?} mql
         * @return {?}
         */
        function (mql) {
            ((/** @type {?} */ (mql))).destroy();
        }));
        this.registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(queryOrAlias);
        return (bp && bp.mediaQuery) || queryOrAlias;
    };
    /**
     * Manually onMediaChange any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     */
    /**
     * Manually onMediaChange any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @private
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually onMediaChange any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @private
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            var alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     */
    /**
     *
     * @private
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @private
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        /** @type {?} */
        var activate = (/**
         * @param {?} alias
         * @return {?}
         */
        function (alias) {
            /** @type {?} */
            var bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        });
        aliases.split(',').forEach((/**
         * @param {?} alias
         * @return {?}
         */
        function (alias) { return activate(alias.trim()); }));
    };
    /**
     *
     */
    /**
     *
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = (/** @type {?} */ (this.registry.get(mediaQuery)));
        if (mql && !this.isActive(mediaQuery)) {
            this.registry.set(mediaQuery, mql.activate());
        }
        return this.hasActivated;
    };
    /** Deactivate all current MQLs and reset the buffer */
    /**
     * Deactivate all current MQLs and reset the buffer
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current MQLs and reset the buffer
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this)).registry.forEach((/**
         * @param {?} it
         * @return {?}
         */
        function (it) {
            ((/** @type {?} */ (it))).deactivate();
        }));
        return (/** @type {?} */ (this));
    };
    /** Insure the mediaQuery is registered with MatchMedia */
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype.buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.activations.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: BreakPointRegistry }
    ]; };
MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) { return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry)); };
MockMatchMedia.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MockMatchMedia, factory: function (t) { return MockMatchMedia.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockMatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: BreakPointRegistry }]; }, null); })();
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            function (callback) {
                /** @type {?} */
                var cb = (/** @type {?} */ (callback));
                cb.call(null, _this);
            }));
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            function (callback) {
                /** @type {?} */
                var cb = (/** @type {?} */ (callback));
                cb.call(null, _this);
            }));
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            var cb = (/** @type {?} */ (listener));
            cb.call(null, this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    MockMediaQueryList.prototype.addEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    MockMediaQueryList.prototype.removeEventListener = /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    function (_, __, ___) {
    };
    /**
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.dispatchEvent = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return false;
    };
    return MockMediaQueryList;
}());
/**
 * Pre-configured provider for MockMatchMedia
 * @type {?}
 */
var MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-marshaller/print-hook.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PRINT = 'print';
/** @type {?} */
var BREAKPOINT_PRINT = {
    alias: PRINT,
    mediaQuery: PRINT,
    priority: 1000
};
/**
 * PrintHook - Use to intercept print MediaQuery activations and force
 *             layouts to render with the specified print alias/breakpoint
 *
 * Used in MediaMarshaller and MediaObserver
 */
var PrintHook = /** @class */ (function () {
    function PrintHook(breakpoints, layoutConfig, _document) {
        this.breakpoints = breakpoints;
        this.layoutConfig = layoutConfig;
        this._document = _document;
        // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
        //  and `afterprint` event listeners.
        this.registeredBeforeAfterPrintHooks = false;
        // isPrintingBeforeAfterEvent is used to track if we are printing from within
        // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
        // form `interceptEvents` so that printing is not stopped while the dialog
        // is still open. This is an extension of the `isPrinting` property on
        // browsers which support `beforeprint` and `afterprint` events.
        this.isPrintingBeforeAfterEvent = false;
        /**
         * Is this service currently in Print-mode ?
         */
        this.isPrinting = false;
        this.queue = new PrintQueue();
        this.deactivations = [];
    }
    /** Add 'print' mediaQuery: to listen for matchMedia activations */
    /**
     * Add 'print' mediaQuery: to listen for matchMedia activations
     * @param {?} queries
     * @return {?}
     */
    PrintHook.prototype.withPrintQuery = /**
     * Add 'print' mediaQuery: to listen for matchMedia activations
     * @param {?} queries
     * @return {?}
     */
    function (queries) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(queries, [PRINT]);
    };
    /** Is the MediaChange event for any 'print' @media */
    /**
     * Is the MediaChange event for any 'print' \@media
     * @param {?} e
     * @return {?}
     */
    PrintHook.prototype.isPrintEvent = /**
     * Is the MediaChange event for any 'print' \@media
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return e.mediaQuery.startsWith(PRINT);
    };
    Object.defineProperty(PrintHook.prototype, "printAlias", {
        /** What is the desired mqAlias to use while printing? */
        get: /**
         * What is the desired mqAlias to use while printing?
         * @return {?}
         */
        function () {
            return this.layoutConfig.printWithBreakpoints || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintHook.prototype, "printBreakPoints", {
        /** Lookup breakpoints associated with print aliases. */
        get: /**
         * Lookup breakpoints associated with print aliases.
         * @return {?}
         */
        function () {
            var _this = this;
            return (/** @type {?} */ (this.printAlias
                .map((/**
             * @param {?} alias
             * @return {?}
             */
            function (alias) { return _this.breakpoints.findByAlias(alias); }))
                .filter((/**
             * @param {?} bp
             * @return {?}
             */
            function (bp) { return bp !== null; }))));
        },
        enumerable: true,
        configurable: true
    });
    /** Lookup breakpoint associated with mediaQuery */
    /**
     * Lookup breakpoint associated with mediaQuery
     * @param {?} __0
     * @return {?}
     */
    PrintHook.prototype.getEventBreakpoints = /**
     * Lookup breakpoint associated with mediaQuery
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var mediaQuery = _a.mediaQuery;
        /** @type {?} */
        var bp = this.breakpoints.findByQuery(mediaQuery);
        /** @type {?} */
        var list = bp ? Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(this.printBreakPoints, [bp]) : this.printBreakPoints;
        return list.sort(sortDescendingPriority);
    };
    /** Update event with printAlias mediaQuery information */
    /**
     * Update event with printAlias mediaQuery information
     * @param {?} event
     * @return {?}
     */
    PrintHook.prototype.updateEvent = /**
     * Update event with printAlias mediaQuery information
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var bp = this.breakpoints.findByQuery(event.mediaQuery);
        if (this.isPrintEvent(event)) {
            // Reset from 'print' to first (highest priority) print breakpoint
            bp = this.getEventBreakpoints(event)[0];
            event.mediaQuery = bp ? bp.mediaQuery : '';
        }
        return mergeAlias(event, bp);
    };
    // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
    // trigger print styles synchronously and apply proper layout styles.
    // It is a noop if the hooks have already been registered or if the document's
    // `defaultView` is not available.
    // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
    // trigger print styles synchronously and apply proper layout styles.
    // It is a noop if the hooks have already been registered or if the document's
    // `defaultView` is not available.
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    PrintHook.prototype.registerBeforeAfterPrintHooks = 
    // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
    // trigger print styles synchronously and apply proper layout styles.
    // It is a noop if the hooks have already been registered or if the document's
    // `defaultView` is not available.
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var _this = this;
        // `defaultView` may be null when rendering on the server or in other contexts.
        if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
            return;
        }
        this.registeredBeforeAfterPrintHooks = true;
        // Could we have teardown logic to remove if there are no print listeners being used?
        this._document.defaultView.addEventListener('beforeprint', (/**
         * @return {?}
         */
        function () {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            if (!_this.isPrinting) {
                _this.isPrintingBeforeAfterEvent = true;
                _this.startPrinting(target, _this.getEventBreakpoints(new MediaChange(true, PRINT)));
                target.updateStyles();
            }
        }));
        this._document.defaultView.addEventListener('afterprint', (/**
         * @return {?}
         */
        function () {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            _this.isPrintingBeforeAfterEvent = false;
            if (_this.isPrinting) {
                _this.stopPrinting(target);
                target.updateStyles();
            }
        }));
    };
    /**
     * Prepare RxJs filter operator with partial application
     * @return pipeable filter predicate
     */
    /**
     * Prepare RxJs filter operator with partial application
     * @param {?} target
     * @return {?} pipeable filter predicate
     */
    PrintHook.prototype.interceptEvents = /**
     * Prepare RxJs filter operator with partial application
     * @param {?} target
     * @return {?} pipeable filter predicate
     */
    function (target) {
        var _this = this;
        this.registerBeforeAfterPrintHooks(target);
        return (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.isPrintEvent(event)) {
                if (event.matches && !_this.isPrinting) {
                    _this.startPrinting(target, _this.getEventBreakpoints(event));
                    target.updateStyles();
                }
                else if (!event.matches && _this.isPrinting && !_this.isPrintingBeforeAfterEvent) {
                    _this.stopPrinting(target);
                    target.updateStyles();
                }
            }
            else {
                _this.collectActivations(event);
            }
        });
    };
    /** Stop mediaChange event propagation in event streams */
    /**
     * Stop mediaChange event propagation in event streams
     * @return {?}
     */
    PrintHook.prototype.blockPropagation = /**
     * Stop mediaChange event propagation in event streams
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return !(_this.isPrinting || _this.isPrintEvent(event));
        });
    };
    /**
     * Save current activateBreakpoints (for later restore)
     * and substitute only the printAlias breakpoint
     */
    /**
     * Save current activateBreakpoints (for later restore)
     * and substitute only the printAlias breakpoint
     * @protected
     * @param {?} target
     * @param {?} bpList
     * @return {?}
     */
    PrintHook.prototype.startPrinting = /**
     * Save current activateBreakpoints (for later restore)
     * and substitute only the printAlias breakpoint
     * @protected
     * @param {?} target
     * @param {?} bpList
     * @return {?}
     */
    function (target, bpList) {
        this.isPrinting = true;
        target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
    };
    /** For any print de-activations, reset the entire print queue */
    /**
     * For any print de-activations, reset the entire print queue
     * @protected
     * @param {?} target
     * @return {?}
     */
    PrintHook.prototype.stopPrinting = /**
     * For any print de-activations, reset the entire print queue
     * @protected
     * @param {?} target
     * @return {?}
     */
    function (target) {
        target.activatedBreakpoints = this.deactivations;
        this.deactivations = [];
        this.queue.clear();
        this.isPrinting = false;
    };
    /**
     * To restore pre-Print Activations, we must capture the proper
     * list of breakpoint activations BEFORE print starts. OnBeforePrint()
     * is supported; so 'print' mediaQuery activations are used as a fallback
     * in browsers without `beforeprint` support.
     *
     * >  But activated breakpoints are deactivated BEFORE 'print' activation.
     *
     * Let's capture all de-activations using the following logic:
     *
     *  When not printing:
     *    - clear cache when activating non-print breakpoint
     *    - update cache (and sort) when deactivating
     *
     *  When printing:
     *    - sort and save when starting print
     *    - restore as activatedTargets and clear when stop printing
     */
    /**
     * To restore pre-Print Activations, we must capture the proper
     * list of breakpoint activations BEFORE print starts. OnBeforePrint()
     * is supported; so 'print' mediaQuery activations are used as a fallback
     * in browsers without `beforeprint` support.
     *
     * >  But activated breakpoints are deactivated BEFORE 'print' activation.
     *
     * Let's capture all de-activations using the following logic:
     *
     *  When not printing:
     *    - clear cache when activating non-print breakpoint
     *    - update cache (and sort) when deactivating
     *
     *  When printing:
     *    - sort and save when starting print
     *    - restore as activatedTargets and clear when stop printing
     * @param {?} event
     * @return {?}
     */
    PrintHook.prototype.collectActivations = /**
     * To restore pre-Print Activations, we must capture the proper
     * list of breakpoint activations BEFORE print starts. OnBeforePrint()
     * is supported; so 'print' mediaQuery activations are used as a fallback
     * in browsers without `beforeprint` support.
     *
     * >  But activated breakpoints are deactivated BEFORE 'print' activation.
     *
     * Let's capture all de-activations using the following logic:
     *
     *  When not printing:
     *    - clear cache when activating non-print breakpoint
     *    - update cache (and sort) when deactivating
     *
     *  When printing:
     *    - sort and save when starting print
     *    - restore as activatedTargets and clear when stop printing
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
            if (!event.matches) {
                /** @type {?} */
                var bp = this.breakpoints.findByQuery(event.mediaQuery);
                if (bp) { // Deactivating a breakpoint
                    this.deactivations.push(bp);
                    this.deactivations.sort(sortDescendingPriority);
                }
            }
            else if (!this.isPrintingBeforeAfterEvent) {
                // Only clear deactivations if we aren't printing from a `beforeprint` event.
                // Otherwise this will clear before `stopPrinting()` is called to restore
                // the pre-Print Activations.
                this.deactivations = [];
            }
        }
    };
    /** @nocollapse */
    PrintHook.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ PrintHook.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PrintHook_Factory() { return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: PrintHook, providedIn: "root" });
PrintHook.ɵfac = function PrintHook_Factory(t) { return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintHook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAYOUT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
    return PrintHook;
}());
// ************************************************************************
// Internal Utility class 'PrintQueue'
// ************************************************************************
/**
 * Utility class to manage print breakpoints + activatedBreakpoints
 * with correct sorting WHILE printing
 */
var 
// ************************************************************************
// Internal Utility class 'PrintQueue'
// ************************************************************************
/**
 * Utility class to manage print breakpoints + activatedBreakpoints
 * with correct sorting WHILE printing
 */
PrintQueue = /** @class */ (function () {
    function PrintQueue() {
        /**
         * Sorted queue with prioritized print breakpoints
         */
        this.printBreakpoints = [];
    }
    /**
     * @param {?} bpList
     * @return {?}
     */
    PrintQueue.prototype.addPrintBreakpoints = /**
     * @param {?} bpList
     * @return {?}
     */
    function (bpList) {
        var _this = this;
        bpList.push(BREAKPOINT_PRINT);
        bpList.sort(sortDescendingPriority);
        bpList.forEach((/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return _this.addBreakpoint(bp); }));
        return this.printBreakpoints;
    };
    /** Add Print breakpoint to queue */
    /**
     * Add Print breakpoint to queue
     * @param {?} bp
     * @return {?}
     */
    PrintQueue.prototype.addBreakpoint = /**
     * Add Print breakpoint to queue
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        if (!!bp) {
            /** @type {?} */
            var bpInList = this.printBreakpoints.find((/**
             * @param {?} it
             * @return {?}
             */
            function (it) { return it.mediaQuery === bp.mediaQuery; }));
            if (bpInList === undefined) {
                // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
                // register as highest priority in the queue
                this.printBreakpoints = isPrintBreakPoint(bp) ? Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([bp], this.printBreakpoints) : Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(this.printBreakpoints, [bp]);
            }
        }
    };
    /** Restore original activated breakpoints and clear internal caches */
    /**
     * Restore original activated breakpoints and clear internal caches
     * @return {?}
     */
    PrintQueue.prototype.clear = /**
     * Restore original activated breakpoints and clear internal caches
     * @return {?}
     */
    function () {
        this.printBreakpoints = [];
    };
    return PrintQueue;
}());
// ************************************************************************
// Internal Utility methods
// ************************************************************************
/**
 * Only support intercept queueing if the Breakpoint is a print \@media query
 * @param {?} bp
 * @return {?}
 */
function isPrintBreakPoint(bp) {
    return bp ? bp.mediaQuery.startsWith(PRINT) : false;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-observer/media-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
 * if a mediaQuery is currently activated.
 *
 * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
 * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
 * in 1 event notification. The reported activations will be sorted in descending priority order.
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * Note: Developers should note that only mediaChange activations (not de-activations)
 *       are announced by the MediaObserver.
 *
 * \@usage
 *
 *  // RxJS
 *  import { filter } from 'rxjs/operators';
 *  import { MediaObserver } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status: string = '';
 *
 *    constructor(mediaObserver: MediaObserver) {
 *      const media$ = mediaObserver.asObservable().pipe(
 *        filter((changes: MediaChange[]) => true)   // silly noop filter
 *      );
 *
 *      media$.subscribe((changes: MediaChange[]) => {
 *        let status = '';
 *        changes.forEach( change => {
 *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
 *        });
 *        this.status = status;
 *     });
 *
 *    }
 *  }
 */
var MediaObserver = /** @class */ (function () {
    function MediaObserver(breakpoints, matchMedia, hook) {
        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.hook = hook;
        /**
         * Filter MediaChange notifications for overlapping breakpoints
         */
        this.filterOverlaps = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._media$ = this.watchActivations();
        this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) { return changes.length > 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) { return changes[0]; })));
    }
    /**
     * Completes the active subject, signalling to all complete for all
     * MediaObserver subscribers
     */
    /**
     * Completes the active subject, signalling to all complete for all
     * MediaObserver subscribers
     * @return {?}
     */
    MediaObserver.prototype.ngOnDestroy = /**
     * Completes the active subject, signalling to all complete for all
     * MediaObserver subscribers
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    // ************************************************
    // Public Methods
    // ************************************************
    /**
     * Observe changes to current activation 'list'
     */
    // ************************************************
    // Public Methods
    // ************************************************
    /**
     * Observe changes to current activation 'list'
     * @return {?}
     */
    MediaObserver.prototype.asObservable = 
    // ************************************************
    // Public Methods
    // ************************************************
    /**
     * Observe changes to current activation 'list'
     * @return {?}
     */
    function () {
        return this._media$;
    };
    /**
     * Allow programmatic query to determine if one or more media query/alias match
     * the current viewport size.
     * @param value One or more media queries (or aliases) to check.
     * @returns Whether any of the media queries match.
     */
    /**
     * Allow programmatic query to determine if one or more media query/alias match
     * the current viewport size.
     * @param {?} value One or more media queries (or aliases) to check.
     * @return {?} Whether any of the media queries match.
     */
    MediaObserver.prototype.isActive = /**
     * Allow programmatic query to determine if one or more media query/alias match
     * the current viewport size.
     * @param {?} value One or more media queries (or aliases) to check.
     * @return {?} Whether any of the media queries match.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var aliases = splitQueries(coerceArray(value));
        return aliases.some((/**
         * @param {?} alias
         * @return {?}
         */
        function (alias) {
            /** @type {?} */
            var query = toMediaQuery(alias, _this.breakpoints);
            return _this.matchMedia.isActive(query);
        }));
    };
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     */
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @private
     * @return {?}
     */
    MediaObserver.prototype.watchActivations = 
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this.breakpoints.items.map((/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return bp.mediaQuery; }));
        return this.buildObservable(queries);
    };
    /**
     * Only pass/announce activations (not de-activations)
     *
     * Since multiple-mediaQueries can be activation in a cycle,
     * gather all current activations into a single list of changes to observers
     *
     * Inject associated (if any) alias information into the MediaChange event
     * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
     * - Exclude print activations that do not have an associated mediaQuery
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     */
    /**
     * Only pass/announce activations (not de-activations)
     *
     * Since multiple-mediaQueries can be activation in a cycle,
     * gather all current activations into a single list of changes to observers
     *
     * Inject associated (if any) alias information into the MediaChange event
     * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
     * - Exclude print activations that do not have an associated mediaQuery
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @private
     * @param {?} mqList
     * @return {?}
     */
    MediaObserver.prototype.buildObservable = /**
     * Only pass/announce activations (not de-activations)
     *
     * Since multiple-mediaQueries can be activation in a cycle,
     * gather all current activations into a single list of changes to observers
     *
     * Inject associated (if any) alias information into the MediaChange event
     * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
     * - Exclude print activations that do not have an associated mediaQuery
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @private
     * @param {?} mqList
     * @return {?}
     */
    function (mqList) {
        var _this = this;
        /** @type {?} */
        var hasChanges = (/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            /** @type {?} */
            var isValidQuery = (/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return (change.mediaQuery.length > 0); });
            return (changes.filter(isValidQuery).length > 0);
        });
        /** @type {?} */
        var excludeOverlaps = (/**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            return !_this.filterOverlaps ? changes : changes.filter((/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                /** @type {?} */
                var bp = _this.breakpoints.findByQuery(change.mediaQuery);
                return !bp ? true : !bp.overlapping;
            }));
        });
        /**
         */
        return this.matchMedia
            .observe(this.hook.withPrintQuery(mqList))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} change
         * @return {?}
         */
        function (change) { return change.matches; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.findAllActivations()); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(hasChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
    };
    /**
     * Find all current activations and prepare single list of activations
     * sorted by descending priority.
     */
    /**
     * Find all current activations and prepare single list of activations
     * sorted by descending priority.
     * @private
     * @return {?}
     */
    MediaObserver.prototype.findAllActivations = /**
     * Find all current activations and prepare single list of activations
     * sorted by descending priority.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mergeMQAlias = (/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            /** @type {?} */
            var bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return mergeAlias(change, bp);
        });
        /** @type {?} */
        var replaceWithPrintAlias = (/**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            return _this.hook.isPrintEvent(change) ? _this.hook.updateEvent(change) : change;
        });
        return this.matchMedia
            .activations
            .map((/**
         * @param {?} query
         * @return {?}
         */
        function (query) { return new MediaChange(true, query); }))
            .map(replaceWithPrintAlias)
            .map(mergeMQAlias)
            .sort(sortDescendingPriority);
    };
    /** @nocollapse */
    MediaObserver.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia },
        { type: PrintHook }
    ]; };
    /** @nocollapse */ MediaObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaObserver_Factory() { return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook)); }, token: MediaObserver, providedIn: "root" });
MediaObserver.ɵfac = function MediaObserver_Factory(t) { return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: MatchMedia }, { type: PrintHook }]; }, null); })();
    return MediaObserver;
}());
/**
 * Find associated breakpoint (if any)
 * @param {?} query
 * @param {?} locator
 * @return {?}
 */
function toMediaQuery(query, locator) {
    /** @type {?} */
    var bp = locator.findByAlias(query) || locator.findByQuery(query);
    return bp ? bp.mediaQuery : query;
}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map((/**
     * @param {?} query
     * @return {?}
     */
    function (query) { return query.split(','); }))
        .reduce((/**
     * @param {?} a1
     * @param {?} a2
     * @return {?}
     */
    function (a1, a2) { return a1.concat(a2); }))
        .map((/**
     * @param {?} query
     * @return {?}
     */
    function (query) { return query.trim(); }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-observer/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-trigger/media-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class
 */
var MediaTrigger = /** @class */ (function () {
    function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.layoutConfig = layoutConfig;
        this._platformId = _platformId;
        this._document = _document;
        this.hasCachedRegistryMatches = false;
        this.originalActivations = [];
        this.originalRegistry = new Map();
    }
    /**
     * Manually activate range of breakpoints
     * @param list array of mediaQuery or alias strings
     */
    /**
     * Manually activate range of breakpoints
     * @param {?} list array of mediaQuery or alias strings
     * @return {?}
     */
    MediaTrigger.prototype.activate = /**
     * Manually activate range of breakpoints
     * @param {?} list array of mediaQuery or alias strings
     * @return {?}
     */
    function (list) {
        list = list.map((/**
         * @param {?} it
         * @return {?}
         */
        function (it) { return it.trim(); })); // trim queries
        this.saveActivations();
        this.deactivateAll();
        this.setActivations(list);
        this.prepareAutoRestore();
    };
    /**
     * Restore original, 'real' breakpoints and emit events
     * to trigger stream notification
     */
    /**
     * Restore original, 'real' breakpoints and emit events
     * to trigger stream notification
     * @return {?}
     */
    MediaTrigger.prototype.restore = /**
     * Restore original, 'real' breakpoints and emit events
     * to trigger stream notification
     * @return {?}
     */
    function () {
        if (this.hasCachedRegistryMatches) {
            /** @type {?} */
            var extractQuery = (/**
             * @param {?} change
             * @return {?}
             */
            function (change) { return change.mediaQuery; });
            /** @type {?} */
            var list = this.originalActivations.map(extractQuery);
            try {
                this.deactivateAll();
                this.restoreRegistryMatches();
                this.setActivations(list);
            }
            finally {
                this.originalActivations = [];
                if (this.resizeSubscription) {
                    this.resizeSubscription.unsubscribe();
                }
            }
        }
    };
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Whenever window resizes, immediately auto-restore original
     * activations (if we are simulating activations)
     */
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Whenever window resizes, immediately auto-restore original
     * activations (if we are simulating activations)
     * @private
     * @return {?}
     */
    MediaTrigger.prototype.prepareAutoRestore = 
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Whenever window resizes, immediately auto-restore original
     * activations (if we are simulating activations)
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
        /** @type {?} */
        var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;
        if (enableAutoRestore) {
            /** @type {?} */
            var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
        }
    };
    /**
     * Notify all matchMedia subscribers of de-activations
     *
     * Note: we must force 'matches' updates for
     *       future matchMedia::activation lookups
     */
    /**
     * Notify all matchMedia subscribers of de-activations
     *
     * Note: we must force 'matches' updates for
     *       future matchMedia::activation lookups
     * @private
     * @return {?}
     */
    MediaTrigger.prototype.deactivateAll = /**
     * Notify all matchMedia subscribers of de-activations
     *
     * Note: we must force 'matches' updates for
     *       future matchMedia::activation lookups
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.currentActivations;
        this.forceRegistryMatches(list, false);
        this.simulateMediaChanges(list, false);
    };
    /**
     * Cache current activations as sorted, prioritized list of MediaChanges
     */
    /**
     * Cache current activations as sorted, prioritized list of MediaChanges
     * @private
     * @return {?}
     */
    MediaTrigger.prototype.saveActivations = /**
     * Cache current activations as sorted, prioritized list of MediaChanges
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.hasCachedRegistryMatches) {
            /** @type {?} */
            var toMediaChange = (/**
             * @param {?} query
             * @return {?}
             */
            function (query) { return new MediaChange(true, query); });
            /** @type {?} */
            var mergeMQAlias = (/**
             * @param {?} change
             * @return {?}
             */
            function (change) {
                /** @type {?} */
                var bp = _this.breakpoints.findByQuery(change.mediaQuery);
                return mergeAlias(change, bp);
            });
            this.originalActivations = this.currentActivations
                .map(toMediaChange)
                .map(mergeMQAlias)
                .sort(sortDescendingPriority);
            this.cacheRegistryMatches();
        }
    };
    /**
     * Force set manual activations for specified mediaQuery list
     */
    /**
     * Force set manual activations for specified mediaQuery list
     * @private
     * @param {?} list
     * @return {?}
     */
    MediaTrigger.prototype.setActivations = /**
     * Force set manual activations for specified mediaQuery list
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        if (!!this.originalRegistry) {
            this.forceRegistryMatches(list, true);
        }
        this.simulateMediaChanges(list);
    };
    /**
     * For specified mediaQuery list manually simulate activations or deactivations
     */
    /**
     * For specified mediaQuery list manually simulate activations or deactivations
     * @private
     * @param {?} queries
     * @param {?=} matches
     * @return {?}
     */
    MediaTrigger.prototype.simulateMediaChanges = /**
     * For specified mediaQuery list manually simulate activations or deactivations
     * @private
     * @param {?} queries
     * @param {?=} matches
     * @return {?}
     */
    function (queries, matches) {
        var _this = this;
        if (matches === void 0) { matches = true; }
        /** @type {?} */
        var toMediaQuery = (/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            /** @type {?} */
            var locator = _this.breakpoints;
            /** @type {?} */
            var bp = locator.findByAlias(query) || locator.findByQuery(query);
            return bp ? bp.mediaQuery : query;
        });
        /** @type {?} */
        var emitChangeEvent = (/**
         * @param {?} query
         * @return {?}
         */
        function (query) { return _this.emitChangeEvent(matches, query); });
        queries.map(toMediaQuery).forEach(emitChangeEvent);
    };
    /**
     * Replace current registry with simulated registry...
     * Note: this is required since MediaQueryList::matches is 'readOnly'
     */
    /**
     * Replace current registry with simulated registry...
     * Note: this is required since MediaQueryList::matches is 'readOnly'
     * @private
     * @param {?} queries
     * @param {?} matches
     * @return {?}
     */
    MediaTrigger.prototype.forceRegistryMatches = /**
     * Replace current registry with simulated registry...
     * Note: this is required since MediaQueryList::matches is 'readOnly'
     * @private
     * @param {?} queries
     * @param {?} matches
     * @return {?}
     */
    function (queries, matches) {
        /** @type {?} */
        var registry = new Map();
        queries.forEach((/**
         * @param {?} query
         * @return {?}
         */
        function (query) {
            registry.set(query, (/** @type {?} */ ({ matches: matches })));
        }));
        this.matchMedia.registry = registry;
    };
    /**
     * Save current MatchMedia::registry items.
     */
    /**
     * Save current MatchMedia::registry items.
     * @private
     * @return {?}
     */
    MediaTrigger.prototype.cacheRegistryMatches = /**
     * Save current MatchMedia::registry items.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = this.originalRegistry;
        target.clear();
        this.matchMedia.registry.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            target.set(key, value);
        }));
        this.hasCachedRegistryMatches = true;
    };
    /**
     * Restore original, 'true' registry
     */
    /**
     * Restore original, 'true' registry
     * @private
     * @return {?}
     */
    MediaTrigger.prototype.restoreRegistryMatches = /**
     * Restore original, 'true' registry
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = this.matchMedia.registry;
        target.clear();
        this.originalRegistry.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            target.set(key, value);
        }));
        this.originalRegistry.clear();
        this.hasCachedRegistryMatches = false;
    };
    /**
     * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
     */
    /**
     * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
     * @private
     * @param {?} matches
     * @param {?} query
     * @return {?}
     */
    MediaTrigger.prototype.emitChangeEvent = /**
     * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
     * @private
     * @param {?} matches
     * @param {?} query
     * @return {?}
     */
    function (matches, query) {
        this.matchMedia.source.next(new MediaChange(matches, query));
    };
    Object.defineProperty(MediaTrigger.prototype, "currentActivations", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.matchMedia.activations;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    MediaTrigger.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MediaTrigger.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaTrigger_Factory() { return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MediaTrigger, providedIn: "root" });
MediaTrigger.ɵfac = function MediaTrigger_Factory(t) { return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: MatchMedia }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAYOUT_CONFIG]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
    return MediaTrigger;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-trigger/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: utils/auto-prefixer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/style-utils/style-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        if (value === void 0) { value = null; }
        /** @type {?} */
        var styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        /** @type {?} */
        var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        }));
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var query = 'flex-direction';
        /** @type {?} */
        var value = this.lookupStyle(target, query);
        /** @type {?} */
        var hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
            element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        /** @type {?} */
        var value = '';
        if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : '';
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     */
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @private
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @private
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var el = styles[key];
            /** @type {?} */
            var values = Array.isArray(el) ? el : [el];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                value = value ? value + '' : '';
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) || !_this._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) ?
                        element.style.setProperty(key, value) : _this._setServerStyle(element, key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        }));
    };
    /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    StyleUtils.prototype._setServerStyle = /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    };
    /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype._getServerStyle = /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._readStyleAttribute = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var styleMap = {};
        /** @type {?} */
        var styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);
            for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    var colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }
                    /** @type {?} */
                    var name_1 = style.substr(0, colonIndex).trim();
                    styleMap[name_1] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    StyleUtils.prototype._writeStyleAttribute = /**
     * @private
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    function (element, styleMap) {
        /** @type {?} */
        var styleAttrValue = '';
        for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    };
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SERVER_TOKEN,] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] }
    ]; };
    /** @nocollapse */ StyleUtils.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StylesheetMap), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SERVER_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
StyleUtils.ɵfac = function StyleUtils_Factory(t) { return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: StylesheetMap }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SERVER_TOKEN]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LAYOUT_CONFIG]
            }] }]; }, null); })();
    return StyleUtils;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/style-builder/style-builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A class that encapsulates CSS style generation for common directives
 * @abstract
 */
var  /**
 * A class that encapsulates CSS style generation for common directives
 * @abstract
 */
StyleBuilder = /** @class */ (function () {
    function StyleBuilder() {
        /**
         * Whether to cache the generated output styles
         */
        this.shouldCache = true;
    }
    /**
     * Run a side effect computation given the input string and the computed styles
     * from the build task and the host configuration object
     * NOTE: This should be a no-op unless an algorithm is provided in a subclass
     */
    /**
     * Run a side effect computation given the input string and the computed styles
     * from the build task and the host configuration object
     * NOTE: This should be a no-op unless an algorithm is provided in a subclass
     * @param {?} _input
     * @param {?} _styles
     * @param {?=} _parent
     * @return {?}
     */
    StyleBuilder.prototype.sideEffect = /**
     * Run a side effect computation given the input string and the computed styles
     * from the build task and the host configuration object
     * NOTE: This should be a no-op unless an algorithm is provided in a subclass
     * @param {?} _input
     * @param {?} _styles
     * @param {?=} _parent
     * @return {?}
     */
    function (_input, _styles, _parent) {
    };
    return StyleBuilder;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: core/basis-validator/basis-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    /** @type {?} */
    var parts = [grow, shrink, basis];
    /** @type {?} */
    var j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        var matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        var matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-marshaller/media-marshaller.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaMarshaller - register responsive values from directives and
 *                   trigger them based on media query events
 */
var MediaMarshaller = /** @class */ (function () {
    function MediaMarshaller(matchMedia, breakpoints, hook) {
        this.matchMedia = matchMedia;
        this.breakpoints = breakpoints;
        this.hook = hook;
        this.activatedBreakpoints = [];
        this.elementMap = new Map();
        this.elementKeyMap = new WeakMap();
        this.watcherMap = new WeakMap(); // special triggers to update elements
        // special triggers to update elements
        this.updateMap = new WeakMap(); // callback functions to update styles
        // callback functions to update styles
        this.clearMap = new WeakMap(); // callback functions to clear styles
        // callback functions to clear styles
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.observeActivations();
    }
    Object.defineProperty(MediaMarshaller.prototype, "activatedAlias", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update styles on breakpoint activates or deactivates
     * @param mc
     */
    /**
     * Update styles on breakpoint activates or deactivates
     * @param {?} mc
     * @return {?}
     */
    MediaMarshaller.prototype.onMediaChange = /**
     * Update styles on breakpoint activates or deactivates
     * @param {?} mc
     * @return {?}
     */
    function (mc) {
        /** @type {?} */
        var bp = this.findByQuery(mc.mediaQuery);
        if (bp) {
            mc = mergeAlias(mc, bp);
            if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
                this.activatedBreakpoints.push(bp);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
            }
            else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
                // Remove the breakpoint when it's deactivated
                this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
            }
        }
    };
    /**
     * initialize the marshaller with necessary elements for delegation on an element
     * @param element
     * @param key
     * @param updateFn optional callback so that custom bp directives don't have to re-provide this
     * @param clearFn optional callback so that custom bp directives don't have to re-provide this
     * @param extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
     */
    /**
     * initialize the marshaller with necessary elements for delegation on an element
     * @param {?} element
     * @param {?} key
     * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
     * @return {?}
     */
    MediaMarshaller.prototype.init = /**
     * initialize the marshaller with necessary elements for delegation on an element
     * @param {?} element
     * @param {?} key
     * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
     * @return {?}
     */
    function (element, key, updateFn, clearFn, extraTriggers) {
        if (extraTriggers === void 0) { extraTriggers = []; }
        initBuilderMap(this.updateMap, element, key, updateFn);
        initBuilderMap(this.clearMap, element, key, clearFn);
        this.buildElementKeyMap(element, key);
        this.watchExtraTriggers(element, key, extraTriggers);
    };
    /**
     * get the value for an element and key and optionally a given breakpoint
     * @param element
     * @param key
     * @param bp
     */
    /**
     * get the value for an element and key and optionally a given breakpoint
     * @param {?} element
     * @param {?} key
     * @param {?=} bp
     * @return {?}
     */
    MediaMarshaller.prototype.getValue = /**
     * get the value for an element and key and optionally a given breakpoint
     * @param {?} element
     * @param {?} key
     * @param {?=} bp
     * @return {?}
     */
    function (element, key, bp) {
        /** @type {?} */
        var bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);
            if (values) {
                return values.get(key);
            }
        }
        return undefined;
    };
    /**
     * whether the element has values for a given key
     * @param element
     * @param key
     */
    /**
     * whether the element has values for a given key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    MediaMarshaller.prototype.hasValue = /**
     * whether the element has values for a given key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    function (element, key) {
        /** @type {?} */
        var bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            var values = this.getActivatedValues(bpMap, key);
            if (values) {
                return values.get(key) !== undefined || false;
            }
        }
        return false;
    };
    /**
     * Set the value for an input on a directive
     * @param element the element in question
     * @param key the type of the directive (e.g. flex, layout-gap, etc)
     * @param bp the breakpoint suffix (empty string = default)
     * @param val the value for the breakpoint
     */
    /**
     * Set the value for an input on a directive
     * @param {?} element the element in question
     * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
     * @param {?} val the value for the breakpoint
     * @param {?} bp the breakpoint suffix (empty string = default)
     * @return {?}
     */
    MediaMarshaller.prototype.setValue = /**
     * Set the value for an input on a directive
     * @param {?} element the element in question
     * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
     * @param {?} val the value for the breakpoint
     * @param {?} bp the breakpoint suffix (empty string = default)
     * @return {?}
     */
    function (element, key, val, bp) {
        /** @type {?} */
        var bpMap = this.elementMap.get(element);
        if (!bpMap) {
            bpMap = new Map().set(bp, new Map().set(key, val));
            this.elementMap.set(element, bpMap);
        }
        else {
            /** @type {?} */
            var values = (bpMap.get(bp) || new Map()).set(key, val);
            bpMap.set(bp, values);
            this.elementMap.set(element, bpMap);
        }
        /** @type {?} */
        var value = this.getValue(element, key);
        if (value !== undefined) {
            this.updateElement(element, key, value);
        }
    };
    /** Track element value changes for a specific key */
    /**
     * Track element value changes for a specific key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    MediaMarshaller.prototype.trackValue = /**
     * Track element value changes for a specific key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    function (element, key) {
        return this.subject
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.element === element && v.key === key; })));
    };
    /** update all styles for all elements on the current breakpoint */
    /**
     * update all styles for all elements on the current breakpoint
     * @return {?}
     */
    MediaMarshaller.prototype.updateStyles = /**
     * update all styles for all elements on the current breakpoint
     * @return {?}
     */
    function () {
        var _this = this;
        this.elementMap.forEach((/**
         * @param {?} bpMap
         * @param {?} el
         * @return {?}
         */
        function (bpMap, el) {
            /** @type {?} */
            var keyMap = new Set((/** @type {?} */ (_this.elementKeyMap.get(el))));
            /** @type {?} */
            var valueMap = _this.getActivatedValues(bpMap);
            if (valueMap) {
                valueMap.forEach((/**
                 * @param {?} v
                 * @param {?} k
                 * @return {?}
                 */
                function (v, k) {
                    _this.updateElement(el, k, v);
                    keyMap.delete(k);
                }));
            }
            keyMap.forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                valueMap = _this.getActivatedValues(bpMap, k);
                if (valueMap) {
                    /** @type {?} */
                    var value = valueMap.get(k);
                    _this.updateElement(el, k, value);
                }
                else {
                    _this.clearElement(el, k);
                }
            }));
        }));
    };
    /**
     * clear the styles for a given element
     * @param element
     * @param key
     */
    /**
     * clear the styles for a given element
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    MediaMarshaller.prototype.clearElement = /**
     * clear the styles for a given element
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    function (element, key) {
        /** @type {?} */
        var builders = this.clearMap.get(element);
        if (builders) {
            /** @type {?} */
            var clearFn = (/** @type {?} */ (builders.get(key)));
            if (!!clearFn) {
                clearFn();
                this.subject.next({ element: element, key: key, value: '' });
            }
        }
    };
    /**
     * update a given element with the activated values for a given key
     * @param element
     * @param key
     * @param value
     */
    /**
     * update a given element with the activated values for a given key
     * @param {?} element
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MediaMarshaller.prototype.updateElement = /**
     * update a given element with the activated values for a given key
     * @param {?} element
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (element, key, value) {
        /** @type {?} */
        var builders = this.updateMap.get(element);
        if (builders) {
            /** @type {?} */
            var updateFn = (/** @type {?} */ (builders.get(key)));
            if (!!updateFn) {
                updateFn(value);
                this.subject.next({ element: element, key: key, value: value });
            }
        }
    };
    /**
     * release all references to a given element
     * @param element
     */
    /**
     * release all references to a given element
     * @param {?} element
     * @return {?}
     */
    MediaMarshaller.prototype.releaseElement = /**
     * release all references to a given element
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var watcherMap = this.watcherMap.get(element);
        if (watcherMap) {
            watcherMap.forEach((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.unsubscribe(); }));
            this.watcherMap.delete(element);
        }
        /** @type {?} */
        var elementMap = this.elementMap.get(element);
        if (elementMap) {
            elementMap.forEach((/**
             * @param {?} _
             * @param {?} s
             * @return {?}
             */
            function (_, s) { return elementMap.delete(s); }));
            this.elementMap.delete(element);
        }
    };
    /**
     * trigger an update for a given element and key (e.g. layout)
     * @param element
     * @param key
     */
    /**
     * trigger an update for a given element and key (e.g. layout)
     * @param {?} element
     * @param {?=} key
     * @return {?}
     */
    MediaMarshaller.prototype.triggerUpdate = /**
     * trigger an update for a given element and key (e.g. layout)
     * @param {?} element
     * @param {?=} key
     * @return {?}
     */
    function (element, key) {
        var _this = this;
        /** @type {?} */
        var bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            var valueMap = this.getActivatedValues(bpMap, key);
            if (valueMap) {
                if (key) {
                    this.updateElement(element, key, valueMap.get(key));
                }
                else {
                    valueMap.forEach((/**
                     * @param {?} v
                     * @param {?} k
                     * @return {?}
                     */
                    function (v, k) { return _this.updateElement(element, k, v); }));
                }
            }
        }
    };
    /** Cross-reference for HTMLElement with directive key */
    /**
     * Cross-reference for HTMLElement with directive key
     * @private
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    MediaMarshaller.prototype.buildElementKeyMap = /**
     * Cross-reference for HTMLElement with directive key
     * @private
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    function (element, key) {
        /** @type {?} */
        var keyMap = this.elementKeyMap.get(element);
        if (!keyMap) {
            keyMap = new Set();
            this.elementKeyMap.set(element, keyMap);
        }
        keyMap.add(key);
    };
    /**
     * Other triggers that should force style updates:
     * - directionality
     * - layout changes
     * - mutationobserver updates
     */
    /**
     * Other triggers that should force style updates:
     * - directionality
     * - layout changes
     * - mutationobserver updates
     * @private
     * @param {?} element
     * @param {?} key
     * @param {?} triggers
     * @return {?}
     */
    MediaMarshaller.prototype.watchExtraTriggers = /**
     * Other triggers that should force style updates:
     * - directionality
     * - layout changes
     * - mutationobserver updates
     * @private
     * @param {?} element
     * @param {?} key
     * @param {?} triggers
     * @return {?}
     */
    function (element, key, triggers) {
        var _this = this;
        if (triggers && triggers.length) {
            /** @type {?} */
            var watchers = this.watcherMap.get(element);
            if (!watchers) {
                watchers = new Map();
                this.watcherMap.set(element, watchers);
            }
            /** @type {?} */
            var subscription = watchers.get(key);
            if (!subscription) {
                /** @type {?} */
                var newSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, triggers).subscribe((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var currentValue = _this.getValue(element, key);
                    _this.updateElement(element, key, currentValue);
                }));
                watchers.set(key, newSubscription);
            }
        }
    };
    /** Breakpoint locator by mediaQuery */
    /**
     * Breakpoint locator by mediaQuery
     * @private
     * @param {?} query
     * @return {?}
     */
    MediaMarshaller.prototype.findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @private
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * get the fallback breakpoint for a given element, starting with the current breakpoint
     * @param bpMap
     * @param key
     */
    /**
     * get the fallback breakpoint for a given element, starting with the current breakpoint
     * @private
     * @param {?} bpMap
     * @param {?=} key
     * @return {?}
     */
    MediaMarshaller.prototype.getActivatedValues = /**
     * get the fallback breakpoint for a given element, starting with the current breakpoint
     * @private
     * @param {?} bpMap
     * @param {?=} key
     * @return {?}
     */
    function (bpMap, key) {
        for (var i = 0; i < this.activatedBreakpoints.length; i++) {
            /** @type {?} */
            var activatedBp = this.activatedBreakpoints[i];
            /** @type {?} */
            var valueMap = bpMap.get(activatedBp.alias);
            if (valueMap) {
                if (key === undefined || valueMap.has(key)) {
                    return valueMap;
                }
            }
        }
        /** @type {?} */
        var lastHope = bpMap.get('');
        return (key === undefined || lastHope && lastHope.has(key)) ? lastHope : undefined;
    };
    /**
     * Watch for mediaQuery breakpoint activations
     */
    /**
     * Watch for mediaQuery breakpoint activations
     * @private
     * @return {?}
     */
    MediaMarshaller.prototype.observeActivations = /**
     * Watch for mediaQuery breakpoint activations
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var target = (/** @type {?} */ ((/** @type {?} */ (this))));
        /** @type {?} */
        var queries = this.breakpoints.items.map((/**
         * @param {?} bp
         * @return {?}
         */
        function (bp) { return bp.mediaQuery; }));
        this.matchMedia
            .observe(this.hook.withPrintQuery(queries))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(this.hook.blockPropagation()))
            .subscribe(this.onMediaChange.bind(this));
    };
    /** @nocollapse */
    MediaMarshaller.ctorParameters = function () { return [
        { type: MatchMedia },
        { type: BreakPointRegistry },
        { type: PrintHook }
    ]; };
    /** @nocollapse */ MediaMarshaller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMarshaller_Factory() { return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook)); }, token: MediaMarshaller, providedIn: "root" });
MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) { return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMarshaller, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MatchMedia }, { type: BreakPointRegistry }, { type: PrintHook }]; }, null); })();
    return MediaMarshaller;
}());
/**
 * @param {?} map
 * @param {?} element
 * @param {?} key
 * @param {?=} input
 * @return {?}
 */
function initBuilderMap(map$$1, element, key, input) {
    if (input !== undefined) {
        /** @type {?} */
        var oldMap = map$$1.get(element);
        if (!oldMap) {
            oldMap = new Map();
            map$$1.set(element, oldMap);
        }
        oldMap.set(key, input);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=core.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js ***!
  \*****************************************************************************/
/*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return ExtendedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function() { return DefaultClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function() { return ImgSrcStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function() { return DefaultImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function() { return ShowHideStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return ShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function() { return DefaultShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function() { return DefaultStyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * Generated from: extended/img-src/img-src.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var ImgSrcStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImgSrcStyleBuilder, _super);
    function ImgSrcStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ImgSrcStyleBuilder.prototype.buildStyles = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return { 'content': url ? "url(" + url + ")" : '' };
    };
    /** @nocollapse */ ImgSrcStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ImgSrcStyleBuilder_Factory() { return new ImgSrcStyleBuilder(); }, token: ImgSrcStyleBuilder, providedIn: "root" });
ImgSrcStyleBuilder.ɵfac = function ImgSrcStyleBuilder_Factory(t) { return ɵImgSrcStyleBuilder_BaseFactory(t || ImgSrcStyleBuilder); };
var ɵImgSrcStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return ImgSrcStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleBuilder"]));
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImgSrcDirective, _super);
    function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        _this.DIRECTIVE_KEY = 'img-src';
        _this.defaultSrc = '';
        _this.styleCache = imgSrcCache;
        _this.init();
        _this.setValue(_this.nativeElement.getAttribute('src') || '', '');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(_this.platformId) && _this.serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "src", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.defaultSrc = val;
            this.setValue(this.defaultSrc, '');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @protected
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.updateWithValue = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var url = value || this.defaultSrc;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.addStyles(url);
        }
        else {
            this.nativeElement.setAttribute('src', url);
        }
    };
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: ImgSrcStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ImgSrcDirective.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src',] }]
    };
ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) { return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"])); };
ImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ImgSrcDirective, inputs: { src: "src" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ImgSrcStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]
            }] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['src']
        }] }); })();
    return ImgSrcDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective2"]));
/** @type {?} */
var imgSrcCache = new Map();
/** @type {?} */
var inputs = [
    'src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl',
    'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl',
    'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'
];
/** @type {?} */
var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var DefaultImgSrcDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultImgSrcDirective, _super);
    function DefaultImgSrcDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
DefaultImgSrcDirective.ɵfac = function DefaultImgSrcDirective_Factory(t) { return ɵDefaultImgSrcDirective_BaseFactory(t || DefaultImgSrcDirective); };
DefaultImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultImgSrcDirective, selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]], inputs: { "src.xs": "src.xs", "src.sm": "src.sm", "src.md": "src.md", "src.lg": "src.lg", "src.xl": "src.xl", "src.lt-sm": "src.lt-sm", "src.lt-md": "src.lt-md", "src.lt-lg": "src.lt-lg", "src.lt-xl": "src.lt-xl", "src.gt-xs": "src.gt-xs", "src.gt-sm": "src.gt-sm", "src.gt-md": "src.gt-md", "src.gt-lg": "src.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultImgSrcDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector, inputs: inputs }]
    }], null, null); })();
    return DefaultImgSrcDirective;
}(ImgSrcDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: extended/class/class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassDirective, _super);
    function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
        var _this = _super.call(this, elementRef, (/** @type {?} */ (null)), styler, marshal) || this;
        _this.ngClassInstance = ngClassInstance;
        _this.DIRECTIVE_KEY = 'ngClass';
        if (!_this.ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            _this.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"](iterableDiffers, keyValueDiffers, elementRef, renderer2);
        }
        _this.init();
        _this.setValue('', '');
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "klass", {
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         */
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.ngClassInstance.klass = val;
            this.setValue(val, '');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    ClassDirective.prototype.updateWithValue = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ngClassInstance.ngClass = value;
        this.ngClassInstance.ngDoCheck();
    };
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = 
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this.ngClassInstance.ngDoCheck();
    };
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
    ]; };
    ClassDirective.propDecorators = {
        klass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] }]
    };
ClassDirective.ɵfac = function ClassDirective_Factory(t) { return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], 10)); };
ClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClassDirective, inputs: { klass: ["class", "klass"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }]; }, { klass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['class']
        }] }); })();
    return ClassDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective2"]));
/** @type {?} */
var inputs$1 = [
    'ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl',
    'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl',
    'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'
];
/** @type {?} */
var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var DefaultClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultClassDirective, _super);
    function DefaultClassDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$1;
        return _this;
    }
DefaultClassDirective.ɵfac = function DefaultClassDirective_Factory(t) { return ɵDefaultClassDirective_BaseFactory(t || DefaultClassDirective); };
DefaultClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultClassDirective, selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]], inputs: { ngClass: "ngClass", "ngClass.xs": "ngClass.xs", "ngClass.sm": "ngClass.sm", "ngClass.md": "ngClass.md", "ngClass.lg": "ngClass.lg", "ngClass.xl": "ngClass.xl", "ngClass.lt-sm": "ngClass.lt-sm", "ngClass.lt-md": "ngClass.lt-md", "ngClass.lt-lg": "ngClass.lt-lg", "ngClass.lt-xl": "ngClass.lt-xl", "ngClass.gt-xs": "ngClass.gt-xs", "ngClass.gt-sm": "ngClass.gt-sm", "ngClass.gt-md": "ngClass.gt-md", "ngClass.gt-lg": "ngClass.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultClassDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultClassDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
    return DefaultClassDirective;
}(ClassDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: extended/show-hide/show-hide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShowHideStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowHideStyleBuilder, _super);
    function ShowHideStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} show
     * @param {?} parent
     * @return {?}
     */
    ShowHideStyleBuilder.prototype.buildStyles = /**
     * @param {?} show
     * @param {?} parent
     * @return {?}
     */
    function (show, parent) {
        /** @type {?} */
        var shouldShow = show === 'true';
        return { 'display': shouldShow ? parent.display : 'none' };
    };
    /** @nocollapse */ ShowHideStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ShowHideStyleBuilder_Factory() { return new ShowHideStyleBuilder(); }, token: ShowHideStyleBuilder, providedIn: "root" });
ShowHideStyleBuilder.ɵfac = function ShowHideStyleBuilder_Factory(t) { return ɵShowHideStyleBuilder_BaseFactory(t || ShowHideStyleBuilder); };
var ɵShowHideStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return ShowHideStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleBuilder"]));
var ShowHideDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowHideDirective, _super);
    function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.layoutConfig = layoutConfig;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        _this.DIRECTIVE_KEY = 'show-hide';
        /**
         * Original dom Elements CSS display style
         */
        _this.display = '';
        _this.hasLayout = false;
        _this.hasFlexChild = false;
        return _this;
    }
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngAfterViewInit = 
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    function () {
        this.trackExtraTriggers();
        /** @type {?} */
        var children = Array.from(this.nativeElement.children);
        for (var i = 0; i < children.length; i++) {
            if (this.marshal.hasValue((/** @type {?} */ (children[i])), 'flex')) {
                this.hasFlexChild = true;
                break;
            }
        }
        if (DISPLAY_MAP.has(this.nativeElement)) {
            this.display = (/** @type {?} */ (DISPLAY_MAP.get(this.nativeElement)));
        }
        else {
            this.display = this.getDisplayStyle();
            DISPLAY_MAP.set(this.nativeElement, this.display);
        }
        this.init();
        // set the default to show unless explicitly overridden
        /** @type {?} */
        var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');
        if (defaultValue === undefined || defaultValue === '') {
            this.setValue(true, '');
        }
        else {
            this.triggerUpdate();
        }
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        Object.keys(changes).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (_this.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                var inputKey = key.split('.');
                /** @type {?} */
                var bp = inputKey.slice(1).join('.');
                /** @type {?} */
                var inputValue = changes[key].currentValue;
                /** @type {?} */
                var shouldShow = inputValue !== '' ?
                    inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(inputValue) : false
                    : true;
                if (inputKey[0] === 'fxHide') {
                    shouldShow = !shouldShow;
                }
                _this.setValue(shouldShow, bp);
            }
        }));
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *  Watch for these extra triggers to update fxShow, fxHide stylings
     */
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *  Watch for these extra triggers to update fxShow, fxHide stylings
     * @protected
     * @return {?}
     */
    ShowHideDirective.prototype.trackExtraTriggers = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *  Watch for these extra triggers to update fxShow, fxHide stylings
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
        ['layout', 'layout-align'].forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.marshal
                .trackValue(_this.nativeElement, key)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
                .subscribe(_this.triggerUpdate.bind(_this));
        }));
    };
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @protected
     * @return {?}
     */
    ShowHideDirective.prototype.getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @protected
     * @return {?}
     */
    function () {
        return (this.hasLayout || (this.hasFlexChild && this.layoutConfig.addFlexToParent)) ?
            'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
    };
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @protected
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype.updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = true; }
        if (value === '') {
            return;
        }
        this.addStyles(value ? 'true' : 'false', { display: this.display });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
        this.marshal.triggerUpdate((/** @type {?} */ (this.parentElement)), 'layout-gap');
    };
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: ShowHideStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) { return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"])); };
ShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ShowHideDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ShowHideStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]
            }] }]; }, null); })();
    return ShowHideDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective2"]));
/** @type {?} */
var DISPLAY_MAP = new WeakMap();
/** @type {?} */
var inputs$2 = [
    'fxShow', 'fxShow.print',
    'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl',
    'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl',
    'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg',
    'fxHide', 'fxHide.print',
    'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl',
    'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl',
    'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'
];
/** @type {?} */
var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
/**
 * 'show' Layout API directive
 */
var DefaultShowHideDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultShowHideDirective, _super);
    function DefaultShowHideDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$2;
        return _this;
    }
DefaultShowHideDirective.ɵfac = function DefaultShowHideDirective_Factory(t) { return ɵDefaultShowHideDirective_BaseFactory(t || DefaultShowHideDirective); };
DefaultShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultShowHideDirective, selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]], inputs: { fxShow: "fxShow", "fxShow.print": "fxShow.print", "fxShow.xs": "fxShow.xs", "fxShow.sm": "fxShow.sm", "fxShow.md": "fxShow.md", "fxShow.lg": "fxShow.lg", "fxShow.xl": "fxShow.xl", "fxShow.lt-sm": "fxShow.lt-sm", "fxShow.lt-md": "fxShow.lt-md", "fxShow.lt-lg": "fxShow.lt-lg", "fxShow.lt-xl": "fxShow.lt-xl", "fxShow.gt-xs": "fxShow.gt-xs", "fxShow.gt-sm": "fxShow.gt-sm", "fxShow.gt-md": "fxShow.gt-md", "fxShow.gt-lg": "fxShow.gt-lg", fxHide: "fxHide", "fxHide.print": "fxHide.print", "fxHide.xs": "fxHide.xs", "fxHide.sm": "fxHide.sm", "fxHide.md": "fxHide.md", "fxHide.lg": "fxHide.lg", "fxHide.xl": "fxHide.xl", "fxHide.lt-sm": "fxHide.lt-sm", "fxHide.lt-md": "fxHide.lt-md", "fxHide.lt-lg": "fxHide.lt-lg", "fxHide.lt-xl": "fxHide.lt-xl", "fxHide.gt-xs": "fxHide.gt-xs", "fxHide.gt-sm": "fxHide.gt-sm", "fxHide.gt-md": "fxHide.gt-md", "fxHide.gt-lg": "fxHide.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultShowHideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultShowHideDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$2, inputs: inputs$2 }]
    }], null, null); })();
    return DefaultShowHideDirective;
}(ShowHideDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: extended/style/style-transforms.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    var what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map((/**
     * @param {?} val
     * @return {?}
     */
    function (val) { return val.trim(); }))
        .filter((/**
     * @param {?} val
     * @return {?}
     */
    function (val) { return val !== ''; }));
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = (/**
     * @param {?} it
     * @return {?}
     */
    function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    });
    return styles
        .map(stringToKeyValue)
        .filter((/**
     * @param {?} entry
     * @return {?}
     */
    function (entry) { return !!entry; }))
        .map(sanitizeValue)
        .reduce(keyValuesToMap, (/** @type {?} */ ({})));
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    var list = [];
    if (getType(source) === 'set') {
        ((/** @type {?} */ (source))).forEach((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) { return list.push(entry); }));
    }
    else {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            list.push(key + ":" + ((/** @type {?} */ (source)))[key]);
        }));
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], vals = _a.slice(1);
    return new NgStyleKeyValue(key, vals.join(':'));
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * Generated from: extended/style/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleDirective, _super);
    function StyleDirective(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
        var _this = _super.call(this, elementRef, (/** @type {?} */ (null)), styler, marshal) || this;
        _this.sanitizer = sanitizer;
        _this.ngStyleInstance = ngStyleInstance;
        _this.DIRECTIVE_KEY = 'ngStyle';
        if (!_this.ngStyleInstance) {
            // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            _this.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"](elementRef, differs, renderer2);
        }
        _this.init();
        /** @type {?} */
        var styles = _this.nativeElement.getAttribute('style') || '';
        _this.fallbackStyles = _this.buildStyleMap(styles);
        _this.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
        return _this;
    }
    /** Add generated styles */
    /**
     * Add generated styles
     * @protected
     * @param {?} value
     * @return {?}
     */
    StyleDirective.prototype.updateWithValue = /**
     * Add generated styles
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var styles = this.buildStyleMap(value);
        this.ngStyleInstance.ngStyle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.fallbackStyles), styles);
        if (this.isServer) {
            this.applyStyleToElement(styles);
        }
        this.ngStyleInstance.ngDoCheck();
    };
    /** Remove generated styles */
    /**
     * Remove generated styles
     * @protected
     * @return {?}
     */
    StyleDirective.prototype.clearStyles = /**
     * Remove generated styles
     * @protected
     * @return {?}
     */
    function () {
        this.ngStyleInstance.ngStyle = this.fallbackStyles;
        this.ngStyleInstance.ngDoCheck();
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @protected
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype.buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @protected
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        // Always safe-guard (aka sanitize) style property values
        /** @type {?} */
        var sanitizer = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            return _this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].STYLE, val) || '';
        });
        if (styles) {
            switch (getType(styles)) {
                case 'string': return buildMapFromList$1(buildRawList(styles), sanitizer);
                case 'array': return buildMapFromList$1((/** @type {?} */ (styles)), sanitizer);
                case 'set': return buildMapFromSet(styles, sanitizer);
                default: return buildMapFromSet(styles, sanitizer);
            }
        }
        return {};
    };
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = 
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this.ngStyleInstance.ngDoCheck();
    };
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
StyleDirective.ɵfac = function StyleDirective_Factory(t) { return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
StyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: StyleDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, null); })();
    return StyleDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective2"]));
/** @type {?} */
var inputs$3 = [
    'ngStyle',
    'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl',
    'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl',
    'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'
];
/** @type {?} */
var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var DefaultStyleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultStyleDirective, _super);
    function DefaultStyleDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$3;
        return _this;
    }
DefaultStyleDirective.ɵfac = function DefaultStyleDirective_Factory(t) { return ɵDefaultStyleDirective_BaseFactory(t || DefaultStyleDirective); };
DefaultStyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultStyleDirective, selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]], inputs: { ngStyle: "ngStyle", "ngStyle.xs": "ngStyle.xs", "ngStyle.sm": "ngStyle.sm", "ngStyle.md": "ngStyle.md", "ngStyle.lg": "ngStyle.lg", "ngStyle.xl": "ngStyle.xl", "ngStyle.lt-sm": "ngStyle.lt-sm", "ngStyle.lt-md": "ngStyle.lt-md", "ngStyle.lt-lg": "ngStyle.lt-lg", "ngStyle.lt-xl": "ngStyle.lt-xl", "ngStyle.gt-xs": "ngStyle.gt-xs", "ngStyle.gt-sm": "ngStyle.gt-sm", "ngStyle.gt-md": "ngStyle.gt-md", "ngStyle.gt-lg": "ngStyle.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultStyleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultStyleDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultStyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();
    return DefaultStyleDirective;
}(StyleDirective));
/**
 * Build a styles map from a list of styles, while sanitizing bad values first
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList$1(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = (/**
     * @param {?} it
     * @return {?}
     */
    function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    });
    return styles
        .map(stringToKeyValue)
        .filter((/**
     * @param {?} entry
     * @return {?}
     */
    function (entry) { return !!entry; }))
        .map(sanitizeValue)
        .reduce(keyValuesToMap, (/** @type {?} */ ({})));
}

/**
 * @fileoverview added by tsickle
 * Generated from: extended/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    DefaultShowHideDirective,
    DefaultClassDirective,
    DefaultStyleDirective,
    DefaultImgSrcDirective,
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
ExtendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExtendedModule });
ExtendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExtendedModule_Factory(t) { return new (t || ExtendedModule)(); }, imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExtendedModule, { declarations: function () { return [DefaultShowHideDirective,
        DefaultClassDirective,
        DefaultStyleDirective,
        DefaultImgSrcDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]]; }, exports: function () { return [DefaultShowHideDirective,
        DefaultClassDirective,
        DefaultStyleDirective,
        DefaultImgSrcDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExtendedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]],
                declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES),
                exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES)
            }]
    }], function () { return []; }, null); })();
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: extended/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: extended/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=extended.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js ***!
  \********************************************************************************/
/*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe, GridModule, VERSION, FlexLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function() { return FlexLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ɵMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ɵMockMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ɵMockMatchMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BROWSER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CLASS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StylesheetMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAlias", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["mergeAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirective2", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ScreenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["ORIENTATION_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaObserver", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaTrigger", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["sortDescendingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["sortAscendingPriority"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["coerceArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleBuilder", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["validateBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINT_PRINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrintHook", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["PrintHook"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/extended.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ImgSrcStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ShowHideStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["StyleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexAlignStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexOffsetStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexOrderStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutGapStyleBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["LayoutGapDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"]; });

/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/grid.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatee"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatei"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatej"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privaten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privater"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateba"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatez"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privateb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["ɵgrid_privatebe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * Generated from: version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 * @type {?}
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.0.0-beta.29');

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, breakpoints) {
        if (breakpoints === void 0) { breakpoints = []; }
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], useValue: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"]), configOptions) },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINT"], useValue: breakpoints, multi: true },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"], useValue: true },
                ] : [
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], useValue: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONFIG"]), configOptions) },
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BREAKPOINT"], useValue: breakpoints, multi: true },
            ]
        };
    };
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
FlexLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlexLayoutModule });
FlexLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlexLayoutModule_Factory(t) { return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); }, imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]],
        _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutModule, { imports: function () { return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]]; }, exports: function () { return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]],
                exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"]]
            }]
    }], function () { return [{ type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=flex-layout.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js ***!
  \*************************************************************************/
/*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return FlexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function() { return FlexStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return FlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function() { return DefaultFlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function() { return FlexAlignStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return FlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function() { return DefaultFlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function() { return FlexFillStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return FlexFillDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function() { return FlexOffsetStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return FlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function() { return DefaultFlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function() { return FlexOrderStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return FlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function() { return DefaultFlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function() { return LayoutStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function() { return DefaultLayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function() { return LayoutAlignStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return LayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function() { return DefaultLayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function() { return LayoutGapStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return LayoutGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function() { return DefaultLayoutGapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/bidi.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * Generated from: utils/layout-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */



var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find((/**
     * @param {?} x
     * @return {?}
     */
    function (x) { return x === direction; }))) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout/layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutStyleBuilder, _super);
    function LayoutStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    LayoutStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return buildLayoutCSS(input);
    };
    /** @nocollapse */ LayoutStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutStyleBuilder_Factory() { return new LayoutStyleBuilder(); }, token: LayoutStyleBuilder, providedIn: "root" });
LayoutStyleBuilder.ɵfac = function LayoutStyleBuilder_Factory(t) { return ɵLayoutStyleBuilder_BaseFactory(t || LayoutStyleBuilder); };
var ɵLayoutStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LayoutStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return LayoutStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs = [
    'fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md',
    'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md',
    'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm',
    'fxLayout.gt-md', 'fxLayout.gt-lg'
];
/** @type {?} */
var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutDirective, _super);
    function LayoutDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'layout';
        _this.styleCache = layoutCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: LayoutStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
LayoutDirective.ɵfac = function LayoutDirective_Factory(t) { return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
LayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: LayoutStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return LayoutDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
var DefaultLayoutDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultLayoutDirective, _super);
    function DefaultLayoutDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
DefaultLayoutDirective.ɵfac = function DefaultLayoutDirective_Factory(t) { return ɵDefaultLayoutDirective_BaseFactory(t || DefaultLayoutDirective); };
DefaultLayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutDirective, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultLayoutDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector, inputs: inputs }]
    }], null, null); })();
    return DefaultLayoutDirective;
}(LayoutDirective));
/** @type {?} */
var layoutCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout-gap/layout-gap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CLEAR_MARGIN_CSS = {
    'margin-left': null,
    'margin-right': null,
    'margin-top': null,
    'margin-bottom': null
};
var LayoutGapStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutGapStyleBuilder, _super);
    function LayoutGapStyleBuilder(_styler) {
        var _this = _super.call(this) || this;
        _this._styler = _styler;
        return _this;
    }
    /**
     * @param {?} gapValue
     * @param {?} parent
     * @return {?}
     */
    LayoutGapStyleBuilder.prototype.buildStyles = /**
     * @param {?} gapValue
     * @param {?} parent
     * @return {?}
     */
    function (gapValue, parent) {
        if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
            // Add the margin to the host element
            return buildGridMargin(gapValue, parent.directionality);
        }
        else {
            return {};
        }
    };
    /**
     * @param {?} gapValue
     * @param {?} _styles
     * @param {?} parent
     * @return {?}
     */
    LayoutGapStyleBuilder.prototype.sideEffect = /**
     * @param {?} gapValue
     * @param {?} _styles
     * @param {?} parent
     * @return {?}
     */
    function (gapValue, _styles, parent) {
        /** @type {?} */
        var items = parent.items;
        if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
            // For each `element` children, set the padding
            /** @type {?} */
            var paddingStyles = buildGridPadding(gapValue, parent.directionality);
            this._styler.applyStyleToElements(paddingStyles, parent.items);
        }
        else {
            /** @type {?} */
            var lastItem = (/** @type {?} */ (items.pop()));
            // For each `element` children EXCEPT the last,
            // set the margin right/bottom styles...
            /** @type {?} */
            var gapCss = buildGapCSS(gapValue, parent);
            this._styler.applyStyleToElements(gapCss, items);
            // Clear all gaps for all visible elements
            this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
        }
    };
    /** @nocollapse */
    LayoutGapStyleBuilder.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    /** @nocollapse */ LayoutGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutGapStyleBuilder_Factory() { return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"])); }, token: LayoutGapStyleBuilder, providedIn: "root" });
LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) { return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }]; }, null); })();
    return LayoutGapStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$1 = [
    'fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md',
    'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md',
    'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm',
    'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'
];
/** @type {?} */
var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutGapDirective, _super);
    function LayoutGapDirective(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.zone = zone;
        _this.directionality = directionality;
        _this.styleUtils = styleUtils;
        _this.layout = 'row'; // default flex-direction
        // default flex-direction
        _this.DIRECTIVE_KEY = 'layout-gap';
        _this.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** @type {?} */
        var extraTriggers = [_this.directionality.change, _this.observerSubject.asObservable()];
        _this.init(extraTriggers);
        _this.marshal
            .trackValue(_this.nativeElement, 'layout')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
            .subscribe(_this.onLayoutChange.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "childrenNodes", {
        /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = 
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    function () {
        this.buildChildObservable();
        this.triggerUpdate();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    LayoutGapDirective.prototype.onLayoutChange = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    function (matcher) {
        var _this = this;
        /** @type {?} */
        var layout = matcher.value;
        // Make sure to filter out 'wrap' option
        /** @type {?} */
        var direction = layout.split(' ');
        this.layout = direction[0];
        if (!LAYOUT_VALUES.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x === _this.layout; }))) {
            this.layout = 'row';
        }
        this.triggerUpdate();
    };
    /**
     *
     */
    /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype.updateWithValue = /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        // Gather all non-hidden Element nodes
        /** @type {?} */
        var items = this.childrenNodes
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.nodeType === 1 && _this.willDisplay(el); }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var orderA = +_this.styler.lookupStyle(a, 'order');
            /** @type {?} */
            var orderB = +_this.styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        }));
        if (items.length > 0) {
            /** @type {?} */
            var directionality = this.directionality.value;
            /** @type {?} */
            var layout = this.layout;
            if (layout === 'row' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheRowRtl;
            }
            else if (layout === 'row' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheRowLtr;
            }
            else if (layout === 'column' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheColumnRtl;
            }
            else if (layout === 'column' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheColumnLtr;
            }
            this.addStyles(value, { directionality: directionality, items: items, layout: layout });
        }
    };
    /** We need to override clearStyles because in most cases mru isn't populated */
    /**
     * We need to override clearStyles because in most cases mru isn't populated
     * @protected
     * @return {?}
     */
    LayoutGapDirective.prototype.clearStyles = /**
     * We need to override clearStyles because in most cases mru isn't populated
     * @protected
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var gridMode = Object.keys(this.mru).length > 0;
        /** @type {?} */
        var childrenStyle = gridMode ? 'padding' :
            getMarginType(this.directionality.value, this.layout);
        // If there are styles on the parent remove them
        if (gridMode) {
            _super.prototype.clearStyles.call(this);
        }
        // Then remove the children styles too
        this.styleUtils.applyStyleToElements((_a = {}, _a[childrenStyle] = '', _a), this.childrenNodes);
    };
    /** Determine if an element will show or hide based on current activation */
    /**
     * Determine if an element will show or hide based on current activation
     * @protected
     * @param {?} source
     * @return {?}
     */
    LayoutGapDirective.prototype.willDisplay = /**
     * Determine if an element will show or hide based on current activation
     * @protected
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var value = this.marshal.getValue(source, 'show-hide');
        return value === true ||
            (value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none');
    };
    /**
     * @protected
     * @return {?}
     */
    LayoutGapDirective.prototype.buildChildObservable = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (typeof MutationObserver !== 'undefined') {
                _this.observer = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    /** @type {?} */
                    var validatedChanges = (/**
                     * @param {?} it
                     * @return {?}
                     */
                    function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    });
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this.observerSubject.next();
                    }
                }));
                _this.observer.observe(_this.nativeElement, { childList: true });
            }
        }));
    };
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: LayoutGapStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) { return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
LayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutGapDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: LayoutGapStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return LayoutGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
var DefaultLayoutGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultLayoutGapDirective, _super);
    function DefaultLayoutGapDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$1;
        return _this;
    }
DefaultLayoutGapDirective.ɵfac = function DefaultLayoutGapDirective_Factory(t) { return ɵDefaultLayoutGapDirective_BaseFactory(t || DefaultLayoutGapDirective); };
DefaultLayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutGapDirective, selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]], inputs: { fxLayoutGap: "fxLayoutGap", "fxLayoutGap.xs": "fxLayoutGap.xs", "fxLayoutGap.sm": "fxLayoutGap.sm", "fxLayoutGap.md": "fxLayoutGap.md", "fxLayoutGap.lg": "fxLayoutGap.lg", "fxLayoutGap.xl": "fxLayoutGap.xl", "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md": "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md": "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultLayoutGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
    return DefaultLayoutGapDirective;
}(LayoutGapDirective));
/** @type {?} */
var layoutGapCacheRowRtl = new Map();
/** @type {?} */
var layoutGapCacheColumnRtl = new Map();
/** @type {?} */
var layoutGapCacheRowLtr = new Map();
/** @type {?} */
var layoutGapCacheColumnLtr = new Map();
/** @type {?} */
var GRID_SPECIFIER = ' grid';
/**
 * @param {?} value
 * @param {?} directionality
 * @return {?}
 */
function buildGridPadding(value, directionality) {
    /** @type {?} */
    var paddingTop = '0px';
    /** @type {?} */
    var paddingRight = '0px';
    /** @type {?} */
    var paddingBottom = value;
    /** @type {?} */
    var paddingLeft = '0px';
    if (directionality === 'rtl') {
        paddingLeft = value;
    }
    else {
        paddingRight = value;
    }
    return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
}
/**
 * @param {?} value
 * @param {?} directionality
 * @return {?}
 */
function buildGridMargin(value, directionality) {
    /** @type {?} */
    var marginTop = '0px';
    /** @type {?} */
    var marginRight = '0px';
    /** @type {?} */
    var marginBottom = '-' + value;
    /** @type {?} */
    var marginLeft = '0px';
    if (directionality === 'rtl') {
        marginLeft = '-' + value;
    }
    else {
        marginRight = '-' + value;
    }
    return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
}
/**
 * @param {?} directionality
 * @param {?} layout
 * @return {?}
 */
function getMarginType(directionality, layout) {
    switch (layout) {
        case 'column':
            return 'margin-bottom';
        case 'column-reverse':
            return 'margin-top';
        case 'row':
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
        case 'row-reverse':
            return directionality === 'rtl' ? 'margin-right' : 'margin-left';
        default:
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
    }
}
/**
 * @param {?} gapValue
 * @param {?} parent
 * @return {?}
 */
function buildGapCSS(gapValue, parent) {
    /** @type {?} */
    var key = getMarginType(parent.directionality, parent.layout);
    /** @type {?} */
    var margins = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, CLEAR_MARGIN_CSS);
    margins[key] = gapValue;
    return margins;
}

/**
 * @fileoverview added by tsickle
 * Generated from: utils/object-extend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex/flex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexStyleBuilder, _super);
    function FlexStyleBuilder(layoutConfig) {
        var _this = _super.call(this) || this;
        _this.layoutConfig = layoutConfig;
        return _this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    FlexStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        var _a = input.split(' '), grow = _a[0], shrink = _a[1], basisParts = _a.slice(2);
        /** @type {?} */
        var basis = basisParts.join(' ');
        // The flex-direction of this element's flex container. Defaults to 'row'.
        /** @type {?} */
        var direction = (parent.direction.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        var hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        var usingCalc = hasCalc || (basis === 'auto');
        /** @type {?} */
        var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 ||
            String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 ||
            String(basis).indexOf('vh') > -1;
        /** @type {?} */
        var isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        // make box inflexible when shrink and grow are both zero
        // should not set a min when the grow is zero
        // should not set a max when the shrink is zero
        /** @type {?} */
        var isFixed = !grow && !shrink;
        /** @type {?} */
        var css = {};
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        /** @type {?} */
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN((/** @type {?} */ (basis)))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isValue && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (parent.hasWrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return (/** @type {?} */ (extendObject(css, { 'box-sizing': 'border-box' })));
    };
    /** @nocollapse */
    FlexStyleBuilder.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],] }] }
    ]; };
    /** @nocollapse */ FlexStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexStyleBuilder_Factory() { return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"])); }, token: FlexStyleBuilder, providedIn: "root" });
FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) { return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
            }] }]; }, null); })();
    return FlexStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$2 = [
    'fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md',
    'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md',
    'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm',
    'fxFlex.gt-md', 'fxFlex.gt-lg'
];
/** @type {?} */
var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexDirective, _super);
    function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.layoutConfig = layoutConfig;
        _this.DIRECTIVE_KEY = 'flex';
        _this.direction = '';
        _this.wrap = false;
        _this.flexGrow = '1';
        _this.flexShrink = '1';
        _this.init();
        if (_this.parentElement) {
            _this.marshal.trackValue(_this.parentElement, 'layout')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
                .subscribe(_this.onLayoutChange.bind(_this));
            _this.marshal.trackValue(_this.nativeElement, 'layout-align')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
                .subscribe(_this.triggerReflow.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        get: /**
         * @return {?}
         */
        function () { return this.flexShrink; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.flexShrink = value || '1';
            this.triggerReflow();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        get: /**
         * @return {?}
         */
        function () { return this.flexGrow; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.flexGrow = value || '1';
            this.triggerReflow();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    FlexDirective.prototype.onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    function (matcher) {
        /** @type {?} */
        var layout = matcher.value;
        /** @type {?} */
        var layoutParts = layout.split(' ');
        this.direction = layoutParts[0];
        this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
        this.triggerUpdate();
    };
    /** Input to this is exclusively the basis input value */
    /**
     * Input to this is exclusively the basis input value
     * @protected
     * @param {?} value
     * @return {?}
     */
    FlexDirective.prototype.updateWithValue = /**
     * Input to this is exclusively the basis input value
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        if (!this.direction) {
            this.direction = this.getFlexFlowDirection((/** @type {?} */ (this.parentElement)), addFlexToParent);
        }
        /** @type {?} */
        var direction = this.direction;
        /** @type {?} */
        var isHorizontal = direction.startsWith('row');
        /** @type {?} */
        var hasWrap = this.wrap;
        if (isHorizontal && hasWrap) {
            this.styleCache = flexRowWrapCache;
        }
        else if (isHorizontal && !hasWrap) {
            this.styleCache = flexRowCache;
        }
        else if (!isHorizontal && hasWrap) {
            this.styleCache = flexColumnWrapCache;
        }
        else if (!isHorizontal && !hasWrap) {
            this.styleCache = flexColumnCache;
        }
        /** @type {?} */
        var basis = String(value).replace(';', '');
        /** @type {?} */
        var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
        this.addStyles(parts.join(' '), { direction: direction, hasWrap: hasWrap });
    };
    /** Trigger a style reflow, usually based on a shrink/grow input event */
    /**
     * Trigger a style reflow, usually based on a shrink/grow input event
     * @protected
     * @return {?}
     */
    FlexDirective.prototype.triggerReflow = /**
     * Trigger a style reflow, usually based on a shrink/grow input event
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activatedValue = this.activatedValue;
        if (activatedValue !== undefined) {
            /** @type {?} */
            var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"])(activatedValue + '', this.flexGrow, this.flexShrink);
            this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
        }
    };
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],] }] },
        { type: FlexStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    FlexDirective.propDecorators = {
        shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShrink',] }],
        grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxGrow',] }]
    };
FlexDirective.ɵfac = function FlexDirective_Factory(t) { return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
FlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexDirective, inputs: { shrink: ["fxShrink", "shrink"], grow: ["fxGrow", "grow"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
            }] }, { type: FlexStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { shrink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['fxShrink']
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['fxGrow']
        }] }); })();
    return FlexDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
var DefaultFlexDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultFlexDirective, _super);
    function DefaultFlexDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$2;
        return _this;
    }
DefaultFlexDirective.ɵfac = function DefaultFlexDirective_Factory(t) { return ɵDefaultFlexDirective_BaseFactory(t || DefaultFlexDirective); };
DefaultFlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexDirective, selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]], inputs: { fxFlex: "fxFlex", "fxFlex.xs": "fxFlex.xs", "fxFlex.sm": "fxFlex.sm", "fxFlex.md": "fxFlex.md", "fxFlex.lg": "fxFlex.lg", "fxFlex.xl": "fxFlex.xl", "fxFlex.lt-sm": "fxFlex.lt-sm", "fxFlex.lt-md": "fxFlex.lt-md", "fxFlex.lt-lg": "fxFlex.lt-lg", "fxFlex.lt-xl": "fxFlex.lt-xl", "fxFlex.gt-xs": "fxFlex.gt-xs", "fxFlex.gt-sm": "fxFlex.gt-sm", "fxFlex.gt-md": "fxFlex.gt-md", "fxFlex.gt-lg": "fxFlex.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultFlexDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ inputs: inputs$2, selector: selector$2 }]
    }], null, null); })();
    return DefaultFlexDirective;
}(FlexDirective));
/** @type {?} */
var flexRowCache = new Map();
/** @type {?} */
var flexColumnCache = new Map();
/** @type {?} */
var flexRowWrapCache = new Map();
/** @type {?} */
var flexColumnWrapCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-order/flex-order.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexOrderStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOrderStyleBuilder, _super);
    function FlexOrderStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FlexOrderStyleBuilder.prototype.buildStyles = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { order: (value && parseInt(value, 10)) || '' };
    };
    /** @nocollapse */ FlexOrderStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexOrderStyleBuilder_Factory() { return new FlexOrderStyleBuilder(); }, token: FlexOrderStyleBuilder, providedIn: "root" });
FlexOrderStyleBuilder.ɵfac = function FlexOrderStyleBuilder_Factory(t) { return ɵFlexOrderStyleBuilder_BaseFactory(t || FlexOrderStyleBuilder); };
var ɵFlexOrderStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return FlexOrderStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$3 = [
    'fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md',
    'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md',
    'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm',
    'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'
];
/** @type {?} */
var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOrderDirective, _super);
    function FlexOrderDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'flex-order';
        _this.styleCache = flexOrderCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: FlexOrderStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) { return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
FlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexOrderDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: FlexOrderStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return FlexOrderDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var flexOrderCache = new Map();
var DefaultFlexOrderDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultFlexOrderDirective, _super);
    function DefaultFlexOrderDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$3;
        return _this;
    }
DefaultFlexOrderDirective.ɵfac = function DefaultFlexOrderDirective_Factory(t) { return ɵDefaultFlexOrderDirective_BaseFactory(t || DefaultFlexOrderDirective); };
DefaultFlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexOrderDirective, selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]], inputs: { fxFlexOrder: "fxFlexOrder", "fxFlexOrder.xs": "fxFlexOrder.xs", "fxFlexOrder.sm": "fxFlexOrder.sm", "fxFlexOrder.md": "fxFlexOrder.md", "fxFlexOrder.lg": "fxFlexOrder.lg", "fxFlexOrder.xl": "fxFlexOrder.xl", "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm", "fxFlexOrder.lt-md": "fxFlexOrder.lt-md", "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg", "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl", "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs", "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm", "fxFlexOrder.gt-md": "fxFlexOrder.gt-md", "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultFlexOrderDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();
    return DefaultFlexOrderDirective;
}(FlexOrderDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-offset/flex-offset.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexOffsetStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOffsetStyleBuilder, _super);
    function FlexOffsetStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} offset
     * @param {?} parent
     * @return {?}
     */
    FlexOffsetStyleBuilder.prototype.buildStyles = /**
     * @param {?} offset
     * @param {?} parent
     * @return {?}
     */
    function (offset, parent) {
        var _a;
        if (offset === '') {
            offset = '0';
        }
        /** @type {?} */
        var isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
        /** @type {?} */
        var styles = isFlowHorizontal(parent.layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) : { 'margin-top': "" + offset };
        return styles;
    };
    /** @nocollapse */ FlexOffsetStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexOffsetStyleBuilder_Factory() { return new FlexOffsetStyleBuilder(); }, token: FlexOffsetStyleBuilder, providedIn: "root" });
FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) { return ɵFlexOffsetStyleBuilder_BaseFactory(t || FlexOffsetStyleBuilder); };
var ɵFlexOffsetStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return FlexOffsetStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$4 = [
    'fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md',
    'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md',
    'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm',
    'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'
];
/** @type {?} */
var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOffsetDirective, _super);
    function FlexOffsetDirective(elRef, directionality, styleBuilder, marshal, styler) {
        var _this = _super.call(this, elRef, styleBuilder, styler, marshal) || this;
        _this.directionality = directionality;
        _this.DIRECTIVE_KEY = 'flex-offset';
        _this.init([_this.directionality.change]);
        // Parent DOM `layout-gap` with affect the nested child with `flex-offset`
        if (_this.parentElement) {
            _this.marshal
                .trackValue(_this.parentElement, 'layout-gap')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
                .subscribe(_this.triggerUpdate.bind(_this));
        }
        return _this;
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @protected
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @protected
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        // The flex-direction of this element's flex container. Defaults to 'row'.
        /** @type {?} */
        var layout = this.getFlexFlowDirection((/** @type {?} */ (this.parentElement)), true);
        /** @type {?} */
        var isRtl = this.directionality.value === 'rtl';
        if (layout === 'row' && isRtl) {
            this.styleCache = flexOffsetCacheRowRtl;
        }
        else if (layout === 'row' && !isRtl) {
            this.styleCache = flexOffsetCacheRowLtr;
        }
        else if (layout === 'column' && isRtl) {
            this.styleCache = flexOffsetCacheColumnRtl;
        }
        else if (layout === 'column' && !isRtl) {
            this.styleCache = flexOffsetCacheColumnLtr;
        }
        this.addStyles(value + '', { layout: layout, isRtl: isRtl });
    };
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] },
        { type: FlexOffsetStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) { return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"])); };
FlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexOffsetDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"] }, { type: FlexOffsetStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }]; }, null); })();
    return FlexOffsetDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
var DefaultFlexOffsetDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultFlexOffsetDirective, _super);
    function DefaultFlexOffsetDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$4;
        return _this;
    }
DefaultFlexOffsetDirective.ɵfac = function DefaultFlexOffsetDirective_Factory(t) { return ɵDefaultFlexOffsetDirective_BaseFactory(t || DefaultFlexOffsetDirective); };
DefaultFlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexOffsetDirective, selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]], inputs: { fxFlexOffset: "fxFlexOffset", "fxFlexOffset.xs": "fxFlexOffset.xs", "fxFlexOffset.sm": "fxFlexOffset.sm", "fxFlexOffset.md": "fxFlexOffset.md", "fxFlexOffset.lg": "fxFlexOffset.lg", "fxFlexOffset.xl": "fxFlexOffset.xl", "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm", "fxFlexOffset.lt-md": "fxFlexOffset.lt-md", "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg", "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl", "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs", "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm", "fxFlexOffset.gt-md": "fxFlexOffset.gt-md", "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultFlexOffsetDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$4, inputs: inputs$4 }]
    }], null, null); })();
    return DefaultFlexOffsetDirective;
}(FlexOffsetDirective));
/** @type {?} */
var flexOffsetCacheRowRtl = new Map();
/** @type {?} */
var flexOffsetCacheColumnRtl = new Map();
/** @type {?} */
var flexOffsetCacheRowLtr = new Map();
/** @type {?} */
var flexOffsetCacheColumnLtr = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-align/flex-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexAlignStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexAlignStyleBuilder, _super);
    function FlexAlignStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    FlexAlignStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        input = input || 'stretch';
        /** @type {?} */
        var styles = {};
        // Cross-axis
        switch (input) {
            case 'start':
                styles['align-self'] = 'flex-start';
                break;
            case 'end':
                styles['align-self'] = 'flex-end';
                break;
            default:
                styles['align-self'] = input;
                break;
        }
        return styles;
    };
    /** @nocollapse */ FlexAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexAlignStyleBuilder_Factory() { return new FlexAlignStyleBuilder(); }, token: FlexAlignStyleBuilder, providedIn: "root" });
FlexAlignStyleBuilder.ɵfac = function FlexAlignStyleBuilder_Factory(t) { return ɵFlexAlignStyleBuilder_BaseFactory(t || FlexAlignStyleBuilder); };
var ɵFlexAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return FlexAlignStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$5 = [
    'fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md',
    'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md',
    'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm',
    'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'
];
/** @type {?} */
var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexAlignDirective, _super);
    function FlexAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'flex-align';
        _this.styleCache = flexAlignCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: FlexAlignStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) { return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
FlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: FlexAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return FlexAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var flexAlignCache = new Map();
var DefaultFlexAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultFlexAlignDirective, _super);
    function DefaultFlexAlignDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$5;
        return _this;
    }
DefaultFlexAlignDirective.ɵfac = function DefaultFlexAlignDirective_Factory(t) { return ɵDefaultFlexAlignDirective_BaseFactory(t || DefaultFlexAlignDirective); };
DefaultFlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexAlignDirective, selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]], inputs: { fxFlexAlign: "fxFlexAlign", "fxFlexAlign.xs": "fxFlexAlign.xs", "fxFlexAlign.sm": "fxFlexAlign.sm", "fxFlexAlign.md": "fxFlexAlign.md", "fxFlexAlign.lg": "fxFlexAlign.lg", "fxFlexAlign.xl": "fxFlexAlign.xl", "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm", "fxFlexAlign.lt-md": "fxFlexAlign.lt-md", "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg", "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl", "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs", "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm", "fxFlexAlign.gt-md": "fxFlexAlign.gt-md", "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultFlexAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$5, inputs: inputs$5 }]
    }], null, null); })();
    return DefaultFlexAlignDirective;
}(FlexAlignDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-fill/flex-fill.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
var FlexFillStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexFillStyleBuilder, _super);
    function FlexFillStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} _input
     * @return {?}
     */
    FlexFillStyleBuilder.prototype.buildStyles = /**
     * @param {?} _input
     * @return {?}
     */
    function (_input) {
        return FLEX_FILL_CSS;
    };
    /** @nocollapse */ FlexFillStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexFillStyleBuilder_Factory() { return new FlexFillStyleBuilder(); }, token: FlexFillStyleBuilder, providedIn: "root" });
FlexFillStyleBuilder.ɵfac = function FlexFillStyleBuilder_Factory(t) { return ɵFlexFillStyleBuilder_BaseFactory(t || FlexFillStyleBuilder); };
var ɵFlexFillStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return FlexFillStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexFillDirective, _super);
    function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.styleCache = flexFillCache;
        _this.addStyles('');
        return _this;
    }
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: FlexFillStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) { return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
FlexFillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexFillDirective, selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexFillDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: "[fxFill], [fxFlexFill]" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: FlexFillStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return FlexFillDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var flexFillCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout-align/layout-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutAlignStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAlignStyleBuilder, _super);
    function LayoutAlignStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} align
     * @param {?} parent
     * @return {?}
     */
    LayoutAlignStyleBuilder.prototype.buildStyles = /**
     * @param {?} align
     * @param {?} parent
     * @return {?}
     */
    function (align, parent) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                css['align-items'] = 'stretch';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                css['align-items'] = 'stretch';
                break;
            case 'baseline':
                css['align-content'] = 'stretch';
                css['align-items'] = 'baseline';
                break;
            case 'stretch':
            default: // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return (/** @type {?} */ (extendObject(css, {
            'display': parent.inline ? 'inline-flex' : 'flex',
            'flex-direction': parent.layout,
            'box-sizing': 'border-box',
            'max-width': crossAxis === 'stretch' ?
                !isFlowHorizontal(parent.layout) ? '100%' : null : null,
            'max-height': crossAxis === 'stretch' ?
                isFlowHorizontal(parent.layout) ? '100%' : null : null,
        })));
    };
    /** @nocollapse */ LayoutAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutAlignStyleBuilder_Factory() { return new LayoutAlignStyleBuilder(); }, token: LayoutAlignStyleBuilder, providedIn: "root" });
LayoutAlignStyleBuilder.ɵfac = function LayoutAlignStyleBuilder_Factory(t) { return ɵLayoutAlignStyleBuilder_BaseFactory(t || LayoutAlignStyleBuilder); };
var ɵLayoutAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return LayoutAlignStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
/** @type {?} */
var inputs$6 = [
    'fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md',
    'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md',
    'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm',
    'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'
];
/** @type {?} */
var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAlignDirective, _super);
    function LayoutAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'layout-align';
        _this.layout = 'row'; // default flex-direction
        // default flex-direction
        _this.inline = false; // default inline value
        _this.init();
        _this.marshal.trackValue(_this.nativeElement, 'layout')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroySubject))
            .subscribe(_this.onLayoutChange.bind(_this));
        return _this;
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    LayoutAlignDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var layout = this.layout || 'row';
        /** @type {?} */
        var inline = this.inline;
        if (layout === 'row' && inline) {
            this.styleCache = layoutAlignHorizontalInlineCache;
        }
        else if (layout === 'row' && !inline) {
            this.styleCache = layoutAlignHorizontalCache;
        }
        else if (layout === 'row-reverse' && inline) {
            this.styleCache = layoutAlignHorizontalRevInlineCache;
        }
        else if (layout === 'row-reverse' && !inline) {
            this.styleCache = layoutAlignHorizontalRevCache;
        }
        else if (layout === 'column' && inline) {
            this.styleCache = layoutAlignVerticalInlineCache;
        }
        else if (layout === 'column' && !inline) {
            this.styleCache = layoutAlignVerticalCache;
        }
        else if (layout === 'column-reverse' && inline) {
            this.styleCache = layoutAlignVerticalRevInlineCache;
        }
        else if (layout === 'column-reverse' && !inline) {
            this.styleCache = layoutAlignVerticalRevCache;
        }
        this.addStyles(value, { layout: layout, inline: inline });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    LayoutAlignDirective.prototype.onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    function (matcher) {
        var _this = this;
        /** @type {?} */
        var layoutKeys = matcher.value.split(' ');
        this.layout = layoutKeys[0];
        this.inline = matcher.value.includes('inline');
        if (!LAYOUT_VALUES.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x === _this.layout; }))) {
            this.layout = 'row';
        }
        this.triggerUpdate();
    };
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: LayoutAlignStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) { return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
LayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: LayoutAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return LayoutAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
var DefaultLayoutAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultLayoutAlignDirective, _super);
    function DefaultLayoutAlignDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$6;
        return _this;
    }
DefaultLayoutAlignDirective.ɵfac = function DefaultLayoutAlignDirective_Factory(t) { return ɵDefaultLayoutAlignDirective_BaseFactory(t || DefaultLayoutAlignDirective); };
DefaultLayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutAlignDirective, selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]], inputs: { fxLayoutAlign: "fxLayoutAlign", "fxLayoutAlign.xs": "fxLayoutAlign.xs", "fxLayoutAlign.sm": "fxLayoutAlign.sm", "fxLayoutAlign.md": "fxLayoutAlign.md", "fxLayoutAlign.lg": "fxLayoutAlign.lg", "fxLayoutAlign.xl": "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultLayoutAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$6, inputs: inputs$6 }]
    }], null, null); })();
    return DefaultLayoutAlignDirective;
}(LayoutAlignDirective));
/** @type {?} */
var layoutAlignHorizontalCache = new Map();
/** @type {?} */
var layoutAlignVerticalCache = new Map();
/** @type {?} */
var layoutAlignHorizontalRevCache = new Map();
/** @type {?} */
var layoutAlignVerticalRevCache = new Map();
/** @type {?} */
var layoutAlignHorizontalInlineCache = new Map();
/** @type {?} */
var layoutAlignVerticalInlineCache = new Map();
/** @type {?} */
var layoutAlignHorizontalRevInlineCache = new Map();
/** @type {?} */
var layoutAlignVerticalRevInlineCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    DefaultLayoutDirective,
    DefaultLayoutGapDirective,
    DefaultLayoutAlignDirective,
    DefaultFlexOrderDirective,
    DefaultFlexOffsetDirective,
    FlexFillDirective,
    DefaultFlexAlignDirective,
    DefaultFlexDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
FlexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlexModule });
FlexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FlexModule_Factory(t) { return new (t || FlexModule)(); }, imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlexModule, { declarations: function () { return [DefaultLayoutDirective,
        DefaultLayoutGapDirective,
        DefaultLayoutAlignDirective,
        DefaultFlexOrderDirective,
        DefaultFlexOffsetDirective,
        FlexFillDirective,
        DefaultFlexAlignDirective,
        DefaultFlexDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]]; }, exports: function () { return [DefaultLayoutDirective,
        DefaultLayoutGapDirective,
        DefaultLayoutAlignDirective,
        DefaultFlexOrderDirective,
        DefaultFlexOffsetDirective,
        FlexFillDirective,
        DefaultFlexAlignDirective,
        DefaultFlexDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"]],
                declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES),
                exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES)
            }]
    }], function () { return []; }, null); })();
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: flex/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: flex/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=flex.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/grid.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/grid.es5.js ***!
  \*************************************************************************/
/*! exports provided: GridModule, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function() { return DefaultGridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function() { return GridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function() { return GridAlignColumnsStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function() { return DefaultGridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function() { return GridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function() { return GridAlignRowsStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function() { return DefaultGridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function() { return GridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function() { return GridAreaStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function() { return DefaultGridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function() { return GridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function() { return GridAreasStyleBuiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function() { return DefaultGridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function() { return GridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function() { return GridAutoStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function() { return DefaultGridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function() { return GridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function() { return GridColumnStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function() { return DefaultGridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function() { return GridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function() { return GridColumnsStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function() { return DefaultGridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function() { return GridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function() { return GridGapStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function() { return DefaultGridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function() { return GridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function() { return GridAlignStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function() { return DefaultGridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function() { return GridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function() { return GridRowStyleBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function() { return DefaultGridRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function() { return GridRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function() { return GridRowsStyleBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * Generated from: grid/grid-align/grid-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */


var ROW_DEFAULT = 'stretch';
/** @type {?} */
var COL_DEFAULT = 'stretch';
var GridAlignStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignStyleBuilder, _super);
    function GridAlignStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridAlignStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return buildCss(input || ROW_DEFAULT);
    };
    /** @nocollapse */ GridAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignStyleBuilder_Factory() { return new GridAlignStyleBuilder(); }, token: GridAlignStyleBuilder, providedIn: "root" });
GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) { return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder); };
var ɵGridAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignDirective, _super);
    function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align';
        _this.styleCache = alignCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridAlignDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridAlignStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) { return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return GridAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var alignCache = new Map();
/** @type {?} */
var inputs = [
    'gdGridAlign',
    'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl',
    'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl',
    'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'
];
/** @type {?} */
var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
var DefaultGridAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAlignDirective, _super);
    function DefaultGridAlignDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs;
        return _this;
    }
DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) { return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective); };
DefaultGridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignDirective, selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]], inputs: { gdGridAlign: "gdGridAlign", "gdGridAlign.xs": "gdGridAlign.xs", "gdGridAlign.sm": "gdGridAlign.sm", "gdGridAlign.md": "gdGridAlign.md", "gdGridAlign.lg": "gdGridAlign.lg", "gdGridAlign.xl": "gdGridAlign.xl", "gdGridAlign.lt-sm": "gdGridAlign.lt-sm", "gdGridAlign.lt-md": "gdGridAlign.lt-md", "gdGridAlign.lt-lg": "gdGridAlign.lt-lg", "gdGridAlign.lt-xl": "gdGridAlign.lt-xl", "gdGridAlign.gt-xs": "gdGridAlign.gt-xs", "gdGridAlign.gt-sm": "gdGridAlign.gt-sm", "gdGridAlign.gt-md": "gdGridAlign.gt-md", "gdGridAlign.gt-lg": "gdGridAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector, inputs: inputs }]
    }], null, null); })();
    return DefaultGridAlignDirective;
}(GridAlignDirective));
/**
 * @param {?=} align
 * @return {?}
 */
function buildCss(align) {
    if (align === void 0) { align = ''; }
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), rowAxis = _a[0], columnAxis = _a[1];
    // Row axis
    switch (rowAxis) {
        case 'end':
            css['justify-self'] = 'end';
            break;
        case 'center':
            css['justify-self'] = 'center';
            break;
        case 'stretch':
            css['justify-self'] = 'stretch';
            break;
        case 'start':
            css['justify-self'] = 'start';
            break;
        default:
            css['justify-self'] = ROW_DEFAULT; // default row axis
            break;
    }
    // Column axis
    switch (columnAxis) {
        case 'end':
            css['align-self'] = 'end';
            break;
        case 'center':
            css['align-self'] = 'center';
            break;
        case 'stretch':
            css['align-self'] = 'stretch';
            break;
        case 'start':
            css['align-self'] = 'start';
            break;
        default:
            css['align-self'] = COL_DEFAULT; // default column axis
            break;
    }
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-columns/align-columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_MAIN = 'start';
/** @type {?} */
var DEFAULT_CROSS = 'stretch';
var GridAlignColumnsStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignColumnsStyleBuilder, _super);
    function GridAlignColumnsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAlignColumnsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return buildCss$1(input || DEFAULT_MAIN + " " + DEFAULT_CROSS, parent.inline);
    };
    /** @nocollapse */ GridAlignColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignColumnsStyleBuilder_Factory() { return new GridAlignColumnsStyleBuilder(); }, token: GridAlignColumnsStyleBuilder, providedIn: "root" });
GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) { return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder); };
var ɵGridAlignColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignColumnsStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAlignColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignColumnsDirective, _super);
    function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align-columns';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAlignColumnsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAlignColumnsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridAlignColumnsStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridAlignColumnsDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) { return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridAlignColumnsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridAlignColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var alignColumnsCache = new Map();
/** @type {?} */
var alignColumnsInlineCache = new Map();
/** @type {?} */
var inputs$1 = [
    'gdAlignColumns',
    'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md',
    'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm',
    'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl',
    'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md',
    'gdAlignColumns.gt-lg'
];
/** @type {?} */
var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
var DefaultGridAlignColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAlignColumnsDirective, _super);
    function DefaultGridAlignColumnsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$1;
        return _this;
    }
DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) { return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective); };
DefaultGridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignColumnsDirective, selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]], inputs: { gdAlignColumns: "gdAlignColumns", "gdAlignColumns.xs": "gdAlignColumns.xs", "gdAlignColumns.sm": "gdAlignColumns.sm", "gdAlignColumns.md": "gdAlignColumns.md", "gdAlignColumns.lg": "gdAlignColumns.lg", "gdAlignColumns.xl": "gdAlignColumns.xl", "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md": "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md": "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAlignColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
    return DefaultGridAlignColumnsDirective;
}(GridAlignColumnsDirective));
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$1(align, inline) {
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
    // Main axis
    switch (mainAxis) {
        case 'center':
            css['align-content'] = 'center';
            break;
        case 'space-around':
            css['align-content'] = 'space-around';
            break;
        case 'space-between':
            css['align-content'] = 'space-between';
            break;
        case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;
        case 'end':
            css['align-content'] = 'end';
            break;
        case 'start':
            css['align-content'] = 'start';
            break;
        case 'stretch':
            css['align-content'] = 'stretch';
            break;
        default:
            css['align-content'] = DEFAULT_MAIN; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
            css['align-items'] = 'start';
            break;
        case 'center':
            css['align-items'] = 'center';
            break;
        case 'end':
            css['align-items'] = 'end';
            break;
        case 'stretch':
            css['align-items'] = 'stretch';
            break;
        default: // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-rows/align-rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_MAIN$1 = 'start';
/** @type {?} */
var DEFAULT_CROSS$1 = 'stretch';
var GridAlignRowsStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignRowsStyleBuilder, _super);
    function GridAlignRowsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAlignRowsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return buildCss$2(input || DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1, parent.inline);
    };
    /** @nocollapse */ GridAlignRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignRowsStyleBuilder_Factory() { return new GridAlignRowsStyleBuilder(); }, token: GridAlignRowsStyleBuilder, providedIn: "root" });
GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) { return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder); };
var ɵGridAlignRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAlignRowsStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAlignRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignRowsDirective, _super);
    function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-align-rows';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAlignRowsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAlignRowsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAlignRowsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridAlignRowsStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridAlignRowsDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) { return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridAlignRowsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridAlignRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var alignRowsCache = new Map();
/** @type {?} */
var alignRowsInlineCache = new Map();
/** @type {?} */
var inputs$2 = [
    'gdAlignRows',
    'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md',
    'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm',
    'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl',
    'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md',
    'gdAlignRows.gt-lg'
];
/** @type {?} */
var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
var DefaultGridAlignRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAlignRowsDirective, _super);
    function DefaultGridAlignRowsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$2;
        return _this;
    }
DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) { return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective); };
DefaultGridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignRowsDirective, selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]], inputs: { gdAlignRows: "gdAlignRows", "gdAlignRows.xs": "gdAlignRows.xs", "gdAlignRows.sm": "gdAlignRows.sm", "gdAlignRows.md": "gdAlignRows.md", "gdAlignRows.lg": "gdAlignRows.lg", "gdAlignRows.xl": "gdAlignRows.xl", "gdAlignRows.lt-sm": "gdAlignRows.lt-sm", "gdAlignRows.lt-md": "gdAlignRows.lt-md", "gdAlignRows.lt-lg": "gdAlignRows.lt-lg", "gdAlignRows.lt-xl": "gdAlignRows.lt-xl", "gdAlignRows.gt-xs": "gdAlignRows.gt-xs", "gdAlignRows.gt-sm": "gdAlignRows.gt-sm", "gdAlignRows.gt-md": "gdAlignRows.gt-md", "gdAlignRows.gt-lg": "gdAlignRows.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAlignRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$2, inputs: inputs$2 }]
    }], null, null); })();
    return DefaultGridAlignRowsDirective;
}(GridAlignRowsDirective));
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$2(align, inline) {
    /** @type {?} */
    var css = {};
    var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
    // Main axis
    switch (mainAxis) {
        case 'center':
        case 'space-around':
        case 'space-between':
        case 'space-evenly':
        case 'end':
        case 'start':
        case 'stretch':
            css['justify-content'] = mainAxis;
            break;
        default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
        case 'center':
        case 'end':
        case 'stretch':
            css['justify-items'] = crossAxis;
            break;
        default: // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/area/area.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE = 'auto';
var GridAreaStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreaStyleBuilder, _super);
    function GridAreaStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridAreaStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-area': input || DEFAULT_VALUE };
    };
    /** @nocollapse */ GridAreaStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAreaStyleBuilder_Factory() { return new GridAreaStyleBuilder(); }, token: GridAreaStyleBuilder, providedIn: "root" });
GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) { return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder); };
var ɵGridAreaStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAreaStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAreaDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreaDirective, _super);
    function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-area';
        _this.styleCache = gridAreaCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridAreaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: GridAreaStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) { return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAreaDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: GridAreaStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return GridAreaDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var gridAreaCache = new Map();
/** @type {?} */
var inputs$3 = [
    'gdArea',
    'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl',
    'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl',
    'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'
];
/** @type {?} */
var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
var DefaultGridAreaDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAreaDirective, _super);
    function DefaultGridAreaDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$3;
        return _this;
    }
DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) { return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective); };
DefaultGridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAreaDirective, selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]], inputs: { gdArea: "gdArea", "gdArea.xs": "gdArea.xs", "gdArea.sm": "gdArea.sm", "gdArea.md": "gdArea.md", "gdArea.lg": "gdArea.lg", "gdArea.xl": "gdArea.xl", "gdArea.lt-sm": "gdArea.lt-sm", "gdArea.lt-md": "gdArea.lt-md", "gdArea.lt-lg": "gdArea.lt-lg", "gdArea.lt-xl": "gdArea.lt-xl", "gdArea.gt-xs": "gdArea.gt-xs", "gdArea.gt-sm": "gdArea.gt-sm", "gdArea.gt-md": "gdArea.gt-md", "gdArea.gt-lg": "gdArea.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAreaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();
    return DefaultGridAreaDirective;
}(GridAreaDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/areas/areas.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$1 = 'none';
/** @type {?} */
var DELIMETER = '|';
var GridAreasStyleBuiler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreasStyleBuiler, _super);
    function GridAreasStyleBuiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAreasStyleBuiler.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        /** @type {?} */
        var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return "\"" + v.trim() + "\""; }));
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    };
    /** @nocollapse */ GridAreasStyleBuiler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAreasStyleBuiler_Factory() { return new GridAreasStyleBuiler(); }, token: GridAreasStyleBuiler, providedIn: "root" });
GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) { return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler); };
var ɵGridAreasStyleBuiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAreasStyleBuiler;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAreasDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreasDirective, _super);
    function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-areas';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAreasDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAreasDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? areasInlineCache : areasCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAreasDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: GridAreasStyleBuiler },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridAreasDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) { return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAreasDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: GridAreasStyleBuiler }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridAreasDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var areasCache = new Map();
/** @type {?} */
var areasInlineCache = new Map();
/** @type {?} */
var inputs$4 = [
    'gdAreas',
    'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl',
    'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl',
    'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'
];
/** @type {?} */
var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
var DefaultGridAreasDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAreasDirective, _super);
    function DefaultGridAreasDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$4;
        return _this;
    }
DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) { return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective); };
DefaultGridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAreasDirective, selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]], inputs: { gdAreas: "gdAreas", "gdAreas.xs": "gdAreas.xs", "gdAreas.sm": "gdAreas.sm", "gdAreas.md": "gdAreas.md", "gdAreas.lg": "gdAreas.lg", "gdAreas.xl": "gdAreas.xl", "gdAreas.lt-sm": "gdAreas.lt-sm", "gdAreas.lt-md": "gdAreas.lt-md", "gdAreas.lt-lg": "gdAreas.lt-lg", "gdAreas.lt-xl": "gdAreas.lt-xl", "gdAreas.gt-xs": "gdAreas.gt-xs", "gdAreas.gt-sm": "gdAreas.gt-sm", "gdAreas.gt-md": "gdAreas.gt-md", "gdAreas.gt-lg": "gdAreas.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAreasDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$4, inputs: inputs$4 }]
    }], null, null); })();
    return DefaultGridAreasDirective;
}(GridAreasDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/auto/auto.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$2 = 'initial';
var GridAutoStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAutoStyleBuilder, _super);
    function GridAutoStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridAutoStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        var _a = (input || DEFAULT_VALUE$2).split(' '), direction = _a[0], dense = _a[1];
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    };
    /** @nocollapse */ GridAutoStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAutoStyleBuilder_Factory() { return new GridAutoStyleBuilder(); }, token: GridAutoStyleBuilder, providedIn: "root" });
GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) { return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder); };
var ɵGridAutoStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridAutoStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridAutoDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAutoDirective, _super);
    function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this._inline = false;
        _this.DIRECTIVE_KEY = 'grid-auto';
        _this.init();
        return _this;
    }
    Object.defineProperty(GridAutoDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridAutoDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? autoInlineCache : autoCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridAutoDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridAutoStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridAutoDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) { return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAutoDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridAutoStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridAutoDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var autoCache = new Map();
/** @type {?} */
var autoInlineCache = new Map();
/** @type {?} */
var inputs$5 = [
    'gdAuto',
    'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl',
    'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl',
    'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'
];
/** @type {?} */
var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
var DefaultGridAutoDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridAutoDirective, _super);
    function DefaultGridAutoDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$5;
        return _this;
    }
DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) { return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective); };
DefaultGridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAutoDirective, selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]], inputs: { gdAuto: "gdAuto", "gdAuto.xs": "gdAuto.xs", "gdAuto.sm": "gdAuto.sm", "gdAuto.md": "gdAuto.md", "gdAuto.lg": "gdAuto.lg", "gdAuto.xl": "gdAuto.xl", "gdAuto.lt-sm": "gdAuto.lt-sm", "gdAuto.lt-md": "gdAuto.lt-md", "gdAuto.lt-lg": "gdAuto.lt-lg", "gdAuto.lt-xl": "gdAuto.lt-xl", "gdAuto.gt-xs": "gdAuto.gt-xs", "gdAuto.gt-sm": "gdAuto.gt-sm", "gdAuto.gt-md": "gdAuto.gt-md", "gdAuto.gt-lg": "gdAuto.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridAutoDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$5, inputs: inputs$5 }]
    }], null, null); })();
    return DefaultGridAutoDirective;
}(GridAutoDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/column/column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$3 = 'auto';
var GridColumnStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnStyleBuilder, _super);
    function GridColumnStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridColumnStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-column': input || DEFAULT_VALUE$3 };
    };
    /** @nocollapse */ GridColumnStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridColumnStyleBuilder_Factory() { return new GridColumnStyleBuilder(); }, token: GridColumnStyleBuilder, providedIn: "root" });
GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) { return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder); };
var ɵGridColumnStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridColumnStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridColumnDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnDirective, _super);
    function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-column';
        _this.styleCache = columnCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridColumnDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridColumnStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) { return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridColumnDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridColumnStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return GridColumnDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var columnCache = new Map();
/** @type {?} */
var inputs$6 = [
    'gdColumn',
    'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl',
    'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl',
    'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'
];
/** @type {?} */
var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var DefaultGridColumnDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridColumnDirective, _super);
    function DefaultGridColumnDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$6;
        return _this;
    }
DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) { return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective); };
DefaultGridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridColumnDirective, selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]], inputs: { gdColumn: "gdColumn", "gdColumn.xs": "gdColumn.xs", "gdColumn.sm": "gdColumn.sm", "gdColumn.md": "gdColumn.md", "gdColumn.lg": "gdColumn.lg", "gdColumn.xl": "gdColumn.xl", "gdColumn.lt-sm": "gdColumn.lt-sm", "gdColumn.lt-md": "gdColumn.lt-md", "gdColumn.lt-lg": "gdColumn.lt-lg", "gdColumn.lt-xl": "gdColumn.lt-xl", "gdColumn.gt-xs": "gdColumn.gt-xs", "gdColumn.gt-sm": "gdColumn.gt-sm", "gdColumn.gt-md": "gdColumn.gt-md", "gdColumn.gt-lg": "gdColumn.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridColumnDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$6, inputs: inputs$6 }]
    }], null, null); })();
    return DefaultGridColumnDirective;
}(GridColumnDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/columns/columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$4 = 'none';
/** @type {?} */
var AUTO_SPECIFIER = '!';
var GridColumnsStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnsStyleBuilder, _super);
    function GridColumnsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridColumnsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        input = input || DEFAULT_VALUE$4;
        /** @type {?} */
        var auto = false;
        if (input.endsWith(AUTO_SPECIFIER)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = input;
        return css;
    };
    /** @nocollapse */ GridColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridColumnsStyleBuilder_Factory() { return new GridColumnsStyleBuilder(); }, token: GridColumnsStyleBuilder, providedIn: "root" });
GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) { return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder); };
var ɵGridColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridColumnsStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnsDirective, _super);
    function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-columns';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridColumnsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridColumnsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? columnsInlineCache : columnsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridColumnsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridColumnsStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridColumnsDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) { return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridColumnsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var columnsCache = new Map();
/** @type {?} */
var columnsInlineCache = new Map();
/** @type {?} */
var inputs$7 = [
    'gdColumns',
    'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl',
    'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl',
    'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'
];
/** @type {?} */
var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var DefaultGridColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridColumnsDirective, _super);
    function DefaultGridColumnsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$7;
        return _this;
    }
DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) { return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective); };
DefaultGridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridColumnsDirective, selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]], inputs: { gdColumns: "gdColumns", "gdColumns.xs": "gdColumns.xs", "gdColumns.sm": "gdColumns.sm", "gdColumns.md": "gdColumns.md", "gdColumns.lg": "gdColumns.lg", "gdColumns.xl": "gdColumns.xl", "gdColumns.lt-sm": "gdColumns.lt-sm", "gdColumns.lt-md": "gdColumns.lt-md", "gdColumns.lt-lg": "gdColumns.lt-lg", "gdColumns.lt-xl": "gdColumns.lt-xl", "gdColumns.gt-xs": "gdColumns.gt-xs", "gdColumns.gt-sm": "gdColumns.gt-sm", "gdColumns.gt-md": "gdColumns.gt-md", "gdColumns.gt-lg": "gdColumns.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$7, inputs: inputs$7 }]
    }], null, null); })();
    return DefaultGridColumnsDirective;
}(GridColumnsDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/gap/gap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$5 = '0';
var GridGapStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridGapStyleBuilder, _super);
    function GridGapStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridGapStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-gap': input || DEFAULT_VALUE$5
        };
    };
    /** @nocollapse */ GridGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridGapStyleBuilder_Factory() { return new GridGapStyleBuilder(); }, token: GridGapStyleBuilder, providedIn: "root" });
GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) { return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder); };
var ɵGridGapStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridGapStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridGapStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridGapDirective, _super);
    function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this = _super.call(this, elRef, styleBuilder, styleUtils, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-gap';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridGapDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridGapDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? gapInlineCache : gapCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridGapDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: GridGapStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridGapDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridGapDirective.ɵfac = function GridGapDirective_Factory(t) { return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridGapDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: GridGapStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var gapCache = new Map();
/** @type {?} */
var gapInlineCache = new Map();
/** @type {?} */
var inputs$8 = [
    'gdGap',
    'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl',
    'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl',
    'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'
];
/** @type {?} */
var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
var DefaultGridGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridGapDirective, _super);
    function DefaultGridGapDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$8;
        return _this;
    }
DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) { return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective); };
DefaultGridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridGapDirective, selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]], inputs: { gdGap: "gdGap", "gdGap.xs": "gdGap.xs", "gdGap.sm": "gdGap.sm", "gdGap.md": "gdGap.md", "gdGap.lg": "gdGap.lg", "gdGap.xl": "gdGap.xl", "gdGap.lt-sm": "gdGap.lt-sm", "gdGap.lt-md": "gdGap.lt-md", "gdGap.lt-lg": "gdGap.lt-lg", "gdGap.lt-xl": "gdGap.lt-xl", "gdGap.gt-xs": "gdGap.gt-xs", "gdGap.gt-sm": "gdGap.gt-sm", "gdGap.gt-md": "gdGap.gt-md", "gdGap.gt-lg": "gdGap.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridGapDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$8, inputs: inputs$8 }]
    }], null, null); })();
    return DefaultGridGapDirective;
}(GridGapDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/row/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$6 = 'auto';
var GridRowStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowStyleBuilder, _super);
    function GridRowStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    GridRowStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return { 'grid-row': input || DEFAULT_VALUE$6 };
    };
    /** @nocollapse */ GridRowStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridRowStyleBuilder_Factory() { return new GridRowStyleBuilder(); }, token: GridRowStyleBuilder, providedIn: "root" });
GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) { return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder); };
var ɵGridRowStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridRowStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridRowDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowDirective, _super);
    function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-row';
        _this.styleCache = rowCache;
        _this.init();
        return _this;
    }
    /** @nocollapse */
    GridRowDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridRowStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
GridRowDirective.ɵfac = function GridRowDirective_Factory(t) { return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridRowDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridRowStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, null); })();
    return GridRowDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var rowCache = new Map();
/** @type {?} */
var inputs$9 = [
    'gdRow',
    'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl',
    'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl',
    'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'
];
/** @type {?} */
var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var DefaultGridRowDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridRowDirective, _super);
    function DefaultGridRowDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$9;
        return _this;
    }
DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) { return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective); };
DefaultGridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridRowDirective, selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]], inputs: { gdRow: "gdRow", "gdRow.xs": "gdRow.xs", "gdRow.sm": "gdRow.sm", "gdRow.md": "gdRow.md", "gdRow.lg": "gdRow.lg", "gdRow.xl": "gdRow.xl", "gdRow.lt-sm": "gdRow.lt-sm", "gdRow.lt-md": "gdRow.lt-md", "gdRow.lt-lg": "gdRow.lt-lg", "gdRow.lt-xl": "gdRow.lt-xl", "gdRow.gt-xs": "gdRow.gt-xs", "gdRow.gt-sm": "gdRow.gt-sm", "gdRow.gt-md": "gdRow.gt-md", "gdRow.gt-lg": "gdRow.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridRowDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$9, inputs: inputs$9 }]
    }], null, null); })();
    return DefaultGridRowDirective;
}(GridRowDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/rows/rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_VALUE$7 = 'none';
/** @type {?} */
var AUTO_SPECIFIER$1 = '!';
var GridRowsStyleBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowsStyleBuilder, _super);
    function GridRowsStyleBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    GridRowsStyleBuilder.prototype.buildStyles = /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    function (input, parent) {
        input = input || DEFAULT_VALUE$7;
        /** @type {?} */
        var auto = false;
        if (input.endsWith(AUTO_SPECIFIER$1)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = input;
        return css;
    };
    /** @nocollapse */ GridRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridRowsStyleBuilder_Factory() { return new GridRowsStyleBuilder(); }, token: GridRowsStyleBuilder, providedIn: "root" });
GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) { return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder); };
var ɵGridRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
    return GridRowsStyleBuilder;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]));
var GridRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowsDirective, _super);
    function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this = _super.call(this, elementRef, styleBuilder, styler, marshal) || this;
        _this.DIRECTIVE_KEY = 'grid-rows';
        _this._inline = false;
        _this.init();
        return _this;
    }
    Object.defineProperty(GridRowsDirective.prototype, "inline", {
        get: /**
         * @return {?}
         */
        function () { return this._inline; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Protected methods
    // *********************************************
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    GridRowsDirective.prototype.updateWithValue = 
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.styleCache = this.inline ? rowsInlineCache : rowsCache;
        this.addStyles(value, { inline: this.inline });
    };
    /** @nocollapse */
    GridRowsDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: GridRowsStyleBuilder },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }
    ]; };
    GridRowsDirective.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) { return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"])); };
GridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GridRowsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"] }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['gdInline']
        }] }); })();
    return GridRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]));
/** @type {?} */
var rowsCache = new Map();
/** @type {?} */
var rowsInlineCache = new Map();
/** @type {?} */
var inputs$10 = [
    'gdRows',
    'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl',
    'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl',
    'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'
];
/** @type {?} */
var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var DefaultGridRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultGridRowsDirective, _super);
    function DefaultGridRowsDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = inputs$10;
        return _this;
    }
DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) { return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective); };
DefaultGridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridRowsDirective, selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]], inputs: { gdRows: "gdRows", "gdRows.xs": "gdRows.xs", "gdRows.sm": "gdRows.sm", "gdRows.md": "gdRows.md", "gdRows.lg": "gdRows.lg", "gdRows.xl": "gdRows.xl", "gdRows.lt-sm": "gdRows.lt-sm", "gdRows.lt-md": "gdRows.lt-md", "gdRows.lt-lg": "gdRows.lt-lg", "gdRows.lt-xl": "gdRows.lt-xl", "gdRows.gt-xs": "gdRows.gt-xs", "gdRows.gt-sm": "gdRows.gt-sm", "gdRows.gt-md": "gdRows.gt-md", "gdRows.gt-lg": "gdRows.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵDefaultGridRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: selector$10, inputs: inputs$10 }]
    }], null, null); })();
    return DefaultGridRowsDirective;
}(GridRowsDirective));

/**
 * @fileoverview added by tsickle
 * Generated from: grid/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    DefaultGridAlignDirective,
    DefaultGridAlignColumnsDirective,
    DefaultGridAlignRowsDirective,
    DefaultGridAreaDirective,
    DefaultGridAreasDirective,
    DefaultGridAutoDirective,
    DefaultGridColumnDirective,
    DefaultGridColumnsDirective,
    DefaultGridGapDirective,
    DefaultGridRowDirective,
    DefaultGridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GridModule });
GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GridModule, { declarations: function () { return [DefaultGridAlignDirective,
        DefaultGridAlignColumnsDirective,
        DefaultGridAlignRowsDirective,
        DefaultGridAreaDirective,
        DefaultGridAreasDirective,
        DefaultGridAutoDirective,
        DefaultGridColumnDirective,
        DefaultGridColumnsDirective,
        DefaultGridGapDirective,
        DefaultGridRowDirective,
        DefaultGridRowsDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]; }, exports: function () { return [DefaultGridAlignDirective,
        DefaultGridAlignColumnsDirective,
        DefaultGridAlignRowsDirective,
        DefaultGridAreaDirective,
        DefaultGridAreasDirective,
        DefaultGridAutoDirective,
        DefaultGridColumnDirective,
        DefaultGridColumnsDirective,
        DefaultGridGapDirective,
        DefaultGridRowDirective,
        DefaultGridRowsDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
                declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES),
                exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(ALL_DIRECTIVES)
            }]
    }], function () { return []; }, null); })();
    return GridModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: grid/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: grid/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=grid.es5.js.map

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~login-login-module~screen1-screen1-module.js.map