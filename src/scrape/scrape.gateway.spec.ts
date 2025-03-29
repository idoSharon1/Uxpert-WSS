import { Test, TestingModule } from '@nestjs/testing';
import { ScrapeGateway } from './scrape.gateway';

describe('ScrapeGateway', () => {
  let gateway: ScrapeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapeGateway],
    }).compile();

    gateway = module.get<ScrapeGateway>(ScrapeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
