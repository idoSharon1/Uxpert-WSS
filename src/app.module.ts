import { Module } from '@nestjs/common';

import { ScrapeGateway } from './scrape/scrape.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ScrapeGateway],
})
export class AppModule {}
