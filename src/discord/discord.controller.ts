import { Body, Controller, Post } from '@nestjs/common';
import { DiscordNotifier } from './discord.notifier';

@Controller()
export class DiscordController {
  constructor(private readonly discordNotifier: DiscordNotifier) {}

  @Post()
  async createNotifyRequest(@Body() message: string): Promise<void> {
    return await this.discordNotifier.sendMessage(message);
  }
}