"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VentasModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var primeNgModules_module_1 = require("../primeNgModules/primeNgModules.module");
var basics_component_1 = require("./pages/basics/basics.component");
var mayusculas_pipe_1 = require("./pipes/mayusculas.pipe");
var no_commons_component_1 = require("./pages/no-commons/no-commons.component");
var numbers_component_1 = require("./pages/numbers/numbers.component");
var order_component_1 = require("./pages/order/order.component");
var vuela_pipe_1 = require("./pipes/vuela.pipe");
var ordenar_pipe_1 = require("./pipes/ordenar.pipe");
var VentasModule = /** @class */ (function () {
    function VentasModule() {
    }
    VentasModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeNgModules_module_1.PrimeNgModule],
            declarations: [
                basics_component_1.BasicsComponent,
                mayusculas_pipe_1.MayusculasPipe,
                no_commons_component_1.NoCommonsComponent,
                numbers_component_1.NumbersComponent,
                order_component_1.OrderComponent,
                vuela_pipe_1.VuelaPipe,
                ordenar_pipe_1.OrdenarPipe
            ],
            exports: [
                basics_component_1.BasicsComponent,
                mayusculas_pipe_1.MayusculasPipe,
                no_commons_component_1.NoCommonsComponent,
                numbers_component_1.NumbersComponent,
                order_component_1.OrderComponent,
                vuela_pipe_1.VuelaPipe,
            ]
        })
    ], VentasModule);
    return VentasModule;
}());
exports.VentasModule = VentasModule;
