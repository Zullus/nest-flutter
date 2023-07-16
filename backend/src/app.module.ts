import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { FirebaseService } from './auth/firebase/firebase.service';

@Module({
  imports: [ThingsModule, CategoriesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
