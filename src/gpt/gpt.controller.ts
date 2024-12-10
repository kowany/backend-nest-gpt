import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ChatDto } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('chat')
  chat(@Body() chatDto: ChatDto) {
    return this.gptService.chat(chatDto);
  }
}
