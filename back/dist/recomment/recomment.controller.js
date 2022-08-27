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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommentController = void 0;
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../common/decorators/user.decorator");
const logged_in_guard_1 = require("../jwt-auth/logged-in.guard");
const recomment_service_1 = require("./recomment.service");
let RecommentController = class RecommentController {
    constructor(recommentService) {
        this.recommentService = recommentService;
    }
    async createReComment(query, data, user) {
        const { commentId, postId } = query;
        return this.recommentService.createReComment({
            postId: Number(postId),
            commentId: Number(commentId),
            comment: data.comment,
            userId: user.id,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], RecommentController.prototype, "createReComment", null);
RecommentController = __decorate([
    (0, common_1.Controller)('recomment'),
    (0, common_1.UseGuards)(logged_in_guard_1.LoggedInGuard),
    __metadata("design:paramtypes", [recomment_service_1.RecommentService])
], RecommentController);
exports.RecommentController = RecommentController;
//# sourceMappingURL=recomment.controller.js.map