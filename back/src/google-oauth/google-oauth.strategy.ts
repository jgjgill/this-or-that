import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Profile, Strategy } from 'passport-google-oauth20';
import { GoogleOauthService } from './google-oauth.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private googleOauthService: GoogleOauthService,
    private configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_OAUTH_OAUTH_CLIENT_SECRET'),
      callbackURL: `${configService.get('BASE_URL')}/auth/google/redirect`,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<User> {
    const email = profile.emails[0].value;
    const name = profile.displayName;

    const user = await this.googleOauthService.validate({
      email,
      name,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
