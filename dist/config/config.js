"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
    PEPPER: process.env.PEPPER,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
};
exports.default = config;
//# sourceMappingURL=config.js.map