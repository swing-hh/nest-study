import { MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule], // 导入这个二级模块
  controllers: [AppController] // module中增加一个服务提供者
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes('cats');
  }
}
