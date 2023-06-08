import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      // carga el env
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ClienteModule,
    MongooseModule.forRoot(process.env.MONGODB),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
