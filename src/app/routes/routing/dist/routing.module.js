"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var basics_component_1 = require("src/app/ventas/pages/basics/basics.component");
var numbers_component_1 = require("../../ventas/pages/numbers/numbers.component");
var no_commons_component_1 = require("../../ventas/pages/no-commons/no-commons.component");
var order_component_1 = require("../../ventas/pages/order/order.component");
var routes = [
    {
        path: '',
        component: basics_component_1.BasicsComponent,
        pathMatch: 'full'
    },
    {
        path: 'numbers',
        component: numbers_component_1.NumbersComponent
    },
    {
        path: 'no-commons',
        component: no_commons_component_1.NoCommonsComponent
    },
    {
        path: 'basics',
        component: basics_component_1.BasicsComponent
    },
    {
        path: 'order',
        component: order_component_1.OrderComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes) //forRoote es importante para definir nuestras rutas
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
