import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadorService } from './shared/jogador.service';
import { JogadorSchema } from './schemas/jogador.schema'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Jogadores', schema:JogadorSchema
    }])
  ],
  controllers: [JogadoresController],
  providers: [JogadorService]
})
export class JogadoresModule {}
