import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class Jogador extends Document{
  @ApiProperty({
    description:"Player's name",
    example:"Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira"
  })
  name: string;

  @ApiProperty({
    description:"country where you were born",
    example:"Brazil"
  })
  region: string;

  @ApiProperty({
    description:"Team where you played or are currently",
    example:"corinthians"
  })
  clubeAtual: string;
}
