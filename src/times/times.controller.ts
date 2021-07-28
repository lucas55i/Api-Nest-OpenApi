import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/enums/api-tags';
import { Times } from './shared/times';
import { TimesService } from './shared/times.service';

@ApiTags(EnumApiTags.TIMES)
@Controller('times')
export class TimesController {
    constructor(private timeService: TimesService){}


    @Get()
    async getAll(): Promise<Times[]>{
        return this.timeService.getAll()
    }


    @Get(':id')
    async getById(@Param('id') id: string): Promise<Times>{
        return this.timeService.getById(id)
    }

    @Post()
    async create(@Body() time: Times): Promise<Times>{
        return this.timeService.addTime(time)
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() time: Times): Promise<Times>{
        return this.timeService.update(id, time)
    }

    @Delete(':id')
    async delete (@Param('id') id: string){
        this.timeService.delete(id)
    }
}
