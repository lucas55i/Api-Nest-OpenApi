import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose'
import { TimesModule } from './times/times.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'), 
    JogadoresModule, TimesModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
