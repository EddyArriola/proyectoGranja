import { Test, TestingModule } from '@nestjs/testing';
import { GranjasController } from './granjas.controller';

describe('GranjasController', () => {
  let controller: GranjasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GranjasController],
    }).compile();

    controller = module.get<GranjasController>(GranjasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
