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
    var TestLibComponent = /** @class */ (function () {
        function TestLibComponent() {
        }
        /**
         * @return {?}
         */
        TestLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-test-lib',
                        template: "\n    <p>\n      test-lib works!\n      things and stuff\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        TestLibComponent.ctorParameters = function () { return []; };
        return TestLibComponent;
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
                        declarations: [TestLibComponent],
                        imports: [],
                        exports: [TestLibComponent]
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
    exports.TestLibComponent = TestLibComponent;
    exports.TestLibModule = TestLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=test-lib.umd.js.map