import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ImageModule } from './image/image.module';
import { VoteModule } from './vote/vote.module';
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthModule } from './jwt-auth/jwt-auth.module';
import { RecommentModule } from './recomment/recomment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PostModule,
    CommentModule,
    LikeModule,
    ImageModule,
    VoteModule,
    GoogleOauthModule,
    JwtAuthModule,
    RecommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
