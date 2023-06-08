import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Cliente {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
