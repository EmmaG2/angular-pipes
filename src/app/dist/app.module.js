"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var routing_module_1 = require("./routes/routing/routing.module");
var shared_module_1 = require("./ventas/shared/shared.module");
var ventas_module_1 = require("./ventas/ventas.module");
var app_component_1 = require("./app.component");
// cambiar el locale de la app
var es_MX_1 = require("@angular/common/locales/es-MX");
var fr_1 = require("@angular/common/locales/fr");
var common_1 = require("@angular/common");
common_1.registerLocaleData(es_MX_1["default"]);
common_1.registerLocaleData(fr_1["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                routing_module_1.RoutingModule,
                shared_module_1.SharedModule,
                ventas_module_1.VentasModule
            ],
            providers: [
                { provide: core_1.LOCALE_ID,
                    useValue: 'es-MX'
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
