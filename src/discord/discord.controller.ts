import { Body, Controller, Post } from '@nestjs/common';
import { DiscordNotifier } from './discord.notifier';

@Controller('discord')
export class DiscordController {
  constructor(private readonly discordNotifier: DiscordNotifier) {}

  @Post('send')
  async createNotifyRequest(@Body() message: string): Promise<void> {
    return await this.discordNotifier.sendMessage(message);
  }
}