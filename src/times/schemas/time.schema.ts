import * as mongoose from 'mongoose';

export const TimeSchema = new mongoose.Schema({
    name: String,
    anoCriacao: Number,
})