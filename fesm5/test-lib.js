import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestLibService = /** @class */ (function () {
    function TestLibService() {
    }
    TestLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestLibService.ngInjectableDef = defineInjectable({ factory: function TestLibService_Factory() { return new TestLibService(); }, token: TestLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { TestLibService, TestLibComponent, TestLibModule };

//# sourceMappingURL=test-lib.js.map