import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class Jogador extends Document {
  @ApiProperty({
    description: "Player's name",
    example: "Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira",
  })
  name: string;

  @ApiProperty({
    description: "country where you were born",
    example: "Brazil",
  })
  region: string;

  @ApiProperty({
    description: "Team where you played or are currently",
    example: "corinthians",
  })
  clubeAtual: string;

  @ApiProperty({
    description: "A short story about the player",
    example:
      "Sócrates Brazilian Sampaio de Souza Vieira de Oliveira, better known only as Sócrates and also referred to as Doutor Sócrates, Doutor or Magrão (Belém, February 19, 1954 — São Paulo, December 4, 2011), was a Brazilian soccer player and doctor.",
  })
  biografia: string;
}
