import { Test, TestingModule } from '@nestjs/testing';
import { GranjasService } from './granjas.service';

describe('GranjasService', () => {
  let service: GranjasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GranjasService],
    }).compile();

    service = module.get<GranjasService>(GranjasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
