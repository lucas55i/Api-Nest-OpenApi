import * as mongoose from 'mongoose';


export const JogadorSchema = new mongoose.Schema({
    name: String,
    region: String,
    clubeAtual: String,
    biografia: String

})