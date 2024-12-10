import { Injectable } from '@nestjs/common';
import { chatUseCase } from './use-cases';
import { ChatDto } from './dtos/chat.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  // Sólo va a llamar casos de uso
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async chat(chatDto: ChatDto) {
    return await chatUseCase(this.openai, {
      prompt: chatDto.prompt,
    });
  }
}
