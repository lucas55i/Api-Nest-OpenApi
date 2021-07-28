import { Test, TestingModule } from '@nestjs/testing';
import { JogadorService } from './jogador.service';

describe('JogadorService', () => {
  let provider: JogadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JogadorService],
    }).compile();

    provider = module.get<JogadorService>(JogadorService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
