import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [ProfilesModule, MongooseModule.forRoot('mongodb://localhost:27017/daos')],
})
export class AppModule {}
