import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';
import {
  orthographyCheckUseCase,
  prosConsDicusserStreamUseCase,
} from './use-cases';
import {
  OrthographyDto,
  ProsConsDiscusserDto,
  ProsConsDiscusserStreamDto,
} from './dtos';
import { prosConsDicusserUseCase } from './use-cases/pros-cons-discusser.use-case';

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

  async prosConsDiscusser(prosConsDiscusserDto: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, {
      prompt: prosConsDiscusserDto.prompt,
    });
  }

  async prosConsDiscusserStream(
    prosConsDiscusserStreamDto: ProsConsDiscusserStreamDto,
  ) {
    return await prosConsDicusserStreamUseCase(this.openai, {
      prompt: prosConsDiscusserStreamDto.prompt,
    });
  }
}
