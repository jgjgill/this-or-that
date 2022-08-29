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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let LikeService = class LikeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updatePostLike({ postId, userId, }) {
        const alreadyExists = await this.prisma.like.findFirst({
            where: { likePostId: postId, likeUserId: userId },
        });
        if (alreadyExists) {
            return this.prisma.like.delete({
                where: { id: alreadyExists.id },
            });
        }
        if (!alreadyExists) {
            return this.prisma.like.create({
                data: {
                    User: { connect: { id: userId } },
                    Post: { connect: { id: postId } },
                },
            });
        }
    }
    async updateCommentLike({ commentId, userId, }) {
        const alreadyExists = await this.prisma.commentLike.findFirst({
            where: { likeCommentId: commentId, likeUserId: userId },
        });
        if (alreadyExists) {
            return this.prisma.commentLike.delete({
                where: { id: alreadyExists.id },
            });
        }
        if (!alreadyExists) {
            return this.prisma.commentLike.create({
                data: {
                    User: { connect: { id: userId } },
                    Comment: { connect: { id: commentId } },
                },
            });
        }
    }
    async updateReCommentLike({ reCommentId, userId, }) {
        const alreadyExists = await this.prisma.reCommentLike.findFirst({
            where: { likeReCommentId: reCommentId, likeUserId: userId },
        });
        if (alreadyExists) {
            return this.prisma.reCommentLike.delete({
                where: { id: alreadyExists.id },
            });
        }
        if (!alreadyExists) {
            return this.prisma.reCommentLike.create({
                data: {
                    User: { connect: { id: userId } },
                    ReComment: { connect: { id: reCommentId } },
                },
            });
        }
    }
};
LikeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LikeService);
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map