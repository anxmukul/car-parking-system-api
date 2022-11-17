import { Test, TestingModule } from '@nestjs/testing';
import { ParkinglotController } from './parkinglot.controller';

describe('ParkinglotController', () => {
  let controller: ParkinglotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkinglotController],
    }).compile();

    controller = module.get<ParkinglotController>(ParkinglotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
