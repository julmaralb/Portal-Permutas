"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('../_services/index');
var CrearPropuestaComponent = (function () {
    function CrearPropuestaComponent(router, route, propuestaService, alertService) {
        this.router = router;
        this.route = route;
        this.propuestaService = propuestaService;
        this.alertService = alertService;
        this.propuesta = {};
        this.loading = false;
    }
    CrearPropuestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    CrearPropuestaComponent.prototype.crearPropuesta = function () {
        this.loading = true;
        this.propuesta.destinatarioId = this.id;
        this.propuestaService.create(this.propuesta);
        this.router.navigate(['/']);
    };
    CrearPropuestaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'crear-propuesta.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, index_1.PropuestaService, index_1.AlertService])
    ], CrearPropuestaComponent);
    return CrearPropuestaComponent;
}());
exports.CrearPropuestaComponent = CrearPropuestaComponent;
//# sourceMappingURL=crear-propuesta.component.js.map