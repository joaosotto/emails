import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export class DiscordNotifier {
  private webhookUrl = process.env.DISCORD_URL || '' 

  async sendMessage(message: string) {
    try {
      await axios.post(this.webhookUrl, { content: message });
      console.log('Mensagem enviada para o Discord!');
    } catch (error) {
      console.error('Erro ao enviar mensagem para o Discord:', error);
    }
  }
}
