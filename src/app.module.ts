import { Module } from '@nestjs/common';
import { DiscordController } from './discord/discord.controller';
import { DiscordNotifier } from './discord/discord.notifier';

@Module({
  imports: [],
  controllers: [DiscordController],
  providers: [DiscordNotifier],
})
export class AppModule {}
