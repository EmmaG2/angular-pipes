"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoCommonsComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var NoCommonsComponent = /** @class */ (function () {
    function NoCommonsComponent() {
        //*i18nSelect
        this.nombre = 'Emmanuel';
        this.genero = 'masculino';
        this.invitacionMap = {
            masculino: 'tenerlo',
            femenino: 'tenerla'
        };
        //*i18nPlural
        this.clientes = ['k', 'hola', 'juan', 'xd', 'hola2'];
        this.clientesMap = {
            '=0': 'No tenemos ningún cliente en sala de espera',
            '=1': 'Tenemos 1 cliente en sala de espera',
            other: 'Tenemos # clientes en sala de espera'
        };
        //* keyvalue pipe
        this.persona = {
            nombre: 'Emmanuel',
            edad: 8,
            direccion: 'Durango, Mexico'
        };
        //* async pipe
        this.numbers = rxjs_1.interval(1000);
        this.takeFourNumbers = this.numbers.pipe(rxjs_1.take(4));
        this.valorPromesa = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('Tenemos data de la promesa');
            }, 3500);
        });
    }
    NoCommonsComponent.prototype.cambiarPersona = function () {
        this.nombre = 'Diana';
        this.genero = 'femenino';
    };
    NoCommonsComponent.prototype.borrarPersona = function () {
        this.clientes.pop();
    };
    NoCommonsComponent = __decorate([
        core_1.Component({
            selector: 'app-no-commons',
            templateUrl: './no-commons.component.html'
        })
    ], NoCommonsComponent);
    return NoCommonsComponent;
}());
exports.NoCommonsComponent = NoCommonsComponent;
;
