(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-lib', ['exports', '@angular/core'], factory) :
    (factory((global['test-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibService = /** @class */ (function () {
        function TestLibService() {
        }
        TestLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TestLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestLibService.ngInjectableDef = i0.defineInjectable({ factory: function TestLibService_Factory() { return new TestLibService(); }, token: TestLibService, providedIn: "root" });
        return TestLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibModule = /** @class */ (function () {
        function TestLibModule() {
        }
        TestLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                    },] }
        ];
        return TestLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TestLibService = TestLibService;
    exports.TestLibModule = TestLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=test-lib.umd.js.map