"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdenarPipe = void 0;
var core_1 = require("@angular/core");
var OrdenarPipe = /** @class */ (function () {
    function OrdenarPipe() {
    }
    OrdenarPipe.prototype.transform = function (heroes, orderBy) {
        if (orderBy === 'sin valor') {
            return heroes;
        }
        else if (orderBy === 'nombre') {
            var heroe = heroes.sort(function (a, b) { return (a.nombre > b.nombre ? 1 : -1); });
            return heroe;
        }
        else if (orderBy === 'vuela') {
            var heroe = heroes.sort(function (a, b) { return (a.vuela > b.vuela ? -1 : 1); });
            return heroe;
        }
        else if (orderBy === 'color') {
            var heroe = heroes.sort(function (a, b) { return (a.color > b.color ? 1 : -1); });
            return heroe;
        }
        else {
            return heroes;
        }
        ;
    };
    ;
    OrdenarPipe = __decorate([
        core_1.Pipe({
            name: 'ordenar'
        })
    ], OrdenarPipe);
    return OrdenarPipe;
}());
exports.OrdenarPipe = OrdenarPipe;
