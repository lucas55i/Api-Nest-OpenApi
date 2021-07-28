import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class Times extends Document{
    @ApiProperty({
        description:"football club name",
        example:"Sport Club Corinthians Paulista"
      })
    name: string;

    @ApiProperty({
        description:"Year of Creation of Football Time",
        example:1910
      })
    anoCriacao: string
}
