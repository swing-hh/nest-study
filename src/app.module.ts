import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule], // 导入这个二级模块
  controllers: [AppController] // module中增加一个服务提供者
})
export class AppModule {}
