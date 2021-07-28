import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/enums/api-tags';
import { Jogador } from './shared/jogador';
import { JogadorService } from './shared/jogador.service';


@ApiTags(EnumApiTags.JOGADORES)
@Controller('jogadores')
export class JogadoresController {

    constructor(private jogadorService: JogadorService
        )
    {}


    @Get()
    async getAll(): Promise<Jogador[]>{
        return this.jogadorService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id:string): Promise<Jogador>{
        return this.jogadorService.getById(id);
    }

    @Post()
    async create(@Body() jogador: Jogador): Promise<Jogador>{
        return this.jogadorService.create(jogador)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() jogador: Jogador):Promise<Jogador>{
        return this.jogadorService.update(id, jogador);
    }

    @Delete(":id")
    async delete(@Param('id') id: string){
        this.jogadorService.delete(id)
    }




}
