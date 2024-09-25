import { Test, TestingModule } from '@nestjs/testing';
import { ProduccionHuevosService } from './produccion-huevos.service';

describe('ProduccionHuevosService', () => {
  let service: ProduccionHuevosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProduccionHuevosService],
    }).compile();

    service = module.get<ProduccionHuevosService>(ProduccionHuevosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
