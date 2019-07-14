"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Graficas1Component = /** @class */ (function () {
    function Graficas1Component() {
        this.graficos = {
            'grafico1': {
                'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
                'data': [24, 30, 46],
                'type': 'doughnut',
                'leyenda': 'El pan se come con'
            },
            'grafico2': {
                'labels': ['Hombres', 'Mujeres'],
                'data': [4500, 6000],
                'type': 'doughnut',
                'leyenda': 'Entrevistados'
            },
            'grafico3': {
                'labels': ['Si', 'No'],
                'data': [95, 5],
                'type': 'doughnut',
                'leyenda': '¿Le dan gases los frijoles?'
            },
            'grafico4': {
                'labels': ['No', 'Si'],
                'data': [85, 15],
                'type': 'doughnut',
                'leyenda': '¿Le importa que le den gases?'
            },
        };
        console.log(this.graficos);
    }
    Graficas1Component.prototype.ngOnInit = function () {
    };
    Graficas1Component = __decorate([
        core_1.Component({
            selector: 'app-graficas1',
            templateUrl: './graficas1.component.html',
            styles: []
        })
    ], Graficas1Component);
    return Graficas1Component;
}());
exports.Graficas1Component = Graficas1Component;
