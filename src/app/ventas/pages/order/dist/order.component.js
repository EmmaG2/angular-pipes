"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var core_1 = require("@angular/core");
var ventas_interface_1 = require("../../interfaces/ventas.interface");
var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.verification = false;
        this.orderTable = 'sin valor';
        this.heroes = [
            {
                nombre: 'Emma',
                vuela: true,
                color: ventas_interface_1.Color.azul
            },
            {
                nombre: 'Juan',
                vuela: false,
                color: ventas_interface_1.Color.negro
            },
            {
                nombre: 'Pepe',
                vuela: false,
                color: ventas_interface_1.Color.rojo
            },
            {
                nombre: 'Luis',
                vuela: false,
                color: ventas_interface_1.Color.verde
            },
            {
                nombre: 'Añanin',
                vuela: true,
                color: ventas_interface_1.Color.verde
            },
            {
                nombre: 'Adrian Piedra',
                vuela: false,
                color: ventas_interface_1.Color.verde
            },
            {
                nombre: 'Zero Two',
                vuela: false,
                color: ventas_interface_1.Color.verde
            },
            {
                nombre: '2B',
                vuela: false,
                color: ventas_interface_1.Color.verde
            },
        ];
    }
    OrderComponent.prototype.changeVerification = function () {
        this.verification = !this.verification;
    };
    ;
    OrderComponent.prototype.changeOrder = function (valor) {
        this.orderTable = valor;
    };
    ;
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styles: []
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
;
