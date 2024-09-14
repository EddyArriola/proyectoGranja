import { Test, TestingModule } from '@nestjs/testing';
import { ProduccionHuevosController } from './produccion-huevos.controller';
import { ProduccionHuevosService } from './produccion-huevos.service';

describe('ProduccionHuevosController', () => {
  let controller: ProduccionHuevosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProduccionHuevosController],
      providers: [ProduccionHuevosService],
    }).compile();

    controller = module.get<ProduccionHuevosController>(ProduccionHuevosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
