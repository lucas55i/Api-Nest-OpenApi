import { Module } from '@nestjs/common';
import { TimesController } from './times.controller';
import { TimesService } from './shared/times.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TimeSchema } from './schemas/time.schema';


@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Times', schema: TimeSchema}])
  ],
  controllers: [TimesController],
  providers: [TimesService]
})
export class TimesModule {}
