import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {
  // Sólo va a llamar casos de uso
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  // async chat(chatDto: ChatDto) {
  //   return await chatUseCase(this.openai, {
  //     prompt: chatDto.prompt,
  //   });
  // }
}
