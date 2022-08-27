"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_service_1 = require("./jwt-auth.service");
const jwt_auth_strategy_1 = require("./jwt-auth.strategy");
let JwtAuthModule = class JwtAuthModule {
};
JwtAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('JWT_SECRET'),
                        signOptions: { expiresIn: '24h' },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [jwt_auth_strategy_1.JwtAuthStrategy, jwt_auth_service_1.JwtAuthService],
        exports: [jwt_1.JwtModule, jwt_auth_service_1.JwtAuthService],
    })
], JwtAuthModule);
exports.JwtAuthModule = JwtAuthModule;
//# sourceMappingURL=jwt-auth.module.js.map