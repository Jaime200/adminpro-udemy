"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, password, img, role, google, _id) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.img = img;
        this.role = role;
        this.google = google;
        this._id = _id;
    }
    return Usuario;
}());
exports.default = Usuario;
