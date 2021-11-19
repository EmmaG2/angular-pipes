"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BasicsComponent = void 0;
var core_1 = require("@angular/core");
var BasicsComponent = /** @class */ (function () {
    function BasicsComponent() {
        this.nombreLower = 'emmanuel';
        this.nombreUpper = 'EMMANUEL';
        this.nombreCompleto = 'fErNaNdO EmMaNuEl';
        this.fecha = new Date(); // el día de hoy
    }
    BasicsComponent = __decorate([
        core_1.Component({
            selector: 'app-basics',
            templateUrl: './basics.component.html'
        })
    ], BasicsComponent);
    return BasicsComponent;
}());
exports.BasicsComponent = BasicsComponent;
