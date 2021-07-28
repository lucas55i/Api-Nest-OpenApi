import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jogador } from './jogador';

@Injectable()
export class JogadorService {
constructor(@InjectModel('Jogadores') private readonly jogadorModel: Model<Jogador>) {}


async getAll(){
    return await this.jogadorModel.find().exec();
}

async getById(id: string){
    return await this.jogadorModel.findById(id).exec();
}

async create(jogador: Jogador){
    const createdJogador = new this.jogadorModel(jogador);
    return await createdJogador.save();
}


async update(id: string, jogador: Jogador){
    await this.jogadorModel.updateOne({_id: id}, jogador).exec()
    return this.getById(id);
}

async delete(id: string){
    return await this.jogadorModel.deleteOne({_id: id}).exec();
}



}
