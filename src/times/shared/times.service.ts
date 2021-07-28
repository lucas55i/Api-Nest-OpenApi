import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimesController } from '../times.controller';
import { Times } from './times';

@Injectable()
export class TimesService {

    constructor(@InjectModel('Times') private readonly timeModel: Model<Times>){}

    async getAll(){
        return await this.timeModel.find().exec();
    }

    async getById(id: string){
        return await this.timeModel.findById(id).exec();
    }


    async addTime(time: Times){
        const createdTime = new this.timeModel(time);
        return await createdTime.save();
    }


    async update(id: string, time: Times){
        await this.timeModel.updateOne({_id: id}, time).exec();
        return this.getById(id);
    }


    async delete(id: string){
        return await this.timeModel.deleteOne({_id:id}).exec();
    }



}
