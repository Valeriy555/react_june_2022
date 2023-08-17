"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("./services");
services_1.userService.getAll().then(function (value) { return console.log(value.data[0].username); });
services_1.userService.getById(2).then(function (_a) {
    var data = _a.data;
    return console.log(data.address.city);
});
